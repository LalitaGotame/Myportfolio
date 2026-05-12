


export default function Footer() {
  

  return (
    <>
      <footer className="footer">
        <div>
          <div className="footer-brand">LG</div>
          <p className="footer-tagline">Frontend developer<br />based in Nepal.<br />Open to opportunities.</p>
        </div>
        <div>
          <h4>Navigation</h4>
          <a href="#hero">Home</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
        <div>
          <h4>Connect</h4>
          <a href="https://github.com/LalitaGotame" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://linkedin.com/in/lalitagotame" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          
        </div>
        <div>
          <h4>Stack</h4>
          <p>React</p>
          <p>Django</p>
          <p>Python</p>
        </div>
      </footer>
      <div className="footer-bottom">
        <span>© 2025 Lalita Gotame</span>
        <span>Built with React + Framer Motion</span>
      </div>
    </>
  );
}