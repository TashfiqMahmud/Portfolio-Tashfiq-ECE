function Alert({ message, type, onClose }) {
  return (
    <div className="theme-feedback" role="alert" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
      <span style={{ flex: 1 }}>{message}</span>
      <button
        onClick={onClose}
        style={{
          background: 'none',
          border: 'none',
          color: '#fff',
          cursor: 'pointer',
          fontSize: '1rem',
          lineHeight: 1,
          padding: '0 0.25rem',
        }}
        aria-label="Close"
      >
        ×
      </button>
    </div>
  )
}
 
export default Alert
 