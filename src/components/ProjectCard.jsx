import './ProjectCard.css'

export function ProjectCard({ image, title, desc }) {
  return (
    <>
      <div className="project-card">
        <div className="project-image-wrapper">
          { image && <img src={image} alt={title} className="project-image"/> }
        </div>
        <div className="project-body">
          <h3 className="project-title">{title}</h3>
          <p>{desc}</p>
          <div class="project-tags">
            <span>React</span><span>NodeJS</span>
          </div>
        </div>
      </div>
    </>
  );
}