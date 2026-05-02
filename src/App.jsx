import { useState, useEffect } from 'react'
import MainLayout from './layouts/MainLayout'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Education from './pages/Education'
import Contact from './pages/Contact'
import Alert from './components/Alert'
 
function App() {
  // ── Req #7, #10: Theme state (replaces localStorage + classList manipulation)
  const [darkMode, setDarkMode] = useState(
    () => localStorage.getItem('portfolio-theme') === 'dark'
  )
 
  // ── Active page state (replaces multi-page HTML routing)
  const [activePage, setActivePage] = useState('home')
 
  // ── Req #10: Global alert / toast state
  const [alert, setAlert] = useState(null) // { message, type }
 
  // Apply theme class to <body>
  useEffect(() => {
    document.body.className = darkMode ? 'theme-dark' : 'theme-light'
    localStorage.setItem('portfolio-theme', darkMode ? 'dark' : 'light')
  }, [darkMode])
 
  const showAlert = (message, type = 'info') => {
    setAlert({ message, type })
    setTimeout(() => setAlert(null), 2500)
  }
 
  const toggleTheme = () => {
    setDarkMode(prev => !prev)
    showAlert(darkMode ? '☀️ Light Mode Active' : '🌙 Dark Mode Active', 'info')
  }
 
  const renderPage = () => {
    switch (activePage) {
      case 'home':      return <Home showAlert={showAlert} />
      case 'about':     return <About />
      case 'projects':  return <Projects showAlert={showAlert} />
      case 'education': return <Education />
      case 'contact':   return <Contact showAlert={showAlert} />
      default:          return <Home showAlert={showAlert} />
    }
  }
 
  return (
    <MainLayout
      darkMode={darkMode}
      toggleTheme={toggleTheme}
      activePage={activePage}
      setActivePage={setActivePage}
    >
      {}
      {alert && (
        <Alert
          message={alert.message}
          type={alert.type}
          onClose={() => setAlert(null)}
        />
      )}
 
      {renderPage()}
    </MainLayout>
  )
}
 
export default App