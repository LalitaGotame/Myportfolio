import { useEffect } from "react";

import Hero from "./components/hero";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./style.css";

export default function App() {
  useEffect(() => {
    const cursor = document.querySelector(".cursor");
    const follower = document.querySelector(".cursor-follower");

    const move = (e) => {
      cursor.style.left = e.clientX - 5 + "px";
      cursor.style.top = e.clientY - 5 + "px";
      follower.style.left = e.clientX - 17 + "px";
      follower.style.top = e.clientY - 17 + "px";
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div>
      <div className="cursor" />
      <div className="cursor-follower" />
    
      <Hero />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}