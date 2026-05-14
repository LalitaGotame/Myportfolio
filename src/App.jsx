import { useEffect } from "react";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./style.css";
import ProjectCard from "./components/ProjectCard";

export default function App() {
  
  return (
    <div>
     
     
      <NavBar /> 
      <Hero />
      <About />
      <ProjectCard /> 
      <Contact />
      <Footer />
    </div>
  );
}