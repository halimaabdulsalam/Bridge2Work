import { resources } from "./resources";
import type { Career } from "./types";

export const businessCareers: Career[] = [
  {
    id: "product-manager",
    title: "Product Manager",
    category: "product",
    icon: "compass",
    summary:
      "Guide digital products from idea to launch while working with different teams.",
    dayToDay: [
      "Decide what the team builds next, and explain why",
      "Talk to users, read the data and turn both into clear requirements",
      "Keep design, engineering and the business moving in one direction",
    ],
    skills: [
      "Product strategy",
      "Research",
      "Communication",
      "Problem solving",
    ],
    tools: ["Jira or Trello", "Notion", "Figma, to read designs", "Google Analytics or Mixpanel"],
    coding: 0,
    startOn: "laptop",
    firstWin: "A written case study improving a product you use every day",
    traits: { people: 3, order: 2, logic: 2, words: 2 },
    stages: [
      {
        name: "Product fundamentals",
        step: "Learn product management fundamentals",
        detail:
          "Learn to state a user problem, a goal and a measure of success in one paragraph.",
        hours: 40,
        questions: [
          "How well can you identify and clearly define a user's problem?",
          "How comfortable are you defining product goals?",
          "How well can you balance customer needs with business objectives?",
        ],
      },
      {
        name: "User research",
        step: "Practise user research",
        detail:
          "Interview five users of a real product and summarise their three biggest frustrations.",
        hours: 40,
        questions: [
          "How familiar are you with conducting user or market research?",
          "How effectively can you gather and interpret user feedback?",
        ],
      },
      {
        name: "Strategy and prioritisation",
        step: "Learn product strategy",
        detail:
          "Build a simple roadmap and defend the order of everything on it.",
        hours: 50,
        questions: [
          "How well can you create or contribute to a product roadmap?",
          "How capable are you of prioritising features based on user and business value?",
          "How familiar are you with product KPIs and metrics?",
          "How well can you use data to evaluate product performance?",
          "How capable are you of identifying potential product risks?",
        ],
      },
      {
        name: "Requirements and delivery",
        step: "Practise writing product requirements",
        detail:
          "Write a one-page spec and user stories that a designer and a developer can both act on.",
        hours: 50,
        questions: [
          "How effectively can you gather and prioritise product requirements?",
          "How familiar are you with writing user stories or product requirements?",
          "How comfortably can you collaborate with designers and developers?",
          "How effectively can you communicate product decisions to stakeholders?",
        ],
      },
      {
        name: "End-to-end practice",
        step: "Work on product case studies",
        detail:
          "Write two case studies that go from problem to launch plan, and present one out loud.",
        hours: 60,
        questions: [
          "How prepared are you to take a product idea from identifying the problem through planning and launch?",
          "How confident are you presenting a product case study and defending your decisions?",
        ],
      },
    ],
    checks: [
      {
        question:
          "The team has time for one feature this month. Which one do you build?",
        options: [
          "The one the CEO mentioned most recently",
          "The one with the best balance of user value and effort, backed by evidence",
          "The one that is most fun for the team",
          "The one a competitor just launched",
        ],
        answer: 1,
        why: "Prioritisation weighs value against cost using evidence, not the loudest or latest opinion.",
      },
      {
        question: "Which of these is a well-formed user story?",
        options: [
          "Add a blue button to the home page",
          "The database needs a new index",
          "As a shopper, I want to save my cart so that I can finish buying later",
          "Make the app better",
        ],
        answer: 2,
        why: "A user story names who wants something, what they want and why. It leaves the solution to the team.",
      },
      {
        question:
          "You launched a feature last month. What is the best way to know whether it worked?",
        options: [
          "Compare the metric you set as the goal, before and after launch",
          "Count how many people on the team like it",
          "Check that it has no bugs",
          "Ask the designer",
        ],
        answer: 0,
        why: "Success is defined before launch as a measurable outcome. Shipping without bugs is not the same as working.",
      },
    ],
    resources: [
      resources.productSchool,
      resources.atlassianAgile,
      resources.roadmapSh,
    ],
  },

  {
    id: "product-marketer",
    title: "Product Marketer",
    category: "product",
    icon: "target",
    summary:
      "Communicate the value of products and help them reach the right audience.",
    dayToDay: [
      "Work out who a product is for and what makes it worth choosing",
      "Write the messaging that sales, the website and adverts all reuse",
      "Plan launches and measure whether they landed",
    ],
    skills: [
      "Market research",
      "Product positioning",
      "Marketing strategy",
      "Communication",
    ],
    tools: ["Google Forms or Typeform", "Notion", "Canva", "Google Analytics", "HubSpot"],
    coding: 0,
    startOn: "laptop",
    firstWin: "A positioning and launch plan for a real Nigerian product",
    traits: { words: 3, people: 2, logic: 2, order: 1 },
    stages: [
      {
        name: "Market research",
        step: "Learn market research",
        detail:
          "Map one market: who the customers are, who the competitors are and how each one sells.",
        hours: 35,
        questions: [
          "How well do you understand the role of product marketing?",
          "How familiar are you with conducting market research?",
          "How comfortably can you analyse competitors?",
        ],
      },
      {
        name: "Positioning and messaging",
        step: "Understand product positioning",
        detail:
          "Write a positioning statement and three key messages for a product you know well.",
        hours: 40,
        questions: [
          "How well can you identify a product's unique value proposition?",
          "How effectively can you develop product positioning and messaging?",
          "How well can you communicate the benefits of a product to potential customers?",
        ],
      },
      {
        name: "Go-to-market",
        step: "Learn marketing strategy",
        detail:
          "Plan a launch: the audience, the channels, the materials and the timeline.",
        hours: 45,
        questions: [
          "How familiar are you with developing a go-to-market strategy?",
          "How comfortable are you planning a product launch campaign?",
          "How comfortable are you creating marketing materials for a product?",
          "How effectively can you collaborate with product, sales and marketing teams?",
        ],
      },
      {
        name: "Customer insight",
        step: "Practise customer research",
        detail:
          "Interview five customers and rewrite your messaging in the words they actually use.",
        hours: 35,
        questions: [
          "How effectively can you identify a product's target audience?",
          "How capable are you of creating customer personas?",
          "How well can you use customer feedback to improve product messaging?",
        ],
      },
      {
        name: "Launch and measure",
        step: "Create product marketing case studies",
        detail:
          "Write up one launch from research to results, including what you would change.",
        hours: 55,
        questions: [
          "How capable are you of analysing product and marketing performance data?",
          "How prepared are you to plan and evaluate a product launch from research through post-launch?",
        ],
      },
    ],
    checks: [
      {
        question: "Which of these is positioning, not a feature list?",
        options: [
          "Has 12 integrations and dark mode",
          "For freelancers who hate paperwork, the invoicing app that gets you paid in two taps",
          "Version 3.2 is now available",
          "Built with modern technology",
        ],
        answer: 1,
        why: "Positioning says who it is for, what it is and why it is the better choice for them.",
      },
      {
        question: "Before writing launch messaging, what do you need to learn first?",
        options: [
          "Who the customer is and what problem they are trying to solve",
          "Which font the brand uses",
          "How many slides the deck needs",
          "What time to post",
        ],
        answer: 0,
        why: "Messaging only works when it starts from the customer's problem in the customer's own words.",
      },
      {
        question: "Which of these is a benefit, not a feature?",
        options: [
          "256GB of storage",
          "A 5,000mAh battery",
          "Never run out of space for your photos",
          "An aluminium frame",
        ],
        answer: 2,
        why: "A feature is what the product has. A benefit is what the customer gets out of it.",
      },
    ],
    resources: [resources.hubspot, resources.pma, resources.skillshop],
  },

  {
    id: "digital-marketer",
    title: "Digital Marketer",
    category: "product",
    icon: "megaphone",
    summary: "Use digital channels to reach and engage customers.",
    dayToDay: [
      "Plan and schedule content across social media and email",
      "Run paid adverts and watch what each naira brings back",
      "Report what worked and adjust the next campaign",
    ],
    skills: ["Social media", "SEO", "Content marketing", "Analytics"],
    tools: ["Meta Business Suite", "Google Analytics", "Canva", "Mailchimp", "Google Ads"],
    coding: 0,
    startOn: "phone",
    firstWin: "A month of managed social media and one small paid campaign for a local business",
    traits: { words: 3, logic: 2, people: 2, visual: 1 },
    stages: [
      {
        name: "Marketing fundamentals",
        step: "Learn digital marketing fundamentals",
        detail:
          "Learn the funnel, how to define an audience and how to write copy that gets a click.",
        hours: 30,
        questions: [
          "How well do you understand the fundamentals of digital marketing?",
          "How well can you identify and define a target audience?",
          "How well can you write persuasive marketing copy?",
        ],
      },
      {
        name: "Social media",
        step: "Learn social media marketing",
        detail:
          "Plan and publish a month of content for one brand from a single content calendar.",
        hours: 40,
        questions: [
          "How familiar are you with creating content for social media?",
          "How effectively can you develop a social-media strategy?",
          "How comfortable are you using Canva or similar tools to create marketing content?",
          "How effectively can you create and manage a content calendar?",
        ],
      },
      {
        name: "SEO, email and ads",
        step: "Learn SEO and content marketing",
        detail:
          "Optimise one page for search, send one email campaign and run one small paid advert.",
        hours: 50,
        questions: [
          "How familiar are you with SEO?",
          "How capable are you of creating an email marketing campaign?",
          "How comfortable are you using platforms such as Meta Ads or Google Ads?",
        ],
      },
      {
        name: "Analytics",
        step: "Learn marketing analytics",
        detail:
          "Read reach, clicks, conversions and cost, and say in one sentence what they mean.",
        hours: 40,
        questions: [
          "How well can you interpret social-media and campaign performance data?",
          "How familiar are you with tools such as Google Analytics?",
          "How capable are you of using data to improve a marketing campaign?",
        ],
      },
      {
        name: "Running campaigns",
        step: "Create practical marketing campaigns",
        detail:
          "Run one complete campaign for a real business and report what it achieved.",
        hours: 50,
        questions: [
          "How comfortable are you planning a complete digital marketing campaign?",
          "How prepared are you to measure and evaluate the success of a digital marketing campaign?",
        ],
      },
    ],
    checks: [
      {
        question:
          "You spent ₦20,000 on adverts and they brought in ₦60,000 of sales. What does that tell you?",
        options: [
          "The adverts returned ₦3 in sales for every ₦1 spent",
          "The campaign lost money",
          "Nothing, because sales are not a marketing number",
          "You need more hashtags",
        ],
        answer: 0,
        why: "Return on ad spend is revenue divided by cost: 60,000 ÷ 20,000 = 3.",
      },
      {
        question: "What is SEO mainly about?",
        options: [
          "Paying for adverts on Instagram",
          "Helping your pages show up in unpaid search results",
          "Sending bulk SMS",
          "Designing logos",
        ],
        answer: 1,
        why: "Search engine optimisation earns visits from search without paying for each click.",
      },
      {
        question:
          "1,000 people saw your advert and 30 clicked it. What is the click-through rate?",
        options: ["0.3%", "30%", "3%", "300%"],
        answer: 2,
        why: "Clicks divided by views: 30 ÷ 1,000 = 3%.",
      },
    ],
    resources: [resources.skillshop, resources.hubspot, resources.metaBlueprint],
  },

  {
    id: "virtual-assistant",
    title: "Virtual Assistant",
    category: "operations",
    icon: "headset",
    summary:
      "Provide remote administrative, technical, or creative support to individuals and businesses.",
    dayToDay: [
      "Run a busy person's inbox and calendar so nothing is missed",
      "Book travel, prepare documents and follow up with clients",
      "Keep files, tasks and deadlines organised across several tools",
    ],
    skills: [
      "Communication",
      "Organisation",
      "Customer service",
      "Digital tools",
    ],
    tools: ["Google Workspace", "Microsoft 365", "Calendly", "Trello or Asana", "Zoom and Slack"],
    coding: 0,
    startOn: "laptop",
    firstWin: "Managing the inbox and calendar of one busy professional",
    traits: { order: 3, people: 2, words: 2, logic: 1 },
    stages: [
      {
        name: "Digital tools",
        step: "Learn digital productivity tools",
        detail:
          "Get quick with documents, spreadsheets and a task board, and practise picking up a new tool in a day.",
        hours: 30,
        questions: [
          "How comfortable are you using tools such as Google Workspace or Microsoft Office?",
          "How would you rate your ability to create professional documents?",
          "How well can you use spreadsheets to record and organise information?",
          "How familiar are you with task-management tools such as Trello, Asana or similar platforms?",
          "How easily can you learn a new digital tool when a client requires you to use it?",
        ],
      },
      {
        name: "Communication and organisation",
        step: "Build communication and organisation skills",
        detail:
          "Write clear, short updates and run your own week from a single task list.",
        hours: 25,
        questions: [
          "How comfortable are you communicating professionally with clients or team members?",
          "How effectively can you manage several tasks while meeting deadlines?",
          "How well can you prioritise tasks when several requests come in at the same time?",
          "How easily can you organise and retrieve files in a digital workspace?",
        ],
      },
      {
        name: "Inbox and calendar",
        step: "Practise email and calendar management",
        detail:
          "Set up labels, filters and scheduling rules, then manage a practice inbox for a week.",
        hours: 20,
        questions: [
          "How familiar are you with managing professional emails and inboxes?",
          "How well can you organise and manage a digital calendar?",
        ],
      },
      {
        name: "Client support",
        step: "Learn basic customer support",
        detail:
          "Practise answering routine enquiries, researching answers and handling private information properly.",
        hours: 25,
        questions: [
          "How well can you conduct online research and identify reliable information?",
          "How well do you understand the importance of protecting confidential client information?",
          "How effectively can you respond to routine client enquiries?",
        ],
      },
      {
        name: "Working independently",
        step: "Create sample work for your portfolio",
        detail:
          "Prepare samples: a managed calendar, a travel plan, a research brief. Then pitch one real client.",
        hours: 30,
        questions: [
          "How prepared are you to independently handle administrative tasks for a client?",
          "How confident are you finding and pitching your first client?",
        ],
      },
    ],
    checks: [
      {
        question:
          "Your client has two meetings booked for the same time tomorrow. What do you do?",
        options: [
          "Pick the one you think matters more and cancel the other",
          "Flag the clash to the client with options and a suggested fix",
          "Wait and see which one they attend",
          "Delete both",
        ],
        answer: 1,
        why: "A good assistant spots problems early and arrives with a solution, but the decision stays with the client.",
      },
      {
        question:
          "A stranger emails asking for your client's phone number and home address 'for a delivery'. What do you do?",
        options: [
          "Send it, because they sound polite",
          "Send only the address",
          "Check with your client before sharing anything",
          "Post the question in the team group chat",
        ],
        answer: 2,
        why: "Client information is confidential by default. Verify before you share.",
      },
      {
        question:
          "Three tasks arrive together: a proposal due in one hour, filing receipts, and booking a flight for next month. Which goes first?",
        options: [
          "The proposal, because it is both urgent and important",
          "Filing, because it is quick",
          "The flight, because it costs the most",
          "Whichever arrived first",
        ],
        answer: 0,
        why: "Prioritise by urgency and importance together, not by what is easiest or what arrived first.",
      },
    ],
    resources: [resources.alx, resources.workspace, resources.hubspot],
  },

  {
    id: "salesforce-administrator",
    title: "Salesforce Administrator",
    category: "operations",
    icon: "flow",
    summary: "Manage Salesforce users, data, workflows, and reports.",
    dayToDay: [
      "Set up users and decide who can see and change what",
      "Keep customer data clean, complete and free of duplicates",
      "Build reports and automations so the sales team wastes less time",
    ],
    skills: [
      "CRM management",
      "Salesforce",
      "Data management",
      "Reports and dashboards",
    ],
    tools: ["Salesforce", "Trailhead", "Data Loader", "Excel or Google Sheets"],
    coding: 0,
    startOn: "laptop",
    firstWin: "A free Salesforce practice org set up for a made-up business, with working reports",
    traits: { order: 3, logic: 2, people: 2, build: 1 },
    stages: [
      {
        name: "CRM fundamentals",
        step: "Learn CRM fundamentals",
        detail:
          "Understand leads, accounts, contacts and opportunities, and how a sale moves between them.",
        hours: 20,
        questions: [
          "How familiar are you with customer relationship management systems?",
          "How well do you understand how CRM systems store customer information?",
        ],
      },
      {
        name: "Navigating Salesforce",
        step: "Learn Salesforce navigation",
        detail:
          "Create users, profiles and permission sets in a free practice org.",
        hours: 40,
        questions: [
          "How comfortable are you navigating Salesforce or similar platforms?",
          "How familiar are you with creating and managing users?",
          "How well do you understand user permissions and access controls?",
        ],
      },
      {
        name: "Data management",
        step: "Practise data management",
        detail:
          "Import a messy customer list, remove the duplicates and set rules that keep it clean.",
        hours: 40,
        questions: [
          "How comfortable are you managing customer and account records?",
          "How well can you organise and maintain CRM data?",
          "How capable are you of identifying duplicate or inaccurate CRM data?",
        ],
      },
      {
        name: "Reports and automation",
        step: "Learn workflows and automation",
        detail:
          "Build a dashboard a sales manager would use, and one automation that saves them a daily task.",
        hours: 60,
        questions: [
          "How familiar are you with Salesforce reports and dashboards?",
          "How comfortable are you creating basic reports?",
          "How familiar are you with Salesforce workflows and automation?",
          "How familiar are you with customising Salesforce fields and objects?",
        ],
      },
      {
        name: "Admin in practice",
        step: "Build Salesforce administration projects",
        detail:
          "Run your practice org like a real one: handle requests, fix issues and document what you changed.",
        hours: 60,
        questions: [
          "How comfortable are you troubleshooting basic Salesforce issues?",
          "How effectively can you support users who have questions about Salesforce?",
          "How prepared are you to manage the basic administration of a Salesforce environment?",
        ],
      },
    ],
    checks: [
      {
        question:
          "A sales rep should see their own deals but must not change company-wide settings. What do you configure?",
        options: [
          "A new dashboard",
          "Their profile and permissions",
          "An email template",
          "A report folder",
        ],
        answer: 1,
        why: "Profiles and permission sets control what each user can see and do.",
      },
      {
        question:
          "Whenever a deal is marked 'Closed Won', finance should get an email automatically. Which tool does this?",
        options: [
          "Flow, Salesforce's automation builder",
          "Data Loader",
          "Chatter",
          "A list view",
        ],
        answer: 0,
        why: "Flow runs actions when records change. Data Loader is for importing and exporting records in bulk.",
      },
      {
        question:
          "Your CRM has the same customer entered four times with different spellings. Why does that matter?",
        options: [
          "It does not matter, and more records look impressive",
          "It makes the system run faster",
          "It only changes how the page looks",
          "Reports become wrong and the customer gets contacted more than once",
        ],
        answer: 3,
        why: "Duplicates distort every count and total, and they lead to embarrassing repeat contact.",
      },
    ],
    resources: [resources.trailhead, resources.salesforceAdmins],
  },

  {
    id: "ai-career-essentials",
    title: "AI Career Essentials Professional",
    category: "operations",
    icon: "sparkle",
    summary:
      "Build foundational AI knowledge and learn how to use AI tools across different careers.",
    dayToDay: [
      "Use AI tools to research, draft and summarise faster",
      "Check AI output for mistakes before anyone relies on it",
      "Show colleagues where AI helps and where it should not be trusted",
    ],
    skills: ["AI tools", "Prompt writing", "AI literacy", "Responsible AI use"],
    tools: ["ChatGPT, Claude or Gemini", "Microsoft Copilot", "NotebookLM", "Canva's AI tools"],
    coding: 0,
    startOn: "phone",
    firstWin: "One task from your current work or studies done faster with AI, and written up",
    traits: { words: 2, logic: 2, order: 1, build: 1, people: 1 },
    stages: [
      {
        name: "AI fundamentals",
        step: "Learn AI fundamentals",
        detail:
          "Understand what today's AI tools are, how they produce answers and why they can be wrong.",
        hours: 15,
        questions: [
          "How familiar are you with basic artificial intelligence concepts?",
          "How familiar are you with generative AI?",
        ],
      },
      {
        name: "Using AI tools",
        step: "Learn how to use AI tools",
        detail:
          "Use an AI assistant daily for a fortnight: research, drafting, summarising and analysis.",
        hours: 25,
        questions: [
          "How comfortable are you using AI tools for everyday tasks?",
          "How comfortable are you using AI to research information?",
          "How comfortable are you using AI to improve productivity?",
          "How well can you use AI tools to generate or improve written content?",
          "How familiar are you with using AI for data or information analysis?",
        ],
      },
      {
        name: "Prompt writing",
        step: "Practise prompt writing",
        detail:
          "Learn to give context, examples and constraints, and to improve a weak answer in two tries.",
        hours: 20,
        questions: [
          "How well can you write clear prompts for AI tools?",
          "How well can you improve a weak AI answer by refining your prompt or adding context?",
        ],
      },
      {
        name: "Responsible use",
        step: "Understand responsible AI use",
        detail:
          "Learn to fact-check output, protect private data and say plainly when you used AI.",
        hours: 15,
        questions: [
          "How well can you evaluate whether AI-generated information is reliable?",
          "How familiar are you with responsible and ethical AI use?",
          "How well can you identify situations where AI should not be relied upon?",
          "How effectively can you explain how an AI tool was used to complete a task?",
        ],
      },
      {
        name: "AI in your work",
        step: "Build practical AI-assisted projects",
        detail:
          "Redo three real tasks with AI and record the time saved and the mistakes you caught.",
        hours: 35,
        questions: [
          "How comfortable are you combining AI tools with your existing digital skills?",
          "How capable are you of learning and adapting to new AI tools?",
          "How prepared are you to use AI tools responsibly in a professional environment?",
        ],
      },
    ],
    checks: [
      {
        question:
          "An AI tool gives you a confident answer with a statistic and a source. What do you do before putting it in a report?",
        options: [
          "Use it, because AI tools do not make mistakes",
          "Check that the source exists and really says that",
          "Make the number slightly smaller to be safe",
          "Ask the same tool whether it is sure, then use it",
        ],
        answer: 1,
        why: "AI tools can invent facts and sources that sound real. Verification is your job, not the tool's.",
      },
      {
        question: "Which prompt is most likely to get a useful result?",
        options: [
          "Write something about marketing",
          "Marketing???",
          "Write a 100-word Instagram caption for a Lagos bakery launching a new meat pie, in a friendly tone, with one call to action",
          "Do my work",
        ],
        answer: 2,
        why: "Specific prompts with an audience, a format, a length and a goal produce specific answers.",
      },
      {
        question:
          "Which of these should you never paste into a public AI chatbot?",
        options: [
          "A customer's BVN and bank account details",
          "A public news article",
          "Your own draft tweet",
          "A recipe",
        ],
        answer: 0,
        why: "Personal and financial data must not be shared with tools your organisation has not approved for it.",
      },
    ],
    resources: [resources.elementsOfAi, resources.learnPrompting, resources.alx],
  },
];
