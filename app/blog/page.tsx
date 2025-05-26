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
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto mb-12 text-center">
          <h1 className="text-4xl font-bold mb-4">
            <img
              src="/logo.png"
              alt="HomeGeeni Logo"
              className="h-12 inline-block mr-2"
            />{" "}
            Blog
          </h1>
          <p className="text-lg text-gray-600">
            Discover expert tips, maintenance guides, and innovative solutions
            for your home
          </p>
        </div>

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
