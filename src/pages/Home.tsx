import { Link } from "react-router-dom";
import teamPhoto from "../assets/image/bridge.webp";
import HeroBridge from "../components/HeroBridge";
import Icon from "../components/Icon";
import { careers, categories } from "../data/careers";
import { useDocumentTitle } from "../lib/hooks";

const steps = [
  {
    title: "Find your path",
    body: "Ten quick questions about what you enjoy and what your week looks like. You get your three closest career matches, with reasons.",
    to: "/find-my-path",
    action: "Find my path",
  },
  {
    title: "Check your skills",
    body: "Rate yourself against the real skills of that career, then answer three reality-check questions to see if your confidence holds up.",
    to: "/assessment",
    action: "Start a skills check",
  },
  {
    title: "Follow your roadmap",
    body: "See what to learn first, what you can skip, and roughly how long it will take at the hours you can actually give.",
    to: "/careers",
    action: "See the roadmaps",
  },
];

const sampleStages = [
  { name: "HTML and CSS", status: "Already solid", fill: 88, tone: "good" },
  { name: "JavaScript", status: "Sharpen", fill: 62, tone: "blue" },
  { name: "React", status: "Build up", fill: 38, tone: "sun" },
  { name: "TypeScript", status: "Start from the basics", fill: 12, tone: "sun" },
];

function Home() {
  useDocumentTitle("Find the digital career that fits you");

  return (
    <main className="home">
      <section className="hero">
        <div className="container hero-copy">
          <h1>
            From “where do I even start?” to work-ready.
          </h1>

          <p className="hero-lede">
            Bridge2Work matches you to a digital career, checks the skills you
            already have, and gives you a step-by-step roadmap built around
            your week.
          </p>

          <div className="hero-actions">
            <Link to="/find-my-path" className="button button-sun button-large">
              Find my path
              <Icon name="arrow-right" size={20} />
            </Link>
            <Link to="/careers" className="button button-ghost-light button-large">
              Browse {careers.length} careers
            </Link>
          </div>

          <p className="hero-terms">
            Free, no sign-up, about three minutes.
          </p>
        </div>

        <HeroBridge />
      </section>

      <section className="steps" aria-labelledby="steps-title">
        <div className="container">
          <h2 id="steps-title" className="visually-hidden">
            How it works
          </h2>

          <ol className="steps-list">
            {steps.map((step, index) => (
              <li key={step.title} className="step-card">
                <span className="step-number">{index + 1}</span>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
                <Link to={step.to} className="text-link">
                  {step.action}
                  <Icon name="arrow-right" size={16} />
                </Link>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="payoff" aria-labelledby="payoff-title">
        <div className="container payoff-grid">
          <div className="payoff-copy">
            <h2 id="payoff-title">
              A plan that starts from where you really are
            </h2>
            <p>
              Most roadmaps assume you know nothing. Yours is adjusted to your
              answers, so you spend your hours on the gaps and skip what you
              have already done.
            </p>

            <ul className="tick-list">
              <li>
                <Icon name="check" size={18} />
                A readiness score that weighs confidence against what you
                actually know
              </li>
              <li>
                <Icon name="check" size={18} />
                Your strongest and weakest skill areas, side by side
              </li>
              <li>
                <Icon name="check" size={18} />
                A timeline that changes with the hours you can give each week
              </li>
              <li>
                <Icon name="check" size={18} />
                Free places to start learning, chosen for each career
              </li>
            </ul>
          </div>

          <figure className="sample" aria-label="An example result">
            <figcaption>Example result: Frontend Developer</figcaption>

            <div className="sample-score">
              <strong>58%</strong>
              <span>
                of the way across
                <b>About 3 months to go at 7 hours a week</b>
              </span>
            </div>

            <ul className="sample-stages">
              {sampleStages.map((stage) => (
                <li key={stage.name}>
                  <span>{stage.name}</span>
                  <em>{stage.status}</em>
                  <div className="meter">
                    <i
                      className={`meter-${stage.tone}`}
                      style={{ width: `${stage.fill}%` }}
                    />
                  </div>
                </li>
              ))}
            </ul>

            <p className="sample-note">
              <Icon name="flag" size={16} />
              Start with JavaScript. You can skim HTML and CSS.
            </p>
          </figure>
        </div>
      </section>

      <section className="families" aria-labelledby="families-title">
        <div className="container">
          <div className="section-head">
            <h2 id="families-title">
              {careers.length} careers you can start learning today
            </h2>
            <p>
              Every one has a roadmap, a skills check and free places to begin.
              Some need a laptop and a year. Others start on a phone.
            </p>
          </div>

          <div className="family-grid">
            {categories.map((category) => (
              <div key={category.id} className="family">
                <h3>{category.label}</h3>
                <ul>
                  {careers
                    .filter((career) => career.category === category.id)
                    .map((career) => (
                      <li key={career.id}>
                        <Link to={`/careers/${career.id}`}>
                          <span className={`icon-tile tile-${career.category}`}>
                            <Icon name={career.icon} size={18} />
                          </span>
                          {career.title}
                        </Link>
                      </li>
                    ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="audience" aria-labelledby="audience-title">
        <div className="container audience-grid">
          <img
            src={teamPhoto}
            alt="Four young professionals working together around a laptop and tablet"
            width="760"
            height="576"
            loading="lazy"
          />

          <div>
            <h2 id="audience-title">Built for people at the starting line</h2>
            <p>
              Students, recent graduates, job seekers and anyone switching into
              tech. You do not need experience, a CV or even a laptop to begin.
              You need a clear first step.
            </p>

            <dl className="facts">
              <div>
                <dt>No account</dt>
                <dd>Open it and start. Your answers stay in your browser.</dd>
              </div>
              <div>
                <dt>Light on data</dt>
                <dd>No videos, no downloads. It works on a phone.</dd>
              </div>
              <div>
                <dt>Honest</dt>
                <dd>
                  It tells you when a path needs a laptop or more time than you
                  have.
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      <section className="closing">
        <div className="container closing-inner">
          <h2>Take the first step across</h2>
          <p>Ten questions. Three matches. One clear place to start.</p>
          <Link to="/find-my-path" className="button button-sun button-large">
            Find my path
            <Icon name="arrow-right" size={20} />
          </Link>
        </div>
      </section>
    </main>
  );
}

export default Home;
