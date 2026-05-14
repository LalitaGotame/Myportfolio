import { useInView } from "framer-motion";
import { motion } from "framer-motion";
import { useRef } from "react";
import z from "../assets/z.jpg";
import nlp from "../assets/nlp.jpg";
import hash from "../assets/hash.jpg";

const projects = [
  {
    title: "Tattoo App",
    desc: "A tattoo appointment app.",
    image: z,
    github: "https://github.com/LalitaGotame/Tattoo-app",
    progress: "Ongoing"
  },
  {
    title: "NLP Project",
    desc: "Text processing and sentiment analysis.",
    image: nlp,
    github: "https://github.com/LalitaGotame/NLP-Sentiment-Analyzer",
    progress: "Completed"
  },
  {
    title: "Hashtag Analysis",
    desc: "Social media hashtag tracking system.",
    image: hash,
    github: "https://github.com/LalitaGotame/Tiktok-Hashtag-Analysis",
    progress: "System design phase"
  },
];

export default function ProjectCard() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  return (
    <div className="projects-container" ref={ref}>
      {projects.map((project, i) => (
        <motion.div
          key={project.title}
          className="project-card"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: i * 0.2 }}
        >
          <a href={project.github} className="project-link" target="_blank" rel="noopener noreferrer">
            <img src={project.image} alt={project.title} />
          </a>
          <h2>{project.title}</h2>
          <p>{project.desc}</p>
          <span className="project-progress">Progress: {project.progress}</span>
        </motion.div>
      ))}
    </div>
  );
}