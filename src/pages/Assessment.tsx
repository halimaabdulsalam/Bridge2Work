import { useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { assessmentQuestions } from "../data/AssessmentQuestions";

const answerOptions = [
  "1 - Not familiar",
  "2 - Slightly familiar",
  "3 - Somewhat familiar",
  "4 - Very comfortable",
  "5 - Highly confident",
];

function Assessment() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const careerId = searchParams.get("career");

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);

  // Career selection screen
  if (!careerId) {
    const careers = Object.entries(assessmentQuestions);

    return (
      <main className="assessment-selection">
        <div className="assessment-selection-header">
          <p className="results-label">SKILLS ASSESSMENT</p>

          <h1>Choose a Career to Assess</h1>

          <p>
            Select a career path to assess your current confidence and discover
            areas you can build.
          </p>
        </div>

        <div className="assessment-careers">
          {careers.map(([id, assessment]) => (
            <Link
              key={id}
              to={`/assessment?career=${id}`}
              className="assessment-career-card"
            >
              <h2>{assessment.title}</h2>

              <p>
                Assess your current confidence across the skills needed for this
                career.
              </p>

              <span>Start Assessment →</span>
            </Link>
          ))}
        </div>
      </main>
    );
  }

  const assessment =
    assessmentQuestions[careerId as keyof typeof assessmentQuestions];

  if (!assessment) {
    return (
      <main>
        <h1>Assessment not found</h1>

        <Link to="/assessment" className="secondary-button">
          Choose Another Career
        </Link>
      </main>
    );
  }

  const question = assessment.questions[currentQuestion];
  const selectedAnswer = answers[currentQuestion];

  function handleAnswer(score: number) {
    const updatedAnswers = [...answers];
    updatedAnswers[currentQuestion] = score;
    setAnswers(updatedAnswers);
  }

  function handleNext() {
    if (!selectedAnswer) {
      alert("Please select an answer first.");
      return;
    }

    if (currentQuestion < assessment.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      const total = answers.reduce((sum, score) => sum + score, 0);
      const average = total / answers.length;

      const answerData = encodeURIComponent(JSON.stringify(answers));

      navigate(
        `/results?career=${careerId}&score=${average.toFixed(
          1,
        )}&answers=${answerData}`,
      );
    }
  }

  return (
    <main className="assessment">
      <Link to="/assessment" className="assessment-back">
        ← Choose Another Career
      </Link>

      <h1>{assessment.title} Assessment</h1>

      <p className="question-number">
        Question {currentQuestion + 1} of {assessment.questions.length}
      </p>

      <h2>{question}</h2>

      <div className="answer-options">
        {answerOptions.map((option, index) => {
          const score = index + 1;

          return (
            <button
              key={score}
              type="button"
              onClick={() => handleAnswer(score)}
              className={selectedAnswer === score ? "selected" : ""}
            >
              {option}
            </button>
          );
        })}
      </div>

      <button type="button" className="next-button" onClick={handleNext}>
        {currentQuestion === assessment.questions.length - 1
          ? "Finish Assessment"
          : "Next Question"}
      </button>
    </main>
  );
}

export default Assessment;
