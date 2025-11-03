'use client'

import React from 'react'
import { Home, TrendingUp, Apple, User } from 'lucide-react'

interface NavigationBarProps {
  activeTab: string
  onTabChange: (tab: string) => void
}

export default function NavigationBar({ activeTab, onTabChange }: NavigationBarProps) {
  const tabs = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'progress', label: 'Progress', icon: TrendingUp },
    { id: 'meals', label: 'Meals', icon: Apple },
    { id: 'profile', label: 'Profile', icon: User },
  ]

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-background-white border-t border-gray-200 safe-area-inset-bottom z-50">
      <div className="max-w-2xl mx-auto flex justify-around items-center px-4 py-3">
        {tabs.map((tab) => {
          const Icon = tab.icon
          const isActive = activeTab === tab.id

          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`flex flex-col items-center gap-1 transition-colors duration-200 ${
                isActive ? 'text-primary' : 'text-text-light'
              }`}
            >
              <Icon size={24} strokeWidth={isActive ? 2.5 : 2} />
              <span className={`text-xs ${isActive ? 'font-bold' : 'font-medium'}`}>
                {tab.label}
              </span>
            </button>
          )
        })}
      </div>
    </nav>
  )
}
