"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts"

interface LineChartProps {
  title: string
  description?: string
  data: any[]
  dataKey: string
  categories: Array<{
    name: string
    color: string
  }>
}

export function LineChartComponent({ title, description, data, dataKey, categories }: LineChartProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-base font-medium">{title}</CardTitle>
        {description && <CardDescription className="text-xs">{description}</CardDescription>}
      </CardHeader>
      <CardContent className="pl-2">
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(var(--border))" />
              <XAxis dataKey={dataKey} fontSize={12} tickLine={false} axisLine={false} />
              <YAxis fontSize={12} tickLine={false} axisLine={false} />
              <Tooltip
                content={({ active, payload, label }) => {
                  if (active && payload && payload.length) {
                    return (
                      <div className="rounded-lg border bg-background p-2 shadow-sm">
                        <div className="grid gap-2">
                          <div className="flex flex-col">
                            <span className="text-[0.70rem] uppercase text-muted-foreground">{label}</span>
                            {payload.map((entry, index) => (
                              <div key={`item-${index}`} className="flex items-center gap-2">
                                <span className="h-2 w-2 rounded-full" style={{ backgroundColor: entry.color }} />
                                <span className="text-xs font-medium">
                                  {entry.name}: {entry.value}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )
                  }
                  return null
                }}
              />
              <Legend />
              {categories.map((category, index) => (
                <Line
                  key={category.name}
                  type="monotone"
                  dataKey={category.name}
                  stroke={category.color}
                  activeDot={{ r: 8 }}
                  strokeWidth={2}
                />
              ))}
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}

