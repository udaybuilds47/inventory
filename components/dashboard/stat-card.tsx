import * as React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { ArrowUpRight, ArrowDownRight } from "lucide-react"

interface StatCardProps {
  title: string
  value: string | number
  description?: string
  icon?: React.ReactElement<React.SVGProps<SVGSVGElement>>
  trend?: {
    value: string | number
    positive?: boolean
  }
  className?: string
}

export function StatCard({ title, value, description, icon, trend, className }: StatCardProps) {
  return (
    <Card className={cn("overflow-hidden h-full w-full", className)}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-xs font-medium text-muted-foreground uppercase tracking-wider">{title}</CardTitle>
        {icon && (
          <div className="relative text-muted-foreground">
            {React.cloneElement(icon, {
              className: cn(icon.props.className, "h-6 w-6")
            })}
          </div>
        )}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-medium">{value}</div>
        {description && <p className="text-xs text-muted-foreground mt-1">{description}</p>}
        {trend && (
          <div className="flex items-center mt-2">
            <span
              className={cn(
                "text-xs font-medium flex items-center",
                trend.positive ? "text-green-500" : "text-red-500",
              )}
            >
              {trend.value}
              {trend.positive ? (
                <ArrowUpRight className="ml-1 h-4 w-4" />
              ) : (
                <ArrowDownRight className="ml-1 h-4 w-4" />
              )}
            </span>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
