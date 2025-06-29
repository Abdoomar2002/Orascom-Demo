import Link from 'next/link'
import styles from './Button.module.css'

// Single Responsibility: Handle button display and interaction
// Open/Closed: Extensible through props without modifying the component
export default function Button({ 
  children, 
  variant = 'primary', 
  size = 'medium', 
  href, 
  onClick, 
  type = 'button',
  disabled = false,
  className = '',
  ...props 
}) {
  const baseClass = styles.button
  const variantClass = styles[variant]
  const sizeClass = styles[size]
  const disabledClass = disabled ? styles.disabled : ''
  
  const buttonClasses = `${baseClass} ${variantClass} ${sizeClass} ${disabledClass} ${className}`.trim()

  // If href is provided, render as Link
  if (href) {
    return (
      <Link href={href} className={buttonClasses} {...props}>
        {children}
      </Link>
    )
  }

  // Otherwise render as button
  return (
    <button
      type={type}
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  )
} 