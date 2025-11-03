'use client'

import React from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip } from 'recharts'
import Card from './Card'

interface WeeklyChartProps {
  data: { day: string; calories: number; goal: number }[]
}

export default function WeeklyChart({ data }: WeeklyChartProps) {
  return (
    <Card padding="md">
      <h3 className="font-bold text-text text-lg mb-4">Weekly Progress</h3>
      <ResponsiveContainer width="100%" height={200}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
          <XAxis
            dataKey="day"
            tick={{ fill: '#666666', fontSize: 12 }}
            axisLine={{ stroke: '#E5E7EB' }}
          />
          <YAxis
            tick={{ fill: '#666666', fontSize: 12 }}
            axisLine={{ stroke: '#E5E7EB' }}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: '#FFFFFF',
              border: '1px solid #E5E7EB',
              borderRadius: '12px',
              padding: '8px 12px',
            }}
            labelStyle={{ color: '#333333', fontWeight: 'bold' }}
          />
          <Bar dataKey="calories" fill="#4CAF50" radius={[8, 8, 0, 0]} />
          <Bar dataKey="goal" fill="#E5E7EB" radius={[8, 8, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
      <div className="flex justify-center gap-6 mt-4">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-primary"></div>
          <span className="text-text-light text-sm">Actual</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-gray-300"></div>
          <span className="text-text-light text-sm">Goal</span>
        </div>
      </div>
    </Card>
  )
}
