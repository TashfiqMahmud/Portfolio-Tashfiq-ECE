const NAV_LINKS = [
  { id: 'home',      label: 'Home' },
  { id: 'about',     label: 'About' },
  { id: 'projects',  label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'contact',   label: 'Contact' },
]
 
function Navbar({ darkMode, toggleTheme, activePage, setActivePage }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark portfolio-nav sticky-top">
      <div className="container">
        {/* Brand */}
        <span
          className="navbar-brand fw-bold"
          style={{ cursor: 'pointer' }}
          onClick={() => setActivePage('home')}
        >
          TASHFIQ<span className="accent-text">.ECE</span>
        </span>
 
        {}
        <div className="d-flex align-items-center order-lg-last ms-2">
          {}
          <button
            id="themeSwitcher"
            className="btn border-0 text-white me-2"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {}
            <span>{darkMode ? '☀️' : '🌙'}</span>
          </button>
          <button
            className="navbar-toggler border-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mainNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
 
        {/* Links */}
        <div className="collapse navbar-collapse" id="mainNav">
          <div className="navbar-nav ms-auto">
            {NAV_LINKS.map(({ id, label }) => (
              <span
                key={id}
                // Req #7: conditional class based on state
                className={`nav-link ${activePage === id ? 'active' : ''}`}
                onClick={() => setActivePage(id)}
                style={{ cursor: 'pointer' }}
              >
                {label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}
 
export default Navbar