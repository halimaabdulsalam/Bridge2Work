# Bridge2Work

Bridge2Work helps young people in Nigeria find a digital career that fits them, see which skills they already have, and get a step-by-step roadmap built around the time they can give each week.

## The problem

Many students and recent graduates want to move into digital work but do not know which career to choose, what skills it needs, or where to begin. Most roadmaps online assume you have already picked a path and are starting from zero.

## What it does

1. **Find my path.** Ten questions about what you enjoy and what your situation is (how you feel about code, how soon you need to earn, what device you have, how many hours you can give). You get your three closest career matches, each with a reason.
2. **Skills check.** For any of the 18 careers, rate yourself against the real skills of the job, then answer three reality-check questions that have a right answer.
3. **Personal roadmap.** A readiness score, your strongest and weakest skill areas, and the career's five-step roadmap with the study time reduced wherever you are already strong. Change the hours you can give each week and the timeline updates.

Results can be shared by link, printed, or saved as a PDF. There are no accounts. Answers are kept in the visitor's own browser.

## Who it is for

- Students and recent graduates
- Young job seekers
- People switching into tech
- Anyone exploring digital careers for the first time

## Careers covered

Software and cloud (Frontend Developer, Backend Developer, Cloud Engineer, Cybersecurity Specialist), Data (Data Analyst, Data Scientist, Data Engineer), Design (UI/UX Designer, Product Designer, Graphic Designer), Product and marketing (Product Manager, Product Marketer, Digital Marketer), Operations and tools (Virtual Assistant, Salesforce Administrator, AI Career Essentials), Content and media (Content Creator, Music & Audio Producer).

## How the scoring works

**Career matching.** Every career has a mix of seven strengths: logic, building, visual sense, words, people, organisation and sound. Your answers build the same kind of mix for you, and the two are compared. The score is then adjusted for your situation, for example a code-heavy career scores lower if you would rather not code. See `src/data/pathFinder.ts`.

**Readiness.** Each career's questions are grouped under its five roadmap steps, so a rating maps straight back to a step. Readiness is 70% your average self-rating and 30% your reality-check score. If the two disagree (high confidence, wrong answers, or the reverse) the results page says so. See `src/lib/scoring.ts`.

**Timeline.** Each roadmap step has an estimated number of study hours. A step you rate as solid keeps 15% of its hours, and a step you have never tried keeps all of them. The remaining hours are divided by the hours you can give each week.

The study hours and trait mixes are our own estimates. They are a starting point and should be checked against real learner data.

## Tech stack

- React 19 and TypeScript
- Vite
- React Router
- Plain CSS, with design tokens in `src/index.css`
- Deployed on Vercel

There are no UI, icon or animation libraries. The icons and the bridge illustrations are hand-written SVG.

## Getting started

You need Node.js and npm.

```bash
git clone https://github.com/halimaabdulsalam/Bridge2Work.git
cd Bridge2Work
npm install
npm run dev
```

To build for production and preview it:

```bash
npm run build
npm run preview
```

## Project structure

```
src/
├── components/     Shared pieces: nav, footer, icons, career card, bridge illustrations
├── data/
│   ├── careers.ts          Single source of truth: all 18 careers
│   ├── careersTech.ts      Career content, split by family
│   ├── careersCreative.ts
│   ├── careersBusiness.ts
│   ├── pathFinder.ts       The matching questions and ranking logic
│   ├── resources.ts        Free learning links
│   └── types.ts
├── lib/
│   ├── scoring.ts          Readiness, calibration and timeline maths
│   ├── storage.ts          Saving answers in the browser
│   └── hooks.ts
├── pages/          Home, PathFinder, Careers, CareerDetails, Assessment, Results, NotFound
├── routes/
└── index.css
```

To add or edit a career, change one object in `src/data/`. Every page reads from it.

## Deployment

The app is a single-page app on Vercel. `vercel.json` sends every route to `index.html`, so refreshing or sharing a deep link such as `/results?...` works.

## Credits

Built by Group 4 for the Nexus Internship.
