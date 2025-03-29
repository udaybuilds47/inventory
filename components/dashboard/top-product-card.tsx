import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { PackageCheck, ArrowUpRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface TopProductCardProps {
  title: string
  value: string
  description: string
  growth: string
  growthPositive: boolean
}

export function TopProductCard({
  title,
  value,
  description,
  growth,
  growthPositive,
}: TopProductCardProps) {
  return (
    <Card className="relative overflow-hidden group">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <CardTitle className="text-sm font-medium text-center w-full">{title}</CardTitle>
        </div>
        <div className="text-xs text-muted-foreground text-center w-full">
          <span className="font-medium text-primary">{description}</span>
        </div>
      </CardHeader>
      <CardContent className="flex items-center justify-center p-4">
        <div className="flex flex-col items-center text-center w-full relative">
          <div className="relative mb-2">
            <PackageCheck className="h-6 w-6 text-primary" />
            <div className="absolute -top-0.5 -right-0.5 w-3 h-3 rounded-full bg-primary/20 border border-primary" />
          </div>
          <div className="text-lg font-medium text-primary">{value}</div>
          <p className="text-xs text-muted-foreground mt-1">Sold in the last 30 days</p>
          <div className="flex items-center mt-2 text-xs font-medium">
            <ArrowUpRight className="h-3 w-3 mr-1" fill={growthPositive ? "#10B981" : "#EF4444"} />
            <span className={cn(
              "font-medium",
              growthPositive ? "text-green-500" : "text-red-500"
            )}>
              {growth} {growthPositive ? "increase" : "decrease"} from last month
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
