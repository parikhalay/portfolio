import React from "react";
import "./projects.css";
import { motion } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";

// IMAGES
import IMG1 from "../../assets/warzone.jpg";
import IMG2 from "../../assets/emotion.jpg";
import IMG3 from "../../assets/crypto.png";
import IMG4 from "../../assets/job.png";
import IMG5 from "../../assets/mern.png";
import IMG6 from "../../assets/eventify.jpeg";

// Add short, punchy blurbs + stacks (chips)
const projects = [
  {
    id: 5,
    image: IMG5,
    title: "Mapify — MERN Stack",
    blurb: "Location sharing & routes with JWT auth and cloud media.",
    github: "https://github.com/parikhalay/Mapify",
    demo: "",
    stack: [
      { t: "MongoDB", c: "#47A248" },
      { t: "Express", c: "#ffffff" },
      { t: "React", c: "#61DAFB" },
      { t: "Node", c: "#339933" },
    ],
  },
  {
    id: 6,
    image: IMG6,
    title: "Eventify — Event Management",
    blurb: "Ticketing, schedules, and admin dashboard with analytics.",
    github: "https://github.com/parikhalay/Eventify",
    demo: "",
    stack: [
      { t: "React", c: "#61DAFB" },
      { t: "Node", c: "#339933" },
      { t: "Stripe", c: "#635BFF" },
      { t: "AWS", c: "#fff" },
    ],
  },
  {
    id: 1,
    image: IMG1,
    title: "ConquerX — Game",
    blurb: "Multiplayer strategy game with real-time interactions.",
    github: "https://github.com/jenish-1990/Warzone-Game-APP-U12",
    demo: "",
    stack: [{ t: "Java", c: "#EA2D2E" }, { t: "Design Patterns", c: "#22D3EE" }, { t: "JUnit Testing", c: "#339933" }, { t: "OOP", c: "#FF6F00" }],
  },
  {
    id: 2,
    image: IMG2,
    title: "Emotion Recognition",
    blurb: "CNN pipeline to classify facial expressions from images.",
    github: "https://github.com/parikhalay/Emotion-Detection",
    demo: "",
    stack: [{ t: "Python", c: "#3776AB" }, { t: "TensorFlow", c: "#FF6F00" }],
  },
  {
    id: 3,
    image: IMG3,
    title: "Crypto Tracker",
    blurb: "Live market data, search, watchlist, and charts.",
    github: "https://github.com/parikhalay/Cryptocurrency-Web-Application",
    demo: "",
    stack: [{ t: "React", c: "#61DAFB" }, { t: "Chart.js", c: "#FF6384" }],
  },
  {
    id: 4,
    image: IMG4,
    title: "Job Portal",
    blurb: "User roles, postings, filters, and application flow.",
    github: "https://github.com/parikhalay/job_portal",
    demo: "",
    stack: [{ t: "PHP", c: "#777BB4" }, { t: "MySQL", c: "#4479A1" }],
  },
];

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.07, delayChildren: 0.05 } },
};
const item = {
  hidden: { opacity: 0, y: 18, scale: 0.98 },
  show: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 120, damping: 14 } },
};

export default function Projects() {
  return (
    <section id="projects">
      <h5>My Recent Work</h5>
      <h2 className="proj__title">Projects</h2>

      <motion.div
        className="container portfolio__grid"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {projects.map((p) => (
          <motion.article key={p.id} className="card3d" variants={item}>
            {/* gradient border */}
            <div className="card3d__border" />
            <div className="card3d__inner">
              <div className="card3d__media">
                <img src={p.image} alt={p.title} loading="lazy" />
                <span className="card3d__shine" />
              </div>

              <h3 className="card3d__title">{p.title}</h3>
              {p.blurb && <p className="card3d__blurb">{p.blurb}</p>}

              {p.stack?.length > 0 && (
                <div className="card3d__chips">
                  {p.stack.map((s) => (
                    <span className="chip" key={s.t} style={{ "--brand": s.c }}>
                      <span className="chip__dot" />
                      {s.t}
                    </span>
                  ))}
                </div>
              )}

              <div className="card3d__cta">
                <a className="btn btn--ghost" href={p.github} target="_blank" rel="noreferrer">
                  <FiGithub /> GitHub
                </a>
                {p.demo && (
                  <a className="btn btn--primary" href={p.demo} target="_blank" rel="noreferrer">
                    <FiExternalLink /> Live
                  </a>
                )}
              </div>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}
