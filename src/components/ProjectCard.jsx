import Button from './Button'
 
function ProjectCard({ project, onRemove, showAlert }) {
  const { id, title, description, tags, emoji, liveUrl, codeUrl, isNew } = project
 
  return (
    <div className="col-md-6 col-lg-4 mb-4">
      <div className="project-card p-4 h-100 d-flex flex-column">
        {/* Emoji thumb */}
        <div className="text-center mb-3" style={{ fontSize: '2.8rem' }}>
          {emoji}
          {isNew && (
            <span
              className="badge ms-2"
              style={{ background: 'var(--accent)', fontSize: '0.65rem', verticalAlign: 'middle' }}
            >
              NEW
            </span>
          )}
        </div>
 
        <h5 className="card-title fw-bold mb-2">{title}</h5>
        <p className="card-text small mb-3" style={{ flex: 1 }}>{description}</p>
 
        {/* Tags */}
        <div className="mb-3 d-flex flex-wrap gap-1">
          {tags.map(tag => (
            <span key={tag} className="badge" style={{ background: 'var(--accent)', fontSize: '0.72rem' }}>
              {tag}
            </span>
          ))}
        </div>
 
        {/* Actions */}
        <div className="d-flex justify-content-between align-items-center gap-2">
          <div className="d-flex gap-2">
            {liveUrl && (
              <Button
                variant="primary"
                className="btn-sm"
                onClick={() => showAlert(`Opening "${title}" live demo 🚀`, 'info')}
              >
                Live →
              </Button>
            )}
            {codeUrl && (
              <Button
                variant="outline-secondary"
                className="btn-sm"
                onClick={() => showAlert(`Opening "${title}" source code`, 'info')}
              >
                Code
              </Button>
            )}
          </div>
 
          {/* Req #8: Remove element from array */}
          {onRemove && (
            <Button
              variant="outline-danger"
              className="btn-sm"
              onClick={() => {
                onRemove(id)
                showAlert(`"${title}" removed`, 'info')
              }}
            >
              ✕
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}
 
export default ProjectCard
