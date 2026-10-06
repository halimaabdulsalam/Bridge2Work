import { resources } from "./resources";
import type { Career } from "./types";

export const creativeCareers: Career[] = [
  {
    id: "ui-ux-designer",
    title: "UI/UX Designer",
    category: "design",
    icon: "layout",
    summary: "Design intuitive and visually appealing digital experiences.",
    dayToDay: [
      "Watch real people use an app and note where they get stuck",
      "Sketch, wireframe and prototype better ways to do the task",
      "Hand clear, tested designs to developers",
    ],
    skills: ["User research", "Wireframing", "Figma", "Prototyping"],
    tools: ["Figma", "FigJam or Miro", "Maze or Google Forms", "Pen and paper"],
    coding: 0,
    startOn: "laptop",
    firstWin: "A redesign case study of an app you already use every day",
    traits: { visual: 3, people: 2, logic: 1 },
    stages: [
      {
        name: "Design principles",
        step: "Learn design principles",
        detail:
          "Learn hierarchy, spacing, contrast and accessibility by recreating screens you admire.",
        hours: 20,
        questions: [
          "How well do you understand the difference between UI and UX design?",
          "How comfortable are you applying typography, spacing and visual hierarchy?",
          "How well can you design an interface that is accessible and easy to use?",
        ],
      },
      {
        name: "Figma",
        step: "Learn Figma",
        detail:
          "Build a five-screen app in Figma using frames, auto layout and components.",
        hours: 25,
        questions: [
          "How familiar are you with Figma or similar design tools?",
          "How well can you design interfaces for different screen sizes?",
        ],
      },
      {
        name: "User research",
        step: "Practise user research",
        detail:
          "Interview five people about one everyday problem and summarise what you heard.",
        hours: 25,
        questions: [
          "How familiar are you with conducting basic user research?",
          "How effectively can you identify user needs and pain points?",
          "How comfortable are you creating user personas?",
          "How well can you map out a user's journey through a product?",
        ],
      },
      {
        name: "Wireframes and prototypes",
        step: "Create wireframes and prototypes",
        detail:
          "Turn your research into a clickable prototype and test it with real people.",
        hours: 40,
        questions: [
          "How capable are you of creating wireframes?",
          "How easily can you create an interactive prototype?",
          "How familiar are you with usability testing?",
          "How effectively can you use user feedback to improve a design?",
        ],
      },
      {
        name: "Portfolio and handoff",
        step: "Build a UX portfolio",
        detail:
          "Write up two projects that show the problem, your process and what changed after testing.",
        hours: 40,
        questions: [
          "How comfortable are you explaining your design decisions to developers or clients?",
          "How prepared are you to take a design from user research through prototyping and testing?",
        ],
      },
    ],
    checks: [
      {
        question:
          "Five people try your prototype and three cannot find the checkout button. What do you do?",
        options: [
          "Add a note in onboarding explaining where the button is",
          "Treat it as a design problem: change the layout and test again",
          "Ignore it, because five people is too few to matter",
          "Make the logo bigger",
        ],
        answer: 1,
        why: "If most testers fail the same step, the design is at fault. Five users is enough to reveal the big problems.",
      },
      {
        question: "What is a wireframe for?",
        options: [
          "Showing the final colours and photos",
          "Writing the code for the app",
          "Planning layout and structure before adding visual detail",
          "Measuring how fast the app loads",
        ],
        answer: 2,
        why: "Wireframes settle what goes where cheaply, before anyone spends time on polish.",
      },
      {
        question:
          "Light grey text on a white background looks elegant, but users complain. Which principle is being broken?",
        options: [
          "Colour contrast for readability",
          "Brand consistency",
          "Grid alignment",
          "Animation timing",
        ],
        answer: 0,
        why: "Low contrast makes text hard to read, especially on a phone in sunlight. Accessibility guidelines set minimum contrast for this reason.",
      },
    ],
    resources: [resources.figma, resources.lawsOfUx, resources.nng],
  },

  {
    id: "product-designer",
    title: "Product Designer",
    category: "design",
    icon: "layers",
    summary:
      "Combine research, UX, and visual design to create useful digital products.",
    dayToDay: [
      "Work out which problem is worth solving before designing anything",
      "Design a feature from first sketch to polished, tested screens",
      "Balance what users need, what the business wants and what can be built",
    ],
    skills: ["User research", "UX design", "Figma", "Prototyping"],
    tools: ["Figma", "FigJam", "Notion", "Maze"],
    coding: 0,
    startOn: "laptop",
    firstWin: "A case study that takes one feature from problem to tested prototype",
    traits: { visual: 3, people: 2, logic: 1, order: 1 },
    stages: [
      {
        name: "UX fundamentals",
        step: "Learn UX fundamentals",
        detail:
          "Practise finding the real problem: research, personas, journeys and early concepts.",
        hours: 30,
        questions: [
          "How well can you identify problems that a digital product should solve?",
          "How familiar are you with user research techniques?",
          "How effectively can you create user personas and journey maps?",
          "How comfortable are you developing initial product concepts?",
        ],
      },
      {
        name: "Visual design",
        step: "Learn visual design",
        detail:
          "Design polished screens with consistent type, colour and spacing on mobile and desktop.",
        hours: 30,
        questions: [
          "How well can you create high-fidelity product interfaces?",
          "How well can you design experiences for different devices and screen sizes?",
        ],
      },
      {
        name: "Figma and systems",
        step: "Learn Figma",
        detail:
          "Build a small design system in Figma and use it to assemble screens quickly.",
        hours: 30,
        questions: [
          "How capable are you of creating wireframes?",
          "How familiar are you with Figma or similar design software?",
          "How comfortable are you working with a design system?",
        ],
      },
      {
        name: "Prototyping and testing",
        step: "Practise prototyping",
        detail:
          "Prototype a full flow, test it with five people and change it based on what you see.",
        hours: 35,
        questions: [
          "How easily can you develop an interactive prototype?",
          "How familiar are you with usability testing?",
          "How effectively can you iterate a design based on user feedback?",
        ],
      },
      {
        name: "Working with a team",
        step: "Build product design case studies",
        detail:
          "Write two case studies that show the trade-offs you made, not only the final screens.",
        hours: 40,
        questions: [
          "How well can you collaborate with product managers and developers?",
          "How capable are you of balancing user needs, business goals and technical limitations?",
          "How prepared are you to take a product from concept to a tested design ready for development?",
        ],
      },
    ],
    checks: [
      {
        question:
          "The business wants more sign-ups. Users say the sign-up form is too long. What do you do first?",
        options: [
          "Add a pop-up asking people to sign up",
          "Find out which fields are truly needed and test a shorter form",
          "Make the button a brighter colour",
          "Remove the form completely",
        ],
        answer: 1,
        why: "The complaint points at friction. Removing unnecessary fields serves the user and the business goal together.",
      },
      {
        question: "What is a design system?",
        options: [
          "A shared set of reusable components and rules that keep a product consistent",
          "A project-management tool",
          "A folder of stock photos",
          "A type of database",
        ],
        answer: 0,
        why: "It lets a team design and build faster while the product still looks and behaves like one thing.",
      },
      {
        question:
          "A developer says your design needs three months to build, and the deadline is in three weeks. What is the best response?",
        options: [
          "Insist on the full design",
          "Hand over the files and move on",
          "Work out together which smaller version still solves the user's problem",
          "Cancel the feature",
        ],
        answer: 2,
        why: "Product design is trade-offs. A smaller version that ships and solves the core problem beats a perfect one that does not.",
      },
    ],
    resources: [resources.figma, resources.lawsOfUx, resources.nng],
  },

  {
    id: "graphic-designer",
    title: "Graphic Designer",
    category: "design",
    icon: "shapes",
    summary: "Create visual content such as branding and marketing materials.",
    dayToDay: [
      "Turn a client's brief into a logo, flyer or social media post",
      "Choose type, colour and layout so the message lands at a glance",
      "Revise work after feedback and deliver files ready for print or screen",
    ],
    skills: ["Typography", "Colour theory", "Layout", "Design software"],
    tools: ["Canva", "Adobe Photoshop", "Adobe Illustrator", "Figma"],
    coding: 0,
    startOn: "phone",
    firstWin: "A brand kit and a set of social media templates for a small business",
    traits: { visual: 3, words: 1 },
    stages: [
      {
        name: "Design principles",
        step: "Learn design principles",
        detail:
          "Learn hierarchy, alignment, contrast and balance by redesigning flyers you see around you.",
        hours: 15,
        questions: [
          "How familiar are you with the basic principles of graphic design?",
          "How well do you understand visual hierarchy and composition?",
          "How comfortable are you creating layouts for digital content?",
        ],
      },
      {
        name: "Typography and colour",
        step: "Learn typography and colour",
        detail:
          "Build three colour palettes and three font pairings, and explain why each one works.",
        hours: 20,
        questions: [
          "How well do you understand typography and font pairing?",
          "How effectively can you use colour in a design?",
        ],
      },
      {
        name: "Design software",
        step: "Learn design software",
        detail:
          "Get quick in one tool, then learn how to export correctly for print and for screens.",
        hours: 35,
        questions: [
          "How comfortable are you using design tools such as Canva, Photoshop or Illustrator?",
          "How well can you edit and prepare images for digital use?",
          "How comfortable are you preparing designs for different screen sizes?",
        ],
      },
      {
        name: "Creating assets",
        step: "Practise creating visual assets",
        detail:
          "Produce a logo, a poster and a week of social posts for one made-up brand.",
        hours: 35,
        questions: [
          "How capable are you of creating social media graphics?",
          "How familiar are you with creating logos and simple brand identities?",
          "How comfortable are you designing posters, flyers or marketing materials?",
          "How well can you maintain visual consistency across a brand?",
        ],
      },
      {
        name: "Client work and portfolio",
        step: "Build a design portfolio",
        detail:
          "Show eight strong pieces, each with the brief you were given and the thinking behind it.",
        hours: 35,
        questions: [
          "How effectively can you take feedback and revise a design?",
          "How well can you explain your design choices to a client?",
          "How prepared are you to complete a design project from brief to final delivery?",
        ],
      },
    ],
    checks: [
      {
        question:
          "A client's logo will go on a billboard and also be a tiny app icon. What should you design it as?",
        options: [
          "A vector file such as SVG or AI",
          "A small JPEG",
          "A screenshot",
          "A PNG saved at low resolution",
        ],
        answer: 0,
        why: "Vectors scale to any size without blurring. Pixel images break up when enlarged.",
      },
      {
        question:
          "A flyer uses six different fonts and looks chaotic. What is the usual fix?",
        options: [
          "Add a seventh font for contrast",
          "Keep to one or two typefaces and use size and weight for hierarchy",
          "Make everything bold",
          "Set all the text in capitals",
        ],
        answer: 1,
        why: "Hierarchy comes from size, weight and spacing. Too many typefaces compete with each other.",
      },
      {
        question:
          "You are sending a poster to a print shop. Which colour mode should the file use?",
        options: ["RGB", "HEX", "CMYK", "HSL"],
        answer: 2,
        why: "Printers mix cyan, magenta, yellow and black. RGB is for screens, so colours can shift in print.",
      },
    ],
    resources: [resources.canva, resources.googleFonts, resources.figma],
  },

  {
    id: "content-creator",
    title: "Content Creator",
    category: "media",
    icon: "play",
    summary:
      "Create engaging content for social media, blogs, podcasts, and video.",
    dayToDay: [
      "Plan what to post and who it is for",
      "Script, shoot and edit short videos or write posts",
      "Read the numbers to see what worked, then do more of that",
    ],
    skills: [
      "Content creation",
      "Storytelling",
      "Video editing",
      "Social media",
    ],
    tools: ["CapCut", "Canva", "A smartphone camera", "Notion or Google Sheets"],
    coding: 0,
    startOn: "phone",
    firstWin: "Thirty days of consistent posts in one niche, with the results tracked",
    traits: { words: 3, visual: 2, people: 2, sound: 1 },
    stages: [
      {
        name: "Content strategy",
        step: "Learn content strategy",
        detail:
          "Pick one niche and one audience, and list thirty ideas they would care about.",
        hours: 15,
        questions: [
          "How comfortable are you developing ideas for digital content?",
          "How well can you identify content that will interest a target audience?",
          "How comfortable are you adapting content for different platforms?",
        ],
      },
      {
        name: "Storytelling",
        step: "Practise storytelling",
        detail:
          "Write hooks and short scripts until you can hold attention past the first three seconds.",
        hours: 20,
        questions: [
          "How well can you use storytelling to communicate an idea?",
          "How comfortable are you writing captions, scripts or short-form content?",
          "How comfortable are you developing a consistent personal or brand voice?",
        ],
      },
      {
        name: "Editing and production",
        step: "Learn basic video editing",
        detail:
          "Shoot and edit on your phone: clean cuts, clear audio, readable captions.",
        hours: 30,
        questions: [
          "How capable are you of creating videos for social media?",
          "How familiar are you with basic photo and video editing?",
          "How well can you use tools such as Canva, CapCut or similar platforms?",
        ],
      },
      {
        name: "Consistency",
        step: "Create content consistently",
        detail:
          "Keep a content calendar and publish on schedule for thirty days in a row.",
        hours: 35,
        questions: [
          "How familiar are you with creating content for social media?",
          "How effectively can you maintain a content calendar?",
          "How prepared are you to plan, create and publish content consistently?",
        ],
      },
      {
        name: "Growth and portfolio",
        step: "Build a content portfolio",
        detail:
          "Collect your best pieces with their numbers, and say what you learned from each.",
        hours: 25,
        questions: [
          "How familiar are you with social media analytics?",
          "How effectively can you use audience feedback to improve your content?",
          "How well can you measure the performance of your content?",
        ],
      },
    ],
    checks: [
      {
        question:
          "Your video reached 10,000 people, but most left within three seconds. What should you work on?",
        options: [
          "The hashtags",
          "The hook: what happens in the opening seconds",
          "The time of day you post",
          "Making the video longer",
        ],
        answer: 1,
        why: "People decide almost immediately whether to keep watching. The opening has to earn the rest.",
      },
      {
        question:
          "A brand offers to pay you to post about its product. What must you do?",
        options: [
          "Hide it so the post feels natural",
          "Delete the post after 24 hours",
          "Only mention it if someone asks",
          "Clearly disclose that it is a paid partnership",
        ],
        answer: 3,
        why: "Platforms and advertising rules require disclosure, and your audience's trust depends on it.",
      },
      {
        question:
          "Which is the most useful sign that a piece of content truly connected?",
        options: [
          "Saves, shares and watch time",
          "The number of hashtags you used",
          "How long it took to make",
          "How many filters it has",
        ],
        answer: 0,
        why: "Those show people valued it enough to keep it, pass it on or watch to the end.",
      },
    ],
    resources: [resources.youtubeCreators, resources.canva, resources.hubspot],
  },

  {
    id: "music-audio-producer",
    title: "Music & Audio Producer",
    category: "media",
    icon: "wave",
    summary: "Create, edit, and mix audio for music and other media.",
    dayToDay: [
      "Record vocals, instruments or voice-overs cleanly",
      "Arrange and edit tracks until the song or episode flows",
      "Mix and export audio that sounds good on phone speakers and headphones",
    ],
    skills: [
      "Audio recording",
      "Audio editing",
      "Mixing",
      "Digital audio workstations",
    ],
    tools: [
      "FL Studio, Ableton Live or BandLab",
      "Audacity",
      "A USB microphone",
      "Closed-back headphones",
    ],
    coding: 0,
    startOn: "phone",
    firstWin: "Three finished tracks, or one podcast episode, mixed and exported",
    traits: { sound: 3, visual: 1, build: 1 },
    stages: [
      {
        name: "Audio fundamentals",
        step: "Learn audio fundamentals",
        detail:
          "Understand rhythm, pitch, song structure and how sound becomes a digital signal.",
        hours: 20,
        questions: [
          "How familiar are you with basic music production concepts?",
          "How comfortable are you arranging music or audio tracks?",
        ],
      },
      {
        name: "Your DAW",
        step: "Learn a digital audio workstation",
        detail:
          "Pick one DAW and build a full beat or edit a full episode inside it.",
        hours: 30,
        questions: [
          "How comfortable are you using a digital audio workstation?",
          "How familiar are you with creating or editing sound effects?",
        ],
      },
      {
        name: "Recording and editing",
        step: "Practise recording and editing",
        detail:
          "Record a voice in an ordinary room and edit it until it is clean and tight.",
        hours: 40,
        questions: [
          "How well do you understand recording and microphone techniques?",
          "How familiar are you with audio editing?",
          "How capable are you of recording clean audio?",
          "How comfortable are you working with vocals?",
          "How well can you identify problems such as noise or distortion in a recording?",
        ],
      },
      {
        name: "Mixing",
        step: "Learn mixing techniques",
        detail:
          "Balance levels, then use EQ, compression and reverb with a reason for each move.",
        hours: 50,
        questions: [
          "How well do you understand basic mixing concepts?",
          "How familiar are you with equalisation and compression?",
          "How comfortable are you working with effects such as reverb and delay?",
          "How familiar are you with mastering concepts?",
        ],
      },
      {
        name: "Finished work",
        step: "Build an audio portfolio",
        detail:
          "Finish and release three pieces. Finished and imperfect beats perfect and unreleased.",
        hours: 45,
        questions: [
          "How effectively can you take creative direction and revise an audio project?",
          "How prepared are you to complete an audio project from recording through final export?",
        ],
      },
    ],
    checks: [
      {
        question:
          "A vocal recording has a constant low rumble from a generator outside. Which tool removes it best?",
        options: [
          "A high-pass filter, also called a low cut",
          "More reverb",
          "A louder master volume",
          "Panning the vocal left",
        ],
        answer: 0,
        why: "A high-pass filter removes low frequencies below the voice, which is where rumble lives.",
      },
      {
        question:
          "The meter on your recording channel keeps hitting red and the sound crackles. What is wrong?",
        options: [
          "The file format is wrong",
          "The input is clipping because the level is too high",
          "The song is too slow",
          "The headphones are broken",
        ],
        answer: 1,
        why: "Clipping is distortion from a signal that is too loud. Turn the input gain down and record again.",
      },
      {
        question: "What does a compressor do?",
        options: [
          "Makes the file smaller so it sends faster",
          "Adds echo",
          "Reduces the gap between the loudest and quietest parts",
          "Changes the key of the song",
        ],
        answer: 2,
        why: "Compression controls dynamic range, so a vocal stays audible without sudden loud peaks.",
      },
    ],
    resources: [resources.abletonLearning, resources.bandlab, resources.audacity],
  },
];
