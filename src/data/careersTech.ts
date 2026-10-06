import { resources } from "./resources";
import type { Career } from "./types";

export const techCareers: Career[] = [
  {
    id: "frontend-developer",
    title: "Frontend Developer",
    category: "software",
    icon: "code",
    summary:
      "Build the visual and interactive parts of websites and applications.",
    dayToDay: [
      "Turn designs into pages people can tap, scroll and use",
      "Fix the bug that only shows up on one phone or one browser",
      "Work with designers and backend developers to ship features",
    ],
    skills: ["HTML", "CSS", "JavaScript", "React", "TypeScript"],
    tools: ["VS Code", "Git and GitHub", "Chrome DevTools", "React", "Vercel"],
    coding: 2,
    startOn: "laptop",
    firstWin: "A landing page for a real local business, live on the internet",
    traits: { build: 3, visual: 2, logic: 1 },
    stages: [
      {
        name: "HTML and CSS",
        step: "Learn HTML and CSS",
        detail:
          "Build three pages from scratch that look right on a phone and on a laptop.",
        hours: 60,
        questions: [
          "How familiar are you with HTML?",
          "How comfortable are you writing CSS?",
          "How well can you create responsive web pages?",
          "How familiar are you with accessibility principles for websites?",
        ],
      },
      {
        name: "JavaScript",
        step: "Learn JavaScript",
        detail:
          "Make pages interactive: handle clicks and forms, and load data from an API.",
        hours: 90,
        questions: [
          "How familiar are you with JavaScript?",
          "How well can you work with APIs?",
          "How well can you debug frontend code?",
          "How familiar are you with browser developer tools?",
        ],
      },
      {
        name: "React",
        step: "Learn React",
        detail:
          "Rebuild one of your pages as reusable components that manage their own state.",
        hours: 70,
        questions: [
          "How familiar are you with React or another frontend framework?",
          "How comfortable are you creating reusable components?",
          "How well can you manage application state?",
        ],
      },
      {
        name: "TypeScript",
        step: "Learn TypeScript",
        detail:
          "Add types to a React project until your editor catches mistakes before you run it.",
        hours: 30,
        questions: [
          "How comfortable are you using TypeScript?",
          "How well can you read a type error and fix what caused it?",
        ],
      },
      {
        name: "Shipping projects",
        step: "Build and deploy frontend projects",
        detail:
          "Put two finished projects online, each with a public link and a clear README.",
        hours: 60,
        questions: [
          "How comfortable are you using Git and GitHub?",
          "How effectively can you turn a design into a working webpage?",
          "How prepared are you to build and deploy a complete frontend project?",
        ],
      },
    ],
    checks: [
      {
        question:
          "A page looks fine on your laptop but the text spills off the screen on a phone. What do you reach for first?",
        options: [
          "A faster web host",
          "Flexible layout and a CSS media query",
          "A bigger font file",
          "A JavaScript timer",
        ],
        answer: 1,
        why: "This is a layout problem. Flexible units and media queries let one page adapt to any screen.",
      },
      {
        question:
          "In React, a value changes and the screen needs to update. What is the right way to do it?",
        options: [
          "Keep it in state and change it with the setter",
          "Edit the HTML in the browser inspector",
          "Reload the page with JavaScript",
          "Change the variable directly",
        ],
        answer: 0,
        why: "React re-renders when state changes through its setter. Changing a plain variable tells React nothing.",
      },
      {
        question: "What does the command git commit do?",
        options: [
          "Uploads your site to the internet",
          "Installs your project's packages",
          "Deletes old versions of your files",
          "Saves a snapshot of your staged changes in the project history",
        ],
        answer: 3,
        why: "A commit records a snapshot locally. Pushing and deploying are separate steps.",
      },
    ],
    resources: [resources.freeCodeCamp, resources.odin, resources.mdn],
  },

  {
    id: "backend-developer",
    title: "Backend Developer",
    category: "software",
    icon: "server",
    summary:
      "Build server-side systems, APIs, databases, and application logic.",
    dayToDay: [
      "Write the logic behind an app: accounts, payments, notifications",
      "Design databases and keep the data in them correct",
      "Build and document the APIs that web and mobile teams rely on",
    ],
    skills: ["Programming", "APIs", "Databases", "Server-side development"],
    tools: [
      "Node.js, Python or PHP",
      "PostgreSQL or MySQL",
      "Postman",
      "Git and GitHub",
    ],
    coding: 2,
    startOn: "laptop",
    firstWin: "A working API for a small shop or to-do app, deployed online",
    traits: { build: 3, logic: 3, order: 1 },
    stages: [
      {
        name: "A backend language",
        step: "Learn a backend programming language",
        detail:
          "Pick one language and write small programs until loops, functions and errors feel normal.",
        hours: 90,
        questions: [
          "How familiar are you with server-side programming?",
          "How comfortable are you working with a programming language such as Node.js, Python or Java?",
          "How comfortable are you debugging backend code?",
        ],
      },
      {
        name: "APIs and HTTP",
        step: "Learn APIs",
        detail: "Build a small API with a few routes and test every one of them.",
        hours: 60,
        questions: [
          "How familiar are you with building APIs?",
          "How well do you understand HTTP requests and responses?",
          "How well can you validate and handle user input?",
        ],
      },
      {
        name: "Databases",
        step: "Understand databases",
        detail: "Design the tables for a simple app and query them with SQL.",
        hours: 60,
        questions: [
          "How well do you understand databases?",
          "How comfortable are you writing SQL queries?",
          "How capable are you of designing basic database structures?",
        ],
      },
      {
        name: "Auth and security",
        step: "Learn server-side development",
        detail:
          "Add sign-up, login and permissions to your API, and protect it from bad input.",
        hours: 60,
        questions: [
          "How comfortable are you working with authentication and authorization?",
          "How well do you understand basic web security?",
          "How comfortable are you connecting a backend to a frontend application?",
        ],
      },
      {
        name: "Shipping projects",
        step: "Build backend projects",
        detail:
          "Deploy one complete API with a database, and write down how someone else can run it.",
        hours: 70,
        questions: [
          "How familiar are you with Git and GitHub?",
          "How familiar are you with deploying backend applications?",
          "How prepared are you to build and deploy a basic backend application?",
        ],
      },
    ],
    checks: [
      {
        question:
          "An app sends a request to create a new user. Which HTTP method fits best?",
        options: ["GET", "POST", "DELETE", "OPTIONS"],
        answer: 1,
        why: "POST creates a resource. GET should only ever read data.",
      },
      {
        question: "How should a user's password be stored?",
        options: [
          "In plain text, so support can look it up",
          "In the page URL, so it is easy to pass around",
          "Hashed with a slow algorithm such as bcrypt or Argon2",
          "Encoded in Base64",
        ],
        answer: 2,
        why: "Passwords are hashed, never stored in a readable form. Base64 is encoding, not protection.",
      },
      {
        question:
          "You have a users table and an orders table. How does an order point at the user who made it?",
        options: [
          "With a foreign key that holds the user's id",
          "By copying the user's full details into every order",
          "By storing both tables in one text column",
          "By keeping the rows in the same order",
        ],
        answer: 0,
        why: "A foreign key links the two rows without duplicating data that could go out of date.",
      },
    ],
    resources: [resources.odin, resources.freeCodeCamp, resources.roadmapSh],
  },

  {
    id: "cloud-engineer",
    title: "Cloud Engineer",
    category: "software",
    icon: "cloud",
    summary: "Build and manage reliable infrastructure using cloud platforms.",
    dayToDay: [
      "Set up the servers, storage and networks that apps run on",
      "Automate deployments so releases are safe and boring",
      "Keep an eye on cost, uptime and security",
    ],
    skills: ["Cloud platforms", "Networking", "Linux", "Cloud infrastructure"],
    tools: [
      "AWS, Azure or Google Cloud",
      "Linux",
      "Docker",
      "Terraform",
      "GitHub Actions",
    ],
    coding: 1,
    startOn: "laptop",
    firstWin: "A small website running on a cloud free tier that you set up yourself",
    traits: { build: 3, order: 2, logic: 2 },
    stages: [
      {
        name: "Linux",
        step: "Learn Linux fundamentals",
        detail:
          "Use the terminal every day: files, permissions, processes, and logging in to a remote machine.",
        hours: 50,
        questions: [
          "How comfortable are you using Linux command-line tools?",
          "How comfortable are you managing files, users and permissions on a Linux server?",
        ],
      },
      {
        name: "Networking",
        step: "Learn networking basics",
        detail:
          "Learn how IP addresses, DNS, ports and firewalls connect one machine to another.",
        hours: 40,
        questions: [
          "How comfortable are you working with networking concepts?",
          "How well do you understand IP addresses, DNS and ports?",
        ],
      },
      {
        name: "Cloud concepts",
        step: "Learn cloud computing concepts",
        detail:
          "Understand compute, storage, databases and identity, and when to use each.",
        hours: 50,
        questions: [
          "How familiar are you with cloud computing concepts?",
          "How well do you understand virtual machines and cloud infrastructure?",
          "How familiar are you with cloud storage services?",
          "How well do you understand databases in cloud environments?",
          "How well do you understand cloud security principles?",
        ],
      },
      {
        name: "Hands-on platform",
        step: "Practise with a cloud platform",
        detail:
          "Use one provider's free tier to launch a server, storage and a database, then automate it.",
        hours: 90,
        questions: [
          "How comfortable are you using a cloud platform such as AWS, Azure or Google Cloud?",
          "How familiar are you with containers such as Docker?",
          "How familiar are you with infrastructure as code?",
          "How comfortable are you monitoring cloud resources?",
          "How familiar are you with CI/CD pipelines?",
        ],
      },
      {
        name: "Running real systems",
        step: "Build cloud infrastructure projects",
        detail:
          "Deploy a real app, add monitoring, and write down what it costs to run each month.",
        hours: 80,
        questions: [
          "How capable are you of troubleshooting basic cloud infrastructure problems?",
          "How well can you manage and optimise cloud resources?",
          "How prepared are you to deploy and manage a basic cloud-based application?",
        ],
      },
    ],
    checks: [
      {
        question:
          "An app runs on your laptop but breaks on the server. What does a container such as Docker mainly fix?",
        options: [
          "It makes the internet connection faster",
          "It packages the app with everything it needs, so it runs the same everywhere",
          "It replaces the need for a database",
          "It encrypts the source code",
        ],
        answer: 1,
        why: "Containers bundle the app with its dependencies, which removes the 'works on my machine' problem.",
      },
      {
        question:
          "Which service turns a name like example.com into an IP address?",
        options: ["DHCP", "SSH", "DNS", "HTTP"],
        answer: 2,
        why: "DNS is the internet's address book. Many 'the site is down' problems are really DNS problems.",
      },
      {
        question:
          "You leave a large virtual machine running all weekend with nobody using it. What happens on most cloud platforms?",
        options: [
          "You keep paying for it until you stop it",
          "It deletes itself after an hour",
          "It becomes free while idle",
          "It pauses automatically at midnight",
        ],
        answer: 0,
        why: "Cloud is pay-as-you-go. An idle machine still costs money, which is why watching cost is part of the job.",
      },
    ],
    resources: [resources.awsSkillBuilder, resources.msLearn, resources.netacad],
  },

  {
    id: "cybersecurity-specialist",
    title: "Cybersecurity Specialist",
    category: "software",
    icon: "shield",
    summary: "Help protect systems, networks, and data from security threats.",
    dayToDay: [
      "Look for weaknesses before attackers find them",
      "Investigate alerts and work out what really happened",
      "Teach colleagues how not to get phished",
    ],
    skills: [
      "Network security",
      "Threat detection",
      "Risk management",
      "Security tools",
    ],
    tools: ["Wireshark", "Nmap", "Kali Linux", "Burp Suite", "A SIEM such as Splunk"],
    coding: 1,
    startOn: "laptop",
    firstWin: "A security check-up of a small business's accounts and devices",
    traits: { logic: 3, build: 2, order: 2 },
    stages: [
      {
        name: "Networking",
        step: "Learn networking fundamentals",
        detail:
          "Learn how devices talk to each other: IP addresses, ports, protocols and firewalls.",
        hours: 50,
        questions: [
          "How familiar are you with network security concepts?",
          "How well do you understand how data moves across a network (IP addresses, ports and protocols)?",
        ],
      },
      {
        name: "Systems and access",
        step: "Learn operating system security",
        detail:
          "Lock down a Windows and a Linux machine: users, permissions, updates and backups.",
        hours: 50,
        questions: [
          "How well do you understand passwords, authentication and access control?",
          "How familiar are you with security policies and best practices?",
          "How well do you understand data protection and privacy principles?",
        ],
      },
      {
        name: "Threats",
        step: "Understand common security threats",
        detail:
          "Study how phishing, malware and web attacks really work, so you can spot them early.",
        hours: 50,
        questions: [
          "How familiar are you with basic cybersecurity concepts?",
          "How well do you understand common online security threats?",
          "How comfortable are you identifying phishing attempts?",
          "How familiar are you with common vulnerabilities in websites and applications?",
          "How well do you understand malware and how it can affect systems?",
        ],
      },
      {
        name: "Security tools",
        step: "Practise with security tools",
        detail:
          "Practise scanning, packet capture and log analysis in a safe lab, never on systems you do not own.",
        hours: 70,
        questions: [
          "How comfortable are you using security tools?",
          "How comfortable are you analysing basic security logs?",
          "How familiar are you with ethical hacking concepts?",
        ],
      },
      {
        name: "Real-world practice",
        step: "Build practical cybersecurity projects",
        detail:
          "Complete guided labs and write up one assessment the way a professional report would read.",
        hours: 80,
        questions: [
          "How capable are you of identifying potential security risks?",
          "How comfortable are you responding to a basic security incident?",
          "How prepared are you to perform a basic cybersecurity assessment?",
        ],
      },
    ],
    checks: [
      {
        question:
          "An email from 'your bank' urgently asks you to confirm your PIN through a link. What is this most likely to be?",
        options: [
          "A routine security update",
          "Phishing",
          "A software patch",
          "Two-factor authentication",
        ],
        answer: 1,
        why: "Urgency, a link and a request for secrets are the classic signs of phishing. Banks do not ask for a PIN by email.",
      },
      {
        question: "What does two-factor authentication add to a login?",
        options: [
          "A longer password",
          "Automatic backups of your account",
          "A faster way to log in",
          "A second proof of identity, such as a code on your phone",
        ],
        answer: 3,
        why: "A stolen password alone is no longer enough, because the attacker also needs the second factor.",
      },
      {
        question:
          "You notice a serious weakness in a company's website. What is the professional thing to do?",
        options: [
          "Report it privately to the company and do not exploit it",
          "Post it on social media to warn people",
          "Use it to show how skilled you are",
          "Say nothing",
        ],
        answer: 0,
        why: "This is responsible disclosure. Testing or exploiting a system without permission is illegal, whatever your intentions.",
      },
    ],
    resources: [resources.netacad, resources.tryHackMe, resources.portswigger],
  },

  {
    id: "data-analyst",
    title: "Data Analyst",
    category: "data",
    icon: "bars",
    summary:
      "Collect, clean, and interpret data to discover useful trends and patterns.",
    dayToDay: [
      "Answer questions like 'why did sales drop in March?' with evidence",
      "Clean messy spreadsheets until the numbers can be trusted",
      "Build charts and dashboards that managers actually read",
    ],
    skills: ["Excel", "SQL", "Data visualisation", "Problem solving"],
    tools: ["Excel or Google Sheets", "SQL", "Power BI or Tableau", "Python, later on"],
    coding: 1,
    startOn: "laptop",
    firstWin: "A sales dashboard for a small business, built from their real records",
    traits: { logic: 3, order: 2, words: 1, build: 1 },
    stages: [
      {
        name: "Spreadsheets",
        step: "Learn Excel and spreadsheets",
        detail:
          "Get fluent with formulas, lookups and PivotTables on a real dataset.",
        hours: 40,
        questions: [
          "How familiar are you with using Excel or Google Sheets to analyse data?",
          "How would you rate your ability to use formulas to analyse data?",
          "How well can you use PivotTables to summarise information?",
        ],
      },
      {
        name: "SQL",
        step: "Learn SQL",
        detail:
          "Answer business questions with SELECT, WHERE, GROUP BY and JOIN.",
        hours: 40,
        questions: [
          "How familiar are you with writing SQL queries?",
          "How effectively can you filter, sort and group data?",
        ],
      },
      {
        name: "Cleaning and statistics",
        step: "Practise data cleaning",
        detail:
          "Take a messy file and fix its duplicates, blanks and inconsistent formats.",
        hours: 40,
        questions: [
          "How well can you clean and organise a raw dataset?",
          "How easily can you identify errors or inconsistencies in data?",
          "How well do you understand basic statistics such as averages, percentages and distributions?",
        ],
      },
      {
        name: "Visualisation",
        step: "Learn data visualisation",
        detail:
          "Build one dashboard in Power BI, Tableau or Looker Studio that answers a clear question.",
        hours: 50,
        questions: [
          "How comfortable are you creating charts and data visualisations?",
          "How comfortable are you using Power BI, Tableau or similar visualisation tools?",
          "How easily can you identify trends and patterns in a dataset?",
        ],
      },
      {
        name: "Insight and projects",
        step: "Build data analysis projects",
        detail:
          "Publish two analyses, each ending in a recommendation somebody could act on.",
        hours: 70,
        questions: [
          "How well can you determine which data is relevant to a business problem?",
          "How effectively can you explain data findings to a non-technical person?",
          "How capable are you of turning raw data into useful business insights?",
          "How prepared are you to complete an analysis project from raw data to final presentation?",
        ],
      },
    ],
    checks: [
      {
        question:
          "A sales sheet lists one city as 'Lagos', 'lagos ' and 'LAGOS'. What do you do before counting customers per city?",
        options: [
          "Count them as three different cities",
          "Delete every row that looks odd",
          "Clean the values so they match: trim spaces and fix the case",
          "Sort the column from A to Z",
        ],
        answer: 2,
        why: "Inconsistent text splits one group into several. Cleaning comes before counting.",
      },
      {
        question: "Which SQL clause gives you total sales for each product?",
        options: ["ORDER BY", "GROUP BY", "LIMIT", "DISTINCT"],
        answer: 1,
        why: "GROUP BY collects rows per product so SUM can total each group.",
      },
      {
        question:
          "Ice cream sales and sunburn cases rise in the same months. What can you safely conclude?",
        options: [
          "They move together, but that alone does not prove one causes the other",
          "Ice cream causes sunburn",
          "Sunburn makes people buy ice cream",
          "The data must be wrong",
        ],
        answer: 0,
        why: "Correlation is not causation. Hot weather is likely driving both.",
      },
    ],
    resources: [resources.kaggle, resources.sqlbolt, resources.msLearn],
  },

  {
    id: "data-scientist",
    title: "Data Scientist",
    category: "data",
    icon: "flask",
    summary:
      "Use statistics, programming, and machine learning to solve problems with data.",
    dayToDay: [
      "Frame a business question as something a model can predict",
      "Explore data, test ideas and train models in Python",
      "Explain what a model can and cannot be trusted to do",
    ],
    skills: ["Python", "Statistics", "Machine learning", "Data visualisation"],
    tools: ["Python", "Jupyter notebooks", "pandas", "scikit-learn", "SQL"],
    coding: 2,
    startOn: "laptop",
    firstWin: "A prediction project published on Kaggle or GitHub with a clear write-up",
    traits: { logic: 3, build: 2 },
    stages: [
      {
        name: "Python",
        step: "Learn Python",
        detail:
          "Write Python comfortably, then load and reshape a dataset with pandas.",
        hours: 80,
        questions: [
          "How familiar are you with Python or R for data analysis?",
          "How comfortable are you working with libraries such as pandas, NumPy and scikit-learn?",
        ],
      },
      {
        name: "Statistics",
        step: "Build a foundation in statistics",
        detail:
          "Understand distributions, sampling and significance well enough to explain them aloud.",
        hours: 60,
        questions: [
          "How comfortable are you applying statistical methods to data?",
          "How well do you understand basic probability concepts?",
        ],
      },
      {
        name: "Analysis and visualisation",
        step: "Learn data analysis and visualisation",
        detail:
          "Explore a new dataset end to end and show what you found in a handful of honest charts.",
        hours: 60,
        questions: [
          "How well can you prepare and clean datasets for analysis?",
          "How easily can you explore a dataset to identify relationships and patterns?",
          "How capable are you of creating visualisations using programming tools?",
        ],
      },
      {
        name: "Machine learning",
        step: "Learn machine learning",
        detail:
          "Train, evaluate and improve a few standard models, and know why each one behaves as it does.",
        hours: 100,
        questions: [
          "How well do you understand supervised and unsupervised machine learning?",
          "How comfortable are you selecting an appropriate machine-learning algorithm for a problem?",
          "How well can you train a basic machine-learning model?",
          "How familiar are you with evaluating model performance?",
          "How well can you recognise problems such as overfitting and underfitting?",
        ],
      },
      {
        name: "Real projects",
        step: "Build practical data science projects",
        detail:
          "Take two real datasets from raw files to a model, and write up what you learned.",
        hours: 80,
        questions: [
          "How effectively can you explain the results of a machine-learning model?",
          "How capable are you of applying data-science techniques to a real-world problem?",
          "How prepared are you to take a dataset through exploration, modelling and evaluation?",
        ],
      },
    ],
    checks: [
      {
        question:
          "Your model scores 99% on its training data but 60% on new data. What is going on?",
        options: [
          "Underfitting",
          "Overfitting",
          "The model is finished",
          "The test data is broken",
        ],
        answer: 1,
        why: "The model has memorised the training data instead of learning a pattern that generalises.",
      },
      {
        question: "Why do you split data into training and test sets?",
        options: [
          "To make training faster",
          "To remove outliers automatically",
          "To double the size of the dataset",
          "To check how the model performs on data it has never seen",
        ],
        answer: 3,
        why: "Performance on unseen data is the only honest measure of whether a model will work in real use.",
      },
      {
        question:
          "You want to predict the price of a house in naira. What kind of problem is that?",
        options: [
          "Regression",
          "Classification",
          "Clustering",
          "Dimensionality reduction",
        ],
        answer: 0,
        why: "Predicting a number is regression. Predicting a category, such as spam or not spam, is classification.",
      },
    ],
    resources: [resources.kaggle, resources.cs50p, resources.khanStats],
  },

  {
    id: "data-engineer",
    title: "Data Engineer",
    category: "data",
    icon: "database",
    summary:
      "Build systems and pipelines that collect, store, and process data.",
    dayToDay: [
      "Move data from apps and files into one place it can be trusted",
      "Schedule pipelines and fix them when a source changes",
      "Make sure analysts and data scientists have clean data on time",
    ],
    skills: ["SQL", "Python", "Databases", "Data pipelines"],
    tools: [
      "SQL",
      "Python",
      "PostgreSQL",
      "Apache Airflow",
      "A cloud warehouse such as BigQuery",
    ],
    coding: 2,
    startOn: "laptop",
    firstWin: "A scheduled pipeline that loads public data into a database every day",
    traits: { build: 3, logic: 2, order: 2 },
    stages: [
      {
        name: "SQL",
        step: "Learn SQL",
        detail:
          "Write queries with joins, grouping and subqueries without looking up the syntax.",
        hours: 50,
        questions: [
          "How well can you write SQL queries?",
          "How comfortable are you joining several tables in one query?",
        ],
      },
      {
        name: "Python",
        step: "Learn Python",
        detail:
          "Write scripts that read files, call an API and save the result somewhere useful.",
        hours: 70,
        questions: [
          "How comfortable are you using Python or another programming language for data tasks?",
          "How well can you work with APIs to collect or transfer data?",
        ],
      },
      {
        name: "Databases",
        step: "Understand databases",
        detail:
          "Design a small schema, load data into it and explain why the tables relate as they do.",
        hours: 50,
        questions: [
          "How familiar are you with relational databases?",
          "How clearly do you understand relationships between database tables?",
          "How comfortable are you designing or modifying a database structure?",
        ],
      },
      {
        name: "Pipelines",
        step: "Learn data pipelines",
        detail:
          "Build a pipeline that extracts, cleans and loads data on a schedule.",
        hours: 90,
        questions: [
          "How well can you extract data from different sources?",
          "How capable are you of transforming raw data into usable formats?",
          "How familiar are you with ETL/ELT processes?",
          "How familiar are you with cloud platforms used for data engineering?",
          "How well can you handle large datasets?",
        ],
      },
      {
        name: "Reliable systems",
        step: "Build data engineering projects",
        detail:
          "Run a pipeline for a month, add data quality checks, and document how to fix it when it fails.",
        hours: 80,
        questions: [
          "How capable are you of identifying and troubleshooting problems in a data pipeline?",
          "How effectively can you maintain data quality and consistency?",
          "How well do you understand how data engineers support analysts and data scientists?",
          "How prepared are you to design and maintain a basic data pipeline?",
        ],
      },
    ],
    checks: [
      {
        question: "In ETL, what happens in the T step?",
        options: [
          "Transfer: files are moved between servers",
          "Transform: data is cleaned and reshaped into a usable format",
          "Test: the dashboard is checked",
          "Trigger: the job is started",
        ],
        answer: 1,
        why: "Extract, Transform, Load. Transform is where raw data becomes something analysts can use.",
      },
      {
        question:
          "A nightly pipeline fails halfway. Which property lets you run it again without creating duplicate data?",
        options: ["Idempotency", "Latency", "Encryption", "Compression"],
        answer: 0,
        why: "An idempotent job gives the same result however many times it runs, so re-running is safe.",
      },
      {
        question: "What is the job of a primary key?",
        options: [
          "To encrypt a table",
          "To speed up the internet connection",
          "To uniquely identify each row in a table",
          "To store the largest value",
        ],
        answer: 2,
        why: "A primary key is the unique identifier that other tables use to refer to a row.",
      },
    ],
    resources: [resources.deZoomcamp, resources.sqlbolt, resources.cs50p],
  },
];
