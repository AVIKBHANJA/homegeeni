import { type NextRequest, NextResponse } from "next/server"
import { createBlogPost } from "@/lib/blog-data"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { title, excerpt, content, category, featuredImage } = body

    if (!title || !excerpt || !content || !category) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    const newPost = await createBlogPost({
      title,
      excerpt,
      content,
      category,
      featuredImage,
      author: "Admin User", // In a real app, get this from the authenticated user
    })

    return NextResponse.json(newPost, { status: 201 })
  } catch (error) {
    console.error("Error creating post:", error)
    return NextResponse.json({ error: "Failed to create post" }, { status: 500 })
  }
}
