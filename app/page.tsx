'use client'

import React, { useState } from 'react'
import { Droplets, Flame, Activity, Target, Coffee, Sun, Moon, Utensils } from 'lucide-react'
import NavigationBar from '@/components/NavigationBar'
import Card from '@/components/Card'
import Button from '@/components/Button'
import ProgressRing from '@/components/ProgressRing'
import NutritionCard from '@/components/NutritionCard'
import StatCard from '@/components/StatCard'
import MealCard from '@/components/MealCard'
import WeeklyChart from '@/components/WeeklyChart'

export default function Home() {
  const [activeTab, setActiveTab] = useState('home')

  // Sample data
  const dailyGoals = {
    calories: { current: 1450, goal: 2000 },
    protein: { current: 65, goal: 120 },
    carbs: { current: 180, goal: 250 },
    fat: { current: 45, goal: 65 },
    water: { current: 1.8, goal: 3.0 },
  }

  const weeklyData = [
    { day: 'Mon', calories: 1850, goal: 2000 },
    { day: 'Tue', calories: 2100, goal: 2000 },
    { day: 'Wed', calories: 1920, goal: 2000 },
    { day: 'Thu', calories: 1750, goal: 2000 },
    { day: 'Fri', calories: 1450, goal: 2000 },
    { day: 'Sat', calories: 0, goal: 2000 },
    { day: 'Sun', calories: 0, goal: 2000 },
  ]

  const meals = [
    {
      type: 'Breakfast',
      time: '8:00 AM',
      foods: [
        { name: 'Oatmeal with berries', calories: 320 },
        { name: 'Greek yogurt', calories: 150 },
      ],
      total: 470,
    },
    {
      type: 'Lunch',
      time: '1:00 PM',
      foods: [
        { name: 'Grilled chicken salad', calories: 450 },
        { name: 'Whole wheat bread', calories: 180 },
      ],
      total: 630,
    },
    {
      type: 'Dinner',
      time: '7:00 PM',
      foods: [
        { name: 'Salmon with vegetables', calories: 350 },
      ],
      total: 350,
    },
    {
      type: 'Snacks',
      time: 'Throughout day',
      foods: [],
      total: 0,
    },
  ]

  const renderHome = () => (
    <div className="space-y-6">
      {/* Hero Section */}
      <Card padding="lg" className="bg-gradient-to-br from-primary to-primary-dark text-white">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">Welcome back! 👋</h1>
            <p className="text-white/90">You're doing great today!</p>
          </div>
          <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-pill">
            <Flame size={20} />
            <span className="font-bold">{dailyGoals.calories.current} kcal</span>
          </div>
        </div>
      </Card>

      {/* Daily Progress Ring */}
      <Card padding="md">
        <h2 className="font-bold text-text text-xl mb-4">Daily Calorie Goal</h2>
        <div className="flex flex-col items-center py-4">
          <ProgressRing
            progress={(dailyGoals.calories.current / dailyGoals.calories.goal) * 100}
            size={180}
            strokeWidth={12}
            value={`${dailyGoals.calories.current}`}
            label="of 2000 kcal"
          />
          <p className="text-text-light text-sm mt-4">
            {dailyGoals.calories.goal - dailyGoals.calories.current} kcal remaining
          </p>
        </div>
      </Card>

      {/* Macronutrients */}
      <div>
        <h2 className="font-bold text-text text-xl mb-3 px-1">Macronutrients</h2>
        <div className="grid grid-cols-1 gap-4">
          <NutritionCard
            name="Protein"
            current={dailyGoals.protein.current}
            goal={dailyGoals.protein.goal}
            unit="g"
            color="#FF8A65"
            icon={<Activity size={24} />}
          />
          <NutritionCard
            name="Carbs"
            current={dailyGoals.carbs.current}
            goal={dailyGoals.carbs.goal}
            unit="g"
            color="#FFB74D"
            icon={<Coffee size={24} />}
          />
          <NutritionCard
            name="Fat"
            current={dailyGoals.fat.current}
            goal={dailyGoals.fat.goal}
            unit="g"
            color="#BA68C8"
            icon={<Droplets size={24} />}
          />
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 gap-4">
        <StatCard
          icon={<Droplets size={24} />}
          label="Water"
          value={`${dailyGoals.water.current}L`}
          subtitle={`Goal: ${dailyGoals.water.goal}L`}
          color="#4FC3F7"
        />
        <StatCard
          icon={<Target size={24} />}
          label="Streak"
          value="7 days"
          subtitle="Keep it up!"
          color="#4CAF50"
        />
      </div>

      {/* Quick Action Button */}
      <Button fullWidth size="lg" onClick={() => setActiveTab('meals')}>
        <div className="flex items-center justify-center gap-2">
          <Utensils size={20} />
          <span>Log Food</span>
        </div>
      </Button>
    </div>
  )

  const renderProgress = () => (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-text mb-2">Progress</h1>
        <p className="text-text-light">Track your nutrition journey</p>
      </div>

      <WeeklyChart data={weeklyData} />

      <div className="grid grid-cols-2 gap-4">
        <StatCard
          icon={<Flame size={24} />}
          label="Avg Calories"
          value="1814"
          subtitle="Last 7 days"
          color="#FF8A65"
        />
        <StatCard
          icon={<Target size={24} />}
          label="Goal Hit"
          value="5/7"
          subtitle="This week"
          color="#4CAF50"
        />
      </div>

      <Card padding="md">
        <h3 className="font-bold text-text text-lg mb-4">Achievements 🏆</h3>
        <div className="space-y-3">
          <div className="flex items-center gap-3 p-3 bg-primary/10 rounded-xl">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-2xl">
              🔥
            </div>
            <div>
              <p className="font-bold text-text">7 Day Streak</p>
              <p className="text-text-light text-sm">Keep the momentum going!</p>
            </div>
          </div>
          <div className="flex items-center gap-3 p-3 bg-secondary/10 rounded-xl">
            <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-2xl">
              💪
            </div>
            <div>
              <p className="font-bold text-text">Protein Champion</p>
              <p className="text-text-light text-sm">Hit protein goal 5 days in a row</p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  )

  const renderMeals = () => (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-text mb-2">Today's Meals</h1>
        <p className="text-text-light">Friday, November 3</p>
      </div>

      <div className="space-y-4">
        {meals.map((meal, idx) => (
          <MealCard
            key={idx}
            mealType={meal.type}
            time={meal.time}
            foods={meal.foods}
            totalCalories={meal.total}
            onAdd={() => alert('Add food functionality')}
          />
        ))}
      </div>

      <Card padding="md" className="bg-gradient-to-br from-primary/10 to-secondary/10">
        <h3 className="font-bold text-text mb-2">💡 Nutrition Tip</h3>
        <p className="text-text-light text-sm">
          Try to include protein in every meal to help maintain muscle mass and keep you feeling full longer.
        </p>
      </Card>
    </div>
  )

  const renderProfile = () => (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-text mb-2">Profile</h1>
        <p className="text-text-light">Manage your account</p>
      </div>

      <Card padding="md">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary-dark rounded-full flex items-center justify-center text-3xl text-white font-bold">
            JD
          </div>
          <div>
            <h2 className="text-xl font-bold text-text">John Doe</h2>
            <p className="text-text-light">john.doe@email.com</p>
          </div>
        </div>

        <div className="space-y-4">
          <div className="p-4 bg-background rounded-xl">
            <p className="text-text-light text-sm mb-1">Daily Calorie Goal</p>
            <p className="text-text font-bold text-lg">2000 kcal</p>
          </div>
          <div className="p-4 bg-background rounded-xl">
            <p className="text-text-light text-sm mb-1">Goal Type</p>
            <p className="text-text font-bold text-lg">Weight Maintenance</p>
          </div>
        </div>
      </Card>

      <Card padding="md">
        <h3 className="font-bold text-text text-lg mb-4">Settings</h3>
        <div className="space-y-3">
          {['Notifications', 'Units & Preferences', 'Privacy', 'Help & Support'].map((item) => (
            <button
              key={item}
              className="w-full p-4 text-left bg-background rounded-xl hover:bg-gray-100 transition-colors duration-200"
            >
              <span className="text-text font-semibold">{item}</span>
            </button>
          ))}
        </div>
      </Card>

      <Button variant="outline" fullWidth>
        Sign Out
      </Button>
    </div>
  )

  return (
    <main className="min-h-screen pb-24">
      <div className="max-w-2xl mx-auto px-4 py-6">
        {activeTab === 'home' && renderHome()}
        {activeTab === 'progress' && renderProgress()}
        {activeTab === 'meals' && renderMeals()}
        {activeTab === 'profile' && renderProfile()}
      </div>
      <NavigationBar activeTab={activeTab} onTabChange={setActiveTab} />
    </main>
  )
}
