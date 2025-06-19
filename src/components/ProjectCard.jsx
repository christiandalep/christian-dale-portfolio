import { FaGithub } from 'react-icons/fa';
import './ProjectCard.css'

export function ProjectCard({ image, title, desc, tags, repo }) {
  return (
    <>
      <div className="project-card">
        <div className="project-image-wrapper">
          {image ? (
            <img src={image} alt={title} className="project-image"/> 
          ) : (
            <span>No Image</span>
          )}
        </div>
        <div className="project-body">
          <h3 className="project-title">{title}</h3>
          <p className="project-desc">{desc}</p>
          <div class="project-tags">
            {tags && tags.map((tag) => {
              return (<span>{tag}</span>);
            })}
          </div>
        </div>
        <a href={repo} className="project-github-button"><FaGithub />View Code</a>
      </div>
    </>
  );
}