import { Suspense } from "react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { BlogSearch } from "@/components/blog/blog-search";
import { FilteredBlogList } from "@/components/blog/filtered-blog-list";
import { LoadingSpinner } from "@/components/ui/loading-spinner";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | HomeGeeni - Home Improvement Tips & Insights",
  description:
    "Explore our collection of expert home improvement articles, maintenance guides, and DIY projects.",
};

export default async function BlogPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  // Await searchParams before accessing its properties as required in Next.js 15+
  const params = await Promise.resolve(searchParams);
  const query = typeof params.query === "string" ? params.query : "";
  const category = typeof params.category === "string" ? params.category : "";
  const sortBy = typeof params.sortBy === "string" ? params.sortBy : "newest";
  const readTime = typeof params.readTime === "string" ? params.readTime : "";

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <div className="bg-gradient-to-br from-primary/5 to-accent/5 pt-20 pb-16 relative overflow-hidden">
        <div className="circle-bg circle-bg-1 opacity-20"></div>
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Our <span className="text-primary">Home Improvement</span> Blog
            </h1>
            <p className="text-xl text-gray-600 md:px-12">
              Discover expert tips, maintenance guides, and innovative solutions
              for your home transformation journey
            </p>
          </div>
        </div>
      </div>

      <main className="container mx-auto px-4 py-12 -mt-8">
        <BlogSearch
          initialQuery={query}
          initialCategory={category}
          initialSortBy={sortBy}
          initialReadTime={readTime}
        />

        <Suspense
          key={`${query}-${category}-${sortBy}-${readTime}`}
          fallback={<LoadingSpinner />}
        >
          <FilteredBlogList
            query={query}
            category={category}
            sortBy={sortBy}
            readTime={readTime}
          />
        </Suspense>
      </main>

      <Footer />
    </div>
  );
}
