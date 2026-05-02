import { useState } from 'react'
import ProjectCard from '../components/ProjectCard'
import Button from '../components/Button'
 
const INITIAL_PROJECTS = [
  {
    id: 1,
    title: 'Portfolio Website',
    description: 'My personal portfolio built with HTML, CSS, Bootstrap and vanilla JS — now migrated to React.',
    tags: ['HTML', 'CSS', 'Bootstrap', 'React'],
    emoji: '🌐',
    liveUrl: '#',
    codeUrl: '#',
    isNew: false,
  },
  {
    id: 2,
    title: 'Esports Analytics Dashboard',
    description: 'A data visualization dashboard for competitive gaming statistics using Python and Pandas.',
    tags: ['Python', 'Data Science', 'Pandas'],
    emoji: '🎮',
    liveUrl: '#',
    codeUrl: '#',
    isNew: false,
  },
  {
    id: 3,
    title: 'Student Record System',
    description: 'A simple CRUD app for managing student academic records with local persistence.',
    tags: ['JavaScript', 'LocalStorage', 'Bootstrap'],
    emoji: '📚',
    liveUrl: '#',
    codeUrl: '#',
    isNew: false,
  },
]
 
const EMPTY_FORM = { title: '', description: '', tags: '', emoji: '🚀', liveUrl: '', codeUrl: '' }
 
function Projects({ showAlert }) {
  // Req #8: state array for projects
  const [projects, setProjects] = useState(INITIAL_PROJECTS)
  const [nextId, setNextId] = useState(10)
 
  // Req #10: show/hide add form
  const [showForm, setShowForm] = useState(false)
 
  // Controlled form inputs (Req #11)
  const [form, setForm] = useState(EMPTY_FORM)
  const [formErrors, setFormErrors] = useState({})
 
  // Req #8: Remove from array
  const removeProject = (id) => {
    setProjects(prev => prev.filter(p => p.id !== id))
  }
 
  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }
 
  // Req #8: Add to array; Req #9: onSubmit
  const handleAdd = (e) => {
    e.preventDefault()
    const errs = {}
    if (!form.title.trim()) errs.title = 'Title is required.'
    if (!form.description.trim()) errs.description = 'Description is required.'
    if (Object.keys(errs).length > 0) { setFormErrors(errs); return }
 
    const newProject = {
      id: nextId,
      title: form.title.trim(),
      description: form.description.trim(),
      tags: form.tags.split(',').map(t => t.trim()).filter(Boolean),
      emoji: form.emoji || '🚀',
      liveUrl: form.liveUrl || '#',
      codeUrl: form.codeUrl || '#',
      isNew: true,
    }
 
    setProjects(prev => [newProject, ...prev])
    setNextId(prev => prev + 1)
    setForm(EMPTY_FORM)
    setFormErrors({})
    setShowForm(false)
    showAlert(`✅ "${newProject.title}" added!`, 'success')
  }
 
  return (
    <main className="container my-5 animate-fade">
      {/* ✅ Demo video — file must be in public/demo.mp4 */}
      <div className="container-custom shadow-sm mb-5 text-center">
        <h4 className="fw-bold mb-3" style={{ color: 'var(--accent)' }}>🎬 Project Demo</h4>
        <video
          controls
          style={{
            width: '100%',
            maxWidth: '700px',
            borderRadius: '10px',
            border: '1px solid var(--border-color)',
          }}
        >
          <source src="/demo.mp4" type="video/mp4" />
          Your browser does not support the video element.
        </video>
      </div>
 
      {/* Header row */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="mb-0 fw-bold">Project Showcase</h2>
        <Button
          variant={showForm ? 'outline-danger' : 'outline-primary'}
          onClick={() => { setShowForm(prev => !prev); setFormErrors({}) }}
        >
          {showForm ? '✕ Cancel' : '+ Add Project'}
        </Button>
      </div>
 
      {/* Req #10: Conditional render of add form */}
      {showForm && (
        <div
          className="container-custom mb-4 animate-up"
          style={{ border: '2px dashed var(--accent)' }}
        >
          <h5 className="fw-bold mb-3">➕ New Project</h5>
          <form onSubmit={handleAdd} noValidate>
            <div className="row g-3 mb-3">
              <div className="col-md-6">
                <label className="form-label small fw-bold text-uppercase" style={{ color: 'var(--text-muted)' }}>
                  Title *
                </label>
                <input
                  name="title"
                  className={`form-control form-control-themed${formErrors.title ? ' is-invalid' : ''}`}
                  placeholder="Project name"
                  value={form.title}
                  onChange={handleChange}
                />
                {formErrors.title && <div className="error-msg">{formErrors.title}</div>}
              </div>
              <div className="col-md-6">
                <label className="form-label small fw-bold text-uppercase" style={{ color: 'var(--text-muted)' }}>
                  Emoji
                </label>
                <input
                  name="emoji"
                  className="form-control form-control-themed"
                  placeholder="🚀"
                  value={form.emoji}
                  onChange={handleChange}
                />
              </div>
            </div>
 
            <div className="mb-3">
              <label className="form-label small fw-bold text-uppercase" style={{ color: 'var(--text-muted)' }}>
                Description *
              </label>
              <input
                name="description"
                className={`form-control form-control-themed${formErrors.description ? ' is-invalid' : ''}`}
                placeholder="What does this project do?"
                value={form.description}
                onChange={handleChange}
              />
              {formErrors.description && <div className="error-msg">{formErrors.description}</div>}
            </div>
 
            <div className="row g-3 mb-3">
              <div className="col-md-4">
                <label className="form-label small fw-bold text-uppercase" style={{ color: 'var(--text-muted)' }}>
                  Tags (comma separated)
                </label>
                <input
                  name="tags"
                  className="form-control form-control-themed"
                  placeholder="React, Node.js"
                  value={form.tags}
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-4">
                <label className="form-label small fw-bold text-uppercase" style={{ color: 'var(--text-muted)' }}>
                  Live URL
                </label>
                <input
                  name="liveUrl"
                  className="form-control form-control-themed"
                  placeholder="https://..."
                  value={form.liveUrl}
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-4">
                <label className="form-label small fw-bold text-uppercase" style={{ color: 'var(--text-muted)' }}>
                  Code URL
                </label>
                <input
                  name="codeUrl"
                  className="form-control form-control-themed"
                  placeholder="https://github.com/..."
                  value={form.codeUrl}
                  onChange={handleChange}
                />
              </div>
            </div>
 
            <Button type="submit" variant="primary">Add Project</Button>
          </form>
        </div>
      )}
 
      {/* Req #12: Map over state array — zero repeated card markup */}
      {projects.length === 0 ? (
        <div className="text-center py-5" style={{ color: 'var(--text-muted)' }}>
          <div style={{ fontSize: '3rem' }}>📭</div>
          <p className="mt-2">No projects yet. Add one above!</p>
        </div>
      ) : (
        <div className="row">
          {projects.map(project => (
            <ProjectCard
              key={project.id}
              project={project}
              onRemove={removeProject}
              showAlert={showAlert}
            />
          ))}
        </div>
      )}
    </main>
  )
}
 
export default Projects