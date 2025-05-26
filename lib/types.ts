export interface BlogPost {
  id: string
  title: string
  excerpt: string
  content: string
  author: string
  publishedAt: string
  category: string
  featuredImage?: string
  readTime: number
  views?: number
}

export interface User {
  id: string
  email: string
  name: string
  role: "admin" | "user"
}
