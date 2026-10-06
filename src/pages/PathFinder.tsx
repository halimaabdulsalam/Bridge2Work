import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import Icon from "../components/Icon";
import { codingLabels, totalHours } from "../data/careers";
import { pathQuestions, profileFrom, rankCareers } from "../data/pathFinder";
import type { Match, Profile } from "../data/pathFinder";
import { useDocumentTitle } from "../lib/hooks";
import { capitalise, timeAtPace } from "../lib/scoring";
import { loadPathAnswers, savePathAnswers, saveProfile } from "../lib/storage";

const total = pathQuestions.length;

function isComplete(answers: number[] | null): answers is number[] {
  return (
    answers !== null &&
    answers.length === total &&
    answers.every(
      (answer, index) => pathQuestions[index].options[answer] !== undefined,
    )
  );
}

function PathFinder() {
  useDocumentTitle("Find my path");

  const [answers, setAnswers] = useState<number[]>(() => {
    const saved = loadPathAnswers();
    return isComplete(saved) ? saved : [];
  });
  const [step, setStep] = useState(() => (answers.length === total ? total : 0));

  const finished = step >= total;

  function choose(optionIndex: number) {
    if (finished) return;

    const next = [...answers];
    next[step] = optionIndex;
    setAnswers(next);

    if (step === total - 1) {
      savePathAnswers(next);
      saveProfile(profileFrom(next));
    }

    // A short pause lets the person see their choice register.
    window.setTimeout(() => {
      setStep(step + 1);
      window.scrollTo(0, 0);
    }, 220);
  }

  function restart() {
    setAnswers([]);
    setStep(0);
  }

  useEffect(() => {
    if (finished) return;

    function onKey(event: KeyboardEvent) {
      const optionCount = pathQuestions[step].options.length;
      const number = Number(event.key);

      if (Number.isInteger(number) && number >= 1 && number <= optionCount) {
        choose(number - 1);
      } else if (event.key === "Backspace" && step > 0) {
        setStep(step - 1);
      }
    }

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  });

  if (finished) {
    return <Matches answers={answers} onRestart={restart} />;
  }

  const question = pathQuestions[step];

  return (
    <main className="page page-flow">
      <div className="container container-narrow">
        <div className="flow-top">
          {step > 0 ? (
            <button type="button" className="back-link" onClick={() => setStep(step - 1)}>
              <Icon name="arrow-left" size={16} />
              Back
            </button>
          ) : (
            <Link to="/" className="back-link">
              <Icon name="arrow-left" size={16} />
              Home
            </Link>
          )}
          <span className="flow-count">
            {step + 1} of {total}
          </span>
        </div>

        <div
          className="progress"
          role="progressbar"
          aria-label="Questions answered"
          aria-valuemin={0}
          aria-valuemax={total}
          aria-valuenow={step}
        >
          <i style={{ width: `${(step / total) * 100}%` }} />
        </div>

        <div className="question" key={question.id}>
          <p className="question-group">
            {question.group === "You" ? "About you" : "About your situation"}
          </p>
          <h1>{question.prompt}</h1>

          <div className="options">
            {question.options.map((option, index) => (
              <button
                key={option.label}
                type="button"
                className="option"
                aria-pressed={answers[step] === index}
                onClick={() => choose(index)}
              >
                <kbd>{index + 1}</kbd>
                <span>{option.label}</span>
              </button>
            ))}
          </div>

          <p className="flow-hint">
            There are no right answers. Pick what sounds most like you.
          </p>
        </div>
      </div>
    </main>
  );
}

function fitNotes(match: Match, profile: Profile): string[] {
  const { career } = match;
  const notes = [
    codingLabels[career.coding],
    `${capitalise(timeAtPace(totalHours(career), profile.hoursPerWeek))} at ${profile.hoursPerWeek} hrs a week`,
  ];
  if (career.startOn === "phone") notes.push("Can start on a phone");
  return notes;
}

function Matches({
  answers,
  onRestart,
}: {
  answers: number[];
  onRestart: () => void;
}) {
  const { top, rest, profile } = useMemo(() => {
    const ranked = rankCareers(answers);
    return {
      top: ranked[0],
      rest: ranked.slice(1, 3),
      profile: profileFrom(answers),
    };
  }, [answers]);

  return (
    <main className="page">
      <div className="container container-medium">
        <header className="page-head">
          <h1>Your three closest matches</h1>
          <p>
            Based on what you enjoy, how you feel about code, how soon you need
            to earn and the time and device you have.
          </p>
        </header>

        <article className="match match-top">
          <div className="match-score">
            <strong>{top.percent}%</strong>
            <span>match</span>
          </div>

          <div className="match-body">
            <p className="match-rank">Your best fit</p>
            <h2>
              <Icon name={top.career.icon} size={28} />
              {top.career.title}
            </h2>
            <p>{top.career.summary}</p>
            <p className="match-reason">{top.reason}</p>

            <ul className="tag-list tag-list-light">
              {fitNotes(top, profile).map((note) => (
                <li key={note}>{note}</li>
              ))}
            </ul>

            {top.caution && (
              <p className="match-caution">
                <Icon name="flag" size={16} />
                {top.caution}
              </p>
            )}

            <div className="match-actions">
              <Link
                to={`/assessment?career=${top.career.id}`}
                className="button button-sun"
              >
                Check my skills for this path
                <Icon name="arrow-right" size={18} />
              </Link>
              <Link
                to={`/careers/${top.career.id}`}
                className="button button-ghost-light"
              >
                See the roadmap
              </Link>
            </div>
          </div>
        </article>

        <div className="match-rest">
          {rest.map((match) => (
            <article className="match" key={match.career.id}>
              <div className="match-head">
                <span className={`icon-tile tile-${match.career.category}`}>
                  <Icon name={match.career.icon} size={22} />
                </span>
                <span className="pill pill-sun">{match.percent}% match</span>
              </div>

              <h2>{match.career.title}</h2>
              <p className="match-summary">{match.career.summary}</p>
              <p className="match-reason">{match.reason}</p>

              <ul className="tag-list tag-list-quiet">
                {fitNotes(match, profile).map((note) => (
                  <li key={note}>{note}</li>
                ))}
              </ul>

              {match.caution && (
                <p className="match-caution">
                  <Icon name="flag" size={16} />
                  {match.caution}
                </p>
              )}

              <div className="match-actions">
                <Link
                  to={`/assessment?career=${match.career.id}`}
                  className="button button-ink button-small"
                >
                  Check my skills
                </Link>
                <Link to={`/careers/${match.career.id}`} className="text-link">
                  See the roadmap
                  <Icon name="arrow-right" size={16} />
                </Link>
              </div>
            </article>
          ))}
        </div>

        <section className="how-matched">
          <h2>How we matched you</h2>
          <p>
            Each career uses a different mix of strengths: logic, building,
            visual sense, words, people, organisation and sound. We compared
            your answers with that mix, then adjusted for your situation. A
            match is a place to start looking, not a verdict.
          </p>

          <div className="how-matched-actions">
            <Link to="/careers" className="button button-outline">
              See all careers, ranked for you
            </Link>
            <button type="button" className="text-link" onClick={onRestart}>
              <Icon name="refresh" size={16} />
              Answer again
            </button>
          </div>
        </section>
      </div>
    </main>
  );
}

export default PathFinder;
