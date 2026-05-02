function Button({
  children,
  onClick,
  type = 'button',
  className = '',
  disabled = false,
  variant = 'primary',   
}) {
  const base = variant === 'toggle-bio' ? 'btn btn-toggle-bio' : `btn btn-${variant}`
 
  return (
    <button
      type={type}
      className={`${base} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
}
 
export default Button