export type Trait =
  | "logic"
  | "build"
  | "visual"
  | "words"
  | "people"
  | "order"
  | "sound";

export type Traits = Partial<Record<Trait, number>>;

export type CategoryId =
  | "software"
  | "data"
  | "design"
  | "product"
  | "operations"
  | "media";

export type IconName =
  | "headset"
  | "bars"
  | "flask"
  | "database"
  | "layout"
  | "compass"
  | "layers"
  | "megaphone"
  | "target"
  | "shapes"
  | "play"
  | "code"
  | "server"
  | "cloud"
  | "shield"
  | "wave"
  | "sparkle"
  | "flow";

/** How much coding the role involves: 0 none, 1 some, 2 code-heavy. */
export type CodingLevel = 0 | 1 | 2;

/**
 * One span of the bridge: a roadmap step and the skill area it builds.
 * The self-rating questions for that skill live with the step, so a
 * person's answers can be mapped straight back onto their roadmap.
 */
export interface Stage {
  /** Short skill-area label used in charts. */
  name: string;
  /** The roadmap step, written as an action. */
  step: string;
  /** What "done" looks like for this step. */
  detail: string;
  /** Rough study hours for someone starting from zero. An estimate. */
  hours: number;
  /** Self-rating prompts, answered on the 1 to 5 scale. */
  questions: string[];
}

/** A short scenario question with one correct answer. */
export interface Check {
  question: string;
  options: string[];
  answer: number;
  why: string;
}

export interface Resource {
  label: string;
  url: string;
  note: string;
}

export interface Career {
  id: string;
  title: string;
  category: CategoryId;
  icon: IconName;
  summary: string;
  dayToDay: string[];
  skills: string[];
  tools: string[];
  coding: CodingLevel;
  /** Whether a smartphone is enough to begin learning. */
  startOn: "phone" | "laptop";
  /** A realistic first piece of work to aim for. */
  firstWin: string;
  traits: Traits;
  stages: Stage[];
  checks: Check[];
  resources: Resource[];
}
