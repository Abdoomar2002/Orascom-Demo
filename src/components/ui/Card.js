import styles from './Card.module.css'

// Single Responsibility: Handle card display and layout
// Open/Closed: Extensible through props without modifying the component
export default function Card({ 
  children, 
  variant = 'default',
  padding = 'medium',
  shadow = 'medium',
  hover = false,
  className = '',
  ...props 
}) {
  const baseClass = styles.card
  const variantClass = styles[variant]
  const paddingClass = styles[`padding${padding.charAt(0).toUpperCase() + padding.slice(1)}`]
  const shadowClass = styles[`shadow${shadow.charAt(0).toUpperCase() + shadow.slice(1)}`]
  const hoverClass = hover ? styles.hover : ''
  
  const cardClasses = `${baseClass} ${variantClass} ${paddingClass} ${shadowClass} ${hoverClass} ${className}`.trim()

  return (
    <div className={cardClasses} {...props}>
      {children}
    </div>
  )
} 