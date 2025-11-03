import React from 'react'

interface CardProps {
  children: React.ReactNode
  className?: string
  padding?: 'sm' | 'md' | 'lg'
  hover?: boolean
}

export default function Card({
  children,
  className = '',
  padding = 'md',
  hover = false,
}: CardProps) {
  const paddings = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  }

  const hoverClass = hover ? 'hover:shadow-lg transition-shadow duration-200' : ''

  return (
    <div
      className={`bg-background-white rounded-2xl shadow-md ${paddings[padding]} ${hoverClass} ${className}`}
    >
      {children}
    </div>
  )
}
