import { careers, totalHours } from "./careers";
import type { Career, Trait, Traits } from "./types";

export interface Profile {
  coding: "yes" | "some" | "no";
  timeline: "fast" | "medium" | "long";
  device: "phone" | "shared" | "laptop";
  hoursPerWeek: number;
}

export const defaultProfile: Profile = {
  coding: "some",
  timeline: "medium",
  device: "laptop",
  hoursPerWeek: 7,
};

interface PathOption {
  label: string;
  /** Interests and strengths this answer points to. */
  traits?: Traits;
  /** Careers this answer names almost directly. */
  boost?: string[];
  /** Practical facts about the person's situation. */
  profile?: Partial<Profile>;
}

export interface PathQuestion {
  id: string;
  group: "You" | "Your situation";
  prompt: string;
  options: PathOption[];
}

export const pathQuestions: PathQuestion[] = [
  {
    id: "saturday",
    group: "You",
    prompt: "You have a free Saturday and plenty of data. What are you most likely doing?",
    options: [
      {
        label: "Taking something apart to see how it works, or trying to build something",
        traits: { build: 2, logic: 1 },
      },
      {
        label: "Designing a flyer, editing photos or rearranging my feed",
        traits: { visual: 3 },
      },
      {
        label: "Recording, posting or writing something for people to see",
        traits: { words: 2, people: 1 },
      },
      {
        label: "Planning an event or sorting something out for friends or family",
        traits: { order: 2, people: 2 },
      },
      {
        label: "Comparing prices, stats or predictions to find the best option",
        traits: { logic: 3 },
      },
      {
        label: "Making beats, mixing a track or editing audio",
        traits: { sound: 3 },
        boost: ["music-audio-producer"],
      },
    ],
  },
  {
    id: "group",
    group: "You",
    prompt: "In a group project, which job do you end up doing?",
    options: [
      {
        label: "Keeping everyone on track and chasing deadlines",
        traits: { order: 3, people: 1 },
      },
      { label: "Making the slides look good", traits: { visual: 3 } },
      { label: "Doing the research and the numbers", traits: { logic: 3 } },
      {
        label: "Presenting, because I can explain it best",
        traits: { words: 3, people: 1 },
      },
      {
        label: "Handling the technical part nobody else wants",
        traits: { build: 3 },
      },
    ],
  },
  {
    id: "problem",
    group: "You",
    prompt: "Which problem would you most enjoy cracking?",
    options: [
      {
        label: "Why did sales drop last month?",
        traits: { logic: 3 },
        boost: ["data-analyst"],
      },
      {
        label: "Why do people give up halfway through this app?",
        traits: { visual: 2, people: 2 },
        boost: ["ui-ux-designer", "product-designer"],
      },
      {
        label: "How do we get 10,000 people to hear about this?",
        traits: { words: 3 },
        boost: ["digital-marketer"],
      },
      {
        label: "Why does this website keep crashing?",
        traits: { build: 3 },
        boost: ["backend-developer", "cloud-engineer"],
      },
      {
        label: "How do I bring order to my boss's inbox and calendar?",
        traits: { order: 3 },
        boost: ["virtual-assistant"],
      },
      {
        label: "How do we stop scammers getting into customer accounts?",
        traits: { logic: 2, build: 2 },
        boost: ["cybersecurity-specialist"],
      },
    ],
  },
  {
    id: "compliment",
    group: "You",
    prompt: "Which compliment do you hear most?",
    options: [
      { label: "You explain things so clearly", traits: { words: 3 } },
      { label: "You have a good eye", traits: { visual: 3 } },
      { label: "You are so organised", traits: { order: 3 } },
      { label: "You are good with numbers", traits: { logic: 3 } },
      { label: "You can fix anything", traits: { build: 3 } },
      { label: "People find it easy to talk to you", traits: { people: 3 } },
    ],
  },
  {
    id: "workday",
    group: "You",
    prompt: "What would your ideal workday feel like?",
    options: [
      {
        label: "Hours of deep focus on one hard problem",
        traits: { build: 2, logic: 2 },
      },
      {
        label: "Talking with people and making decisions together",
        traits: { people: 3, words: 1 },
      },
      {
        label: "Making things: visuals, videos or sound",
        traits: { visual: 2, words: 1, sound: 1 },
      },
      {
        label: "Lots of small tasks ticked off a list",
        traits: { order: 3 },
      },
    ],
  },
  {
    id: "proud",
    group: "You",
    prompt: "Which result would make you proudest?",
    options: [
      {
        label: "An app or site I built that people use every day",
        traits: { build: 3 },
        boost: ["frontend-developer"],
      },
      {
        label: "A big decision made because of my analysis",
        traits: { logic: 3 },
        boost: ["data-analyst", "data-scientist"],
      },
      {
        label: "A brand or campaign that people recognise",
        traits: { words: 2, visual: 2 },
        boost: ["product-marketer", "graphic-designer"],
      },
      {
        label: "A team or business that runs smoothly because of me",
        traits: { order: 2, people: 2 },
        boost: ["product-manager", "salesforce-administrator"],
      },
      {
        label: "Something I made that people watch or listen to",
        traits: { words: 2, sound: 2 },
        boost: ["content-creator", "music-audio-producer"],
      },
    ],
  },
  {
    id: "coding",
    group: "Your situation",
    prompt: "How do you feel about writing code?",
    options: [
      {
        label: "I enjoy it, or I really want to learn",
        profile: { coding: "yes" },
      },
      {
        label: "I would do a little if the job needs it",
        profile: { coding: "some" },
      },
      { label: "I would rather not", profile: { coding: "no" } },
    ],
  },
  {
    id: "timeline",
    group: "Your situation",
    prompt: "How soon do you need this to start paying?",
    options: [
      {
        label: "As soon as possible, within about three months",
        profile: { timeline: "fast" },
      },
      { label: "Within six to twelve months", profile: { timeline: "medium" } },
      {
        label: "I can invest a year or more",
        profile: { timeline: "long" },
      },
    ],
  },
  {
    id: "device",
    group: "Your situation",
    prompt: "What do you have to learn with?",
    options: [
      { label: "A smartphone only", profile: { device: "phone" } },
      { label: "A laptop I share or borrow", profile: { device: "shared" } },
      { label: "My own laptop", profile: { device: "laptop" } },
    ],
  },
  {
    id: "hours",
    group: "Your situation",
    prompt: "How many hours a week can you really give this?",
    options: [
      { label: "Under 5 hours", profile: { hoursPerWeek: 3 } },
      { label: "5 to 10 hours", profile: { hoursPerWeek: 7 } },
      { label: "10 to 20 hours", profile: { hoursPerWeek: 14 } },
      { label: "More than 20 hours", profile: { hoursPerWeek: 25 } },
    ],
  },
];

