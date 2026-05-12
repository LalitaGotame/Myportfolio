import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import profile from "../assets/profile.jpg";

const skills = ["React", "JavaScript", "CSS", "Django", "Python", "Machine Learning", "Data Analysis", "Figma"];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="about" id="about" ref={ref}>
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      >
        <p className="about-label">About me</p>
        <h1>Building the web, <br />one component <br />at a time</h1>
        <p>
          I am a frontend developer learner with experience in building 
          responsive web interfaces. Currently learning the Django framework 
          for backend development. I also have foundational knowledge in AI, 
          machine learning, and data analysis. I enjoy continuous learning 
          and building practical, user-friendly applications.
        </p>
        <div className="skills-row">
          {skills.map((skill, i) => (
            <motion.span
              key={skill}
              className="skill-tag"
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.6 + i * 0.07 }}
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </motion.div>

      <motion.div
        className="about-image-wrap"
        initial={{ opacity: 0, x: 60 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      >
        <img src={profile} alt="About" />
      </motion.div>
    </section>
  );
}