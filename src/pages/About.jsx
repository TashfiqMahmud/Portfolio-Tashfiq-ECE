import { useState } from 'react'
import Button from '../components/Button'
 
const SKILLS = ['React', 'JavaScript', 'HTML/CSS', 'Bootstrap', 'Python', 'Data Science', 'Git', 'Figma']
 
function About() {
  const [showSkills, setShowSkills] = useState(true)
 
  return (
    <main className="container my-5 animate-fade">
      <div className="container-custom shadow-sm border-top border-primary border-5">
        <h2 className="display-5 fw-bold mb-4" style={{ color: 'var(--accent)' }}>
          About Me
        </h2>
 
        <p className="lead">
          Name: <strong>Tashfiq Mahmud Niloy</strong>
        </p>
        <p>Dept: ECE | Major: CSE</p>
        <p style={{ color: 'var(--text-muted)' }} className="mb-4">
          I am passionate about learning modern frameworks to build responsive web designs. My core
          interest lies in <strong>Data Science</strong> and the intersection of data with competitive
          gaming (Esports analytics).
        </p>
 
        {}
        <Button
          variant="outline-primary"
          className="mb-3"
          onClick={() => setShowSkills(prev => !prev)}
        >
          {showSkills ? '▲ Hide Skills' : '▼ Show Skills'}
        </Button>
 
        {showSkills && (
          <div className="d-flex flex-wrap gap-2 animate-up mb-2">
            {SKILLS.map(skill => (
              <span
                key={skill}
                className="badge"
                style={{ background: 'var(--accent)', fontSize: '0.85rem', padding: '0.45rem 0.9rem' }}
              >
                {skill}
              </span>
            ))}
          </div>
        )}
      </div>
    </main>
  )
}
 
export default About