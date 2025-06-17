import './ProjectCard.css'

export function ProjectCard({ image, title, desc }) {
  return (
    <>
      <div className="project-card">
        { image && <img src={image} alt={title} className="project-image"/> }
        <h3 className="project-title">{title}</h3>
        <p>{desc}</p>
      </div>
    </>
  );
}