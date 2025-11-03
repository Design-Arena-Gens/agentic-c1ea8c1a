import React from 'react'
import Card from './Card'

interface StatCardProps {
  icon: React.ReactNode
  label: string
  value: string
  subtitle?: string
  color?: string
}

export default function StatCard({
  icon,
  label,
  value,
  subtitle,
  color = '#4CAF50',
}: StatCardProps) {
  return (
    <Card padding="md" hover>
      <div className="flex items-center gap-3">
        <div
          className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
          style={{ backgroundColor: `${color}20` }}
        >
          <div style={{ color }}>{icon}</div>
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-text-light text-xs font-semibold uppercase tracking-wide mb-1">
            {label}
          </p>
          <p className="text-text font-bold text-2xl truncate">{value}</p>
          {subtitle && (
            <p className="text-text-light text-xs mt-1">{subtitle}</p>
          )}
        </div>
      </div>
    </Card>
  )
}
