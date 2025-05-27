import { BlogCard } from "./blog-card";
import { getBlogPosts } from "@/lib/blog-data";
import { Filter } from "lucide-react";
import { Button } from "@/components/ui/button";

interface FilteredBlogListProps {
  query?: string;
  category?: string;
  sortBy?: string;
  readTime?: string;
}

export async function FilteredBlogList({
  query = "",
  category = "",
  sortBy = "newest",
  readTime = "",
}: FilteredBlogListProps) {
  // Get all posts
  const allPosts = await getBlogPosts();

  // Filter posts based on criteria
  let filteredPosts = allPosts;

  // Filter by search query
  if (query) {
    const searchTerms = query.toLowerCase();
    filteredPosts = filteredPosts.filter(
      (post) =>
        post.title.toLowerCase().includes(searchTerms) ||
        post.excerpt.toLowerCase().includes(searchTerms) ||
        post.content.toLowerCase().includes(searchTerms)
    );
  }

  // Filter by category
  if (category) {
    filteredPosts = filteredPosts.filter((post) => post.category === category);
  }

  // Filter by read time
  if (readTime) {
    filteredPosts = filteredPosts.filter((post) => {
      if (readTime === "short") return post.readTime < 5;
      if (readTime === "medium")
        return post.readTime >= 5 && post.readTime <= 10;
      if (readTime === "long") return post.readTime > 10;
      return true;
    });
  }

  // Sort posts
  if (sortBy === "newest") {
    filteredPosts.sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    );
  } else if (sortBy === "oldest") {
    filteredPosts.sort(
      (a, b) =>
        new Date(a.publishedAt).getTime() - new Date(b.publishedAt).getTime()
    );
  } else if (sortBy === "popular") {
    filteredPosts.sort((a, b) => (b.views || 0) - (a.views || 0));
  }

  // Show message if no posts match filters
  if (filteredPosts.length === 0) {
    return (
      <div className="text-center py-20 bg-white rounded-3xl shadow-sm border border-gray-100">
        <div className="w-20 h-20 bg-primary/10 flex items-center justify-center rounded-full mx-auto mb-6">
          <Filter className="h-10 w-10 text-primary" />
        </div>
        <h3 className="text-2xl font-semibold text-gray-800 mb-3">
          No matching posts found
        </h3>
        <p className="text-gray-600 max-w-md mx-auto mb-8">
          Try adjusting your search or filter criteria to find what you're
          looking for.
        </p>
        <Button
          variant="outline"
          onClick={() => (window.location.href = "/blog")}
          className="rounded-full px-6 py-2 border-gray-200 hover:border-primary hover:bg-primary/5"
        >
          Reset All Filters
        </Button>
      </div>
    );
  }

  // Show active filters summary
  const activeFilters = [];
  if (query) activeFilters.push(`Search: "${query}"`);
  if (category) activeFilters.push(`Category: ${category}`);
  if (readTime) {
    const readTimeLabel =
      readTime === "short"
        ? "Quick Reads"
        : readTime === "medium"
        ? "Medium Length"
        : "In-Depth";
    activeFilters.push(`Read Time: ${readTimeLabel}`);
  }
  if (sortBy !== "newest")
    activeFilters.push(
      `Sort: ${sortBy === "oldest" ? "Oldest First" : "Most Popular"}`
    );

  return (
    <div>
      {activeFilters.length > 0 && (
        <div className="mb-8 p-4 bg-primary/5 rounded-xl border border-primary/10 text-sm">
          <div className="flex items-center flex-wrap gap-2">
            <span className="font-medium text-gray-700">
              Showing results for:{" "}
            </span>
            {activeFilters.map((filter, index) => (
              <span
                key={index}
                className="bg-white px-3 py-1 rounded-full text-gray-700 border border-gray-200 inline-flex items-center"
              >
                {filter}
              </span>
            ))}
          </div>
        </div>
      )}

      <div className="text-xl font-bold text-gray-900 mb-6 flex items-center justify-between">
        <span>
          {filteredPosts.length}{" "}
          {filteredPosts.length === 1 ? "Article" : "Articles"}
        </span>
        {filteredPosts.length > 0 && (
          <span className="text-sm font-normal text-gray-500">
            Sorted by:{" "}
            <span className="text-primary">
              {sortBy === "newest"
                ? "Newest First"
                : sortBy === "oldest"
                ? "Oldest First"
                : "Most Popular"}
            </span>
          </span>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredPosts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
