import React from 'react'

interface InputProps {
  label?: string
  type?: string
  placeholder?: string
  value: string | number
  onChange: (value: string) => void
  unit?: string
  error?: string
  className?: string
}

export default function Input({
  label,
  type = 'text',
  placeholder,
  value,
  onChange,
  unit,
  error,
  className = '',
}: InputProps) {
  return (
    <div className={`w-full ${className}`}>
      {label && (
        <label className="block text-sm font-semibold text-text mb-2">
          {label}
        </label>
      )}
      <div className="relative">
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className={`w-full px-4 py-3 rounded-2xl border-2 transition-colors duration-200 focus:outline-none focus:border-primary ${
            error ? 'border-red-400' : 'border-gray-200'
          } ${unit ? 'pr-12' : ''}`}
        />
        {unit && (
          <span className="absolute right-4 top-1/2 -translate-y-1/2 text-text-light font-semibold">
            {unit}
          </span>
        )}
      </div>
      {error && (
        <p className="mt-1 text-sm text-red-500">{error}</p>
      )}
    </div>
  )
}
