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
        hours: 30,
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
        hours: 55,
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
        hours: 40,
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
        hours: 15,
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
        hours: 45,
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
          "Your page looks fine on a laptop, but on a phone it is zoomed out and the text is tiny, even though your CSS has media queries. What is most likely missing?",
        options: [
          "The viewport meta tag in the page's head",
          "A min-width rule on the body element",
          "A larger base font size in the stylesheet",
          "A separate stylesheet just for phones",
        ],
        answer: 0,
        why: "Without the viewport meta tag, phones lay the page out at desktop width and shrink it, so your media queries never match the real screen.",
      },
      {
        question:
          "You call fetch() and log the result on the next line. The console shows Promise {<pending>}. Why?",
        options: [
          "The API sent back an error status code",
          "The browser blocked the request for security",
          "fetch is asynchronous and was not awaited",
          "The response body is not valid JSON",
        ],
        answer: 2,
        why: "fetch returns a promise straight away. Use await, or .then, to get the response once it arrives.",
      },
      {
        question:
          "In React, you add to a list with items.push(newItem), but the screen does not update. Why?",
        options: [
          "Each list item is missing a key prop",
          "The component needs useEffect to re-render",
          "The browser is showing a cached version",
          "State was mutated instead of set to a new array",
        ],
        answer: 3,
        why: "React re-renders when you call the setter with a new value, such as setItems([...items, newItem]). Changing the old array in place tells React nothing.",
      },
      {
        question:
          "TypeScript reports: Argument of type 'string' is not assignable to parameter of type 'number'. What does it mean?",
        options: [
          "A function that expects a number was given text",
          "The number is too large for the variable",
          "The file must be compiled to JavaScript first",
          "A variable was used before it was declared",
        ],
        answer: 0,
        why: "Read type errors as 'expected this, got that'. Convert the value, for example with Number(), or fix the place it came from.",
      },
      {
        question:
          "You ran git commit, but your teammate cannot see your changes on GitHub. Which step did you skip?",
        options: ["git pull", "git push", "git merge", "git clone"],
        answer: 1,
        why: "A commit is saved only on your own machine. git push sends it to GitHub.",
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
        hours: 55,
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
        hours: 35,
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
        hours: 35,
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
        hours: 35,
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
        hours: 50,
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
          "A function works for most inputs but crashes when it receives an empty list. What is the best way to stop this happening again?",
        options: [
          "Wrap the whole program in one try/catch",
          "Handle the empty case and add a test for it",
          "Restart the server automatically after crashes",
          "Document that callers must not send empty lists",
        ],
        answer: 1,
        why: "Fix the edge case where it happens and lock the fix in with a test. Catching everything or auto-restarting only hides the bug.",
      },
      {
        question:
          "A request arrives with no login token for a route that requires one. Which status code should the API return?",
        options: [
          "400 Bad Request",
          "403 Forbidden",
          "401 Unauthorized",
          "500 Internal Server Error",
        ],
        answer: 2,
        why: "401 means the API does not know who you are. 403 is for a known user who is not allowed, and 5xx codes are for faults on the server.",
      },
      {
        question:
          "You have a users table and an orders table. How should each order record which user placed it?",
        options: [
          "Copy the user's name and email into the order",
          "Keep a list of order ids inside the user's row",
          "Create a separate orders table for each user",
          "A user_id column that is a foreign key to users",
        ],
        answer: 3,
        why: "A foreign key links the two rows without duplicating data that could go out of date, and the database can enforce that the user exists.",
      },
      {
        question: "How should a user's password be stored?",
        options: [
          "Encrypted with AES, so admins can recover it",
          "Hashed once with SHA-256",
          "Hashed with bcrypt or Argon2",
          "Encoded in Base64 before saving",
        ],
        answer: 2,
        why: "Password hashes should be slow and salted so stolen ones are hard to crack. SHA-256 is far too fast, encryption can be reversed, and Base64 is no protection at all.",
      },
      {
        question: "Where should your production database password live?",
        options: [
          "Hard-coded in a config.js file",
          "In a .env file committed to Git",
          "In the README so the team can find it",
          "In the server's environment variables",
        ],
        answer: 3,
        why: "Secrets stay out of the code and out of Git. Anything committed can leak, even from a private repository.",
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
        hours: 30,
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
        hours: 25,
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
        hours: 25,
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
        hours: 60,
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
        hours: 50,
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
          "A script on a Linux server will not run and says 'Permission denied'. What usually fixes it?",
        options: [
          "Rename the file so it ends in .exe",
          "Give it execute permission with chmod +x",
          "Run every command with sudo from now on",
          "Reinstall the operating system packages",
        ],
        answer: 1,
        why: "Files need execute permission to run as programs. Using sudo for everything hides the real problem and is a security risk.",
      },
      {
        question:
          "You moved a website to a new server, but for a few hours some people still reach the old one. What is the likely reason?",
        options: [
          "DNS answers are cached until their TTL expires",
          "The new server's firewall is blocking them",
          "Their browsers do not support the new server",
          "The SSL certificate has not been renewed yet",
        ],
        answer: 0,
        why: "Resolvers cache DNS records for the record's TTL. Lowering the TTL before a move shortens the changeover.",
      },
      {
        question:
          "A developer needs to upload files to one storage bucket. What access should their account get?",
        options: [
          "Full administrator access, to avoid delays",
          "The root account login, shared securely",
          "Write access to that one bucket only",
          "Read-only access to every service",
        ],
        answer: 2,
        why: "This is least privilege: give exactly what the task needs. A leaked admin key can take down the whole account.",
      },
      {
        question:
          "Your app server must reach the database, but nobody on the internet should. How do you set it up?",
        options: [
          "Private subnet, with a rule allowing only the app server",
          "A public IP, protected by a very strong password",
          "A public IP on a non-standard port number",
          "A public IP with encryption turned on for the disks",
        ],
        answer: 0,
        why: "Keep the database off the internet entirely and let its security group accept traffic only from the app server. Hidden ports and strong passwords are not a boundary.",
      },
      {
        question:
          "You stop a virtual machine for the weekend instead of deleting it. What are you still billed for?",
        options: [
          "Nothing, because a stopped machine is free",
          "Its attached disks and any reserved IP address",
          "The full hourly price, as if it were running",
          "Only the network traffic it used last week",
        ],
        answer: 1,
        why: "Stopping ends the compute charge, but storage and reserved addresses keep billing. Watching small leftovers like these is part of managing cost.",
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
        hours: 25,
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
        hours: 25,
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
        hours: 30,
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
        hours: 40,
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
        hours: 45,
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
          "Which of these sends your password across the network encrypted?",
        options: [
          "Logging in through an HTTP form",
          "A Telnet session",
          "An FTP upload",
          "An SSH session",
        ],
        answer: 3,
        why: "SSH encrypts everything. HTTP, Telnet and FTP send data, passwords included, in plain text that anyone on the path can read.",
      },
      {
        question:
          "A colleague's account logs in from another country while they are sitting at their desk. What is the best first action?",
        options: [
          "Wait to see whether it happens again",
          "Ask them to change their password next month",
          "Disable the account and end its active sessions",
          "Block that country from the company website",
        ],
        answer: 2,
        why: "Treat it as a compromise: cut off the attacker's access first, then reset credentials and investigate how it happened.",
      },
      {
        question: "Which of these links really belongs to PayPal?",
        options: [
          "https://paypal.com.account-verify.net/login",
          "https://www.paypal.com/signin",
          "https://paypal-secure-login.com/signin",
          "https://login.paypal.com.security-check.io",
        ],
        answer: 1,
        why: "Read the domain just before the first single slash. The others belong to account-verify.net, paypal-secure-login.com and security-check.io.",
      },
      {
        question:
          "Logs show 600 failed logins for 'admin' from one IP address in five minutes, then one success. What is most likely?",
        options: [
          "A password-guessing attack that has now succeeded",
          "The administrator forgot their password",
          "The server is overloaded and rejecting logins",
          "A scheduled backup job signing in repeatedly",
        ],
        answer: 0,
        why: "Hundreds of rapid failures from one source is brute forcing. The final success means the account is compromised, so respond now.",
      },
      {
        question:
          "During an authorised test of one web app, you notice a weakness on a server outside the scope you were given. What do you do?",
        options: [
          "Test it carefully to confirm it is real",
          "Ignore it, since it is out of scope",
          "Add it to your scan list for tomorrow",
          "Report it to your contact without testing it",
        ],
        answer: 3,
        why: "Permission defines what you may touch. Testing outside scope is unauthorised access even during a paid engagement, so report it and let the owner decide.",
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
        hours: 20,
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
        hours: 25,
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
        hours: 25,
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
        hours: 30,
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
        hours: 40,
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
          "Your VLOOKUP returns #N/A for a product code you can see in the other sheet. What is the most common cause?",
        options: [
          "The lookup range is not sorted A to Z",
          "Hidden spaces, or numbers stored as text",
          "The formula must be on the same sheet",
          "The workbook has not been saved yet",
        ],
        answer: 1,
        why: "'A101 ' and 'A101', or 101 and '101', look identical but do not match. TRIM and VALUE fix most #N/A surprises.",
      },
      {
        question:
          "You want only the products whose total sales are over ₦1m. Which SQL clause holds that condition?",
        options: ["WHERE", "ORDER BY", "HAVING", "LIMIT"],
        answer: 2,
        why: "WHERE filters rows before they are grouped. HAVING filters the groups after SUM has been calculated.",
      },
      {
        question:
          "Nine staff earn about ₦150,000 a month and the owner earns ₦5,000,000. Which number best describes a typical salary?",
        options: [
          "The mean",
          "The range",
          "The standard deviation",
          "The median",
        ],
        answer: 3,
        why: "The owner drags the mean up to ₦635,000, which nobody actually earns. The median is the middle value and ignores outliers.",
      },
      {
        question:
          "You need to show how monthly sales changed over a year. Which chart fits best?",
        options: [
          "A line chart",
          "A pie chart",
          "A scatter plot",
          "A stacked donut chart",
        ],
        answer: 0,
        why: "Line charts show change over time. Pie charts compare parts of one whole and hide the trend.",
      },
      {
        question:
          "Customers in the loyalty programme spend 40% more than others. What can you tell the manager?",
        options: [
          "Joining the programme makes customers spend 40% more",
          "Big spenders may just join more: it is a link, not proof",
          "Everyone should be pushed to join, to lift spend by 40%",
          "Nothing, because loyalty data cannot be measured",
        ],
        answer: 1,
        why: "This is correlation. People who already spend a lot are more likely to join, so compare similar customers or run a test before claiming the programme caused it.",
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
        hours: 45,
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
        hours: 40,
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
        hours: 35,
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
        hours: 65,
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
        hours: 55,
        questions: [
          "How effectively can you explain the results of a machine-learning model?",
          "How capable are you of applying data-science techniques to a real-world problem?",
          "How prepared are you to take a dataset through exploration, modelling and evaluation?",
        ],
      },
    ],
    checks: [
      {
        question: "In pandas, what does df[df['age'] > 30] return?",
        options: [
          "True or False for every row",
          "Nothing: it deletes rows aged 30 or under",
          "A new DataFrame of rows where age is over 30",
          "Only the age column, sorted from high to low",
        ],
        answer: 2,
        why: "The inner part builds a True/False mask, and indexing with it returns the matching rows as a new DataFrame. The original df is unchanged.",
      },
      {
        question: "An A/B test gives p = 0.03. What does that mean?",
        options: [
          "There is a 97% chance that the new version is truly better",
          "With no real difference, a result this extreme is rare (3%)",
          "The new version performs 3% better than the old one",
          "Only 3% of users were shown the new version",
        ],
        answer: 1,
        why: "A p-value assumes there is no effect and asks how surprising the data would be. It is not the probability that your idea is true.",
      },
      {
        question:
          "Before modelling, you find 40% of the income column is blank. What is the best first step?",
        options: [
          "Fill every blank with zero",
          "Delete every row with a blank income",
          "Let the model handle the blanks itself",
          "Find out why it is missing, then decide",
        ],
        answer: 3,
        why: "Zero is a real income, and dropping 40% of rows can bias the sample. Whether the blanks are random or systematic decides the right fix.",
      },
      {
        question:
          "Your model scores 99% on its training data but 60% on new data. What is going on?",
        options: [
          "Overfitting",
          "Underfitting",
          "The learning rate is too low",
          "The test set is too large",
        ],
        answer: 0,
        why: "The model has memorised the training data instead of learning a pattern that generalises.",
      },
      {
        question:
          "Fraud is 1% of transactions. A model that always predicts 'not fraud' scores 99% accuracy. What is wrong?",
        options: [
          "Nothing, because 99% accuracy is excellent for any model",
          "Accuracy hides it: check recall on the fraud class",
          "The model needs more training epochs",
          "The features need to be normalised first",
        ],
        answer: 1,
        why: "When one class is rare, accuracy rewards ignoring it. Precision and recall on the fraud class show whether the model is any use.",
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
        hours: 30,
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
        hours: 40,
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
        hours: 30,
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
        hours: 55,
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
        hours: 50,
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
        question:
          "Which approach lists customers who have never placed an order?",
        options: [
          "INNER JOIN orders, then keep every row",
          "LEFT JOIN orders, keep rows where the order id IS NULL",
          "RIGHT JOIN customers, keep rows where the order id = 0",
          "INNER JOIN orders, keep customers where COUNT(*) = 0",
        ],
        answer: 1,
        why: "A LEFT JOIN keeps every customer, and those with no match get NULLs in the order columns. An INNER JOIN drops them entirely.",
      },
      {
        question:
          "An API returns 100 records per call, but the source holds 25,000. Your script saves only 100. What did it miss?",
        options: [
          "A faster internet connection on the server",
          "Converting the JSON to CSV first",
          "A longer timeout on each request",
          "Pagination: fetching every page in turn",
        ],
        answer: 3,
        why: "APIs split large results into pages. Your script must follow the next-page link or offset until the last page.",
      },
      {
        question:
          "Which column makes the best primary key for a customers table?",
        options: [
          "Email address, since each is unique",
          "Phone number, since it rarely changes",
          "Full name plus date of birth",
          "An auto-generated customer_id",
        ],
        answer: 3,
        why: "A key must be unique and never change. People change emails and phones and share names, but a generated id does neither.",
      },
      {
        question: "In an ELT setup, where does the transform step happen?",
        options: [
          "Before the data leaves the source system",
          "On a server between extract and load",
          "Inside the warehouse, after loading",
          "In the dashboard tool when it is read",
        ],
        answer: 2,
        why: "ELT loads raw data first and transforms it inside the warehouse, usually with SQL. In classic ETL, transforming happens before loading.",
      },
      {
        question:
          "A nightly pipeline fails halfway. Which property lets you run it again without creating duplicate data?",
        options: ["Idempotency", "Latency", "Concurrency", "Compression"],
        answer: 0,
        why: "An idempotent job gives the same result however many times it runs, so re-running is safe.",
      },
    ],
    resources: [resources.deZoomcamp, resources.sqlbolt, resources.cs50p],
  },
];
