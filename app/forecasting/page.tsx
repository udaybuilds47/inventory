import { LineChartComponent } from "@/components/dashboard/line-chart"
import { StatCard } from "@/components/dashboard/stat-card"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { AlertTriangle, ArrowUpRight, LineChart, TrendingUp } from "lucide-react"

// Sample data for charts
const forecastData = [
  { month: "Jan", Forecast: 4200, Actual: 4000 },
  { month: "Feb", Forecast: 3500, Actual: 3000 },
  { month: "Mar", Forecast: 5200, Actual: 5000 },
  { month: "Apr", Forecast: 7500, Actual: 7000 },
  { month: "May", Forecast: 6300, Actual: 6000 },
  { month: "Jun", Forecast: 8500, Actual: 8000 },
]

const variabilityData = [
  { sku: "SKU1001", name: "Premium T-Shirt", variability: "High", forecast: "±15%", trend: "Increasing" },
  { sku: "SKU1002", name: "Classic Jeans", variability: "Medium", forecast: "±8%", trend: "Stable" },
  { sku: "SKU1003", name: "Leather Wallet", variability: "Low", forecast: "±3%", trend: "Stable" },
  { sku: "SKU1004", name: "Running Shoes", variability: "High", forecast: "±18%", trend: "Seasonal" },
  { sku: "SKU1005", name: "Baseball Cap", variability: "Medium", forecast: "±10%", trend: "Decreasing" },
]

const alertsData = [
  { sku: "SKU1001", name: "Premium T-Shirt", store: "Boston", message: "Will sell out in 7 days", severity: "high" },
  { sku: "SKU1003", name: "Leather Wallet", store: "Seattle", message: "Will sell out in 12 days", severity: "medium" },
  { sku: "SKU1005", name: "Baseball Cap", store: "Chicago", message: "Will sell out in 15 days", severity: "low" },
]

export default function ForecastingPage() {
  return (
    <div className="w-full">
      <div className="flex-1 space-y-6 p-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-medium tracking-tight">Forecasting</h1>
        </div>

        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-full">
          <StatCard
            title="Forecast Accuracy"
            value="92.4%"
            description="Last 30 days"
            icon={<LineChart className="h-4 w-4" />}
            trend={{ value: "2.1%", positive: true }}
          />
          <StatCard
            title="Predicted Monthly Sales"
            value="3,210"
            description="Next 30 days"
            icon={<TrendingUp className="h-4 w-4" />}
            trend={{ value: "5.8%", positive: true }}
          />
          <StatCard
            title="High Variability SKUs"
            value="12"
            description="Requiring attention"
            icon={<AlertTriangle className="h-4 w-4" />}
            trend={{ value: "3", positive: false }}
          />
          <StatCard
            title="Stockout Predictions"
            value="8"
            description="Within next 14 days"
            icon={<ArrowUpRight className="h-4 w-4" />}
            trend={{ value: "2", positive: false }}
          />
        </div>

        <div className="grid gap-6 grid-cols-1 w-full">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-base font-medium">Demand Trend Analysis</CardTitle>
              <CardDescription className="text-xs text-muted-foreground">
                Forecast vs. Actual Comparison
              </CardDescription>
            </CardHeader>
            <CardContent className="pl-2">
              <LineChartComponent
                title=""
                data={forecastData}
                dataKey="month"
                categories={[
                  { name: "Forecast", color: "hsl(var(--primary))" },
                  { name: "Actual", color: "hsl(var(--muted-foreground))" },
                ]}
              />
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 w-full">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-base font-medium">Products with High Variability</CardTitle>
              <CardDescription className="text-xs text-muted-foreground">
                SKUs with unpredictable demand patterns
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="text-xs">SKU</TableHead>
                    <TableHead className="text-xs">Product</TableHead>
                    <TableHead className="text-xs">Variability</TableHead>
                    <TableHead className="text-xs">Forecast Range</TableHead>
                    <TableHead className="text-xs">Trend</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {variabilityData.map((item) => (
                    <TableRow key={item.sku}>
                      <TableCell className="text-xs font-medium">{item.sku}</TableCell>
                      <TableCell className="text-xs">{item.name}</TableCell>
                      <TableCell className="text-xs">{item.variability}</TableCell>
                      <TableCell className="text-xs">{item.forecast}</TableCell>
                      <TableCell className="text-xs">{item.trend}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-base font-medium">Predictive Alerts</CardTitle>
              <CardDescription className="text-xs text-muted-foreground">Upcoming stockout predictions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {alertsData.map((alert) => (
                  <div
                    key={`${alert.sku}-${alert.store}`}
                    className={`flex items-start p-4 rounded-lg border ${
                      alert.severity === "high"
                        ? "border-red-200 bg-red-50"
                        : alert.severity === "medium"
                          ? "border-amber-200 bg-amber-50"
                          : "border-blue-200 bg-blue-50"
                    }`}
                  >
                    <AlertTriangle
                      className={`h-5 w-5 mr-3 ${
                        alert.severity === "high"
                          ? "text-red-500"
                          : alert.severity === "medium"
                            ? "text-amber-500"
                            : "text-blue-500"
                      }`}
                    />
                    <div>
                      <h4 className="text-sm font-medium">
                        {alert.sku} - {alert.name}
                      </h4>
                      <p className="text-xs text-muted-foreground">
                        {alert.message} at {alert.store} store
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

