import { businessCareers } from "./careersBusiness";
import { creativeCareers } from "./careersCreative";
import { techCareers } from "./careersTech";
import type { Career, CategoryId, CodingLevel } from "./types";

/**
 * The single source of truth for every career on the site. The careers
 * list, the detail pages, the path finder, the skills check and the
 * results page all read from here.
 */
export const careers: Career[] = [
  ...techCareers,
  ...creativeCareers,
  ...businessCareers,
];

export const categories: { id: CategoryId; label: string }[] = [
  { id: "software", label: "Software and cloud" },
  { id: "data", label: "Data" },
  { id: "design", label: "Design" },
  { id: "product", label: "Product and marketing" },
  { id: "operations", label: "Operations and tools" },
  { id: "media", label: "Content and media" },
];

export const codingLabels: Record<CodingLevel, string> = {
  0: "No coding",
  1: "Some coding",
  2: "Code-heavy",
};

export function getCareer(id: string | null | undefined): Career | undefined {
  return careers.find((career) => career.id === id);
}

export function categoryLabel(id: CategoryId): string {
  return categories.find((category) => category.id === id)?.label ?? "";
}

/** Estimated study hours from zero to the end of the roadmap. */
export function totalHours(career: Career): number {
  return career.stages.reduce((sum, stage) => sum + stage.hours, 0);
}

export function questionCount(career: Career): number {
  return career.stages.reduce((sum, stage) => sum + stage.questions.length, 0);
}
