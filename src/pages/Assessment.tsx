import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
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

  const careerId = searchParams.get("career") || "virtual-assistant";

  const assessment =
    assessmentQuestions[careerId as keyof typeof assessmentQuestions];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);

  if (!assessment) {
    return (
      <main>
        <h1>Assessment not found</h1>
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
        `/results?career=${careerId}&score=${average.toFixed(1)}&answers=${answerData}`,
      );
      navigate(`/results?career=${careerId}&score=${average.toFixed(1)}`);
    }
  }

  return (
    <main className="assessment">
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
