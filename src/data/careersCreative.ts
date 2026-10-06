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
          "Light grey text on a white background looks elegant, but users complain they cannot read it. Which principle is being broken?",
        options: [
          "Brand consistency",
          "Grid alignment",
          "Colour contrast",
          "Proximity",
        ],
        answer: 2,
        why: "Low contrast makes text hard to read, especially on a phone in sunlight. Accessibility guidelines set a minimum contrast for this reason.",
      },
      {
        question:
          "You want a card to grow as its text gets longer, without moving things by hand. Which Figma feature do you use?",
        options: ["Auto layout", "Groups", "Constraints", "Masks"],
        answer: 0,
        why: "Auto layout sizes and spaces a frame from its content. Constraints control how layers react when their parent is resized, not when content changes.",
      },
      {
        question:
          "Which interview question gives you the most reliable insight?",
        options: [
          "Would you use an app that reminds you to save?",
          "How much would you pay for a savings app?",
          "Don't you find saving money stressful?",
          "Tell me about the last time you tried to save",
        ],
        answer: 3,
        why: "Past behaviour is evidence. Hypothetical questions invite polite guesses, and leading questions put your answer in their mouth.",
      },
      {
        question:
          "Five people try your prototype and three cannot find the checkout button. What do you do?",
        options: [
          "Add an onboarding tip explaining where it is",
          "Treat it as a design problem: change it and retest",
          "Ignore it, because five people is too few",
          "Ask the three testers to try again more slowly",
        ],
        answer: 1,
        why: "If most testers fail the same step, the design is at fault. Five users is enough to reveal the big problems.",
      },
      {
        question:
          "A developer asks how a button should look when disabled, but your design only shows its normal state. What does that tell you?",
        options: [
          "Your handoff is missing component states",
          "The developer should decide that detail",
          "Disabled buttons are rarely needed",
          "Lowering opacity is always good enough",
        ],
        answer: 0,
        why: "Handoff should cover every state: default, hover, focus, disabled, loading and error. Missing states become guesses in the code.",
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
          "The business wants more sign-ups, and users say the sign-up form is too long. What do you do first?",
        options: [
          "Add a pop-up inviting every visitor to sign up",
          "Split the same form across three shorter steps",
          "Cut fields that aren't needed, then test it",
          "Make the submit button a brighter colour",
        ],
        answer: 2,
        why: "The complaint points at friction. Removing unnecessary fields serves the user and the business goal together.",
      },
      {
        question:
          "Spacing on your screens is 7, 13, 18 and 22px, and the layout looks uneven. What is the usual fix?",
        options: [
          "Increase every gap by the same 4px",
          "Use a consistent scale, such as multiples of 8",
          "Space each element by eye until it looks right",
          "Use percentages so the spacing scales",
        ],
        answer: 1,
        why: "A spacing scale creates rhythm and makes decisions faster for designers and developers alike.",
      },
      {
        question:
          "You need to change the style of one button used across 40 screens. What is the right way in Figma?",
        options: [
          "Select all 40 buttons and edit them together",
          "Group the buttons, then restyle the group",
          "Paste the new button over each old one",
          "Edit the main component so instances update",
        ],
        answer: 3,
        why: "Instances inherit from their main component, so one edit updates every screen. That is the core idea of a design system.",
      },
      {
        question:
          "During a usability test, a participant gets stuck and asks you what to do. What is your best response?",
        options: [
          "Ask what they expected to happen and what they'd try",
          "Show them where to tap so the test can continue",
          "End the session, since the result is now spoiled",
          "Explain how the feature was meant to work",
        ],
        answer: 0,
        why: "Helping hides the very problem you came to find. Turning the question back reveals how they think the product works.",
      },
      {
        question:
          "A developer says your design needs three months to build, and the deadline is in three weeks. What is the best response?",
        options: [
          "Keep the full design and ask for a later deadline",
          "Hand over the files and let developers cut things",
          "Agree a smaller version that still solves the problem",
          "Simplify the visuals but keep every feature",
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
          "A flyer's headline, date and price are all the same size, and nobody notices the price. What is missing?",
        options: [
          "Symmetry",
          "Visual hierarchy",
          "A colour gradient",
          "A bolder border",
        ],
        answer: 1,
        why: "Hierarchy uses size, weight, colour and position to show what to read first. When everything is equal, nothing stands out.",
      },
      {
        question:
          "You are sending a poster to a print shop. Which colour mode should the file use?",
        options: ["RGB", "HEX", "CMYK", "HSL"],
        answer: 2,
        why: "Printers mix cyan, magenta, yellow and black. RGB is for screens, so colours can shift in print.",
      },
      {
        question:
          "A client's logo will go on a billboard and also be a tiny app icon. What format should you design it in?",
        options: [
          "A large, high-resolution JPEG",
          "A transparent PNG at 300 DPI",
          "A layered Photoshop file",
          "A vector file, such as SVG or AI",
        ],
        answer: 3,
        why: "Vectors scale to any size without blurring. Pixel images, however large, break up when enlarged far enough.",
      },
      {
        question:
          "A print shop asks for 3mm of bleed on your flyer. What do you do?",
        options: [
          "Extend the background 3mm past the trim edge",
          "Add a 3mm white border inside the page edge",
          "Shrink the whole design by 3mm on each side",
          "Move all the text 3mm in from the edge",
        ],
        answer: 0,
        why: "Cutting is never perfectly exact. Bleed extends the background past the trim so no white slivers appear. Keeping text inside a safe margin is a separate rule.",
      },
      {
        question:
          "A client looks at your draft and says 'make it pop'. What is the best response?",
        options: [
          "Add more colours and effects",
          "Make the logo bigger",
          "Ask what should stand out and what feels flat",
          "Send three versions with brighter colours",
        ],
        answer: 2,
        why: "Vague feedback hides a specific concern. One clarifying question saves several rounds of guessing.",
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
          "You post about cooking, football and tech on one new account, and growth is flat. What is the most likely issue?",
        options: [
          "Posting at the wrong times for your audience",
          "No clear niche for people to follow",
          "Not enough trending hashtags on each post",
          "Videos that are too short",
        ],
        answer: 1,
        why: "New accounts grow when people know what they will get by following. Pick one niche and one audience first.",
      },
      {
        question:
          "Your video reached 10,000 people, but most scrolled away within three seconds. What should you change first?",
        options: [
          "The hashtags and the caption text",
          "The time of day you post it",
          "The opening line and first shot",
          "The total length of the video",
        ],
        answer: 2,
        why: "People decide almost immediately whether to keep watching. The opening has to earn the rest.",
      },
      {
        question:
          "Viewers say they cannot follow your talking videos, though the picture is sharp. What fixes it best?",
        options: [
          "Shoot in 4K instead of 1080p",
          "Add background music to fill the silence",
          "Turn up the brightness and contrast",
          "Use a clip-on mic and add captions",
        ],
        answer: 3,
        why: "Viewers forgive average video but not unclear sound. A cheap mic close to your mouth, plus captions for people watching on mute, fixes most of it.",
      },
      {
        question: "You keep missing posting days. Which habit helps most?",
        options: [
          "Batch-film a week's videos in one session",
          "Post more often to build the habit",
          "Film each video on the day it goes out",
          "Move to a new platform for a fresh start",
        ],
        answer: 0,
        why: "Batching separates making from posting, so one busy day does not break your schedule. It is how most consistent creators work.",
      },
      {
        question:
          "Which is the most useful sign that a piece of content truly connected?",
        options: [
          "Likes on the post",
          "New followers that week",
          "Views in the first hour",
          "Saves, shares and watch time",
        ],
        answer: 3,
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
          "A song is at 120 BPM in 4/4 time. How many beats are in each bar?",
        options: ["8", "120", "4", "30"],
        answer: 2,
        why: "The top number of the time signature is beats per bar. BPM sets how fast those beats go.",
      },
      {
        question:
          "In a DAW, what is the main difference between a MIDI track and an audio track?",
        options: [
          "MIDI stores notes; audio stores sound",
          "MIDI is a higher-quality audio format",
          "Audio tracks cannot be edited at all",
          "MIDI tracks only work for drums",
        ],
        answer: 0,
        why: "MIDI is instructions: which note, when and how hard. You can change the instrument or fix a note at any time, which recorded audio does not allow.",
      },
      {
        question:
          "A vocal recording has a constant low rumble from a generator outside. Which tool removes it best?",
        options: [
          "More reverb on the vocal",
          "A high-pass (low-cut) filter",
          "A louder master volume",
          "A compressor on the vocal",
        ],
        answer: 1,
        why: "A high-pass filter removes low frequencies below the voice, which is where rumble lives. A compressor would make it louder, not quieter.",
      },
      {
        question: "What does a compressor do?",
        options: [
          "Makes the file smaller so it sends faster",
          "Removes background noise from a recording",
          "Narrows the gap between loud and quiet parts",
          "Changes the key the song is in",
        ],
        answer: 2,
        why: "Compression controls dynamic range, so a vocal stays audible without sudden loud peaks.",
      },
      {
        question:
          "Your mix sounds great on studio headphones but thin on phone speakers. What do you do before release?",
        options: [
          "Push the master as loud as it will possibly go",
          "Add bass until it sounds full on the phone",
          "Release it, since most fans use headphones",
          "Check it on several systems and references",
        ],
        answer: 3,
        why: "A mix has to translate. Phone speakers barely reproduce deep bass, so compare on several systems and against released songs in the same style.",
      },
    ],
    resources: [resources.abletonLearning, resources.bandlab, resources.audacity],
  },
];
