import type { Career, Stage } from "../data/types";

/**
 * The 1 to 5 scale. Each point describes something a person can
 * observe about themselves, which is harder to inflate than
 * "somewhat familiar".
 */
export const ratingScale = [
  { value: 1, label: "Never tried it" },
  { value: 2, label: "I know the idea" },
  { value: 3, label: "I can do it with help" },
  { value: 4, label: "I can do it on my own" },
  { value: 5, label: "I could teach it" },
];

export type StageStatus = "solid" | "sharpen" | "build" | "start";

export const statusLabels: Record<StageStatus, string> = {
  solid: "Already solid",
  sharpen: "Sharpen",
  build: "Build up",
  start: "Start from the basics",
};

/** How much of a stage's study time is still ahead, given the rating. */
const remainingShare: Record<StageStatus, number> = {
  solid: 0.15,
  sharpen: 0.5,
  build: 0.8,
  start: 1,
};

export interface StageResult {
  stage: Stage;
  average: number;
  /** 0 to 100, for drawing. */
  percent: number;
  status: StageStatus;
  remainingHours: number;
}

export interface AssessmentResult {
  stages: StageResult[];
  /** Average self-rating, 1 to 5. */
  confidence: number;
  checksCorrect: number;
  checksTotal: number;
  /** 0 to 100: confidence weighted with the reality-check score. */
  readiness: number;
  level: string;
  levelNote: string;
  calibration: { tone: "up" | "steady" | "careful"; title: string; body: string };
  remainingHours: number;
  /** Index of the first stage worth real time, or -1 if all are solid. */
  focusIndex: number;
}

function statusFor(average: number): StageStatus {
  if (average >= 4) return "solid";
  if (average >= 3) return "sharpen";
  if (average >= 2) return "build";
  return "start";
}

function levelFor(readiness: number): { level: string; levelNote: string } {
  if (readiness >= 80) {
    return {
      level: "Ready to prove it",
      levelNote:
        "You rate yourself highly across the path. What you need now is proof: finished projects and real applications.",
    };
  }
  if (readiness >= 60) {
    return {
      level: "Most of the way across",
      levelNote:
        "You have a real base to build on. Close the gaps below and start putting work where people can see it.",
    };
  }
  if (readiness >= 30) {
    return {
      level: "Building momentum",
      levelNote:
        "You have started. A steady few hours a week on the steps below will move this number quickly.",
    };
  }
  return {
    level: "Starting out",
    levelNote:
      "Everyone on this path began here. Your roadmap starts at step one, and that is exactly where it should.",
  };
}

export function scoreAssessment(
  career: Career,
  ratings: number[],
  checkAnswers: number[],
): AssessmentResult {
  let cursor = 0;

  const stages = career.stages.map((stage) => {
    const own = ratings.slice(cursor, cursor + stage.questions.length);
    cursor += stage.questions.length;

    const average = own.reduce((sum, value) => sum + value, 0) / own.length;
    const status = statusFor(average);

    return {
      stage,
      average,
      percent: Math.round(((average - 1) / 4) * 100),
      status,
      remainingHours: Math.round(stage.hours * remainingShare[status]),
    };
  });

  const confidence =
    ratings.reduce((sum, value) => sum + value, 0) / ratings.length;
  const confidenceShare = (confidence - 1) / 4;

  const checksTotal = career.checks.length;
  const checksCorrect = career.checks.filter(
    (check, index) => checkAnswers[index] === check.answer,
  ).length;
  const checkShare = checksCorrect / checksTotal;

  const readiness = Math.round((confidenceShare * 0.7 + checkShare * 0.3) * 100);
  const missed = checksTotal - checksCorrect;

  let calibration: AssessmentResult["calibration"];
  if (checkShare === 1 && confidenceShare < 0.5) {
    calibration = {
      tone: "up",
      title: "You know more than you think",
      body: "You rated yourself low but got every reality-check question right. Trust yourself a little more.",
    };
  } else if (checkShare <= 1 / 3 && confidenceShare >= 0.6) {
    calibration = {
      tone: "careful",
      title: "Worth a second look",
      body: `You rated yourself highly but missed ${missed} of ${checksTotal} reality-check questions. Test those ratings on a small project before you rely on them.`,
    };
  } else if (checkShare >= 2 / 3) {
    calibration = {
      tone: "steady",
      title: "Your confidence matches your answers",
      body: "Your self-ratings and your reality-check answers tell the same story, so this score is a fair picture.",
    };
  } else {
    calibration = {
      tone: "steady",
      title: "An honest starting point",
      body: "You are early on this path and your ratings say so. That makes the roadmap below more useful to you, not less.",
    };
  }

  return {
    stages,
    confidence,
    checksCorrect,
    checksTotal,
    readiness,
    ...levelFor(readiness),
    calibration,
    remainingHours: stages.reduce((sum, item) => sum + item.remainingHours, 0),
    focusIndex: stages.findIndex((item) => item.status !== "solid"),
  };
}

/** "6 weeks" or "about 5 months", for a number of hours at a weekly pace. */
export function timeAtPace(hours: number, hoursPerWeek: number): string {
  const weeks = Math.max(1, Math.ceil(hours / hoursPerWeek));
  if (weeks <= 8) return `${weeks} ${weeks === 1 ? "week" : "weeks"}`;

  const months = Math.round(weeks / 4.345);
  if (months >= 24) return "about 2 years or more";
  return `about ${months} months`;
}

export function capitalise(text: string): string {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

/* Results travel in the URL so they can be shared and bookmarked. */

export function encodeAnswers(values: number[]): string {
  return values.join("");
}

/**
 * Reads a string of digits back into numbers. Returns null unless every
 * digit is present and within range, so a broken link never renders a
 * half-result.
 */
export function decodeAnswers(
  text: string | null,
  length: number,
  min: number,
  max: number,
): number[] | null {
  if (!text || text.length !== length) return null;

  const values = text.split("").map(Number);
  const valid = values.every(
    (value) => Number.isInteger(value) && value >= min && value <= max,
  );
  return valid ? values : null;
}
