import { Link, useSearchParams } from "react-router-dom";
import { assessmentQuestions } from "../data/AssessmentQuestions";
import { careerRoadmaps } from "../data/CareerRoadmaps";

function Results() {
  const [searchParams] = useSearchParams();

  const careerId = searchParams.get("career");
  const score = Number(searchParams.get("score")) || 0;

  const answerData = searchParams.get("answers");

  const answers: number[] = answerData
    ? JSON.parse(decodeURIComponent(answerData))
    : [];

  const assessment = careerId
    ? assessmentQuestions[careerId as keyof typeof assessmentQuestions]
    : undefined;

  let level = "Beginner";

  if (score >= 3.8) {
    level = "Advanced";
  } else if (score >= 2.5) {
    level = "Intermediate";
  }

  const careerName = careerId
    ? careerId
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ")
    : "Your Chosen Career";

  const roadmap = careerId
    ? careerRoadmaps[careerId as keyof typeof careerRoadmaps]
    : undefined;

  const ratedQuestions = assessment
    ? assessment.questions.map((question, index) => ({
        question,
        score: answers[index] || 0,
      }))
    : [];

  const strongestAreas = [...ratedQuestions]
    .filter((item) => item.score >= 4)
    .sort((a, b) => b.score - a.score)
    .slice(0, 3);

  const areasToBuild = [...ratedQuestions]
    .filter((item) => item.score <= 2)
    .sort((a, b) => a.score - b.score)
    .slice(0, 3);

  return (
    <main className="results">
      <div className="results-header">
        <p className="results-label">ASSESSMENT COMPLETE</p>

        <h1>Your Career Assessment Results</h1>

        <p>
          Here's a snapshot of your current confidence level for this career
          path.
        </p>
      </div>

      <section className="results-card">
        <p className="results-career-label">YOUR CHOSEN CAREER</p>

        <h2>{careerName}</h2>

        <div className="results-score">
          <span>{score}</span>
          <small>/ 5</small>
        </div>

        <p className="results-level">
          Current level: <strong>{level}</strong>
        </p>

        <p className="results-level-description">
          {level === "Beginner" &&
            "You're starting to build your foundation in this career."}

          {level === "Intermediate" &&
            "You have some confidence in the core skills and can focus on building practical experience."}

          {level === "Advanced" &&
            "You show strong confidence across the assessed areas and can focus on deeper practice and real-world projects."}
        </p>
      </section>

      <section className="results-breakdown">
        <div className="results-section">
          <h2>Your Strong Areas</h2>

          {strongestAreas.length > 0 ? (
            <div className="results-list">
              {strongestAreas.map((item) => (
                <div className="results-item" key={item.question}>
                  <p>{item.question}</p>
                  <span>{item.score}/5</span>
                </div>
              ))}
            </div>
          ) : (
            <p>
              Keep practising and building your confidence. Your stronger areas
              will become clearer as you continue learning.
            </p>
          )}
        </div>

        <div className="results-section">
          <h2>Areas to Build</h2>

          {areasToBuild.length > 0 ? (
            <div className="results-list">
              {areasToBuild.map((item) => (
                <div className="results-item" key={item.question}>
                  <p>{item.question}</p>
                  <span>{item.score}/5</span>
                </div>
              ))}
            </div>
          ) : (
            <p>
              You showed confidence across these questions. Keep practising to
              strengthen your skills further.
            </p>
          )}
        </div>
      </section>

      <section className="results-roadmap">
        <h2>Your Suggested Learning Path</h2>

        <p>
          Use this roadmap as a starting point for building your skills in{" "}
          {roadmap?.title || careerName}.
        </p>

        <div className="roadmap-list">
          {roadmap?.steps.map((step, index) => (
            <div className="roadmap-step" key={step}>
              <span className="roadmap-number">{index + 1}</span>

              <p>{step}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="results-next">
        <h2>What to Do Next</h2>

        <p>
          Start with the first step in your learning path and build your skills
          through practice and small projects.
        </p>

        <Link to={`/careers/${careerId}`} className="secondary-button">
          Review Career Details
        </Link>
      </section>

      <div className="results-actions">
        {careerId && (
          <Link
            to={`/assessment?career=${careerId}`}
            className="primary-button"
          >
            Retake Assessment
          </Link>
        )}

        <Link to="/careers" className="secondary-button">
          Explore More Careers
        </Link>
      </div>
    </main>
  );
}

export default Results;
