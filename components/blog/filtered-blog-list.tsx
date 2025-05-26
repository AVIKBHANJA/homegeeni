import { BlogCard } from "./blog-card"
import { getBlogPosts } from "@/lib/blog-data"
import { Filter } from "lucide-react"

interface FilteredBlogListProps {
  query?: string
  category?: string
  sortBy?: string
  readTime?: string
}

export async function FilteredBlogList({
  query = "",
  category = "",
  sortBy = "newest",
  readTime = "",
}: FilteredBlogListProps) {
  // Get all posts
  const allPosts = await getBlogPosts()

  // Filter posts based on criteria
  let filteredPosts = allPosts

  // Filter by search query
  if (query) {
    const searchTerms = query.toLowerCase()
    filteredPosts = filteredPosts.filter(
      (post) =>
        post.title.toLowerCase().includes(searchTerms) ||
        post.excerpt.toLowerCase().includes(searchTerms) ||
        post.content.toLowerCase().includes(searchTerms),
    )
  }

  // Filter by category
  if (category) {
    filteredPosts = filteredPosts.filter((post) => post.category === category)
  }

  // Filter by read time
  if (readTime) {
    filteredPosts = filteredPosts.filter((post) => {
      if (readTime === "short") return post.readTime < 5
      if (readTime === "medium") return post.readTime >= 5 && post.readTime <= 10
      if (readTime === "long") return post.readTime > 10
      return true
    })
  }

  // Sort posts
  if (sortBy === "newest") {
    filteredPosts.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
  } else if (sortBy === "oldest") {
    filteredPosts.sort((a, b) => new Date(a.publishedAt).getTime() - new Date(b.publishedAt).getTime())
  } else if (sortBy === "popular") {
    filteredPosts.sort((a, b) => (b.views || 0) - (a.views || 0))
  }

  // Show message if no posts match filters
  if (filteredPosts.length === 0) {
    return (
      <div className="text-center py-16 bg-white rounded-xl shadow-sm">
        <Filter className="h-12 w-12 mx-auto text-gray-300 mb-4" />
        <h3 className="text-xl font-semibold text-gray-800 mb-2">No matching posts found</h3>
        <p className="text-gray-600 max-w-md mx-auto">
          Try adjusting your search or filter criteria to find what you're looking for.
        </p>
      </div>
    )
  }

  // Show active filters summary
  const activeFilters = []
  if (query) activeFilters.push(`Search: "${query}"`)
  if (category) activeFilters.push(`Category: ${category}`)
  if (readTime) {
    const readTimeLabel = readTime === "short" ? "Quick Reads" : readTime === "medium" ? "Medium Length" : "In-Depth"
    activeFilters.push(`Read Time: ${readTimeLabel}`)
  }
  if (sortBy !== "newest") activeFilters.push(`Sort: ${sortBy === "oldest" ? "Oldest First" : "Most Popular"}`)

  return (
    <div>
      {activeFilters.length > 0 && (
        <div className="mb-6 text-sm text-gray-600">
          <span className="font-medium">Showing results for: </span>
          {activeFilters.join(" • ")}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredPosts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  )
}
