import { BarChartComponent } from "@/components/dashboard/bar-chart"
import { StatCard } from "@/components/dashboard/stat-card"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Check, Clock, PackageCheck, ShoppingCart, Truck, X } from "lucide-react"

// Sample data for charts
const replenishmentData = [
  { month: "Jan", value: 120 },
  { month: "Feb", value: 150 },
  { month: "Mar", value: 180 },
  { month: "Apr", value: 140 },
  { month: "May", value: 160 },
  { month: "Jun", value: 200 },
]

const reorderSuggestionsData = [
  {
    sku: "SKU1001",
    name: "Premium T-Shirt",
    currentStock: 45,
    reorderPoint: 50,
    suggestedQty: 100,
    supplier: "Textile Inc.",
  },
  {
    sku: "SKU1002",
    name: "Classic Jeans",
    currentStock: 30,
    reorderPoint: 40,
    suggestedQty: 80,
    supplier: "Denim Co.",
  },
  {
    sku: "SKU1003",
    name: "Leather Wallet",
    currentStock: 15,
    reorderPoint: 20,
    suggestedQty: 50,
    supplier: "Leather Goods",
  },
  {
    sku: "SKU1004",
    name: "Running Shoes",
    currentStock: 25,
    reorderPoint: 30,
    suggestedQty: 60,
    supplier: "Sports Gear",
  },
  {
    sku: "SKU1005",
    name: "Baseball Cap",
    currentStock: 20,
    reorderPoint: 25,
    suggestedQty: 40,
    supplier: "Headwear Ltd.",
  },
]

export default function ReorderingPage() {
  return (
    <div className="w-full">
      <div className="flex-1 space-y-6 p-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-medium tracking-tight">Reordering</h1>
        </div>

        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-full">
          <StatCard
            title="Reorder Alerts"
            value="8"
            description="Items below safety stock"
            icon={<ShoppingCart className="h-4 w-4" />}
            trend={{ value: "3", positive: false }}
          />
          <StatCard
            title="Avg. Days Between Replenishment"
            value="14.3"
            description="Last 30 days"
            icon={<Clock className="h-4 w-4" />}
            trend={{ value: "2.1", positive: true }}
          />
          <StatCard
            title="Suggested Reorder Quantity"
            value="520"
            description="Total units"
            icon={<PackageCheck className="h-4 w-4" />}
            trend={{ value: "8%", positive: true }}
          />
          <StatCard
            title="Supplier Fill Rate"
            value="94.2%"
            description="Last 30 days"
            icon={<Truck className="h-4 w-4" />}
            trend={{ value: "1.5%", positive: true }}
          />
        </div>

        <div className="grid gap-6 grid-cols-1 w-full">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-base font-medium">Replenishment Activity</CardTitle>
              <CardDescription className="text-xs text-muted-foreground">
                Monthly replenishment over the last 6 months
              </CardDescription>
            </CardHeader>
            <CardContent className="pl-2">
              <BarChartComponent title="" data={replenishmentData} dataKey="month" categories={["value"]} />
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-6 grid-cols-1 w-full">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-base font-medium">Reorder Suggestions</CardTitle>
              <CardDescription className="text-xs text-muted-foreground">
                Items that need to be reordered based on current stock levels
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="text-xs">SKU</TableHead>
                      <TableHead className="text-xs">Product</TableHead>
                      <TableHead className="text-xs">Current Stock</TableHead>
                      <TableHead className="text-xs">Reorder Point</TableHead>
                      <TableHead className="text-xs">Suggested Qty</TableHead>
                      <TableHead className="text-xs">Supplier</TableHead>
                      <TableHead className="text-xs">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {reorderSuggestionsData.map((item) => (
                      <TableRow key={item.sku}>
                        <TableCell className="text-xs font-medium">{item.sku}</TableCell>
                        <TableCell className="text-xs">{item.name}</TableCell>
                        <TableCell
                          className={`text-xs ${item.currentStock < item.reorderPoint ? "text-red-500 font-medium" : ""}`}
                        >
                          {item.currentStock}
                        </TableCell>
                        <TableCell className="text-xs">{item.reorderPoint}</TableCell>
                        <TableCell className="text-xs">{item.suggestedQty}</TableCell>
                        <TableCell className="text-xs">{item.supplier}</TableCell>
                        <TableCell>
                          <div className="flex space-x-2">
                            <Button size="sm" variant="outline" className="h-7 w-7 p-0">
                              <Check className="h-3.5 w-3.5 text-green-500" />
                            </Button>
                            <Button size="sm" variant="outline" className="h-7 w-7 p-0">
                              <X className="h-3.5 w-3.5 text-red-500" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

