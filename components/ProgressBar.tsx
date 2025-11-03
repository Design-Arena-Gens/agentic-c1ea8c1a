import React from 'react'

interface ProgressBarProps {
  progress: number
  color?: string
  height?: string
  label?: string
  showPercentage?: boolean
}

export default function ProgressBar({
  progress,
  color = '#4CAF50',
  height = 'h-3',
  label,
  showPercentage = false,
}: ProgressBarProps) {
  return (
    <div className="w-full">
      {(label || showPercentage) && (
        <div className="flex justify-between items-center mb-2">
          {label && <span className="text-sm font-semibold text-text">{label}</span>}
          {showPercentage && <span className="text-sm text-text-light">{Math.round(progress)}%</span>}
        </div>
      )}
      <div className={`w-full bg-gray-200 rounded-pill ${height} overflow-hidden`}>
        <div
          className="rounded-pill transition-all duration-500 ease-out"
          style={{
            width: `${Math.min(progress, 100)}%`,
            height: '100%',
            backgroundColor: color,
          }}
        />
      </div>
    </div>
  )
}
