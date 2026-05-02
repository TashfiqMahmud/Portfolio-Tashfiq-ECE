import ContactForm from '../components/ContactForm'
 
function Contact({ showAlert }) {
  return (
    <main className="container py-5 animate-up">
      <div className="row justify-content-center">
        <div className="col-lg-6">
          <div className="profile-card p-5 shadow-lg">
            <h2 className="fw-bold mb-2">Get In Touch</h2>
            <p className="mb-4" style={{ color: 'var(--text-muted)' }}>
              Have a question? Drop a message below.
            </p>
 
            {}
            <ContactForm showAlert={showAlert} />
          </div>
        </div>
      </div>
    </main>
  )
}
 
export default Contact