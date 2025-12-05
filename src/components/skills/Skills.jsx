import React from "react";
import "./skills.css";
import { motion } from "framer-motion";

// Icons
import { FaJava, FaPython, FaNodeJs, FaReact, FaDocker, FaPhp, FaGitAlt, FaAws } from "react-icons/fa";
import { SiJavascript, SiC, SiCplusplus, SiMysql, SiJunit5, SiHtml5, SiCss3,
         SiVisualstudiocode, SiEclipseide, SiJupyter, SiIntellijidea, SiAtom, SiFigma,
         SiAdobeillustrator, SiAdobephotoshop, SiAdobexd, SiCanva, SiAdobepremierepro } from "react-icons/si";

// Brand-colored data
const techStack = [
  { name: "Java", Icon: FaJava, color: "#EA2D2E" },
  { name: "JavaScript", Icon: SiJavascript, color: "#F7DF1E" },
  { name: "C", Icon: SiC, color: "#283593" },
  { name: "C++", Icon: SiCplusplus, color: "#00599C" },
  { name: "Python", Icon: FaPython, color: "#3776AB" },
  { name: "HTML", Icon: SiHtml5, color: "#E34F26" },
  { name: "CSS", Icon: SiCss3, color: "#1572B6" },
  { name: "Node.js", Icon: FaNodeJs, color: "#339933" },
  { name: "MySQL", Icon: SiMysql, color: "#4479A1" },
  { name: "React", Icon: FaReact, color: "#61DAFB" },
  { name: "Docker", Icon: FaDocker, color: "#2496ED" },
  { name: "PHP", Icon: FaPhp, color: "#777BB4" },
  { name: "JUnit Testing", Icon: SiJunit5, color: "#25A162" },
  { name: "Git", Icon: FaGitAlt, color: "#F05032" },
  { name: "AWS", Icon: FaAws, color: "#FF9900" },
];

const tools = [
  { name: "VS Code", Icon: SiVisualstudiocode, color: "#007ACC" },
  { name: "Eclipse", Icon: SiEclipseide, color: "#2C2255" },
  { name: "Jupyter Notebook", Icon: SiJupyter, color: "#F37626" },
  { name: "IntelliJ IDEA", Icon: SiIntellijidea, color: "#3FBDF0" },
  { name: "Atom", Icon: SiAtom, color: "#40A977" },
  { name: "Figma", Icon: SiFigma, color: "#F24E1E" },
  { name: "Adobe Illustrator", Icon: SiAdobeillustrator, color: "#FF9A00" },
  { name: "Adobe Photoshop", Icon: SiAdobephotoshop, color: "#31A8FF" },
  { name: "Adobe XD", Icon: SiAdobexd, color: "#FF61F6" },
  { name: "Canva", Icon: SiCanva, color: "#00C4CC" },
  { name: "Adobe Premiere Pro", Icon: SiAdobepremierepro, color: "#9999FF" },
];

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.06, delayChildren: 0.04 } },
};
const item = {
  hidden: { opacity: 0, y: 8 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 110, damping: 14 } },
};

const Section = ({ title, list }) => (
  <motion.div className="skills__card" variants={item} whileHover={{ y: -3 }}>
    <div className="skills__card-header">
      <div className="skills__badge" />
      <h3>{title}</h3>
    </div>
    <motion.div className="skills__chips" variants={container} initial="hidden" whileInView="show" viewport={{ once: true }}>
      {list.map(({ name, Icon, color }) => (
        <motion.span className="skills__chip" variants={item} key={name} style={{ "--brand": color }}>
          <span className="skills__chip-iconwrap">
            <Icon className="skills__chip-icon" />
          </span>
          <span className="skills__chip-text">{name}</span>
        </motion.span>
      ))}
    </motion.div>
  </motion.div>
);

export default function Skills() {
  return (
    <section id="skills">
      <h5>Skills I Have</h5>
      <h2 className="skills__title">My Technological Experience</h2>

      <motion.div className="container skills__grid" variants={container} initial="hidden" whileInView="show" viewport={{ once: true }}>
        <Section title="Languages & Technologies" list={techStack} />
        <Section title="Tools" list={tools} />
      </motion.div>
    </section>
  );
}
