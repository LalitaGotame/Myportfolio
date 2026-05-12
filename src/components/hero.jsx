import { motion } from "framer-motion";
import profile from "../assets/profile.jpg"; 

export default function Hero() {
    return (
        <section className="hero">
            <motion.h1
                initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      className="hero"> 
                
            
                WELCOME TO MY PORTFOLIO
            </motion.h1>

            <motion.img 
                src={profile}       
                alt="profile"
                className="profile"
                initial={{ scale: 0.5 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1 }}
            />
        </section>
    );
}