import type { BlogPost } from "./types"
import { getStandardAuthor, standardizeAuthor } from "./author-helper"

// Mock data - replace with actual database calls
const mockPosts: BlogPost[] = [
  {
    id: "1",
    title: "First-Time Home Buyer's Guide: AI-Powered Market Analysis",
    excerpt:
      "Navigate the home buying process with confidence using AI-driven insights and market data to make informed decisions.",
    content: `
      <h2>Understanding Your Budget with AI</h2>
      <p>Before starting your home search, our AI tools analyze your financial situation against current market conditions to determine your optimal budget range. This goes beyond traditional pre-approval by considering future market trends and hidden costs.</p>
      
      <h3>AI-Powered Pre-Approval Process</h3>
      <ul>
        <li>Automated income verification and debt analysis</li>
        <li>Real-time interest rate optimization</li>
        <li>Predictive cost modeling for different scenarios</li>
        <li>Instant pre-approval letters with multiple lenders</li>
      </ul>
      
      <h2>Smart Property Search</h2>
      <p>Our AI search engine learns your preferences and automatically identifies properties that match your criteria, including hidden gems that traditional searches might miss.</p>
      
      <h3>Market Intelligence Features</h3>
      <p>Get instant access to neighborhood analytics, price predictions, and comparable sales data to understand true property values before making an offer.</p>
      
      <blockquote>
        "AI-powered home buying reduces the time from search to close by an average of 30% while helping buyers find properties 15% below market average."
      </blockquote>
      
      <h2>Making Competitive Offers</h2>
      <p>Use our AI offer optimization tool to craft competitive offers based on seller psychology, market conditions, and comparable sales data.</p>
      
      <h2>Closing with Confidence</h2>
      <p>Our digital closing platform streamlines the entire process with AI-powered document review, automated compliance checks, and real-time status updates.</p>
    `,
    author: "Sarah Johnson",
    publishedAt: "2024-01-15",
    category: "buying",
    featuredImage: "/placeholder.svg?height=400&width=800",
    readTime: 8,
    views: 1250,
  },
  {
    id: "2",
    title: "Selling Your Home: AI-Powered Pricing Strategies",
    excerpt:
      "Maximize your home's sale value with AI-driven pricing analytics, market timing insights, and automated buyer matching.",
    content: `
      <h2>The AI Advantage in Home Selling</h2>
      <p>Traditional real estate pricing relies on outdated methods. Our AI pricing engine analyzes millions of data points including recent sales, market trends, buyer behavior, and seasonal patterns to determine optimal pricing strategies.</p>
      
      <h3>Dynamic Pricing Intelligence</h3>
      <ul>
        <li>Real-time market value updates based on comparable sales</li>
        <li>Predictive analytics for optimal listing timing</li>
        <li>Buyer demand scoring for your specific property type</li>
        <li>Automated price adjustment recommendations</li>
      </ul>
      
      <h2>Pre-Sale Property Optimization</h2>
      <p>Our AI home staging recommendations analyze buyer preferences in your area to suggest improvements that deliver the highest ROI. Get personalized suggestions for updates that matter most to today's buyers.</p>
      
      <h3>Smart Marketing Strategies</h3>
      <p>AI-powered marketing reaches qualified buyers through targeted digital campaigns, social media optimization, and personalized property showcases.</p>
      
      <blockquote>
        "Homes priced using AI analytics sell 25% faster and for 3.2% more than traditionally priced properties."
      </blockquote>
      
      <h2>Automated Buyer Matching</h2>
      <p>Our platform automatically matches your property with pre-qualified buyers who fit your ideal buyer profile, reducing time on market and increasing offer quality.</p>
      
      <h2>Digital Transaction Management</h2>
      <p>Streamline negotiations, manage multiple offers, and track closing progress with AI-powered transaction management tools.</p>
    `,
    author: "Mike Chen",
    publishedAt: "2024-01-10",
    category: "selling",
    featuredImage: "/placeholder.svg?height=400&width=800",
    readTime: 6,
    views: 890,
  },
  {
    id: "3",
    title: "Real Estate Investment: AI-Driven Property Analysis",
    excerpt:
      "Discover profitable investment opportunities with AI-powered market analysis, cash flow predictions, and risk assessment tools.",
    content: `
      <h2>The Future of Real Estate Investment</h2>
      <p>Traditional real estate investment relies on intuition and limited data. Our AI investment platform analyzes comprehensive market data, demographic trends, and economic indicators to identify high-potential investment opportunities.</p>
      
      <h3>AI Investment Screening</h3>
      <ul>
        <li>Automated property scoring based on investment potential</li>
        <li>Cash flow predictions with 95% accuracy</li>
        <li>Risk assessment using machine learning models</li>
        <li>Market trend analysis and future value projections</li>
      </ul>
      
      <h2>Portfolio Optimization</h2>
      <p>Our AI algorithms help diversify your real estate portfolio across different property types, locations, and investment strategies to maximize returns while minimizing risk.</p>
      
      <h3>Market Timing Intelligence</h3>
      <p>Get AI-powered insights on optimal entry and exit points based on market cycles, interest rate predictions, and local economic factors.</p>
      
      <h2>Automated Due Diligence</h2>
      <p>AI-powered property analysis includes automated valuation models, rental yield calculations, and neighborhood growth potential assessments.</p>
      
      <blockquote>
        "AI-assisted real estate investments show 40% higher returns and 60% lower risk compared to traditional investment methods."
      </blockquote>
      
      <h2>Hands-Off Property Management</h2>
      <p>Once you've invested, our platform connects you with AI-optimized property management services for truly passive income generation.</p>
    `,
    author: "Emily Rodriguez",
    publishedAt: "2024-01-05",
    category: "investing",
    featuredImage: "/placeholder.svg?height=400&width=800",
    readTime: 10,
    views: 2100,
  },
  {
    id: "4",
    title: "AI-Powered Market Insights: Predicting Real Estate Trends",
    excerpt:
      "Stay ahead of market movements with artificial intelligence that analyzes millions of data points to predict future real estate trends.",
    content: `
      <h2>The Power of Predictive Analytics</h2>
      <p>Traditional market analysis relies on historical data and human intuition. Our AI platform processes millions of data points in real-time to identify emerging trends before they become obvious to the market.</p>
      
      <h3>Data Sources Our AI Analyzes</h3>
      <ul>
        <li>Economic indicators and employment data</li>
        <li>Demographic shifts and population growth</li>
        <li>Interest rate trends and lending patterns</li>
        <li>Inventory levels and days on market</li>
        <li>Search patterns and buyer behavior</li>
      </ul>
      
      <h2>Neighborhood Growth Predictions</h2>
      <p>Our AI identifies up-and-coming neighborhoods before they become hot markets, giving you a competitive advantage in investment timing and property selection.</p>
      
      <h3>Early Warning Indicators</h3>
      <p>Get alerts about market shifts, price movements, and investment opportunities weeks or months before traditional indicators catch these trends.</p>
      
      <h2>Seasonal Market Patterns</h2>
      <p>AI analysis reveals optimal timing for buying and selling based on seasonal patterns, local market cycles, and economic conditions specific to your area.</p>
      
      <blockquote>
        "Properties identified by our AI trend analysis appreciate 28% faster than the overall market average."
      </blockquote>
      
      <h2>Investment Timing Optimization</h2>
      <p>Know exactly when to buy, sell, or hold based on AI predictions of future market conditions and property value trajectories.</p>
      
      <h2>Risk Assessment</h2>
      <p>Our AI evaluates market stability, volatility patterns, and potential downside risks to help you make informed decisions with confidence.</p>
    `,
    author: "Jason Miller",
    publishedAt: "2024-02-12",
    category: "ai-insights",
    featuredImage: "/placeholder.svg?height=400&width=800",
    readTime: 4,
    views: 1560,
  },
  {
    id: "5",
    title: "Market Analysis: Understanding Property Values in 2024",
    excerpt:
      "Learn how to evaluate property values using comprehensive market data, comparable sales analysis, and economic indicators.",
    content: `
      <h2>Fundamentals of Property Valuation</h2>
      <p>Understanding property values requires analyzing multiple data points including recent sales, market trends, neighborhood dynamics, and economic conditions. Our comprehensive approach gives you the complete picture.</p>
      
      <h3>Key Valuation Factors</h3>
      <ul>
        <li>Comparable sales within the last 6 months</li>
        <li>Property condition and recent improvements</li>
        <li>Neighborhood amenities and school ratings</li>
        <li>Local market supply and demand dynamics</li>
      </ul>
      
      <h2>Comparable Sales Analysis</h2>
      <p>The most reliable method for determining property value involves analyzing recent sales of similar properties in the same area. Our AI system identifies the most relevant comparables automatically.</p>
      
      <h3>Market Trends Impact</h3>
      <p>Current market conditions significantly affect property values. Understanding whether you're in a buyer's or seller's market helps contextualize individual property valuations.</p>
      
      <h2>Neighborhood Analysis</h2>
      <p>Location remains the most important factor in real estate. Analyze crime rates, school performance, transportation access, and future development plans to understand long-term value potential.</p>
      
      <h3>Economic Indicators</h3>
      <p>Employment rates, population growth, and local economic development projects all influence property values. Our analysis includes these macro-economic factors.</p>
      
      <blockquote>
        "Properties in neighborhoods with strong fundamentals appreciate 15-20% faster than the overall market average."
      </blockquote>
      
      <h2>Investment Potential Assessment</h2>
      <p>Beyond current value, consider future appreciation potential based on planned infrastructure, zoning changes, and demographic shifts in the area.</p>
    `,
    author: "Robert Chang",
    publishedAt: "2024-02-28",
    category: "market-analysis",
    featuredImage: "/placeholder.svg?height=400&width=800",
    readTime: 12,
    views: 980,
  },
  {
    id: "6",
    title: "Spring Real Estate Market: Best Time to Buy or Sell?",
    excerpt:
      "Discover seasonal market patterns and learn whether spring is the optimal time for your real estate transaction.",
    content: `
      <h2>Spring Market Dynamics</h2>
      <p>Spring traditionally marks the beginning of peak real estate season. Warmer weather brings increased buyer activity, more inventory, and competitive market conditions that benefit both buyers and sellers.</p>
      
      <h3>Advantages for Sellers</h3>
      <ul>
        <li>Increased buyer activity and competition</li>
        <li>Properties show better with blooming landscapes</li>
        <li>Families prefer moving before school year ends</li>
        <li>Tax refunds provide buyers with down payment funds</li>
      </ul>
      
      <h2>Buyer Considerations</h2>
      <p>While spring offers more inventory options, increased competition can drive prices higher. Buyers should be prepared with pre-approval and quick decision-making capabilities.</p>
      
      <h3>Market Preparation Strategies</h3>
      <p>Whether buying or selling, spring preparation is crucial. Sellers should focus on curb appeal and interior staging, while buyers should secure financing and define their criteria clearly.</p>
      
      <h2>Regional Variations</h2>
      <p>Spring market patterns vary by location. Northern markets see more dramatic seasonal swings, while southern markets maintain steadier year-round activity.</p>
      
      <h3>Timing Your Transaction</h3>
      <p>Early spring often provides the best balance of inventory and competition. Late spring can become highly competitive as summer approaches.</p>
      
      <blockquote>
        "Properties listed in March and April typically sell 18% faster than winter listings and command 2-3% higher prices."
      </blockquote>
      
      <h2>AI-Powered Timing Insights</h2>
      <p>Our platform analyzes local market patterns to provide personalized timing recommendations based on your specific situation and market conditions.</p>
    `,
    author: "Sarah Johnson",
    publishedAt: "2024-03-10",
    category: "market-trends",
    featuredImage: "/placeholder.svg?height=400&width=800",
    readTime: 7,
    views: 1420,
  },
  {
    id: "7",
    title: "Financing Your Real Estate Purchase: AI-Optimized Loan Matching",
    excerpt:
      "Navigate the complex world of real estate financing with AI-powered loan matching and rate optimization tools.",
    content: `
      <h2>Understanding Mortgage Options</h2>
      <p>The mortgage landscape offers numerous options, each with unique benefits and requirements. Our AI system analyzes your financial profile to recommend the optimal loan products for your situation.</p>
      
      <h3>Popular Loan Types</h3>
      <ul>
        <li>Conventional loans with competitive rates for strong credit</li>
        <li>FHA loans for first-time buyers with lower down payments</li>
        <li>VA loans for eligible veterans with no down payment</li>
        <li>Jumbo loans for high-value properties</li>
      </ul>
      
      <h2>AI-Powered Rate Shopping</h2>
      <p>Our platform automatically compares rates from multiple lenders in real-time, ensuring you get the best available terms for your specific financial profile.</p>
      
      <h3>Credit Optimization Strategies</h3>
      <p>Before applying for loans, our AI analyzes your credit profile and provides personalized recommendations to improve your score and qualify for better rates.</p>
      
      <h2>Down Payment Planning</h2>
      <p>Determine the optimal down payment amount based on loan programs, PMI costs, and your long-term financial goals using our AI planning tools.</p>
      
      <h3>Pre-Approval Process</h3>
      <p>Get pre-approved quickly with our digital application process that connects you directly with lenders offering your recommended loan products.</p>
      
      <blockquote>
        "AI-optimized loan matching saves borrowers an average of $3,200 annually compared to traditional loan shopping methods."
      </blockquote>
      
      <h2>Closing Cost Estimation</h2>
      <p>Our AI provides accurate closing cost estimates and identifies opportunities to negotiate or reduce fees throughout the process.</p>
      
      <h2>Rate Lock Timing</h2>
      <p>Use predictive analytics to determine optimal timing for rate locks based on market trends and your expected closing timeline.</p>
    `,
    author: "Lisa Wong",
    publishedAt: "2024-03-05",
    category: "financing",
    featuredImage: "/placeholder.svg?height=400&width=800",
    readTime: 9,
    views: 1850,
  },
  {
    id: "8",
    title: "Property Investment ROI: Calculating Returns with AI Analytics",
    excerpt:
      "Master real estate investment returns using AI-powered analysis tools that factor in all costs, risks, and market projections.",
    content: `
      <h2>Understanding Investment Returns</h2>
      <p>Successful real estate investing requires accurate ROI calculations that consider all costs, risks, and potential returns. Our AI platform provides comprehensive analysis beyond simple cap rate calculations.</p>
      
      <h3>Key ROI Metrics</h3>
      <ul>
        <li>Cash-on-cash return for leveraged investments</li>
        <li>Internal rate of return (IRR) for long-term projections</li>
        <li>Cap rate for comparing investment opportunities</li>
        <li>Total return including appreciation and cash flow</li>
      </ul>
      
      <h2>AI-Enhanced Cost Analysis</h2>
      <p>Our system automatically factors in often-overlooked costs including property management, maintenance reserves, vacancy rates, and capital improvements to provide realistic return projections.</p>
      
      <h3>Market Appreciation Modeling</h3>
      <p>AI analysis of local market trends, economic indicators, and demographic data provides sophisticated appreciation forecasts beyond simple historical averages.</p>
      
      <h2>Risk Assessment Integration</h2>
      <p>Investment returns must be evaluated against risk levels. Our platform provides risk-adjusted returns that help you compare opportunities across different markets and property types.</p>
      
      <h3>Portfolio Optimization</h3>
      <p>Diversification strategies that maximize returns while minimizing risk through intelligent property selection across markets and asset classes.</p>
      
      <blockquote>
        "AI-optimized investment analysis improves ROI accuracy by 35% compared to traditional calculation methods."
      </blockquote>
      
      <h2>Tax Implications</h2>
      <p>Comprehensive analysis includes depreciation benefits, tax strategies, and 1031 exchange opportunities to maximize after-tax returns.</p>
      
      <h2>Exit Strategy Planning</h2>
      <p>Plan your investment exit with AI predictions of optimal timing based on market cycles, property appreciation, and tax considerations.</p>
    `,
    author: "Mike Chen",
    publishedAt: "2024-02-20",
    category: "investing",
    featuredImage: "/placeholder.svg?height=400&width=800",
    readTime: 11,
    views: 1340,
  },
  {
    id: "9",
    title: "Negotiation Strategies: AI-Powered Deal Making in Real Estate",
    excerpt:
      "Master the art of real estate negotiation using AI insights on seller psychology, market conditions, and optimal offer strategies.",
    content: `
      <h2>The Science of Real Estate Negotiation</h2>
      <p>Successful real estate negotiations combine market knowledge, psychology, and timing. Our AI platform analyzes seller behavior patterns, market conditions, and comparable transactions to optimize your negotiation strategy.</p>
      
      <h3>AI-Powered Offer Optimization</h3>
      <ul>
        <li>Seller motivation analysis based on listing history</li>
        <li>Market timing insights for competitive advantage</li>
        <li>Comparable sales analysis for fair value determination</li>
        <li>Inspection and contingency strategy recommendations</li>
      </ul>
      
      <h2>Understanding Seller Psychology</h2>
      <p>Our AI analyzes listing patterns, price changes, and time on market to understand seller motivation and craft offers that address their specific concerns and priorities.</p>
      
      <h3>Market Condition Strategies</h3>
      <p>Different market conditions require different approaches. Our platform adjusts negotiation recommendations based on current inventory levels, buyer competition, and seasonal factors.</p>
      
      <h2>Contingency Optimization</h2>
      <p>Balance protection with competitiveness by optimizing inspection periods, financing contingencies, and appraisal terms based on current market conditions.</p>
      
      <h3>Counter-Offer Management</h3>
      <p>AI analysis of counter-offer patterns helps predict seller responses and develop effective counter-strategies that move negotiations toward successful closure.</p>
      
      <blockquote>
        "AI-assisted negotiations result in 12% better purchase prices and 23% faster contract acceptance compared to traditional methods."
      </blockquote>
      
      <h2>Multiple Offer Situations</h2>
      <p>Stand out in competitive markets with strategies that go beyond price, including terms optimization, communication tactics, and escalation clauses.</p>
      
      <h2>Closing Timeline Optimization</h2>
      <p>Coordinate timing to meet seller preferences while protecting your interests, using market data to determine optimal closing schedules.</p>
    `,
    author: "Carlos Mendez",
    publishedAt: "2024-01-25",
    category: "buying",
    featuredImage: "/placeholder.svg?height=400&width=800",
    readTime: 5,
    views: 2250,
  },
]

