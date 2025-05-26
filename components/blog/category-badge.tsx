import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

interface CategoryBadgeProps {
  category: string
  className?: string
}

export function CategoryBadge({ category, className }: CategoryBadgeProps) {
  // Define category-specific styles
  const getCategoryStyles = (category: string) => {
    switch (category.toLowerCase()) {
      case "maintenance":
        return "bg-blue-100 text-blue-800 hover:bg-blue-200"
      case "renovation":
        return "bg-purple-100 text-purple-800 hover:bg-purple-200"
      case "tips":
        return "bg-green-100 text-green-800 hover:bg-green-200"
      case "diy":
        return "bg-amber-100 text-amber-800 hover:bg-amber-200"
      case "seasonal":
        return "bg-orange-100 text-orange-800 hover:bg-orange-200"
      case "smart-home":
        return "bg-cyan-100 text-cyan-800 hover:bg-cyan-200"
      default:
        return "bg-gray-100 text-gray-800 hover:bg-gray-200"
    }
  }

  return (
    <Badge variant="outline" className={cn(getCategoryStyles(category), className)}>
      {category.charAt(0).toUpperCase() + category.slice(1)}
    </Badge>
  )
}
