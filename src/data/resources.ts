import type { Resource } from "./types";

/**
 * Free (or free-to-start) places to learn. Kept in one list so a link
 * only has to be fixed once.
 */
export const resources = {
  freeCodeCamp: {
    label: "freeCodeCamp",
    url: "https://www.freecodecamp.org/learn",
    note: "Free, project-based coding curriculum with certificates.",
  },
  odin: {
    label: "The Odin Project",
    url: "https://www.theodinproject.com",
    note: "Free full-stack path that makes you build real projects.",
  },
  mdn: {
    label: "MDN Web Docs",
    url: "https://developer.mozilla.org/en-US/docs/Learn_web_development",
    note: "The reference web developers actually use, with beginner guides.",
  },
  roadmapSh: {
    label: "roadmap.sh",
    url: "https://roadmap.sh",
    note: "Community-built maps of what to learn, in order.",
  },
  kaggle: {
    label: "Kaggle Learn",
    url: "https://www.kaggle.com/learn",
    note: "Short, hands-on data courses that run in your browser.",
  },
  sqlbolt: {
    label: "SQLBolt",
    url: "https://sqlbolt.com",
    note: "Interactive SQL lessons you can finish in a weekend.",
  },
  cs50p: {
    label: "CS50's Introduction to Python",
    url: "https://cs50.harvard.edu/python/",
    note: "Harvard's free Python course, taught from zero.",
  },
  khanStats: {
    label: "Khan Academy: Statistics",
    url: "https://www.khanacademy.org/math/statistics-probability",
    note: "Free statistics and probability, explained slowly.",
  },
  deZoomcamp: {
    label: "Data Engineering Zoomcamp",
    url: "https://github.com/DataTalksClub/data-engineering-zoomcamp",
    note: "Free, practical course that ends in a real pipeline.",
  },
  awsSkillBuilder: {
    label: "AWS Skill Builder",
    url: "https://skillbuilder.aws",
    note: "Amazon's own training, with a large free tier.",
  },
  msLearn: {
    label: "Microsoft Learn",
    url: "https://learn.microsoft.com/training/",
    note: "Free paths for Azure, Power BI and Microsoft 365.",
  },
  netacad: {
    label: "Cisco Networking Academy",
    url: "https://www.netacad.com",
    note: "Free networking and cybersecurity foundations.",
  },
  tryHackMe: {
    label: "TryHackMe",
    url: "https://tryhackme.com",
    note: "Guided security labs you practise in the browser.",
  },
  portswigger: {
    label: "PortSwigger Web Security Academy",
    url: "https://portswigger.net/web-security",
    note: "Free labs on how websites get attacked and defended.",
  },
  figma: {
    label: "Figma: Learn design",
    url: "https://www.figma.com/resources/learn-design/",
    note: "Free lessons on design basics from the tool you will use.",
  },
  lawsOfUx: {
    label: "Laws of UX",
    url: "https://lawsofux.com",
    note: "The psychology behind good interfaces, one card at a time.",
  },
  nng: {
    label: "Nielsen Norman Group articles",
    url: "https://www.nngroup.com/articles/",
    note: "Research-backed articles on usability and UX practice.",
  },
  canva: {
    label: "Canva Design School",
    url: "https://www.canva.com/design-school/",
    note: "Free short courses on layout, branding and social graphics.",
  },
  googleFonts: {
    label: "Google Fonts Knowledge",
    url: "https://fonts.google.com/knowledge",
    note: "A free, visual guide to choosing and pairing type.",
  },
  hubspot: {
    label: "HubSpot Academy",
    url: "https://academy.hubspot.com",
    note: "Free marketing, sales and service courses with certificates.",
  },
  skillshop: {
    label: "Google Skillshop",
    url: "https://skillshop.withgoogle.com",
    note: "Free training for Google Ads and Analytics.",
  },
  metaBlueprint: {
    label: "Meta Blueprint",
    url: "https://www.facebook.com/business/learn",
    note: "Free courses on advertising across Facebook and Instagram.",
  },
  youtubeCreators: {
    label: "YouTube Creators",
    url: "https://www.youtube.com/creators/",
    note: "YouTube's own guidance on making and growing a channel.",
  },
  pma: {
    label: "Product Marketing Alliance",
    url: "https://www.productmarketingalliance.com",
    note: "Articles and templates from working product marketers.",
  },
  atlassianAgile: {
    label: "Atlassian Agile Coach",
    url: "https://www.atlassian.com/agile",
    note: "Plain-English guides to roadmaps, user stories and sprints.",
  },
  productSchool: {
    label: "Product School resources",
    url: "https://productschool.com/resources",
    note: "Free templates, talks and short courses on product management.",
  },
  trailhead: {
    label: "Salesforce Trailhead",
    url: "https://trailhead.salesforce.com",
    note: "Salesforce's free, gamified training with a practice org.",
  },
  salesforceAdmins: {
    label: "Salesforce Admins",
    url: "https://admin.salesforce.com",
    note: "Salesforce's own blog, guides and community for administrators.",
  },
  alx: {
    label: "ALX Africa",
    url: "https://www.alxafrica.com",
    note: "Structured, cohort-based programmes for learners across Africa.",
  },
  workspace: {
    label: "Google Workspace Learning Center",
    url: "https://support.google.com/a/users/",
    note: "Free guides to Gmail, Calendar, Docs and Sheets.",
  },
  elementsOfAi: {
    label: "Elements of AI",
    url: "https://www.elementsofai.com",
    note: "A free, no-code introduction to how AI works.",
  },
  learnPrompting: {
    label: "Learn Prompting",
    url: "https://learnprompting.org",
    note: "A free, open guide to writing better prompts.",
  },
  abletonLearning: {
    label: "Ableton: Learning Music",
    url: "https://learningmusic.ableton.com",
    note: "Free interactive lessons on beats, chords and song structure.",
  },
  bandlab: {
    label: "BandLab",
    url: "https://www.bandlab.com",
    note: "A free studio that works in a browser or on a phone.",
  },
  audacity: {
    label: "Audacity",
    url: "https://www.audacityteam.org",
    note: "Free audio editor for recording and cleaning up sound.",
  },
} satisfies Record<string, Resource>;
