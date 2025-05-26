import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { CategoryBadge } from "./category-badge"
import { Calendar, User, Clock, ArrowUpRight } from "lucide-react"
import type { BlogPost } from "@/lib/types"

interface BlogCardProps {
  post: BlogPost
}

export function BlogCard({ post }: BlogCardProps) {
  const slug = post.title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")

  return (
    <Card className="overflow-hidden card-hover border-none shadow-md">
      <Link href={`/blog/${slug}/${post.id}`}>
        <div className="relative h-52 overflow-hidden">
          <Image
            src={post.featuredImage || "/placeholder.svg?height=200&width=400"}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-500 hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          <div className="absolute bottom-4 left-4 right-4">
            <CategoryBadge category={post.category} />
          </div>
        </div>
      </Link>

      <CardHeader className="pb-2">
        <Link href={`/blog/${slug}/${post.id}`}>
          <h3 className="text-xl font-bold hover:text-primary transition-colors line-clamp-2 group">
            {post.title}
            <ArrowUpRight className="inline-block ml-1 h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
          </h3>
        </Link>
      </CardHeader>

      <CardContent className="pb-2">
        <p className="text-gray-600 line-clamp-3">{post.excerpt}</p>
      </CardContent>

      <CardFooter className="flex items-center justify-between pt-0">
        <div className="flex items-center space-x-2 text-sm text-gray-500">
          <User className="h-4 w-4" />
          <span>{post.author}</span>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-1 text-sm text-gray-500">
            <Calendar className="h-4 w-4" />
            <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
          </div>
          <div className="flex items-center space-x-1 text-sm text-gray-500">
            <Clock className="h-4 w-4" />
            <span>{post.readTime}m</span>
          </div>
        </div>
      </CardFooter>
    </Card>
  )
}
