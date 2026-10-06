import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Icon from "../components/Icon";
import {
  categoryLabel,
  codingLabels,
  getCareer,
  questionCount,
  totalHours,
} from "../data/careers";
import { useDocumentTitle } from "../lib/hooks";
import { capitalise, timeAtPace } from "../lib/scoring";
import { loadProfile, loadResults } from "../lib/storage";

function CareerDetails() {
  const { id } = useParams();
  const career = getCareer(id);

  const [profile] = useState(loadProfile);
  const [results] = useState(loadResults);

  useDocumentTitle(career ? career.title : "Career not found");

  if (!career) {
    return (
      <main className="page">
        <div className="container empty">
          <h1>We could not find that career</h1>
          <p>The link may be out of date. Every career we cover is on one page.</p>
          <Link to="/careers" className="button button-ink">
            See all careers
          </Link>
        </div>
      </main>
    );
  }

  const hours = totalHours(career);
  const saved = results[career.id];

  return (
    <main className="page">
      <div className="container">
        <Link to="/careers" className="back-link">
          <Icon name="arrow-left" size={16} />
          All careers
        </Link>

        <header className="career-head">
          <span className={`icon-tile icon-tile-large tile-${career.category}`}>
            <Icon name={career.icon} size={34} />
          </span>

          <div>
            <p className="career-family">{categoryLabel(career.category)}</p>
            <h1>{career.title}</h1>
            <p className="career-summary">{career.summary}</p>
          </div>
        </header>

        <dl className="career-facts">
          <div>
            <dt>
              <Icon name="code" size={18} />
              Coding
            </dt>
            <dd>{codingLabels[career.coding]}</dd>
          </div>
          <div>
            <dt>
              <Icon name={career.startOn === "phone" ? "phone" : "laptop"} size={18} />
              To get started
            </dt>
            <dd>
              {career.startOn === "phone"
                ? "A smartphone is enough"
                : "You need a laptop"}
            </dd>
          </div>
          <div>
            <dt>
              <Icon name="clock" size={18} />
              From zero
            </dt>
            <dd>
              {capitalise(timeAtPace(hours, profile.hoursPerWeek))} at{" "}
              {profile.hoursPerWeek} hrs a week
            </dd>
          </div>
        </dl>

        <div className="career-cta">
          <div>
            {saved ? (
              <>
                <strong>You are {saved.readiness}% of the way across.</strong>
                <span>Open your last result, or check again to see what moved.</span>
              </>
            ) : (
              <>
                <strong>How far along are you already?</strong>
                <span>
                  {questionCount(career)} quick ratings and {career.checks.length}{" "}
                  reality-check questions. About three minutes.
                </span>
              </>
            )}
          </div>

          <div className="career-cta-actions">
            {saved && (
              <Link to={`/results?${saved.query}`} className="button button-ghost-light">
                View my result
              </Link>
            )}
            <Link to={`/assessment?career=${career.id}`} className="button button-sun">
              {saved ? "Check again" : "Check my skills"}
              <Icon name="arrow-right" size={18} />
            </Link>
          </div>
        </div>

        <div className="career-body">
          <section aria-labelledby="roadmap-title" className="career-roadmap">
            <h2 id="roadmap-title">The roadmap</h2>
            <p className="section-note">
              Five steps, in order. Hours are estimates for someone starting
              from zero ({hours} in total).
            </p>

            <ol className="roadmap">
              {career.stages.map((stage, index) => (
                <li key={stage.step} className="roadmap-step">
                  <span className="roadmap-number">{index + 1}</span>
                  <div>
                    <h3>{stage.step}</h3>
                    <p>{stage.detail}</p>
                    <span className="roadmap-hours">About {stage.hours} hours</span>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          <aside className="career-side">
            <section aria-labelledby="day-title" className="panel">
              <h2 id="day-title">What you would actually do</h2>
              <ul className="tick-list">
                {career.dayToDay.map((item) => (
                  <li key={item}>
                    <Icon name="check" size={18} />
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            <section aria-labelledby="skills-title" className="panel">
              <h2 id="skills-title">Skills you will need</h2>
              <ul className="tag-list">
                {career.skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>

              <h2>Tools you will use</h2>
              <ul className="tag-list tag-list-quiet">
                {career.tools.map((tool) => (
                  <li key={tool}>{tool}</li>
                ))}
              </ul>
            </section>

            <section aria-labelledby="win-title" className="panel panel-sun">
              <h2 id="win-title">A good first win</h2>
              <p>{career.firstWin}.</p>
            </section>

            <section aria-labelledby="learn-title" className="panel">
              <h2 id="learn-title">Free places to start</h2>
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
            </section>
          </aside>
        </div>
      </div>
    </main>
  );
}

export default CareerDetails;
