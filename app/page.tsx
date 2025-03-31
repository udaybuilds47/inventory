// Dashboard Page with Reordered Layout and Responsive Flex

import { BarChartComponent } from "@/components/dashboard/bar-chart"
import { LineChartComponent } from "@/components/dashboard/line-chart"
import { StatCard } from "@/components/dashboard/stat-card"
import { TopProductCard } from "@/components/dashboard/top-product-card"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardFooter,
  CardTitle,
} from "@/components/ui/card"
import {
  ArrowUpRight,
  DollarSign,
  Package,
  PackageCheck,
  TrendingUp,
} from "lucide-react"

// 🔢 Sample data for charts
const revenueData = [
  { name: "Jan", value: 4000 },
  { name: "Feb", value: 3000 },
  { name: "Mar", value: 5000 },
  { name: "Apr", value: 7000 },
  { name: "May", value: 6000 },
  { name: "Jun", value: 8000 },
]

const topSkuData = [
  { name: "SKU1001", units: 120 },
  { name: "SKU1002", units: 100 },
  { name: "SKU1003", units: 80 },
  { name: "SKU1004", units: 70 },
  { name: "SKU1005", units: 60 },
]

const stockLevelData = [
  { store: "Seattle", stock: 250 },
  { store: "Boston", stock: 300 },
  { store: "New York", stock: 180 },
  { store: "Chicago", stock: 220 },
  { store: "Los Angeles", stock: 280 },
]

export default function Dashboard() {
  return (
    <div className="flex-1 w-full">
      <div className="flex flex-col h-full w-full">
        {/* KPI Stat Cards */}
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 mt-6 w-full">
          <StatCard
            title="Total Units Sold"
            value="2,345"
            description="Last 30 Days"
            icon={<Package className="h-4 w-4" />}
            trend={{ value: "12%", positive: true }}
          />
          <StatCard
            title="Total Revenue"
            value="$34,567"
            description="Estimated from sales"
            icon={<DollarSign className="h-4 w-4" />}
            trend={{ value: "8%", positive: true }}
          />
          <StatCard
            title="Stockout Risk SKUs"
            value="24"
            description="Items below threshold"
            icon={<ArrowUpRight className="h-4 w-4" />}
            trend={{ value: "5%", positive: false }}
          />
          <StatCard
            title="Avg. Replenishment Delay"
            value="3.2 days"
            description="Across all stores"
            icon={<TrendingUp className="h-4 w-4" />}
            trend={{ value: "2%", positive: false }}
          />
          <TopProductCard
            title="Top-Selling Product"
            value="342 units"
            description="SKU1001 - Premium T-Shirt"
            growth="18%"
            growthPositive={true}
          />
        </div>

        {/* Revenue Trend + Top SKUs Chart */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6 w-full flex-1">
          {/* Revenue Trend */}
          <Card className="h-full">
            <CardHeader className="pb-2">
              <CardTitle>Revenue Trend</CardTitle>
              <CardDescription>Monthly revenue over the last 6 months</CardDescription>
            </CardHeader>
            <CardContent className="">
              <LineChartComponent
                title=""
                data={revenueData}
                dataKey="name"
                categories={[{ name: "value", color: "hsl(var(--primary))" }]}
              />
            </CardContent>
          </Card>

          {/* Top SKUs by Sales */}
          <Card className="h-full">
            <CardHeader className="pb-2">
              <CardTitle>Top SKUs by Sales</CardTitle>
              <CardDescription>Units sold in the last 30 days</CardDescription>
            </CardHeader>
            <CardContent>
              <BarChartComponent
                title=""
                data={topSkuData}
                dataKey="name"
                categories={["units"]}
              />
            </CardContent>
          </Card>

          {/* Stock by Store */}
          <Card className="h-full">
            <CardHeader className="pb-2">
              <CardTitle>Stock Levels by Store</CardTitle>
              <CardDescription>Current inventory levels</CardDescription>
            </CardHeader>
            <CardContent className="">
              <BarChartComponent
                title=""
                data={stockLevelData}
                dataKey="store"
                categories={["stock"]}
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}