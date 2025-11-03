import React from 'react'
import Card from './Card'
import { Clock, Flame } from 'lucide-react'

interface MealCardProps {
  mealType: string
  time: string
  foods: { name: string; calories: number }[]
  totalCalories: number
  onAdd?: () => void
}

export default function MealCard({
  mealType,
  time,
  foods,
  totalCalories,
  onAdd,
}: MealCardProps) {
  return (
    <Card padding="md" hover>
      <div className="flex justify-between items-start mb-3">
        <div>
          <h3 className="font-bold text-text text-lg">{mealType}</h3>
          <div className="flex items-center gap-1 text-text-light text-sm mt-1">
            <Clock size={14} />
            <span>{time}</span>
          </div>
        </div>
        <div className="flex items-center gap-2 bg-secondary/10 px-3 py-1 rounded-pill">
          <Flame size={16} className="text-secondary" />
          <span className="font-bold text-secondary">{totalCalories} kcal</span>
        </div>
      </div>

      {foods.length > 0 ? (
        <div className="space-y-2 mb-3">
          {foods.map((food, idx) => (
            <div
              key={idx}
              className="flex justify-between items-center text-sm py-2 border-b border-gray-100 last:border-0"
            >
              <span className="text-text">{food.name}</span>
              <span className="text-text-light">{food.calories} kcal</span>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-text-light text-sm mb-3">No food logged yet</p>
      )}

      <button
        onClick={onAdd}
        className="w-full py-2 text-primary font-semibold hover:bg-primary/5 rounded-xl transition-colors duration-200"
      >
        + Add Food
      </button>
    </Card>
  )
}
