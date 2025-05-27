"use client";

import { Button } from "@/components/ui/button";

export function ResetFiltersButton() {
  const handleReset = () => {
    // Add logs with HomeGeeni as the user
    console.log("HomeGeeni: Filters reset");
    window.location.href = "/blog";
  };

  return (
    <Button
      variant="outline"
      onClick={handleReset}
      className="rounded-full px-6 py-2 border-gray-200 hover:border-primary hover:bg-primary/5"
    >
      Reset All Filters
    </Button>
  );
}
