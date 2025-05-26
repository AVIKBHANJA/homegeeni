import { Suspense } from "react"
import Link from "next/link"
import { AdminLayout } from "@/components/admin/admin-layout"
import { AdminBlogList } from "@/components/admin/admin-blog-list"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { PenTool, FileText, Users, TrendingUp, BarChart3, ArrowUpRight } from "lucide-react"
import { LoadingSpinner } from "@/components/ui/loading-spinner"

export default function AdminDashboard() {
  return (
    <AdminLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold gradient-text">Dashboard</h1>
          <p className="text-gray-600 mt-2">Manage your blog content and monitor performance</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="border-none shadow-md">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Posts</CardTitle>
              <div className="bg-primary/10 p-2 rounded-full">
                <FileText className="h-4 w-4 text-primary" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">12</div>
              <div className="flex items-center mt-1">
                <span className="text-xs text-green-500 bg-green-50 px-1.5 py-0.5 rounded-full font-medium flex items-center">
                  <ArrowUpRight className="h-3 w-3 mr-0.5" />
                  +2
                </span>
                <span className="text-xs text-muted-foreground ml-1.5">from last month</span>
              </div>
            </CardContent>
          </Card>

          <Card className="border-none shadow-md">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Views</CardTitle>
              <div className="bg-accent/10 p-2 rounded-full">
                <TrendingUp className="h-4 w-4 text-accent" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">2,847</div>
              <div className="flex items-center mt-1">
                <span className="text-xs text-green-500 bg-green-50 px-1.5 py-0.5 rounded-full font-medium flex items-center">
                  <ArrowUpRight className="h-3 w-3 mr-0.5" />
                  +15%
                </span>
                <span className="text-xs text-muted-foreground ml-1.5">from last month</span>
              </div>
            </CardContent>
          </Card>

          <Card className="border-none shadow-md">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Subscribers</CardTitle>
              <div className="bg-primary/10 p-2 rounded-full">
                <Users className="h-4 w-4 text-primary" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">486</div>
              <div className="flex items-center mt-1">
                <span className="text-xs text-green-500 bg-green-50 px-1.5 py-0.5 rounded-full font-medium flex items-center">
                  <ArrowUpRight className="h-3 w-3 mr-0.5" />
                  +8%
                </span>
                <span className="text-xs text-muted-foreground ml-1.5">from last month</span>
              </div>
            </CardContent>
          </Card>

          <Card className="border-none shadow-md">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Avg. Read Time</CardTitle>
              <div className="bg-accent/10 p-2 rounded-full">
                <BarChart3 className="h-4 w-4 text-accent" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">4.2m</div>
              <div className="flex items-center mt-1">
                <span className="text-xs text-green-500 bg-green-50 px-1.5 py-0.5 rounded-full font-medium flex items-center">
                  <ArrowUpRight className="h-3 w-3 mr-0.5" />
                  +0.3m
                </span>
                <span className="text-xs text-muted-foreground ml-1.5">from last month</span>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Recent Posts</h2>
            <p className="text-gray-600 text-sm">Manage and monitor your blog content</p>
          </div>
          <Link href="/admin/create-post">
            <Button className="bg-primary hover:bg-primary/90">
              <PenTool className="h-4 w-4 mr-2" />
              Create New Post
            </Button>
          </Link>
        </div>

        <Suspense fallback={<LoadingSpinner />}>
          <AdminBlogList />
        </Suspense>
      </div>
    </AdminLayout>
  )
}
