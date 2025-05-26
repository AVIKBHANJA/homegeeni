import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { getBlogPost } from "@/lib/blog-data"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { CategoryBadge } from "@/components/blog/category-badge"
import { Button } from "@/components/ui/button"
import { Calendar, User, Clock, ArrowLeft, Share2, Bookmark, ThumbsUp, MessageSquare } from "lucide-react"
import type { Metadata } from "next"

interface BlogPostPageProps {
  params: Promise<{
    slug: string
    id: string
  }>
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { id } = await params
  const post = await getBlogPost(id)

  if (!post) {
    return {
      title: "Post Not Found",
    }
  }

  return {
    title: `${post.title} | HomeGeeni Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.featuredImage || "/placeholder.svg?height=400&width=800"],
    },
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { id } = await params
  const post = await getBlogPost(id)

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="pt-8 pb-16">
        <div className="container mx-auto px-4">
          <Link href="/blog">
            <Button variant="ghost" className="mb-6 group">
              <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              Back to Blog
            </Button>
          </Link>

          <article className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-md overflow-hidden">
              <div className="relative h-64 md:h-96">
                <Image
                  src={post.featuredImage || "/placeholder.svg?height=400&width=800"}
                  alt={post.title}
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              </div>

              <div className="p-6 md:p-10">
                <div className="flex flex-wrap items-center gap-3 mb-6">
                  <CategoryBadge category={post.category} />
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="h-4 w-4 mr-1" />
                    {post.readTime} min read
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar className="h-4 w-4 mr-1" />
                    {new Date(post.publishedAt).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </div>
                </div>

                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">{post.title}</h1>

                <div className="flex items-center mb-8 pb-8 border-b border-gray-100">
                  <div className="bg-primary/10 rounded-full w-10 h-10 flex items-center justify-center mr-3">
                    <User className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium">{post.author}</div>
                    <div className="text-sm text-gray-500">Home Improvement Expert</div>
                  </div>
                </div>

                <div className="prose prose-lg max-w-none">
                  <div dangerouslySetInnerHTML={{ __html: post.content }} />
                </div>

                {/* Article actions */}
                <div className="mt-10 pt-6 border-t border-gray-100 flex flex-wrap justify-between items-center gap-4">
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm" className="gap-2">
                      <ThumbsUp className="h-4 w-4" />
                      <span>Like</span>
                    </Button>
                    <Button variant="outline" size="sm" className="gap-2">
                      <Share2 className="h-4 w-4" />
                      <span>Share</span>
                    </Button>
                    <Button variant="outline" size="sm" className="gap-2">
                      <Bookmark className="h-4 w-4" />
                      <span>Save</span>
                    </Button>
                  </div>

                  <div className="flex items-center text-sm text-gray-500">
                    <MessageSquare className="h-4 w-4 mr-1" />
                    <span>0 Comments</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Related posts section could go here */}
          </article>
        </div>
      </main>

      <Footer />
    </div>
  )
}
