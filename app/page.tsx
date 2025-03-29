import { BarChartComponent } from "@/components/dashboard/bar-chart"
import { LineChartComponent } from "@/components/dashboard/line-chart"
import { StatCard } from "@/components/dashboard/stat-card"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowUpRight, DollarSign, Package, PackageCheck, TrendingUp } from "lucide-react"

// Sample data for charts
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
    <div className="w-full">
      <div className="flex-1 space-y-6 p-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-medium tracking-tight">Dashboard Overview</h1>
        </div>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-full">
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
            trend={{ value: "2%", positive: true }}
          />
        </div>
        <div className="grid gap-6 grid-cols-1 lg:grid-cols-7 w-full">
          <Card className="col-span-1 lg:col-span-4">
            <CardHeader className="pb-2">
              <CardTitle className="text-base font-medium">Revenue Trend</CardTitle>
              <CardDescription className="text-xs text-muted-foreground">
                Monthly revenue over the last 6 months
              </CardDescription>
            </CardHeader>
            <CardContent className="pl-2">
              <LineChartComponent
                title=""
                data={revenueData}
                dataKey="name"
                categories={[{ name: "value", color: "hsl(var(--primary))" }]}
              />
            </CardContent>
          </Card>
          <Card className="col-span-1 lg:col-span-3">
            <CardHeader className="pb-2">
              <CardTitle className="text-base font-medium">Top-Selling Product</CardTitle>
              <CardDescription className="text-xs text-muted-foreground">
                <span className="font-medium text-primary">SKU1001 - Premium T-Shirt</span>
              </CardDescription>
            </CardHeader>
            <CardContent className="flex items-center justify-center p-6">
              <div className="flex flex-col items-center text-center w-full">
                <PackageCheck className="h-12 w-12 text-primary mb-4" />
                <div className="text-3xl font-medium">342 units</div>
                <p className="text-sm text-muted-foreground mt-2">Sold in the last 30 days</p>
                <div className="flex items-center mt-4 text-sm text-green-500 font-medium">
                  <ArrowUpRight className="h-4 w-4 mr-1" />
                  <span>18% increase from last month</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 w-full">
          <BarChartComponent
            title="Top SKUs by Sales"
            description="Units sold in the last 30 days"
            data={topSkuData}
            dataKey="name"
            categories={["units"]}
          />
          <BarChartComponent
            title="Stock Levels by Store"
            description="Current inventory levels"
            data={stockLevelData}
            dataKey="store"
            categories={["stock"]}
          />
        </div>
      </div>
    </div>
  )
}

