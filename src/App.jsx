import { useEffect } from "react";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/hero";
import About from "./components/About";
import projectcard from "./components/projectcard"; 
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./style.css";
import ProjectCard from "./components/projectcard";

export default function App() {
  
  return (
    <div>
     
     
      <Navbar /> 
      
      <Hero />
      <About />
      <ProjectCard /> 
      
      <Contact />
      <Footer />
    </div>
  );
}