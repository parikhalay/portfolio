import React from "react";
import {
  LuBriefcase,
  LuCpu,
  LuRocket,
  LuLibrary,
  LuCloud,
  LuShieldCheck,
  LuSmartphone,
  LuMic,
  LuGitBranch,
  LuDatabase,
  LuChevronRight,
} from "react-icons/lu";
import "./experience.css";

const EXPERIENCES = [
  {
    role: "Systems Developer",
    period: "Oct 2025 – Present",
    company: "Promenaid Inc. (Montreal, Canada)",
    icon: <LuLibrary />,
    highlights: [
      "Built a Project Manager prototype system end-to-end, delivering a modular React, NestJS and PostgreSQL platform with secure APIs, reusable UI, authentication, and scalable data models."
    ],
    tech: ["React", "PostgreSQL", "NestJS", "JWT", "OAuth", "JavaScript"],
    badges: [
      { icon: <LuRocket />, text: "2× Faster Streaming" },
      { icon: <LuDatabase />, text: "Conversation Store" },
      { icon: <LuMic />, text: "Voice Input" },
      { icon: <LuSmartphone />, text: "Cross-platform" },
    ],
  },
  {
    role: "Software Developer",
    period: "Feb 2025 – Oct 2025",
    company: "BassiliChat Inc. (Montreal, Canada)",
    icon: <LuBriefcase />,
    highlights: [
      "Developed a full-stack conversational AI platform allowing users to compare responses from multiple AI models side-by-side, improving usability and engagement.",
      " Implemented real-time streaming of responses, reducing perceived latency by 50% and enhancing user experience during multi-model chats using Web Socket and Server Side Events.",
      "Designed APIs and database schemas to persist multi-turn conversations, enabling users to save, search, and resume chats through a live history panel.",
      " Integrated secure user authentication and payments with OAuth, subscriptions, and password recovery, supporting scalable user growth.",
    ],
    tech: ["React", "PostgreSQL", "WebSockets", "React Native", "Expo", "JWT", "OAuth", "Stripe"],
    badges: [
      { icon: <LuRocket />, text: "2× Faster Streaming" },
      { icon: <LuDatabase />, text: "Conversation Store" },
      { icon: <LuMic />, text: "Voice Input" },
      { icon: <LuSmartphone />, text: "Cross-platform" },
    ],
  },
  {
    role: "Software Developer",
    period: "Jan 2023 – Aug 2023",
    company: "Adare Food Ingredients Pvt. Ltd. (Anand, India)",
    icon: <LuCpu />,
    highlights: [
      " Developed an inventory and batch tracking system with modern web technologies, introducing barcode scanning that improved stock accuracy.",
      " Built an internal employee portal with secure role-based access controls, centralizing HR requests and compliance documentation, cutting email-based workflows by 20%.",
      "Engineered scalable APIs (REST & GraphQL) to integrate internal systems with ERP and third-party logistics, eliminating redundant data entry and ensuring a single source of truth across departments.",
      "Implemented containerization and CI/CD pipelines, reducing deployment time from hours to minutes and enabling 2× faster release cycles.",
      "Automated daily reporting workflows with scripting and cloud functions, reducing reporting time by 70% and minimizing errors."
    ],
    tech: ["Rest APIs", "React", "SQL", "Team Collaboration", "GraphQL", "Docker", "CI/CD"],
    badges: [{ icon: <LuRocket />, text: "+30% Engagement" }, { icon: <LuCloud />, text: "Serverless" },
    { icon: <LuShieldCheck />, text: "100+ Tests" },
    { icon: <LuGitBranch />, text: "CI/CD" },],
  },
  // {
  //   role: "Full Stack Developer",
  //   period: "Jan 2023 – Apr 2023",
  //   company: "Tech Elecon Pvt. Ltd. (Anand, India)",
  //   icon: <LuLibrary />,
  //   highlights: [
  //     "Built an interactive school site with React Router & Express; +12% engagement via MUI-based UI.",
  //     "Implemented OAuth 2.0 auth & validation, reducing unauthorized access incidents by ~10%.",
  //     "Used MongoDB for efficient data modeling to improve retrieval speed and storage utilization.",
  //     "Adopted GitHub for VCS and GitLab CI/CD to cut deployment time by ~10%.",
  //   ],
  //   tech: ["React", "Express", "MUI", "OAuth 2.0", "MongoDB", "GitHub", "GitLab CI/CD"],
  //   badges: [
  //     { icon: <LuShieldCheck />, text: "OAuth 2.0" },
  //     { icon: <LuRocket />, text: "+12% Engagement" },
  //   ],
  // },
  {
    role: "Front End Developer Intern",
    period: "Jun 2022 – Jul 2022",
    company: "Infolabz Pvt. Ltd. (Ahmedabad, India)",
    icon: <LuCpu />,
    highlights: [
      "Delivered a scalable sports news PWA in React + Redux + Axios; responsive MUI components drove ~2× engagement.",
      "Collaborated with a 5-dev team to integrate third-party APIs with Jira-based workflows.",
    ],
    tech: ["React", "Redux", "Axios", "MUI", "PWA", "Jira"],
    badges: [{ icon: <LuRocket />, text: "2× Engagement" }],
  },

];

const Experience = () => {
  return (
    <section id="experience">
      <h5>What I have done</h5>
      <h2>Internship Experience</h2>

      <div className="container experiences__container">
        {EXPERIENCES.map((exp, idx) => (
          <article key={idx} className="experience-card">
            <header className="experience-header">
              <div className="experience-icon" aria-hidden="true">
                {exp.icon}
              </div>
              <div className="experience-titles">
                <h3 className="experience-role">{exp.role}</h3>
                <h5 className="experience-company">{exp.company}</h5>
              </div>
              <span className="experience-period" aria-label={`Period: ${exp.period}`}>
                {exp.period}
              </span>
            </header>

            {exp.badges?.length ? (
              <div className="experience-badges" role="list" aria-label="Highlights">
                {exp.badges.map((b, i) => (
                  <span key={i} className="exp-badge" role="listitem">
                    <i className="badge-icon" aria-hidden="true">
                      {b.icon}
                    </i>
                    {b.text}
                  </span>
                ))}
              </div>
            ) : null}

            <ul className="experience__list">
              {exp.highlights.map((h, i) => (
                <li key={i}>
                  <LuChevronRight className="experience__list-icon" size={20} aria-hidden="true" />
                  <p>{h}</p>
                </li>
              ))}
            </ul>

            {exp.tech?.length ? (
              <div className="experience-tech" aria-label="Technologies used">
                {exp.tech.map((t, i) => (
                  <span key={i} className="tech-chip">
                    {t}
                  </span>
                ))}
              </div>
            ) : null}
          </article>
        ))}
      </div>
    </section>
  );
};

export default Experience;
