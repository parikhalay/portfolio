import React, { useRef } from "react";
import "./about.css";
import ME from "../../assets/about-image.jpg";
import { motion, useInView } from "framer-motion";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { BsFolder2Open } from "react-icons/bs";

const marqueeItems = [
  "React", "TypeScript", "Node.js", "PostgreSQL", "Spring Boot",
  "AWS", "WebSockets", "React Native", "Expo", "Stripe", "CI/CD"
];

// Motion variants
const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};
const staggerRow = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

export default function About() {
  // ===== Magnetic Button =====
  const btnRef = useRef(null);

  const onMagnetMove = (e) => {
    const el = btnRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const mx = e.clientX - (rect.left + rect.width / 2);
    const my = e.clientY - (rect.top + rect.height / 2);
    // soften the pull
    el.style.transform = `translate(${mx * 0.12}px, ${my * 0.12}px) scale(1.03)`;
  };
  const onMagnetLeave = () => {
    const el = btnRef.current;
    if (!el) return;
    el.style.transform = "translate(0,0) scale(1)";
  };

  return (
    <section id="about" className="about-neo">
      {/* Head */}
      <div className="about-head">
        <span className="eyebrow">Get To Know</span>
        <h2>About Me</h2>
        <i className="head-accent" aria-hidden />
      </div>

      <div className="container neo-grid">
        {/* LEFT: portrait + floaters */}
        <motion.div
          className="neo-portrait"
          initial={{ opacity: 0, x: -22 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.55 }}
        >
          <div className="blob" aria-hidden />
          <motion.div
            className="portrait-frame"
            whileHover={{ rotate: -1.2, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 220, damping: 18 }}
          >
            <img src={ME} alt="Portrait" />
            <span className="frame-glow" aria-hidden />
          </motion.div>

          <motion.div
            className="floater floater-1"
            initial={{ y: 10, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
          >
            <FaAward /> <em className="image-text">1+ yrs</em>
          </motion.div>

          <motion.div
            className="floater floater-2"
            initial={{ y: 10, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.28 }}
          >
            <FiUsers /> <em className="image-text">3 Internships</em>
          </motion.div>
        </motion.div>

        {/* RIGHT: Content */}
        <div className="neo-content">
          {/* === Cards with shine + stagger === */}
          <motion.div
            className="neo-cards"
            variants={staggerRow}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
          >
            <motion.a href="#experience" className="neo-card shine" variants={fadeUp}>
              <span className="ring"><FaAward /></span>
              <strong>Work Experience</strong>
              <small>More than 1 year</small>
            </motion.a>

            <motion.a href="#experience" className="neo-card shine" variants={fadeUp}>
              <span className="ring"><FiUsers /></span>
              <strong>Internships</strong>
              <small>3 completed</small>
            </motion.a>

            <motion.a href="#projects" className="neo-card shine" variants={fadeUp}>
              <span className="ring"><BsFolder2Open /></span>
              <strong>Projects</strong>
              <small>5+ shipped</small>
            </motion.a>
          </motion.div>

          {/* Text + Magnetic CTA */}
          <motion.div
            className="neo-textwrap"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
          >
            <p className="neo-text">
              I’m a Master’s student in Applied Computer Science at Concordia University,
              building thoughtful, performant apps across web and mobile. I love crafting
              human-centered experiences with React, TypeScript, Node, and exploring AI/ML—
              shipping clean, reliable software with measurable impact.
            </p>

            <button
              ref={btnRef}
              className="neo-cta btn btn-primary magnet"
              onMouseMove={onMagnetMove}
              onMouseLeave={onMagnetLeave}
            >
              Let’s Talk
            </button>
          </motion.div>

          {/* Chips with scroll-stagger */}
          <motion.div
            className="neo-chips"
            variants={staggerRow}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
          >
            {marqueeItems.map((t, i) => (
              <motion.span key={i} className="chip" variants={fadeUp}>
                {t}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
