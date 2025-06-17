import './ProjectCard.css'

export function ProjectCard({ title, desc }) {
  return (
    <>
      <div className="project-card">
        <h3 className="project-title">{title}</h3>
        <p>{desc}</p>
      </div>
    </>
  );
}