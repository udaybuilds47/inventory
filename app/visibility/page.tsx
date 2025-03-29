import { StatCard } from "@/components/dashboard/stat-card"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { AlertTriangle, Eye, Package, PackageX } from "lucide-react"

// Sample data for inventory
const inventoryData = [
  {
    sku: "SKU1001",
    name: "Premium T-Shirt",
    category: "Apparel",
    onHand: 120,
    sold30Days: 85,
    daysOfSupply: 42,
    status: "Healthy",
  },
  {
    sku: "SKU1002",
    name: "Classic Jeans",
    category: "Apparel",
    onHand: 80,
    sold30Days: 65,
    daysOfSupply: 37,
    status: "Healthy",
  },
  {
    sku: "SKU1003",
    name: "Leather Wallet",
    category: "Accessories",
    onHand: 15,
    sold30Days: 25,
    daysOfSupply: 18,
    status: "Low",
  },
  {
    sku: "SKU1004",
    name: "Running Shoes",
    category: "Footwear",
    onHand: 25,
    sold30Days: 40,
    daysOfSupply: 19,
    status: "Low",
  },
  {
    sku: "SKU1005",
    name: "Baseball Cap",
    category: "Accessories",
    onHand: 95,
    sold30Days: 12,
    daysOfSupply: 237,
    status: "Overstocked",
  },
  {
    sku: "SKU1006",
    name: "Winter Gloves",
    category: "Accessories",
    onHand: 110,
    sold30Days: 5,
    daysOfSupply: 660,
    status: "Dead Stock",
  },
  {
    sku: "SKU1007",
    name: "Sunglasses",
    category: "Accessories",
    onHand: 45,
    sold30Days: 30,
    daysOfSupply: 45,
    status: "Healthy",
  },
  {
    sku: "SKU1008",
    name: "Backpack",
    category: "Accessories",
    onHand: 35,
    sold30Days: 28,
    daysOfSupply: 37,
    status: "Healthy",
  },
]

const deadStockData = [
  {
    sku: "SKU1006",
    name: "Winter Gloves",
    category: "Accessories",
    onHand: 110,
    sold30Days: 5,
    daysOfSupply: 660,
    lastSold: "45 days ago",
  },
  {
    sku: "SKU1009",
    name: "Wool Scarf",
    category: "Accessories",
    onHand: 75,
    sold30Days: 2,
    daysOfSupply: 1125,
    lastSold: "60 days ago",
  },
  {
    sku: "SKU1010",
    name: "Ski Mask",
    category: "Accessories",
    onHand: 50,
    sold30Days: 0,
    daysOfSupply: "∞",
    lastSold: "90+ days ago",
  },
]

// Helper function to get status color
const getStatusColor = (status: string) => {
  switch (status) {
    case "Healthy":
      return "text-green-500 bg-green-50"
    case "Low":
      return "text-amber-500 bg-amber-50"
    case "Overstocked":
      return "text-blue-500 bg-blue-50"
    case "Dead Stock":
      return "text-red-500 bg-red-50"
    default:
      return "text-gray-500 bg-gray-50"
  }
}

export default function Visibility() {
  return (
    <div className="flex-1 w-full">
      <div className="flex flex-col h-full w-full">
        {/* KPI Stat Cards */}
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-6 w-full">
          <StatCard
            title="Total SKUs"
            value="248"
            description="Across all locations"
            icon={<Package className="h-4 w-4" />}
          />
          <StatCard
            title="Total On-Hand Units"
            value="12,450"
            description="All inventory"
            icon={<Eye className="h-4 w-4" />}
          />
          <StatCard
            title="Dead Stock SKUs"
            value="24"
            description="No sales in 90+ days"
            icon={<PackageX className="h-4 w-4" />}
            trend={{ value: "5", positive: false }}
          />
          <StatCard
            title="Low Stock Alerts"
            value="18"
            description="Below safety threshold"
            icon={<AlertTriangle className="h-4 w-4" />}
            trend={{ value: "3", positive: false }}
          />
        </div>

        {/* Current Inventory Table */}
        <div className="grid gap-4 grid-cols-1 w-full mt-6">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-base font-medium">Current Inventory</CardTitle>
              <CardDescription className="text-xs text-muted-foreground">
                On-hand inventory across all SKUs and locations
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="text-xs">SKU</TableHead>
                      <TableHead className="text-xs">Product</TableHead>
                      <TableHead className="text-xs">Category</TableHead>
                      <TableHead className="text-xs">On Hand</TableHead>
                      <TableHead className="text-xs">Sold (30 Days)</TableHead>
                      <TableHead className="text-xs">Days of Supply</TableHead>
                      <TableHead className="text-xs">Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {inventoryData.map((item) => (
                      <TableRow key={item.sku}>
                        <TableCell className="text-xs font-medium">{item.sku}</TableCell>
                        <TableCell className="text-xs">{item.name}</TableCell>
                        <TableCell className="text-xs">{item.category}</TableCell>
                        <TableCell className="text-xs">{item.onHand}</TableCell>
                        <TableCell className="text-xs">{item.sold30Days}</TableCell>
                        <TableCell className="text-xs">{item.daysOfSupply}</TableCell>
                        <TableCell>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(item.status)}`}>
                            {item.status}
                          </span>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Dead Stock Detector */}
        <div className="grid gap-4 grid-cols-1 w-full mt-6">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-base font-medium">Dead Stock Detector</CardTitle>
              <CardDescription className="text-xs text-muted-foreground">
                SKUs with low sales and high on-hand inventory
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {deadStockData.map((item) => (
                  <div
                    key={item.sku}
                    className="flex items-start justify-between p-4 rounded-lg border border-red-200 bg-red-50"
                  >
                    <div className="flex items-start">
                      <PackageX className="h-5 w-5 mr-3 text-red-500" />
                      <div>
                        <h4 className="text-sm font-medium">
                          {item.sku} - {item.name}
                        </h4>
                        <p className="text-xs text-muted-foreground">
                          {item.onHand} units on hand • Last sold {item.lastSold}
                        </p>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <Button size="sm" variant="outline" className="text-xs h-8">
                        Discount
                      </Button>
                      <Button size="sm" variant="outline" className="text-xs h-8">
                        Transfer
                      </Button>
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
