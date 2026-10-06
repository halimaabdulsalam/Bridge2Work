import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import BridgeProgress from "../components/BridgeProgress";
import Icon from "../components/Icon";
import { getCareer, questionCount } from "../data/careers";
import { useCountUp, useDocumentTitle } from "../lib/hooks";
import {
  capitalise,
  decodeAnswers,
  scoreAssessment,
  statusLabels,
  timeAtPace,
} from "../lib/scoring";
import { loadProfile, saveProfile } from "../lib/storage";

const paces = [3, 7, 14, 25];

function Results() {
  const [searchParams] = useSearchParams();
  const career = getCareer(searchParams.get("career"));

  const ratings = career
    ? decodeAnswers(searchParams.get("r"), questionCount(career), 1, 5)
    : null;
  const checkAnswers = career
    ? decodeAnswers(searchParams.get("k"), career.checks.length, 0, 3)
    : null;

  const result =
    career && ratings && checkAnswers
      ? scoreAssessment(career, ratings, checkAnswers)
      : null;

  const [hoursPerWeek, setHoursPerWeek] = useState(
    () => loadProfile().hoursPerWeek,
  );
  const [copied, setCopied] = useState(false);

  const readiness = useCountUp(result?.readiness ?? 0);

  useDocumentTitle(career && result ? `${career.title} result` : "Your result");

  if (!career || !result || !checkAnswers) {
    return (
      <main className="page">
        <div className="container empty">
          <h1>There is no result to show yet</h1>
          <p>
            This link is missing some answers. Take a skills check and your
            result will appear here.
          </p>
          <div className="empty-actions">
            <Link to="/assessment" className="button button-ink">
              Start a skills check
            </Link>
            <Link to="/find-my-path" className="button button-outline">
              Find my path first
            </Link>
          </div>
        </div>
      </main>
    );
  }

  const ranked = [...result.stages].sort((a, b) => b.average - a.average);
  const strongest = ranked[0];
  const weakest = ranked[ranked.length - 1];
  const focus = result.focusIndex >= 0 ? result.stages[result.focusIndex] : null;

  const timeLeft = capitalise(timeAtPace(result.remainingHours, hoursPerWeek));

  function changePace(hours: number) {
    setHoursPerWeek(hours);
    saveProfile({ ...loadProfile(), hoursPerWeek: hours });
  }

  async function copyLink() {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      // Clipboard access was refused. The address bar still has the link.
    }
  }

  return (
    <main className="page results">
      <div className="container container-medium">
        <header className="results-head">
          <span className={`icon-tile icon-tile-large tile-${career.category}`}>
            <Icon name={career.icon} size={34} />
          </span>
          <div>
            <p className="career-family">Your skills check result</p>
            <h1>{career.title}</h1>
          </div>
        </header>

        <section className="score-card" aria-labelledby="score-title">
          <div className="score-main">
            <div className="score-number">
              <strong>{readiness}</strong>
              <span>%</span>
            </div>
            <div>
              <h2 id="score-title">{result.level}</h2>
              <p>{result.levelNote}</p>
            </div>
          </div>

          <BridgeProgress stages={result.stages} readiness={result.readiness} />
        </section>

        <section className="insights" aria-label="What your answers show">
          <div className="insight">
            <h2>Strongest area</h2>
            <p className="insight-value">{strongest.stage.name}</p>
            <p>You rated yourself {strongest.average.toFixed(1)} out of 5 here.</p>
          </div>

          <div className="insight">
            <h2>Biggest gap</h2>
            <p className="insight-value">{weakest.stage.name}</p>
            <p>
              {weakest === strongest
                ? "Your ratings are even across every area."
                : `You rated yourself ${weakest.average.toFixed(1)} out of 5 here.`}
            </p>
          </div>

          <div className={`insight insight-${result.calibration.tone}`}>
            <h2>
              Reality check: {result.checksCorrect} of {result.checksTotal}
            </h2>
            <p className="insight-value">{result.calibration.title}</p>
            <p>{result.calibration.body}</p>
          </div>
        </section>

        <section className="plan" aria-labelledby="plan-title">
          <div className="plan-head">
            <div>
              <h2 id="plan-title">Your roadmap, adjusted</h2>
              <p>
                The same five steps as everyone else, with the time cut down
                wherever you are already strong.
              </p>
            </div>

            <div className="pace">
              <span id="pace-label">Hours you can give each week</span>
              <div className="segmented" role="group" aria-labelledby="pace-label">
                {paces.map((hours) => (
                  <button
                    key={hours}
                    type="button"
                    aria-pressed={hoursPerWeek === hours}
                    onClick={() => changePace(hours)}
                  >
                    {hours}
                  </button>
                ))}
              </div>
              <p className="pace-result" aria-live="polite">
                <Icon name="clock" size={18} />
                <span>
                  <strong>{timeLeft}</strong> to finish, with about{" "}
                  {result.remainingHours} hours of study left
                </span>
              </p>
            </div>
          </div>

          <ol className="plan-list">
            {result.stages.map((item, index) => (
              <li
                key={item.stage.step}
                className={
                  index === result.focusIndex
                    ? "plan-step is-focus"
                    : `plan-step is-${item.status}`
                }
              >
                <span className="roadmap-number">
                  {item.status === "solid" ? <Icon name="check" size={18} /> : index + 1}
                </span>

                <div className="plan-step-body">
                  <div className="plan-step-title">
                    <h3>{item.stage.step}</h3>
                    {index === result.focusIndex && (
                      <span className="pill pill-sun">Start here</span>
                    )}
                    <span className={`pill pill-${item.status}`}>
                      {statusLabels[item.status]}
                    </span>
                  </div>

                  <div className="meter" aria-hidden="true">
                    <i
                      className={`meter-${item.status}`}
                      style={{ width: `${Math.max(4, item.percent)}%` }}
                    />
                  </div>

                  <p>{item.stage.detail}</p>
                  <p className="plan-step-time">
                    Your rating: {item.average.toFixed(1)} out of 5. About{" "}
                    {item.remainingHours} of {item.stage.hours} hours left
                    {item.remainingHours > 0
                      ? ` (${timeAtPace(item.remainingHours, hoursPerWeek)}).`
                      : "."}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className="next" aria-labelledby="next-title">
          <div className="next-main">
            <h2 id="next-title">What to do this week</h2>
            {focus ? (
              <p>
                <strong>{focus.stage.step}.</strong> {focus.stage.detail}
              </p>
            ) : (
              <p>
                <strong>Prove it.</strong> You rated every area as solid, so
                stop studying and build: {career.firstWin.toLowerCase()}.
              </p>
            )}
            <p className="next-win">
              <Icon name="flag" size={18} />
              <span>
                A first win to aim for: {career.firstWin.toLowerCase()}.
              </span>
            </p>
          </div>

          <div className="next-resources">
            <h3>Free places to start</h3>
            <ul className="resource-list">
              {career.resources.map((resource) => (
                <li key={resource.url}>
                  <a href={resource.url} target="_blank" rel="noreferrer">
                    {resource.label}
                    <Icon name="external" size={15} />
                  </a>
                  <span>{resource.note}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <details className="review">
          <summary>Review the reality-check questions</summary>
          <ol>
            {career.checks.map((check, index) => {
              const right = checkAnswers[index] === check.answer;

              return (
                <li key={check.question}>
                  <p>{check.question}</p>
                  <p className={right ? "review-answer is-correct" : "review-answer"}>
                    <Icon name={right ? "check" : "x"} size={16} />
                    <span>
                      {right ? "You answered: " : "Correct answer: "}
                      {check.options[check.answer]}
                    </span>
                  </p>
                  <p className="review-why">{check.why}</p>
                </li>
              );
            })}
          </ol>
        </details>

        <div className="results-actions">
          <button type="button" className="button button-ink" onClick={copyLink}>
            <Icon name={copied ? "check" : "link"} size={18} />
            {copied ? "Link copied" : "Copy a link to this result"}
          </button>
          <button
            type="button"
            className="button button-outline"
            onClick={() => window.print()}
          >
            <Icon name="printer" size={18} />
            Print or save as PDF
          </button>
          <Link to={`/assessment?career=${career.id}`} className="button button-outline">
            <Icon name="refresh" size={18} />
            Check again
          </Link>
          <Link to="/careers" className="text-link">
            Explore other careers
            <Icon name="arrow-right" size={16} />
          </Link>
        </div>

        <p className="results-disclaimer">
          This result is based on how you rated yourself, plus three short
          questions. Treat it as a guide to where to spend your time, not a
          certificate. Study hours are estimates.
        </p>
      </div>
    </main>
  );
}

export default Results;