const traitPhrases: Record<Trait, string> = {
  logic: "digging into numbers and evidence",
  build: "building and fixing technical things",
  visual: "a strong eye for how things look",
  words: "explaining ideas and telling stories",
  people: "working closely with people",
  order: "bringing order to messy situations",
  sound: "a good ear for sound",
};

export interface Match {
  career: Career;
  percent: number;
  reason: string;
  /** Set when the person's situation makes this path harder. */
  caution?: string;
}

function magnitude(traits: Traits): number {
  return Math.sqrt(
    Object.values(traits).reduce((sum, value) => sum + value * value, 0),
  );
}

function similarity(a: Traits, b: Traits): number {
  const sizes = magnitude(a) * magnitude(b);
  if (sizes === 0) return 0;

  let dot = 0;
  for (const [trait, value] of Object.entries(a)) {
    dot += value * (b[trait as Trait] ?? 0);
  }
  return dot / sizes;
}

function reasonFor(career: Career, person: Traits): string {
  const shared = (Object.entries(person) as [Trait, number][])
    .filter(([trait, value]) => value > 0 && (career.traits[trait] ?? 0) >= 2)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 2)
    .map(([trait]) => traitPhrases[trait]);

  if (shared.length === 2) {
    return `This role leans on ${shared[0]} and ${shared[1]}, which is what your answers pointed to.`;
  }
  if (shared.length === 1) {
    return `This role leans on ${shared[0]}, one of the strongest themes in your answers.`;
  }
  return "A broad match across several of your answers, rather than one strong theme.";
}

/** Turns a set of chosen option indexes into the person's profile. */
export function profileFrom(answers: number[]): Profile {
  const profile = { ...defaultProfile };
  pathQuestions.forEach((question, index) => {
    Object.assign(profile, question.options[answers[index]]?.profile);
  });
  return profile;
}

/**
 * Ranks every career for a set of answers.
 *
 * Interests are compared with each career's trait mix (cosine
 * similarity), then adjusted for the person's situation: how they feel
 * about code, how soon they need to earn, and what device they have.
 */
export function rankCareers(answers: number[]): Match[] {
  const person: Traits = {};
  const boosted = new Map<string, number>();

  pathQuestions.forEach((question, index) => {
    const option = question.options[answers[index]];
    if (!option) return;

    for (const [trait, value] of Object.entries(option.traits ?? {})) {
      person[trait as Trait] = (person[trait as Trait] ?? 0) + value;
    }
    for (const id of option.boost ?? []) {
      boosted.set(id, (boosted.get(id) ?? 0) + 1);
    }
  });

  const profile = profileFrom(answers);
  if (profile.coding === "yes") person.build = (person.build ?? 0) + 3;
  if (profile.coding === "no") person.build = (person.build ?? 0) * 0.5;

  return careers
    .map((career) => {
      let score = similarity(person, career.traits);
      let caution: string | undefined;

      score += 0.07 * (boosted.get(career.id) ?? 0);

      if (profile.coding === "no" && career.coding === 2) {
        score *= 0.65;
        caution = "This path is mostly coding, which you said you would rather avoid.";
      } else if (profile.coding === "no" && career.coding === 1) {
        score *= 0.9;
      } else if (profile.coding === "yes" && career.coding === 2) {
        score *= 1.06;
      }

      if (profile.timeline === "fast") {
        const hours = totalHours(career);
        score *= 1 - Math.min(0.2, Math.max(0, hours - 150) / 1000);
        if (!caution && hours / profile.hoursPerWeek > 26) {
          caution = "At your pace this takes longer than the three months you are aiming for.";
        }
      }

      if (profile.device === "phone" && career.startOn === "laptop") {
        score *= 0.9;
        caution ??= "You will need regular access to a laptop for this one.";
      }

      return {
        career,
        percent: Math.round(Math.min(0.97, Math.max(0.2, score)) * 100),
        reason: reasonFor(career, person),
        caution,
      };
    })
    .sort((a, b) => b.percent - a.percent);
}
