import {motion} from "framer-motion";
export default function Contact() {
  return (
  
   <motion.section
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      className="contact"> 
    
   <section className="contact">

      <h2>Contact me</h2>

      <form>

        <div className="row">
          <input type="text" placeholder="First name" />
          <input type="text" placeholder="Last name" />
        </div>

        <input type="email" placeholder="Email address" />

        <button type="submit">
          Submit
        </button>

      </form>

    </section>
   </motion.section>
   
  )
}