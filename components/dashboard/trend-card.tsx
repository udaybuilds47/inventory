import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { LineChart, Line, ResponsiveContainer, Tooltip } from "recharts"
import { ArrowUpRight, ArrowDownRight } from "lucide-react"

interface TrendCardProps {
  title: string
  value: string | number
  description?: string
  data: Array<{ name: string; value: number }>
  trend?: {
    value: string | number
    positive?: boolean
  }
  className?: string
  color?: string
}

export function TrendCard({
  title,
  value,
  description,
  data,
  trend,
  className,
  color = "hsl(var(--primary))",
}: TrendCardProps) {
  return (
    <Card className={cn("overflow-hidden", className)}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between">
          <div>
            <div className="text-2xl font-medium">{value}</div>
            {description && <p className="text-xs text-muted-foreground mt-1">{description}</p>}
          </div>
          {trend && (
            <div className="flex items-center">
              <span
                className={cn(
                  "text-xs font-medium flex items-center",
                  trend.positive ? "text-green-500" : "text-red-500",
                )}
              >
                {trend.positive ? (
                  <ArrowUpRight className="h-3 w-3 mr-1" />
                ) : (
                  <ArrowDownRight className="h-3 w-3 mr-1" />
                )}
                {trend.value}
              </span>
            </div>
          )}
        </div>
        <div className="h-[80px] mt-3">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <Line type="monotone" dataKey="value" stroke={color} strokeWidth={2} dot={false} />
              <Tooltip
                content={({ active, payload }) => {
                  if (active && payload && payload.length) {
                    return (
                      <div className="rounded-lg border bg-background p-2 shadow-sm">
                        <div className="grid grid-cols-2 gap-2">
                          <div className="flex flex-col">
                            <span className="text-[0.70rem] uppercase text-muted-foreground">Value</span>
                            <span className="font-medium text-xs">{payload[0].value}</span>
                          </div>
                        </div>
                      </div>
                    )
                  }
                  return null
                }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}

