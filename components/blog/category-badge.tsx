import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface CategoryBadgeProps {
  category: string;
  className?: string;
}

export function CategoryBadge({ category, className }: CategoryBadgeProps) {
  // Define category-specific styles
  const getCategoryStyles = (category: string) => {
    switch (category.toLowerCase()) {
      case "maintenance":
        return "bg-primary/10 text-primary hover:bg-primary/15";
      case "renovation":
        return "bg-accent/10 text-accent hover:bg-accent/15";
      case "tips":
        return "bg-primary/10 text-primary hover:bg-primary/15";
      case "diy":
        return "bg-accent/10 text-accent hover:bg-accent/15";
      case "seasonal":
        return "bg-primary/10 text-primary hover:bg-primary/15";
      case "smart-home":
        return "bg-accent/10 text-accent hover:bg-accent/15";
      default:
        return "bg-gray-100 text-gray-700 hover:bg-gray-200";
    }
  };

  return (
    <Badge
      variant="outline"
      className={cn(
        "rounded-full border-0 font-medium px-3 py-1 text-xs",
        getCategoryStyles(category),
        className
      )}
    >
      {category.charAt(0).toUpperCase() + category.slice(1)}
    </Badge>
  );
}
