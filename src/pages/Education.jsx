import { useState } from 'react'
import Button from '../components/Button'
 
const EDU_DATA = [
  { field: 'University', detail: 'North South University, Dhaka' },
  { field: 'Department', detail: 'Electrical & Computer Engineering (ECE)' },
  { field: 'Major', detail: 'Computer Science & Engineering (CSE)' },
  { field: 'Student ID', detail: '2221080642' },
  { field: 'Status', detail: 'Undergraduate (Ongoing)' },
]
 
const COURSES = [
  'Web Technologies', 'Data Structures', 'Algorithms',
  'Database Systems', 'Digital Logic', 'Operating Systems',
]
 
function Education() {
  // Req #10: conditional rendering
  const [showCourses, setShowCourses] = useState(false)
 
  return (
    <main className="container my-5 animate-fade">
      <div
        className="alert shadow-sm mb-4 text-center fw-bold"
        style={{ background: 'var(--accent)', color: '#fff', borderRadius: 10 }}
        role="alert"
      >
        📖 Undergraduate Academic Profile
      </div>
 
      {/* Academic table */}
      <div className="container-custom shadow-sm mb-4">
        <h4 className="fw-bold mb-3" style={{ color: 'var(--accent)' }}>Academic Details</h4>
        <div className="table-responsive">
          <table className="table table-hover table-themed mb-0">
            <thead>
              <tr style={{ background: 'var(--nav-bg)', color: '#fff' }}>
                <th>Field</th>
                <th>Detail</th>
              </tr>
            </thead>
            <tbody>
              {}
              {EDU_DATA.map(({ field, detail }) => (
                <tr key={field}>
                  <td className="fw-semibold">{field}</td>
                  <td>{detail}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
 
      {}
      <div className="container-custom shadow-sm mb-4">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h4 className="fw-bold mb-0" style={{ color: 'var(--accent)' }}>Current Courses</h4>
          <Button
            variant="outline-primary"
            className="btn-sm"
            onClick={() => setShowCourses(prev => !prev)}
          >
            {showCourses ? '▲ Hide' : '▼ Show'}
          </Button>
        </div>
 
        {showCourses && (
          <div className="d-flex flex-wrap gap-2 animate-up">
            {COURSES.map(c => (
              <span
                key={c}
                className="badge"
                style={{ background: 'var(--accent)', fontSize: '0.85rem', padding: '0.4rem 0.85rem' }}
              >
                {c}
              </span>
            ))}
          </div>
        )}
      </div>
 
      {/* Audio section */}
      <div className="container-custom shadow-sm text-center">
        <h4 className="fw-bold mb-3">🎙 Audio Introduction</h4>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }} className="mb-3">
          (Place <code>intro.mp3</code> in the <code>public/</code> folder)
        </p>
        <audio controls className="mt-2" style={{ width: '100%', maxWidth: 400 }}>
          <source src="/intro.mp3" type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      </div>
    </main>
  )
}
 
export default Education