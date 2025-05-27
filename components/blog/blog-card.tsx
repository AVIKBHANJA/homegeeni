import Link from "next/link";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { CategoryBadge } from "./category-badge";
import { Calendar, User, Clock, ArrowUpRight, ArrowRight } from "lucide-react";
import type { BlogPost } from "@/lib/types";

interface BlogCardProps {
  post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
  const slug = post.title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

  return (
    <Card className="overflow-hidden joy-card rounded-2xl border-gray-100 hover:border-primary/30 group">
      <Link href={`/blog/${slug}/${post.id}`}>
        <div className="relative h-56 overflow-hidden rounded-t-2xl">
          <Image
            src={post.featuredImage || "/placeholder.svg?height=200&width=400"}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute top-4 left-4">
            <CategoryBadge category={post.category} />
          </div>
        </div>
      </Link>

      <CardHeader className="pt-6 pb-2">
        <div className="flex items-center space-x-1 text-xs text-gray-500 mb-3">
          <Calendar className="h-3.5 w-3.5" />
          <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
          <span className="mx-1">•</span>
          <Clock className="h-3.5 w-3.5" />
          <span>{post.readTime} min read</span>
        </div>
        <Link href={`/blog/${slug}/${post.id}`}>
          <h3 className="text-xl font-bold text-gray-800 group-hover:text-primary transition-colors line-clamp-2 flex items-start">
            {post.title}
            <ArrowUpRight className="h-4 w-4 mt-1 ml-1 opacity-0 group-hover:opacity-100 transition-opacity text-primary" />
          </h3>
        </Link>
      </CardHeader>

      <CardContent className="pb-4">
        <p className="text-gray-600 line-clamp-2 text-sm">{post.excerpt}</p>
      </CardContent>

      <CardFooter className="pt-0 pb-6 border-t border-gray-50 mt-2">
        <div className="flex items-center space-x-3 w-full">
          <div className="bg-primary/10 w-8 h-8 rounded-full flex items-center justify-center">
            <User className="h-4 w-4 text-primary" />
          </div>
          <div className="flex-1">
            <div className="text-sm font-medium text-gray-800">
              {post.author}
            </div>
            <div className="text-xs text-gray-500">Official Blog</div>
          </div>
          <Link
            href={`/blog/${slug}/${post.id}`}
            className="text-primary text-sm font-medium flex items-center opacity-0 group-hover:opacity-100 transition-opacity"
          >
            Read More <ArrowRight className="ml-1 h-3.5 w-3.5" />
          </Link>
        </div>
      </CardFooter>
    </Card>
  );
}
