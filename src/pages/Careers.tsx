import { Link } from "react-router-dom";

const careers = [
  {
    id: "virtual-assistant",
    title: "Virtual Assistant",
    description:
      "Provide remote administrative, technical, or creative support to individuals and businesses.",
  },
  {
    id: "data-analyst",
    title: "Data Analyst",
    description:
      "Collect, clean, and interpret data to discover useful trends and patterns.",
  },
  {
    id: "data-scientist",
    title: "Data Scientist",
    description:
      "Use statistics, programming, and machine learning to solve problems with data.",
  },
  {
    id: "data-engineer",
    title: "Data Engineer",
    description:
      "Build systems and pipelines that collect, store, and process data.",
  },
  {
    id: "ui-ux-designer",
    title: "UI/UX Designer",
    description: "Design intuitive and visually appealing digital experiences.",
  },
  {
    id: "product-manager",
    title: "Product Manager",
    description:
      "Guide digital products from idea to launch while working with different teams.",
  },
  {
    id: "product-designer",
    title: "Product Designer",
    description:
      "Combine research, UX, and visual design to create useful digital products.",
  },
  {
    id: "digital-marketer",
    title: "Digital Marketer",
    description: "Use digital channels to reach and engage customers.",
  },
  {
    id: "product-marketer",
    title: "Product Marketer",
    description:
      "Communicate the value of products and help them reach the right audience.",
  },
  {
    id: "graphic-designer",
    title: "Graphic Designer",
    description:
      "Create visual content such as branding and marketing materials.",
  },
  {
    id: "content-creator",
    title: "Content Creator",
    description:
      "Create engaging content for social media, blogs, podcasts, and video.",
  },
  {
    id: "frontend-developer",
    title: "Frontend Developer",
    description:
      "Build the visual and interactive parts of websites and applications.",
  },
  {
    id: "backend-developer",
    title: "Backend Developer",
    description:
      "Build server-side systems, APIs, databases, and application logic.",
  },
  {
    id: "cloud-engineer",
    title: "Cloud Engineer",
    description:
      "Build and manage reliable infrastructure using cloud platforms.",
  },
  {
    id: "cybersecurity-specialist",
    title: "Cybersecurity Specialist",
    description:
      "Help protect systems, networks, and data from security threats.",
  },
  {
    id: "music-audio-producer",
    title: "Music & Audio Producer",
    description: "Create, edit, and mix audio for music and other media.",
  },
  {
    id: "ai-career-essentials",
    title: "AI Career Essentials Professional",
    description:
      "Build foundational AI knowledge and learn how to use AI tools across different careers.",
  },
  {
    id: "salesforce-administrator",
    title: "Salesforce Administrator",
    description: "Manage Salesforce users, data, workflows, and reports.",
  },
];

function Careers() {
  return (
    <main>
      <h1>Explore Digital Careers</h1>

      <p>
        Discover different digital career paths and find one that interests you.
      </p>

      <section>
        {careers.map((career) => (
          <article key={career.id}>
            <h2>{career.title}</h2>

            <p>{career.description}</p>

            <Link to={`/careers/${career.id}`}>Learn More</Link>
          </article>
        ))}
      </section>
    </main>
  );
}

export default Careers;
