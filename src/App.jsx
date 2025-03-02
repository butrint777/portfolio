import React from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import "./App.css";

function App() {
  return (
    <div className="App">
      {/* About Me Section */}
      <section className="about-me">
        <div className="container">
          <div className="about-me-content">
            <div className="profile-img"></div>
            <div className="bio">
              <h1>Butrint Hasanaj</h1>
              <p>
                I'm a passionate Front-End Developer with 15 months of experience. I am dedicated to
                building clean, responsive websites using HTML, CSS, JavaScript, and React. Based in Germany, I
                enjoy taking on challenging projects and solving problems through code.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="skills">
        <div className="container">
          <h2>My Skills</h2>
          <div className="skill-icons">
            <div className="skill">
              <FaHtml5 size={40} />
              <span>HTML</span>
            </div>
            <div className="skill">
              <FaCss3Alt size={40} />
              <span>CSS</span>
            </div>
            <div className="skill">
              <FaJs size={40} />
              <span>JavaScript</span>
            </div>
            <div className="skill">
              <FaReact size={40} />
              <span>React</span>
            </div>
            <div className="skill">
              <FaGithub size={40} />
              <span>GitHub</span>
            </div>
            <div className="skill">
              <FaLinkedin size={40} />
              <span>LinkedIn</span>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="projects">
        <div className="container">
          <h2>My Projects</h2>
          <div className="project">
            <h3>Horror Movies Project</h3>
            <p>A fun project displaying a list of horror movies with information and trailers.</p>
            <div className="project-btn-wrapper">
              <a
                href="https://project1-mauve-omega.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="project-btn"
              >
                View Project
              </a>
            </div>
          </div>
          <div className="project">
  <h3>Food Delivery App</h3>
  <p>
    Our final project in the DCI course – a food delivery app developed by a team of 4 students, featuring real-time order tracking.
  </p>
  <div className="project-btn-wrapper">
    <a
      href="https://deliveats-food-delivery-app.onrender.com/"
      target="_blank"
      rel="noopener noreferrer"
      className="project-btn"
    >
      View Project
    </a>
  </div>
</div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact">
        <div className="container">
          <h2>Contact Me</h2>
          <p>If you want to work with me or have any questions, feel free to reach out!</p>
          <div className="contact-info">
            <div className="contact-item">
              <FaEnvelope size={20} />
              <a href="mailto:butrint.hasanaj@web.de">butrint.hasanaj@web.de</a>
            </div>
            <div className="contact-item">
              <FaLinkedin size={20} />
              <a
                href="https://www.linkedin.com/in/butrint-hasanaj-503886328/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </div>
            <div className="contact-item">
              <FaGithub size={20} />
              <a
                href="https://github.com/butrint777?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </div>
            <div className="contact-btn-wrapper">
              <a
                href="mailto:butrint.hasanaj@web.de?subject=Let's Connect&body=Hi Butrint, I would like to discuss ..."
                className="contact-btn"
              >
                Hire Me
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer>
        <div className="container">
          <p>&copy; 2025 Butrint Hasanaj. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
