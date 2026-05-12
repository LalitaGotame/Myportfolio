
import {motion} from "framer-motion";
export default function About() {
  return (
    <motion.section
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
   
      className="about"
    >



    <section className="about">

      <div className="about-text">
        <h1>About</h1>

        <p className="subtitle">
          I am a frontend developer learner with experience in building responsive web interfaces. 
          I am currently learning the Django framework for backend development.
           I also have foundational knowledge in AI, machine learning, and data analysis.
            I enjoy continuous learning and building practical, user-friendly applications.

        </p>
      </div>

        
      
    </section>
    </motion.section>
  )
}