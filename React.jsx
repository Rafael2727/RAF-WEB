import React, { useState } from 'react';
import './App.css'; // Assuming external CSS is in App.css
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faGithub, faTiktok } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSearch = () => {
    const term = searchTerm.toLowerCase().trim();
    if (term) {
      if (term.includes('home')) {
        scrollToSection('home');
      } else if (term.includes('about')) {
        scrollToSection('about');
      } else if (term.includes('projects')) {
        scrollToSection('projects');
      } else if (term.includes('contact')) {
        scrollToSection('contact');
      } else {
        console.log(`No match found for: ${term}`);
        alert('No matching section found.');
      }
    } else {
      console.log('Please enter a search term');
    }
  };

  return (
    <div id="app">
      {/* Navigation Bar */}
      <div className="navbar">
        <div className="icon">
          <h2 className="logo">Rap Web</h2>
        </div>
        <div className="menu">
          <ul>
            <li><a href="#home" onClick={() => scrollToSection('home')}>Home</a></li>
            <li><a href="#about" onClick={() => scrollToSection('about')}>About</a></li>
            <li><a href="#projects" onClick={() => scrollToSection('projects')}>Projects</a></li>
            <li><a href="#contact" onClick={() => scrollToSection('contact')}>Contact</a></li>
          </ul>
        </div>
        <div className="search">
          <input
            type="search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Type to search"
          />
          <button onClick={handleSearch} className="btn">Search</button>
        </div>
      </div>

      {/* Sections */}
      <section id="home">
        <h2>Home</h2>
        <p>Welcome to my Portfolio Web, I'm a former beginner to programming<br />striving for improvements in my coding.</p>
      </section>

      <section id="about">
        <h2>About Me</h2>
        <p>Hi! I'm <b>Rafael L. Batnag Jr.</b><br />
          1st year <b>BSIT-1A</b><br />
          Born on <b>January 27, 2006</b><br />
          <b>18</b> years old, from <b>MASINLOC ZAMBALES</b><br />
          Currently living in <b>SINABACAN CANDELARIA</b><br /><br />
          Currently learning front-end <b>HTML, CSS, JavaScript</b><br />
        </p>
      </section>

      <section id="projects">
        <h2>Projects</h2>
        <p>This is my projects. <a href="projects/loginpage.html">Login Page</a>
          <a href="projects/Modified Calculator.html">Modified Calculator</a> <a href="projects/Dateme.html">Date me</a> <a href="projects/Birthday Cake.html">Birthday Cake</a></p>
      </section>

      <section id="contact">
        <h2>Contact Section</h2>
        <p>Contact me with my Social Media Account</p>
        <footer>
          <h3>Connect with me:</h3>
          <div className="social-links">
            <a href="https://www.facebook.com/rafael.batnag.7" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebook} /></a>
            <a href="https://www.instagram.com/rafael_batnag/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} /></a>
            <a href="https://www.github.com/Rafael2727" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} /></a>
            <a href="https://www.tiktok.com/@rafael_2.27" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faTiktok} /></a>
            <a href="mailto:your-email@example.com"><FontAwesomeIcon icon={faEnvelope} /></a>
          </div>
        </footer>
      </section>
    </div>
  );
}

export default App;
