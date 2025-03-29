import * as React from "react"
import { cn } from "@/lib/utils"

const badgeVariants = {
  default: "bg-primary text-primary-foreground",
  secondary: "bg-secondary text-secondary-foreground",
  success: "bg-success text-success-foreground",
  warning: "bg-warning text-warning-foreground",
  danger: "bg-danger text-danger-foreground",
  info: "bg-info text-info-foreground",
  outline: "border-2 border-primary text-primary",
} as const

export type BadgeVariant = keyof typeof badgeVariants

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement> {
  variant?: BadgeVariant
}

function Badge({ className, variant = "default", ...props }: BadgeProps) {
  return (
    <div className={cn(
      "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium transition-colors",
      variant === "default" && "bg-primary text-primary-foreground",
      variant === "secondary" && "bg-secondary text-secondary-foreground",
      variant === "success" && "bg-success text-success-foreground",
      variant === "warning" && "bg-warning text-warning-foreground",
      variant === "danger" && "bg-danger text-danger-foreground",
      variant === "info" && "bg-info text-info-foreground",
      variant === "outline" && "border-2 border-primary text-primary",
      className
    )} {...props} />
  )
}

export default Badge
