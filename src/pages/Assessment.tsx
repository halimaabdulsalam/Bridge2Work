import { useEffect, useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import Icon from "../components/Icon";
import { careers, getCareer, questionCount } from "../data/careers";
import type { Career } from "../data/types";
import { useDocumentTitle } from "../lib/hooks";
import { encodeAnswers, ratingScale, scoreAssessment } from "../lib/scoring";
import { loadResults, saveResult } from "../lib/storage";

function Assessment() {
  const [searchParams] = useSearchParams();
  const careerId = searchParams.get("career");

  if (!careerId) return <CareerPicker />;

  const career = getCareer(careerId);

  if (!career) {
    return (
      <main className="page">
        <div className="container empty">
          <h1>We could not find that skills check</h1>
          <p>The link may be out of date. Pick a career to check instead.</p>
          <Link to="/assessment" className="button button-ink">
            Choose a career
          </Link>
        </div>
      </main>
    );
  }

  // The key resets every answer when the person switches career.
  return <SkillsCheck key={career.id} career={career} />;
}

function CareerPicker() {
  useDocumentTitle("Skills check");
  const [results] = useState(loadResults);

  return (
    <main className="page">
      <div className="container">
        <header className="page-head">
          <h1>Which career do you want to check?</h1>
          <p>
            Rate yourself against the real skills of the job, answer three
            reality-check questions, and get a roadmap adjusted to your answers.
          </p>
        </header>

        <Link to="/find-my-path" className="nudge">
          <span>
            <strong>Not sure which to pick?</strong> Ten questions will narrow
            it down to your three closest matches.
          </span>
          <span className="button button-ink button-small">
            Find my path
            <Icon name="arrow-right" size={16} />
          </span>
        </Link>

        <div className="picker-grid">
          {careers.map((career) => {
            const saved = results[career.id];

            return (
              <Link
                key={career.id}
                to={`/assessment?career=${career.id}`}
                className="picker-card"
              >
                <span className={`icon-tile tile-${career.category}`}>
                  <Icon name={career.icon} size={22} />
                </span>
                <span className="picker-text">
                  <strong>{career.title}</strong>
                  <span>
                    {saved
                      ? `Last result: ${saved.readiness}% ready`
                      : `${questionCount(career) + career.checks.length} questions`}
                  </span>
                </span>
                <Icon name="arrow-right" size={18} className="picker-arrow" />
              </Link>
            );
          })}
        </div>
      </div>
    </main>
  );
}

type Phase = "intro" | "rate" | "check";

function SkillsCheck({ career }: { career: Career }) {
  useDocumentTitle(`${career.title} skills check`);
  const navigate = useNavigate();

  const prompts = career.stages.flatMap((stage, stageIndex) =>
    stage.questions.map((text) => ({ text, stageIndex })),
  );

  const [phase, setPhase] = useState<Phase>("intro");
  const [index, setIndex] = useState(0);
  const [ratings, setRatings] = useState<number[]>([]);
  const [checkAnswers, setCheckAnswers] = useState<number[]>([]);

  function finish(finalChecks: number[]) {
    const result = scoreAssessment(career, ratings, finalChecks);
    const query = `career=${career.id}&r=${encodeAnswers(ratings)}&k=${encodeAnswers(finalChecks)}`;

    saveResult(career.id, {
      readiness: result.readiness,
      query,
      savedAt: new Date().toISOString(),
    });
    navigate(`/results?${query}`);
  }

  function rate(value: number) {
    const next = [...ratings];
    next[index] = value;
    setRatings(next);

    // A short pause lets the person see their choice register.
    window.setTimeout(() => {
      if (index < prompts.length - 1) {
        setIndex(index + 1);
      } else {
        setPhase("check");
        setIndex(0);
      }
      window.scrollTo(0, 0);
    }, 200);
  }

  function answerCheck(option: number) {
    if (checkAnswers[index] !== undefined) return;
    const next = [...checkAnswers];
    next[index] = option;
    setCheckAnswers(next);
  }

  function nextCheck() {
    if (index < career.checks.length - 1) {
      setIndex(index + 1);
      window.scrollTo(0, 0);
    } else {
      finish(checkAnswers);
    }
  }

  function back() {
    if (phase === "rate" && index > 0) {
      setIndex(index - 1);
    } else if (phase === "rate") {
      setPhase("intro");
    } else if (phase === "check" && index === 0) {
      setPhase("rate");
      setIndex(prompts.length - 1);
    }
  }

  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      const number = Number(event.key);

      if (phase === "intro" && event.key === "Enter") {
        setPhase("rate");
      } else if (phase === "rate" && number >= 1 && number <= 5) {
        rate(number);
      } else if (phase === "rate" && event.key === "Backspace") {
        back();
      } else if (phase === "check") {
        const answered = checkAnswers[index] !== undefined;
        const optionCount = career.checks[index].options.length;

        if (!answered && number >= 1 && number <= optionCount) {
          answerCheck(number - 1);
        } else if (answered && event.key === "Enter") {
          nextCheck();
        }
      }
    }

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  });

  if (phase === "intro") {
    return (
      <main className="page page-flow">
        <div className="container container-narrow">
          <Link to="/assessment" className="back-link">
            <Icon name="arrow-left" size={16} />
            Choose another career
          </Link>

          <div className="intro">
            <span className={`icon-tile icon-tile-large tile-${career.category}`}>
              <Icon name={career.icon} size={34} />
            </span>
            <h1>{career.title} skills check</h1>
            <p>
              {prompts.length} quick ratings across the five steps of the
              roadmap, then {career.checks.length} reality-check questions.
              About three minutes.
            </p>

            <div className="intro-scale">
              <h2>How to rate yourself</h2>
              <ol>
                {ratingScale.map((point) => (
                  <li key={point.value}>
                    <kbd>{point.value}</kbd>
                    {point.label}
                  </li>
                ))}
              </ol>
              <p>
                Be honest. Nobody sees this but you, and a lower score gives
                you a more useful roadmap.
              </p>
            </div>

            <button
              type="button"
              className="button button-ink button-large"
              onClick={() => setPhase("rate")}
            >
              Start the check
              <Icon name="arrow-right" size={20} />
            </button>
          </div>
        </div>
      </main>
    );
  }

  const totalSteps = prompts.length + career.checks.length;
  const position = phase === "rate" ? index : prompts.length + index;

  const header = (
    <>
      <div className="flow-top">
        {phase === "rate" || index === 0 ? (
          <button type="button" className="back-link" onClick={back}>
            <Icon name="arrow-left" size={16} />
            Back
          </button>
        ) : (
          <span />
        )}
        <span className="flow-count">
          {position + 1} of {totalSteps}
        </span>
      </div>

      <div
        className="stage-progress"
        role="progressbar"
        aria-label="Questions answered"
        aria-valuemin={0}
        aria-valuemax={totalSteps}
        aria-valuenow={position}
      >
        {career.stages.map((stage, stageIndex) => {
          const own = prompts
            .map((prompt, promptIndex) => ({ ...prompt, promptIndex }))
            .filter((prompt) => prompt.stageIndex === stageIndex);
          const done =
            phase === "check"
              ? own.length
              : own.filter((prompt) => prompt.promptIndex < index).length;

          return (
            <span key={stage.name}>
              <i style={{ width: `${(done / own.length) * 100}%` }} />
            </span>
          );
        })}
        <span className="stage-progress-check">
          <i
            style={{
              width:
                phase === "check"
                  ? `${(index / career.checks.length) * 100}%`
                  : "0%",
            }}
          />
        </span>
      </div>
    </>
  );

  if (phase === "rate") {
    const prompt = prompts[index];
    const stage = career.stages[prompt.stageIndex];

    return (
      <main className="page page-flow">
        <div className="container container-narrow">
          {header}

          <div className="question" key={`rate-${index}`}>
            <p className="question-group">
              Step {prompt.stageIndex + 1}: {stage.name}
            </p>
            <h1>{prompt.text}</h1>

            <div className="options options-scale">
              {ratingScale.map((point) => (
                <button
                  key={point.value}
                  type="button"
                  className="option"
                  aria-pressed={ratings[index] === point.value}
                  onClick={() => rate(point.value)}
                >
                  <kbd>{point.value}</kbd>
                  <span>{point.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </main>
    );
  }

  const check = career.checks[index];
  const chosen = checkAnswers[index];
  const answered = chosen !== undefined;
  const correct = chosen === check.answer;

  return (
    <main className="page page-flow">
      <div className="container container-narrow">
        {header}

        <div className="question" key={`check-${index}`}>
          <p className="question-group question-group-check">
            Reality check {index + 1} of {career.checks.length}
          </p>
          <h1>{check.question}</h1>

          <div className="options">
            {check.options.map((option, optionIndex) => {
              let state = "";
              if (answered && optionIndex === check.answer) state = " is-correct";
              else if (answered && optionIndex === chosen) state = " is-wrong";

              return (
                <button
                  key={option}
                  type="button"
                  className={`option${state}`}
                  aria-pressed={chosen === optionIndex}
                  disabled={answered}
                  onClick={() => answerCheck(optionIndex)}
                >
                  <kbd>{optionIndex + 1}</kbd>
                  <span>{option}</span>
                  {answered && optionIndex === check.answer && (
                    <Icon name="check" size={20} />
                  )}
                  {answered && optionIndex === chosen && !correct && (
                    <Icon name="x" size={20} />
                  )}
                </button>
              );
            })}
          </div>

          {answered ? (
            <div className={correct ? "feedback is-correct" : "feedback"} role="status">
              <strong>{correct ? "Correct." : "Not quite."}</strong> {check.why}
              <button type="button" className="button button-ink" onClick={nextCheck}>
                {index < career.checks.length - 1
                  ? "Next question"
                  : "See my result"}
                <Icon name="arrow-right" size={18} />
              </button>
            </div>
          ) : (
            <p className="flow-hint">
              These have one right answer. Go with your first instinct, and
              do not look it up.
            </p>
          )}
        </div>
      </div>
    </main>
  );
}

export default Assessment;
