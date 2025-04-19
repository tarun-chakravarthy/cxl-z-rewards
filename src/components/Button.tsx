import React from 'react'
import { Link } from 'react-router-dom'

interface ButtonProps {
  text: string
  to?: string
  onClick?: () => void
  disabled?: boolean
}

const Button: React.FC<ButtonProps> = ({ text, to, onClick, disabled }) => {
  const baseClass =
    'bg-transparent text-primary font-medium max-h-[42px] px-3 border border-grey rounded-[10px] disabled:opacity-50 disabled:cursor-not-allowed'

  if (to) {
    return (
      <Link to={to} className={baseClass} onClick={onClick}>
        {text}
      </Link>
    )
  }

  return (
    <button className={baseClass} onClick={onClick} disabled={disabled}>
      {text}
    </button>
  )
}

export default Button
