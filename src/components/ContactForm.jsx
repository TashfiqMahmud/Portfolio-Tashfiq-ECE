import { useState } from 'react'
import Button from './Button'
 
const EMPTY = { name: '', email: '', message: '' }
const EMPTY_ERRORS = { name: '', email: '', message: '' }
 
function validate(values) {
  const errors = {}
  if (!values.name.trim())
    errors.name = 'Full name is required.'
  else if (values.name.trim().length < 2)
    errors.name = 'Name must be at least 2 characters.'
 
  if (!values.email.trim())
    errors.email = 'Email address is required.'
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email))
    errors.email = 'Enter a valid email address.'
 
  if (!values.message.trim())
    errors.message = 'Message cannot be empty.'
  else if (values.message.trim().length < 10)
    errors.message = 'Message must be at least 10 characters.'
 
  return errors
}
 
function ContactForm({ showAlert }) {
  const [form, setForm] = useState(EMPTY)
  const [errors, setErrors] = useState(EMPTY_ERRORS)
  const [touched, setTouched] = useState({ name: false, email: false, message: false })
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
 
  const handleChange = (e) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
    if (touched[name]) {
      const errs = validate({ ...form, [name]: value })
      setErrors(prev => ({ ...prev, [name]: errs[name] || '' }))
    }
  }
 
  const handleBlur = (e) => {
    const { name } = e.target
    setTouched(prev => ({ ...prev, [name]: true }))
    const errs = validate(form)
    setErrors(prev => ({ ...prev, [name]: errs[name] || '' }))
  }
 
  const handleSubmit = (e) => {
    e.preventDefault()
    setTouched({ name: true, email: true, message: true })
    const errs = validate(form)
    setErrors({ name: errs.name || '', email: errs.email || '', message: errs.message || '' })
 
    if (Object.keys(errs).length > 0) {
      showAlert('⚠️ Please fix the errors before submitting.', 'error')
      return
    }
 
    setSubmitting(true)
    setTimeout(() => {
      setSubmitting(false)
      setSubmitted(true)
      setForm(EMPTY)
      setTouched({ name: false, email: false, message: false })
      setErrors(EMPTY_ERRORS)
      showAlert('✅ Message sent successfully!', 'success')
      setTimeout(() => setSubmitted(false), 5000)
    }, 1200)
  }
 
  const fieldClass = (field) => {
    const base = 'form-control form-control-lg form-control-themed'
    if (!touched[field]) return base
    return errors[field] ? `${base} is-invalid` : `${base} is-valid`
  }
 
  if (submitted) {
    return (
      <div className="text-center py-5 status-success animate-up">
        <div style={{ fontSize: '2.5rem', marginBottom: '0.75rem' }}>🎉</div>
        <h5 className="fw-bold">Message sent!</h5>
        <p className="mb-3">Thanks for reaching out. I'll get back to you soon.</p>
        <Button variant="outline-primary" onClick={() => setSubmitted(false)}>
          Send Another
        </Button>
      </div>
    )
  }
 
  return (
    <form id="contactForm" onSubmit={handleSubmit} noValidate>
      {/* Name */}
      <div className="mb-3 text-start">
        <label className="form-label fw-bold small text-uppercase" style={{ color: 'var(--text-muted)' }}>
          Full Name
        </label>
        <input
          type="text"
          name="name"
          id="formName"
          className={fieldClass('name')}
          placeholder="e.g. Tashfiq Mahmud"
          value={form.name}
          onChange={handleChange}
          onBlur={handleBlur}
          required
        />
        <div className="error-msg">{touched.name && errors.name}</div>
      </div>
 
      {/* Email */}
      <div className="mb-3 text-start">
        <label className="form-label fw-bold small text-uppercase" style={{ color: 'var(--text-muted)' }}>
          Email Address
        </label>
        <input
          type="email"
          name="email"
          id="formEmail"
          className={fieldClass('email')}
          placeholder="name@email.com"
          value={form.email}
          onChange={handleChange}
          onBlur={handleBlur}
          required
        />
        <div className="error-msg">{touched.email && errors.email}</div>
      </div>
 
      {/* Message */}
      <div className="mb-4 text-start">
        <label className="form-label fw-bold small text-uppercase" style={{ color: 'var(--text-muted)' }}>
          Your Message
        </label>
        <textarea
          name="message"
          id="formMessage"
          className={fieldClass('message').replace('form-control-lg', '')}
          rows="4"
          placeholder="Write your message here..."
          value={form.message}
          onChange={handleChange}
          onBlur={handleBlur}
          required
        />
        <div className="error-msg">{touched.message && errors.message}</div>
      </div>
 
      {/* Submit */}
      <button
        type="submit"
        className="btn btn-primary btn-lg w-100 fw-bold py-3 shadow"
        disabled={submitting}
      >
        <span id="btnText">{submitting ? 'Sending…' : 'Send Message'}</span>
        {submitting && (
          <span className="spinner-border spinner-border-sm ms-2" role="status" />
        )}
      </button>
    </form>
  )
}
 
export default ContactForm