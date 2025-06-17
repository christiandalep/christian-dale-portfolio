import './Experience.css'

export function Experience({ company, position, year, desc }) {
  return (
    <>
      <div className="exp-item">
        <div className="exp-left">
          <div className="exp-company">{company}</div>
          <div className="exp-position">{position}</div>
          <div className="exp-year">{year}</div>
        </div>
        <div className="exp-line"></div>
        <div className="exp-right">{desc}</div>
      </div>
    </>
  );
}