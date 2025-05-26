"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Filter, X } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent } from "@/components/ui/card"

interface BlogSearchProps {
  initialQuery?: string
  initialCategory?: string
  initialSortBy?: string
  initialReadTime?: string
}

export function BlogSearch({
  initialQuery = "",
  initialCategory = "",
  initialSortBy = "newest",
  initialReadTime = "",
}: BlogSearchProps) {
  const [query, setQuery] = useState(initialQuery)
  const [category, setCategory] = useState(initialCategory)
  const [sortBy, setSortBy] = useState(initialSortBy)
  const [readTime, setReadTime] = useState(initialReadTime)
  const [showFilters, setShowFilters] = useState(false)
  const router = useRouter()
  const searchParams = useSearchParams()

  // Apply filters when form is submitted
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    applyFilters()
  }

  // Apply filters to URL
  const applyFilters = () => {
    const params = new URLSearchParams()

    if (query) params.set("query", query)
    if (category) params.set("category", category)
    if (sortBy) params.set("sortBy", sortBy)
    if (readTime) params.set("readTime", readTime)

    router.push(`/blog?${params.toString()}`)
  }

  // Reset all filters
  const resetFilters = () => {
    setQuery("")
    setCategory("")
    setSortBy("newest")
    setReadTime("")
    router.push("/blog")
  }

  // Check if any filters are active
  const hasActiveFilters = query || category || sortBy !== "newest" || readTime

  // Update state when URL params change
  useEffect(() => {
    setQuery(initialQuery)
    setCategory(initialCategory)
    setSortBy(initialSortBy)
    setReadTime(initialReadTime)
  }, [initialQuery, initialCategory, initialSortBy, initialReadTime])

  return (
    <Card className="mb-8 border-none shadow-md">
      <CardContent className="pt-6">
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search for articles..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex gap-2">
              <Button
                type="button"
                variant="outline"
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-2"
              >
                <Filter className="h-4 w-4" />
                Filters
              </Button>
              <Button type="submit" className="bg-primary hover:bg-primary/90">
                Search
              </Button>
            </div>
          </div>

          <Accordion
            type="single"
            collapsible
            value={showFilters ? "filters" : ""}
            onValueChange={(value) => setShowFilters(value === "filters")}
          >
            <AccordionItem value="filters" className="border-b-0">
              <AccordionTrigger>Filters</AccordionTrigger>
              <AccordionContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                  <div className="space-y-2">
                    <Label htmlFor="category">Category</Label>
                    <Select value={category} onValueChange={setCategory}>
                      <SelectTrigger id="category">
                        <SelectValue placeholder="All Categories" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Categories</SelectItem>
                        <SelectItem value="maintenance">Maintenance</SelectItem>
                        <SelectItem value="renovation">Renovation</SelectItem>
                        <SelectItem value="tips">Tips & Tricks</SelectItem>
                        <SelectItem value="diy">DIY Projects</SelectItem>
                        <SelectItem value="seasonal">Seasonal Care</SelectItem>
                        <SelectItem value="smart-home">Smart Home</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="sortBy">Sort By</Label>
                    <Select value={sortBy} onValueChange={setSortBy}>
                      <SelectTrigger id="sortBy">
                        <SelectValue placeholder="Newest First" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="newest">Newest First</SelectItem>
                        <SelectItem value="oldest">Oldest First</SelectItem>
                        <SelectItem value="popular">Most Popular</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="readTime">Read Time</Label>
                    <Select value={readTime} onValueChange={setReadTime}>
                      <SelectTrigger id="readTime">
                        <SelectValue placeholder="Any Length" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="any">Any Length</SelectItem>
                        <SelectItem value="short">Quick Reads (&lt; 5 min)</SelectItem>
                        <SelectItem value="medium">Medium (5-10 min)</SelectItem>
                        <SelectItem value="long">In-Depth (&gt; 10 min)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {hasActiveFilters && (
                  <div className="flex justify-end mt-4">
                    <Button type="button" variant="ghost" onClick={resetFilters} className="text-sm flex items-center">
                      <X className="h-4 w-4 mr-1" />
                      Clear Filters
                    </Button>
                  </div>
                )}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </form>
      </CardContent>
    </Card>
  )
}
