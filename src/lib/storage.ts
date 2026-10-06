import { defaultProfile } from "../data/pathFinder";
import type { Profile } from "../data/pathFinder";

/**
 * Everything is kept in the browser. There are no accounts and nothing
 * is sent anywhere, so reads must cope with storage being empty,
 * blocked (private windows) or edited by hand.
 */

const keys = {
  profile: "bridge2work.profile",
  pathAnswers: "bridge2work.pathAnswers",
  results: "bridge2work.results",
};

export interface SavedResult {
  readiness: number;
  /** The query string that reopens the full result. */
  query: string;
  savedAt: string;
}

function read<T>(key: string, fallback: T): T {
  try {
    const raw = window.localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : fallback;
  } catch {
    return fallback;
  }
}

function write(key: string, value: unknown): void {
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch {
    // Storage is unavailable. The app still works for this visit.
  }
}

export function loadProfile(): Profile {
  return { ...defaultProfile, ...read<Partial<Profile>>(keys.profile, {}) };
}

export function saveProfile(profile: Profile): void {
  write(keys.profile, profile);
}

export function loadPathAnswers(): number[] | null {
  const answers = read<unknown>(keys.pathAnswers, null);
  return Array.isArray(answers) ? (answers as number[]) : null;
}

export function savePathAnswers(answers: number[]): void {
  write(keys.pathAnswers, answers);
}

export function loadResults(): Record<string, SavedResult> {
  const results = read<unknown>(keys.results, {});
  return results && typeof results === "object"
    ? (results as Record<string, SavedResult>)
    : {};
}

export function saveResult(careerId: string, result: SavedResult): void {
  write(keys.results, { ...loadResults(), [careerId]: result });
}
