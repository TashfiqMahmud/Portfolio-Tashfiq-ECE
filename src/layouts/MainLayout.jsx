import Navbar from '../components/Navbar'
 
function MainLayout({ children, darkMode, toggleTheme, activePage, setActivePage }) {
  return (
    <>
      <Navbar
        darkMode={darkMode}
        toggleTheme={toggleTheme}
        activePage={activePage}
        setActivePage={setActivePage}
      />
      <main>{children}</main>
    </>
  )
}
 
export default MainLayout