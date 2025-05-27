// This file is used for standardizing all content to show HomeGeeni as the author
// and removing individual author names from the blog platform

// Helper function to standardize author name
export function getStandardAuthor(): string {
  return "HomeGeeni";
}

// Function to wrap original blog data to ensure consistent authorship
export function standardizeAuthor<T extends { author: string }>(post: T): T {
  return {
    ...post,
    author: getStandardAuthor()
  };
}
