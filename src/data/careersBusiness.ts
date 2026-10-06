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
        hours: 25,
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
        hours: 25,
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
        hours: 30,
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
        hours: 30,
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
        hours: 35,
        questions: [
          "How prepared are you to take a product idea from identifying the problem through planning and launch?",
          "How confident are you presenting a product case study and defending your decisions?",
        ],
      },
    ],
    checks: [
      {
        question: "Which is the best goal for a checkout redesign?",
        options: [
          "Ship the new checkout by the end of March",
          "Raise checkout completion from 40% to 55%",
          "Add Apple Pay, saved cards and coupons",
          "Make checkout feel modern and clean",
        ],
        answer: 1,
        why: "A good goal is a measurable change in what users do. Dates and feature lists are outputs, not outcomes.",
      },
      {
        question:
          "Several users ask for an 'Export to Excel' button. What do you do first?",
        options: [
          "Build it, since users asked for it",
          "Add it to the bottom of the backlog",
          "Ask what they do with the export afterwards",
          "Survey every user on whether they want it",
        ],
        answer: 2,
        why: "Requests describe a solution. Learning the job behind it, such as sending a weekly report, often reveals a better fix.",
      },
      {
        question:
          "Feature A helps 5,000 users and takes 4 weeks. Feature B helps 4,000 users about as much and takes 1 week. Which goes first?",
        options: [
          "A, because it reaches more users",
          "A, because bigger features matter more",
          "Whichever the engineers would prefer",
          "B, because it gives far more value per week",
        ],
        answer: 3,
        why: "Weigh value against cost. B delivers about 4,000 users' worth of value per week of effort, while A delivers about 1,250.",
      },
      {
        question:
          "Which is a good acceptance criterion for a 'save my cart' feature?",
        options: [
          "Saved items still appear after logging out and in",
          "The cart feature should be simple and user-friendly",
          "Cart contents are stored in a Redis cache",
          "The whole feature is finished and live by Friday",
        ],
        answer: 0,
        why: "Acceptance criteria are testable statements of behaviour. 'User-friendly' cannot be tested, and storage choices belong to engineers.",
      },
      {
        question:
          "Daily active users rose 20% the week your feature launched, the same week a big ad campaign ran. What can you conclude?",
        options: [
          "The feature caused the rise, since it is new",
          "The campaign caused it, since adverts drive traffic",
          "Nothing yet: compare users with and without it",
          "Each one caused about half of the 20% rise",
        ],
        answer: 2,
        why: "Two changes landed together, so the total cannot be split by guessing. A holdout group or an A/B test isolates the feature's effect.",
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
        hours: 20,
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
        hours: 25,
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
        hours: 25,
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
        hours: 20,
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
        hours: 35,
        questions: [
          "How capable are you of analysing product and marketing performance data?",
          "How prepared are you to plan and evaluate a product launch from research through post-launch?",
        ],
      },
    ],
    checks: [
      {
        question:
          "You keep losing deals to a cheaper competitor. What is the best first move?",
        options: [
          "Learn which customers choose you, and why",
          "Cut your price so it sits below theirs",
          "Add more features than they currently have",
          "Outspend them on adverts for a quarter",
        ],
        answer: 0,
        why: "Win/loss research shows where you are strongest. Price wars and feature races are expensive and easy for a rival to match.",
      },
      {
        question: "Which is the strongest positioning statement?",
        options: [
          "The all-in-one finance platform for every modern business",
          "AI-powered invoicing software with 12 integrations and dark mode",
          "For freelancers tired of chasing clients: invoices paid in two taps",
          "Nigeria's fastest-growing and most trusted fintech app",
        ],
        answer: 2,
        why: "Positioning names a specific customer, their problem and why you are the better choice. Feature lists and broad claims do not.",
      },
      {
        question: "Which of these deserves your biggest launch effort?",
        options: [
          "A redesigned settings page",
          "A new product for a new customer segment",
          "A fix for a bug that affected 2% of users",
          "Faster loading on the dashboard",
        ],
        answer: 1,
        why: "Launch effort scales with market impact. A new product for new buyers needs positioning, sales training and channels; a small improvement needs a changelog note.",
      },
      {
        question:
          "Customers call your app 'the thing that stops me chasing payments'. Your website says 'AI-powered invoicing platform'. What do you do?",
        options: [
          "Keep the site, since 'AI-powered' sounds modern",
          "Put both phrases on every page",
          "Ask the sales team which phrase they prefer",
          "Test a headline written in customers' words",
        ],
        answer: 3,
        why: "Customers' own words match how buyers think about the problem. Test the new headline against the current one to confirm.",
      },
      {
        question: "Which metric best shows whether a feature launch landed?",
        options: [
          "Share of target customers using it after 30 days",
          "Likes and comments on the launch announcement",
          "Number of press articles written about it",
          "Visits to the launch blog post in week one",
        ],
        answer: 0,
        why: "Attention is not adoption. The point of a launch is that the right customers start using the product.",
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
        hours: 15,
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
        hours: 20,
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
        hours: 30,
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
        hours: 25,
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
        hours: 35,
        questions: [
          "How comfortable are you planning a complete digital marketing campaign?",
          "How prepared are you to measure and evaluate the success of a digital marketing campaign?",
        ],
      },
    ],
    checks: [
      {
        question:
          "A clothing brand's adverts get lots of clicks but almost no sales. Where do you look first?",
        options: [
          "Raising the daily budget to get more clicks",
          "Moving the adverts to a different platform",
          "The landing page the advert sends people to",
          "Adding more hashtags to each advert",
        ],
        answer: 2,
        why: "Clicks prove the advert works, so the drop happens after the click. Check that the page loads fast, keeps the advert's promise and makes buying easy.",
      },
      {
        question:
          "A client wants to post daily but can only produce three good posts a week. What do you advise?",
        options: [
          "Post daily, filling gaps with quick filler posts",
          "Post three strong pieces a week on a fixed schedule",
          "Post only when there is a sale or an offer",
          "Batch all three posts together on Monday",
        ],
        answer: 1,
        why: "Consistency and quality beat volume. A schedule you can keep builds a habit with your audience, while filler trains them to scroll past.",
      },
      {
        question:
          "Which change is most likely to help a bakery's page rank for 'birthday cakes in Ikeja'?",
        options: [
          "Boosting the page with Instagram adverts",
          "Repeating 'cake' many times in hidden text",
          "Adding more photos without any descriptions",
          "Naming the service and area in titles and text",
        ],
        answer: 3,
        why: "Search engines rank pages that clearly answer the search. Hidden keyword stuffing gets penalised, and paid adverts do not change organic ranking.",
      },
      {
        question:
          "Adverts cost ₦20,000 and brought in ₦60,000 of sales, a ROAS of 3. Was the campaign profitable?",
        options: [
          "Yes, it made ₦40,000 of profit",
          "Yes, any ROAS above 1 is profit",
          "Not necessarily: it depends on costs",
          "No, a ROAS below 5 always loses",
        ],
        answer: 2,
        why: "ROAS uses revenue, not profit. If the goods cost ₦45,000 to make, the campaign lost ₦5,000.",
      },
      {
        question:
          "You run the same offer on Instagram, WhatsApp and email. How do you know which channel brought each sale?",
        options: [
          "Ask a few customers where they heard",
          "Use a separate UTM-tagged link per channel",
          "Compare follower counts on each channel",
          "Post on each channel on a different day",
        ],
        answer: 1,
        why: "UTM tags label each link, so analytics can credit visits and sales to the right channel. Asking customers helps but is unreliable at scale.",
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
        hours: 15,
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
        hours: 15,
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
        hours: 10,
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
        hours: 15,
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
        hours: 20,
        questions: [
          "How prepared are you to independently handle administrative tasks for a client?",
          "How confident are you finding and pitching your first client?",
        ],
      },
    ],
    checks: [
      {
        question:
          "A client wants a partner to suggest changes to a Google Doc without changing the text directly. Which access do you give?",
        options: ["Viewer", "Commenter", "Editor", "Owner"],
        answer: 1,
        why: "Commenters can leave comments and suggestions that the owner accepts or rejects. Editors change the text directly.",
      },
      {
        question:
          "You realise at 11am that you will miss a 3pm deadline your client set. When do you tell them?",
        options: [
          "At 3pm, when the work is due",
          "Only if they ask about it",
          "Now, with a realistic new time",
          "After you finish, with an apology",
        ],
        answer: 2,
        why: "Early warning lets the client adjust their plans. A late surprise costs more trust than the delay itself.",
      },
      {
        question:
          "Your client in New York wants a call at 10am their time in January. What time is that in Lagos?",
        options: ["3pm", "5pm", "4am", "4pm"],
        answer: 3,
        why: "In January New York is UTC−5 and Lagos is UTC+1, six hours apart. Daylight saving shrinks the gap to five hours from March, which is why a calendar showing both zones helps.",
      },
      {
        question:
          "Someone calls saying they are from your client's bank and asks you to confirm the client's account number. What do you do?",
        options: [
          "Confirm only the last four digits",
          "Give it, since the bank already has it",
          "Ask them to email the request first",
          "Decline, end the call and alert the client",
        ],
        answer: 3,
        why: "Banks never need you to read back details they already hold, and emails can be faked too. Let the client call the bank on the number they trust.",
      },
      {
        question:
          "Your client has two meetings booked for the same time tomorrow. What do you do?",
        options: [
          "Cancel the one that seems less important",
          "Flag the clash with options and a suggested fix",
          "Leave both and let them choose on the day",
          "Move one to the next free slot without asking",
        ],
        answer: 1,
        why: "A good assistant spots problems early and arrives with a solution, but the decision stays with the client.",
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
        hours: 10,
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
        hours: 20,
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
        hours: 25,
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
        hours: 35,
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
        hours: 35,
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
          "Someone fills in a form on the website and has not been qualified yet. Which Salesforce record should that create?",
        options: ["Lead", "Opportunity", "Account", "Case"],
        answer: 0,
        why: "A lead is an unqualified prospect. Once qualified, it is converted into an account, a contact and often an opportunity.",
      },
      {
        question:
          "One sales rep needs permission to export reports, but others on the same profile should not get it. What is the best way?",
        options: [
          "Create a new profile just for them",
          "Give them the System Administrator profile",
          "Assign them a permission set with it",
          "Add the permission to their current profile",
        ],
        answer: 2,
        why: "Permission sets add access for individual users without changing everyone on the profile.",
      },
      {
        question:
          "You are importing 5,000 contacts and many already exist in Salesforce. How do you avoid duplicates?",
        options: [
          "Import everything, then merge duplicates by hand",
          "Turn off validation rules during the import",
          "Import them into a new custom object instead",
          "Match on email so existing records are updated",
        ],
        answer: 3,
        why: "Matching finds existing records, so the import updates them instead of creating copies. Cleaning up afterwards takes far longer.",
      },
      {
        question:
          "Whenever a deal is marked 'Closed Won', finance should get an email automatically. What do you build?",
        options: [
          "A record-triggered Flow",
          "A Process Builder process",
          "A Workflow Rule",
          "A Data Loader job",
        ],
        answer: 0,
        why: "Flow is Salesforce's automation tool. Workflow Rules and Process Builder are retired, and Data Loader only imports and exports records.",
      },
      {
        question:
          "Reps keep marking deals 'Closed Won' with no amount. How do you stop it?",
        options: [
          "Send a weekly report of deals missing an amount",
          "Make Amount required on every page layout",
          "A validation rule: no Closed Won without an amount",
          "Ask managers to remind reps in team meetings",
        ],
        answer: 2,
        why: "A validation rule blocks the save only in that situation. A required field on the layout would also block early-stage deals, and reports only catch the problem afterwards.",
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
        hours: 5,
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
        hours: 10,
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
        hours: 10,
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
        hours: 5,
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
        hours: 15,
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
          "Why can the same question to an AI chatbot get a different answer each time?",
        options: [
          "It picks each word with some randomness",
          "It searches a different website each time",
          "Staff at the company edit the answers",
          "It learns from your questions instantly",
        ],
        answer: 0,
        why: "Language models predict likely next words and sample among them, so wording varies. That is also why they can sound confident and still be wrong.",
      },
      {
        question:
          "You ask a chatbot with no web search for today's naira-to-dollar rate. Why might its answer be wrong?",
        options: [
          "Chatbots are not able to do maths",
          "Its knowledge stops at a training cut-off",
          "Exchange rates are kept secret",
          "It needs a paid plan to give numbers",
        ],
        answer: 1,
        why: "Without live search, a model only knows what was in its training data. For prices, rates and news, use a tool that searches, and check the source.",
      },
      {
        question:
          "An AI draft of your cover letter comes out generic. What is the most effective next step?",
        options: [
          "Ask the same question again in a new chat",
          "Type the request again in capital letters",
          "Accept it and rewrite every line yourself",
          "Add the job advert, your experience and a tone",
        ],
        answer: 3,
        why: "Generic input gets generic output. Context, examples and constraints give the model something specific to work with.",
      },
      {
        question:
          "An AI tool gives you a confident statistic with a named source. What do you do before using it in a report?",
        options: [
          "Use it, since the source is named",
          "Ask the same tool whether it is sure",
          "Find the source and check it says that",
          "Round the number down to be safe",
        ],
        answer: 2,
        why: "AI tools can invent facts and sources that sound real. Verification is your job, not the tool's.",
      },
      {
        question: "Which of these is safe to paste into a free public chatbot?",
        options: [
          "A complaint email with the customer's phone number",
          "A published news article you want summarised",
          "Your company's unreleased price list",
          "A screenshot of a client's bank transfer",
        ],
        answer: 1,
        why: "Public information is fine. Personal data, financial records and company secrets need an approved tool, or must be removed first.",
      },
    ],
    resources: [resources.elementsOfAi, resources.learnPrompting, resources.alx],
  },
];