export async function getBlogPosts(): Promise<BlogPost[]> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 500))
  // Apply standard HomeGeeni authorship to all posts
  return mockPosts
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .map(post => standardizeAuthor(post))
}

export async function getBlogPost(id: string): Promise<BlogPost | null> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 300))
  const post = mockPosts.find((post) => post.id === id)
  // Apply standard HomeGeeni authorship if post exists
  return post ? standardizeAuthor(post) : null
}

export async function createBlogPost(
  post: Omit<BlogPost, "id" | "publishedAt" | "views" | "readTime">,
): Promise<BlogPost> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 1000))

  const newPost: BlogPost = {
    ...post,
    id: Date.now().toString(),
    publishedAt: new Date().toISOString(),
    views: 0,
    readTime: Math.ceil(post.content.split(" ").length / 200), // Estimate reading time
    author: getStandardAuthor() // Ensure all new posts have HomeGeeni as author
  }

  mockPosts.unshift(newPost)
  return standardizeAuthor(newPost)
}

export async function searchBlogPosts(
  query = "",
  category = "",
  sortBy = "newest",
  readTime = "",
): Promise<BlogPost[]> {
  // Get all posts
  const allPosts = await getBlogPosts()

  // Filter posts based on criteria
  let filteredPosts = [...allPosts]

  // Filter by search query
  if (query) {
    const searchTerms = query.toLowerCase()
    filteredPosts = filteredPosts.filter(
      (post) =>
        post.title.toLowerCase().includes(searchTerms) ||
        post.excerpt.toLowerCase().includes(searchTerms) ||
        post.content.toLowerCase().includes(searchTerms),
    )
  }

  // Filter by category
  if (category) {
    filteredPosts = filteredPosts.filter((post) => post.category === category)
  }

  // Filter by read time
  if (readTime) {
    filteredPosts = filteredPosts.filter((post) => {
      if (readTime === "short") return post.readTime < 5
      if (readTime === "medium") return post.readTime >= 5 && post.readTime <= 10
      if (readTime === "long") return post.readTime > 10
      return true
    })
  }

  // Sort posts
  if (sortBy === "newest") {
    filteredPosts.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
  } else if (sortBy === "oldest") {
    filteredPosts.sort((a, b) => new Date(a.publishedAt).getTime() - new Date(b.publishedAt).getTime())
  } else if (sortBy === "popular") {
    filteredPosts.sort((a, b) => (b.views || 0) - (a.views || 0))
  }

  // Apply standard HomeGeeni authorship to all filtered posts
  return filteredPosts.map(post => standardizeAuthor(post))
}
