import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getBlogPost } from "@/lib/blog-data";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { CategoryBadge } from "@/components/blog/category-badge";
import { Button } from "@/components/ui/button";
import {
  Calendar,
  User,
  Clock,
  ArrowLeft,
  ArrowRight,
  Share2,
  Bookmark,
  ThumbsUp,
  MessageSquare,
} from "lucide-react";
import type { Metadata } from "next";

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
    id: string;
  }>;
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { id } = await params;
  const post = await getBlogPost(id);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: `${post.title} | HomeGeeni Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.featuredImage || "/placeholder.svg?height=400&width=800"],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { id } = await params;
  const post = await getBlogPost(id);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <div className="bg-gradient-to-br from-primary/5 to-accent/5 pt-12 pb-8 mb-8">
        <div className="container mx-auto px-4">
          <Link href="/blog">
            <Button
              variant="outline"
              className="mb-8 group rounded-full border-gray-200 hover:border-primary hover:bg-primary/5"
            >
              <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              Back to Blog
            </Button>
          </Link>
        </div>
      </div>

      <main className="pb-16">
        <div className="container mx-auto px-4">
          <article className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl shadow-md overflow-hidden">
              <div className="relative h-72 md:h-[500px]">
                <Image
                  src={
                    post.featuredImage ||
                    "/placeholder.svg?height=400&width=800"
                  }
                  alt={post.title}
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute top-6 left-6">
                  <CategoryBadge category={post.category} />
                </div>
              </div>

              <div className="p-8 md:p-12">
                <div className="flex flex-wrap items-center gap-4 mb-6 text-sm text-gray-500">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2 text-primary" />
                    {new Date(post.publishedAt).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </div>
                  <div className="w-1.5 h-1.5 rounded-full bg-gray-300"></div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-2 text-primary" />
                    {post.readTime} min read
                  </div>
                </div>

                <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
                  {post.title}
                </h1>

                <div className="flex items-center mb-10 pb-10 border-b border-gray-100">
                  <div className="bg-primary/10 rounded-full w-14 h-14 flex items-center justify-center mr-4">
                    <User className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium text-lg">{post.author}</div>
                    <div className="text-sm text-gray-500">
                      Home Improvement Expert
                    </div>
                  </div>
                </div>

                <div className="prose prose-lg max-w-none">
                  <div dangerouslySetInnerHTML={{ __html: post.content }} />
                </div>

                {/* Article actions */}
                <div className="mt-12 pt-8 border-t border-gray-100 flex flex-wrap justify-between items-center gap-4">
                  <div className="flex space-x-3">
                    <Button
                      variant="outline"
                      className="gap-2 rounded-full border-gray-200 hover:border-primary hover:bg-primary/5 px-5"
                    >
                      <ThumbsUp className="h-4 w-4 text-primary" />
                      <span>Like</span>
                    </Button>
                    <Button
                      variant="outline"
                      className="gap-2 rounded-full border-gray-200 hover:border-primary hover:bg-primary/5 px-5"
                    >
                      <Share2 className="h-4 w-4 text-primary" />
                      <span>Share</span>
                    </Button>
                    <Button
                      variant="outline"
                      className="gap-2 rounded-full border-gray-200 hover:border-primary hover:bg-primary/5 px-5"
                    >
                      <Bookmark className="h-4 w-4 text-primary" />
                      <span>Save</span>
                    </Button>
                  </div>

                  <div className="flex items-center text-sm text-gray-500">
                    <MessageSquare className="h-4 w-4 mr-1 text-primary" />
                    <span>0 Comments</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Related posts */}
            <div className="mt-16 pt-8 border-t border-gray-100">
              <h2 className="text-2xl font-bold mb-8 text-gray-800">
                You might also like
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-100 flex hover:shadow-md transition-shadow group">
                  <div className="w-1/3 relative">
                    <div className="h-full relative">
                      <Image
                        src="/placeholder.jpg"
                        alt="Related post"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className="w-2/3 p-4">
                    <div className="inline-block px-2 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full mb-2">
                      Tips & Tricks
                    </div>
                    <h3 className="font-bold mb-2 group-hover:text-primary transition-colors">
                      10 Essential Home Maintenance Tips for Spring
                    </h3>
                    <Link
                      href="/blog"
                      className="text-primary text-sm flex items-center"
                    >
                      Read Article <ArrowRight className="ml-1 h-3 w-3" />
                    </Link>
                  </div>
                </div>
                <div className="bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-100 flex hover:shadow-md transition-shadow group">
                  <div className="w-1/3 relative">
                    <div className="h-full relative">
                      <Image
                        src="/placeholder.jpg"
                        alt="Related post"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className="w-2/3 p-4">
                    <div className="inline-block px-2 py-1 text-xs font-medium bg-accent/10 text-accent rounded-full mb-2">
                      DIY Projects
                    </div>
                    <h3 className="font-bold mb-2 group-hover:text-accent transition-colors">
                      Weekend DIY Projects to Increase Your Home's Value
                    </h3>
                    <Link
                      href="/blog"
                      className="text-accent text-sm flex items-center"
                    >
                      Read Article <ArrowRight className="ml-1 h-3 w-3" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="mt-16 mb-8">
              <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-3xl p-10 text-center relative overflow-hidden">
                <div className="circle-bg circle-bg-1 opacity-20"></div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
                  Ready to transform your home?
                </h3>
                <p className="text-lg text-gray-600 mb-6 max-w-xl mx-auto">
                  Get personalized advice from our home improvement experts
                </p>
                <Link href="/contact">
                  <Button className="joy-btn joy-btn-primary rounded-full px-8 py-6">
                    Contact an Expert
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </article>
        </div>
      </main>

      <Footer />
    </div>
  );
}
