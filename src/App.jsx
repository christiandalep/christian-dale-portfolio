import './index.css';
import profilePic from './assets/images/profile.jpg';
import { experiences } from './data/experiences.js';
import { projects } from './data/projects.js';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { Experience } from './components/Experience.jsx'
import { ProjectCard } from './components/ProjectCard'

export default function App() {
  return (
    <>
      <section className="intro-section">
        <div className="intro-inner">
          <div className="intro-content">
            <div className="profile">
              <img src={profilePic} alt="Christian Dale Pancho" />
            </div>
            <div className="about">
              <h1>Christian Dale Pancho</h1>
              <p className="profile-position">Graduate Software Developer</p>
              <p className="profile-expertise">Focusing on Full-Stack development</p>
              <p className="profile-desc">Graduate Software Developer passionate about clean code, full-stack development, and problem-solving.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="experience-section">
        <div className="experiences">
          <h1>Experience</h1>
          <div className="experience-grid">
            {experiences.map((exp, i) => (
              <Experience 
                key={i}
                company={exp.company}
                position={exp.position}
                year={exp.year}
                desc={exp.desc}
              />
            ))}
          </div>
        </div>

        <div className="projects">
          <h1>Projects</h1>
          <div className="project-grid">
            {projects.map((p, i) => (
              <ProjectCard key={i} image={p.image ? p.image : ""} title={p.title} desc={p.desc} tags={p.tags && p.tags}/>
            ))}
          </div>
        </div>
      </section>

      <footer className="footer-container">
        <div className="footer">
          <div className="footer-inner">
            <h2>Get in touch</h2>
            <div className="contacts">
              <a className="contacts-item" href="mailto:christiandale.dev@gmail.com" aria-label="Email">
                <FaEnvelope />
                <span>christiandale.dev@gmail.com</span>
              </a>
              <a className="contacts-item" href="https://www.linkedin.com/in/christian-pancho" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedin />
                <span>Christian Dale Pancho</span>
              </a>
              <a className="contacts-item" href="https://github.com/christiandalep" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <FaGithub />
                <span>christiandalep</span>
              </a>
            </div>
            <span className="footer-copyright">Christian Dale Pancho &copy; 2025</span>
          </div>
        </div>
      </footer>
    </>
  );
}
