import { Link, useParams } from "react-router-dom";

const careerDetails: Record<
  string,
  {
    title: string;
    description: string;
    skills: string[];
  }
> = {
  "virtual-assistant": {
    title: "Virtual Assistant",
    description:
      "Provide remote administrative, technical, or creative support to individuals and businesses.",
    skills: [
      "Communication",
      "Organisation",
      "Customer service",
      "Digital tools",
    ],
  },

  "data-analyst": {
    title: "Data Analyst",
    description:
      "Collect, clean, and interpret data to discover useful trends and patterns.",
    skills: ["Excel", "SQL", "Data visualisation", "Problem solving"],
  },

  "data-scientist": {
    title: "Data Scientist",
    description:
      "Use statistics, programming, and machine learning to solve problems with data.",
    skills: ["Python", "Statistics", "Machine learning", "Data visualisation"],
  },

  "data-engineer": {
    title: "Data Engineer",
    description:
      "Build systems and pipelines that collect, store, and process data.",
    skills: ["SQL", "Python", "Databases", "Data pipelines"],
  },

  "ui-ux-designer": {
    title: "UI/UX Designer",
    description: "Design intuitive and visually appealing digital experiences.",
    skills: ["User research", "Wireframing", "Figma", "Prototyping"],
  },

  "product-manager": {
    title: "Product Manager",
    description:
      "Guide digital products from idea to launch while working with different teams.",
    skills: [
      "Product strategy",
      "Research",
      "Communication",
      "Problem solving",
    ],
  },

  "product-designer": {
    title: "Product Designer",
    description:
      "Combine research, UX, and visual design to create useful digital products.",
    skills: ["User research", "UX design", "Figma", "Prototyping"],
  },

  "digital-marketer": {
    title: "Digital Marketer",
    description: "Use digital channels to reach and engage customers.",
    skills: ["Social media", "SEO", "Content marketing", "Analytics"],
  },

  "product-marketer": {
    title: "Product Marketer",
    description:
      "Communicate the value of products and help them reach the right audience.",
    skills: [
      "Market research",
      "Product positioning",
      "Marketing strategy",
      "Communication",
    ],
  },

  "graphic-designer": {
    title: "Graphic Designer",
    description:
      "Create visual content such as branding and marketing materials.",
    skills: ["Typography", "Colour theory", "Layout", "Design software"],
  },

  "content-creator": {
    title: "Content Creator",
    description:
      "Create engaging content for social media, blogs, podcasts, and video.",
    skills: [
      "Content creation",
      "Storytelling",
      "Video editing",
      "Social media",
    ],
  },

  "frontend-developer": {
    title: "Frontend Developer",
    description:
      "Build the visual and interactive parts of websites and applications.",
    skills: ["HTML", "CSS", "JavaScript", "React", "TypeScript"],
  },

  "backend-developer": {
    title: "Backend Developer",
    description:
      "Build server-side systems, APIs, databases, and application logic.",
    skills: ["Programming", "APIs", "Databases", "Server-side development"],
  },

  "cloud-engineer": {
    title: "Cloud Engineer",
    description:
      "Build and manage reliable infrastructure using cloud platforms.",
    skills: ["Cloud platforms", "Networking", "Linux", "Cloud infrastructure"],
  },

  "cybersecurity-specialist": {
    title: "Cybersecurity Specialist",
    description:
      "Help protect systems, networks, and data from security threats.",
    skills: [
      "Network security",
      "Threat detection",
      "Risk management",
      "Security tools",
    ],
  },

  "music-audio-producer": {
    title: "Music & Audio Producer",
    description: "Create, edit, and mix audio for music and other media.",
    skills: [
      "Audio recording",
      "Audio editing",
      "Mixing",
      "Digital audio workstations",
    ],
  },

  "ai-career-essentials": {
    title: "AI Career Essentials Professional",
    description:
      "Build foundational AI knowledge and learn how to use AI tools across different careers.",
    skills: ["AI tools", "Prompt writing", "AI literacy", "Responsible AI use"],
  },

  "salesforce-administrator": {
    title: "Salesforce Administrator",
    description: "Manage Salesforce users, data, workflows, and reports.",
    skills: [
      "CRM management",
      "Salesforce",
      "Data management",
      "Reports and dashboards",
    ],
  },
};

function CareerDetails() {
  const { id } = useParams();

  const career = id ? careerDetails[id] : undefined;

  if (!career) {
    return (
      <main>
        <Link to="/careers">← Back to Careers</Link>

        <h1>Career Not Found</h1>

        <p>We couldn't find the career you selected.</p>
      </main>
    );
  }

  return (
    <main>
      <Link to="/careers">← Back to Careers</Link>

      <h1>{career.title}</h1>

      <p>{career.description}</p>

      <h2>Skills You'll Need</h2>

      <ul>
        {career.skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>

      <Link to={`/assessment?career=${id}`}>Take Skills Assessment</Link>
    </main>
  );
}

export default CareerDetails;
