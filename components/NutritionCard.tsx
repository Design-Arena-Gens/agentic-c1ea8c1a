import React from 'react'
import Card from './Card'
import ProgressBar from './ProgressBar'

interface NutritionCardProps {
  name: string
  current: number
  goal: number
  unit: string
  color: string
  icon: React.ReactNode
}

export default function NutritionCard({
  name,
  current,
  goal,
  unit,
  color,
  icon,
}: NutritionCardProps) {
  const progress = (current / goal) * 100

  return (
    <Card padding="md" hover>
      <div className="flex items-center gap-3 mb-4">
        <div
          className="w-12 h-12 rounded-2xl flex items-center justify-center"
          style={{ backgroundColor: `${color}20` }}
        >
          <div style={{ color }}>{icon}</div>
        </div>
        <div className="flex-1">
          <h3 className="font-bold text-text text-lg">{name}</h3>
          <p className="text-text-light text-sm">
            {current} / {goal} {unit}
          </p>
        </div>
      </div>
      <ProgressBar progress={progress} color={color} height="h-2" />
    </Card>
  )
}
