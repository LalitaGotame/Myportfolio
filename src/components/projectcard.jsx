import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const projects = [
  {
    title: "Tattoo App",
    desc: "A tattoo recommendation app.",
  },
  {
    title: "NLP Project",
    desc: "Text processing and sentiment analysis.",
  },
  {
    title: "Hashtag Analysis",
    desc: "Social media hashtag tracking system.",
  },
];

export default function ProjectCard() {
  const ref = useRef(null);
  const isInView = useInView(ref);

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
          <h2>{project.title}</h2>
          <p>{project.desc}</p>
        </motion.div>
      ))}
    </div>
  );
}