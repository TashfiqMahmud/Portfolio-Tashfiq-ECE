import { useState } from 'react'
import Button from '../components/Button'
 
function getGreeting() {
  const h = new Date().getHours()
  if (h < 12) return 'Good Morning!'
  if (h < 18) return 'Good Afternoon!'
  return 'Good Evening!'
}
 
function Home({ showAlert }) {
  const [showBio, setShowBio] = useState(false)
 
  const greeting = getGreeting()
 
  const handleToggleBio = () => {
    setShowBio(prev => {
      const next = !prev
      showAlert(next ? '📖 Bio revealed!' : '📕 Bio hidden', 'info')
      return next
    })
  }
 
  return (
    <main className="container py-5 text-center">
      <div className="row justify-content-center">
        <div className="col-lg-6 animate-up">
 
          {}
          <div className="greeting-box mb-4">
            <h1 className="display-5 fw-bold">{greeting}</h1>
            <p className="lead" style={{ color: 'var(--text-muted)' }}>
              Welcome to my digital space.
            </p>
          </div>
 
          {/* Profile card */}
          <div className="profile-card shadow-lg mx-auto">
            {/* ✅ Real profile photo — file must be in public/profile.jpg */}
            <img
              src="/profile.jpg"
              alt="Tashfiq Mahmud Niloy"
              className="img-fluid"
              style={{
                borderRadius: '15px 15px 0 0',
                width: '100%',
                height: '400px',
                objectFit: 'cover',
                objectPosition: 'center',
              }}
            />
 
            <div className="card-body p-4">
              <h2 className="h3 fw-bold mb-0">Tashfiq Mahmud Niloy</h2>
              <div className="my-3">
                <span className="badge custom-badge">CSE Major</span>
                <span className="badge bg-secondary opacity-75 ms-1">ID: 2221080642</span>
              </div>
 
              {/* Req #10: Conditional rendering — show/hide bio */}
              {showBio && (
                <div className="bio-box mb-4 text-start p-3 rounded shadow-sm animate-up">
                  <p className="mb-0">
                    I am a <strong>CSE student</strong> with a deep interest in the analytical world of{' '}
                    <strong>Data Science</strong> and the competitive landscape of <strong>Esports</strong>.
                    I enjoy bridging the gap between raw data and strategic gaming insights to decode
                    performance and trends.
                  </p>
                </div>
              )}
 
              <div className="d-grid gap-2 d-md-block">
                {/* Req #7: Conditional class on toggle button */}
                <Button
                  variant="toggle-bio"
                  className={showBio ? 'active-state' : ''}
                  onClick={handleToggleBio}
                >
                  {showBio ? 'Hide Bio' : 'Read Bio'}
                </Button>
 
                {/* Req #9: onClick event handling */}
                <Button
                  variant="primary"
                  className="px-4 shadow-sm ms-md-2"
                  onClick={() =>
                    showAlert('🪪 Student ID: 2221080642 | Dept: ECE', 'info')
                  }
                >
                  View ID
                </Button>
              </div>
            </div>
          </div>
 
        </div>
      </div>
    </main>
  )
}
 
export default Home