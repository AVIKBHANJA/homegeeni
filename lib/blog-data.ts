import type { BlogPost } from "./types"

// Mock data - replace with actual database calls
const mockPosts: BlogPost[] = [
  {
    id: "1",
    title: "10 Essential Home Maintenance Tips for Every Season",
    excerpt:
      "Keep your home in perfect condition year-round with these expert maintenance tips that will save you money and prevent costly repairs.",
    content: `
      <h2>Spring Maintenance</h2>
      <p>Spring is the perfect time to inspect your home after winter. Start by checking your roof for any damage from ice or snow. Look for loose or missing shingles, and inspect gutters for clogs or damage.</p>
      
      <h3>Exterior Inspection</h3>
      <ul>
        <li>Clean and inspect gutters and downspouts</li>
        <li>Check exterior caulking around windows and doors</li>
        <li>Inspect deck and patio for winter damage</li>
        <li>Test outdoor faucets and irrigation systems</li>
      </ul>
      
      <h2>Summer Preparation</h2>
      <p>Summer brings its own challenges. Ensure your air conditioning system is ready for the heat by changing filters and scheduling professional maintenance.</p>
      
      <h3>HVAC System Care</h3>
      <p>Your HVAC system works hardest during summer months. Regular maintenance can improve efficiency by up to 15% and extend the system's lifespan significantly.</p>
      
      <blockquote>
        "Preventive maintenance is always cheaper than emergency repairs. A small investment in regular upkeep can save thousands in the long run."
      </blockquote>
      
      <h2>Fall Winterization</h2>
      <p>Prepare your home for winter by insulating pipes, sealing air leaks, and ensuring your heating system is in top condition.</p>
      
      <h2>Winter Safety</h2>
      <p>Winter maintenance focuses on safety and preventing damage from freezing temperatures. Keep walkways clear and ensure proper ventilation.</p>
    `,
    author: "Sarah Johnson",
    publishedAt: "2024-01-15",
    category: "maintenance",
    featuredImage: "/placeholder.svg?height=400&width=800",
    readTime: 8,
    views: 1250,
  },
  {
    id: "2",
    title: "Smart Home Technology: Upgrading Your Living Space",
    excerpt:
      "Discover the latest smart home technologies that can improve your daily life, increase energy efficiency, and boost your home's value.",
    content: `
      <h2>The Smart Home Revolution</h2>
      <p>Smart home technology has evolved from a luxury to a practical necessity. Today's smart devices offer unprecedented control over your home environment while providing significant energy savings.</p>
      
      <h3>Essential Smart Home Devices</h3>
      <ul>
        <li>Smart thermostats for optimal climate control</li>
        <li>Smart lighting systems for ambiance and efficiency</li>
        <li>Security cameras and smart locks for peace of mind</li>
        <li>Smart speakers for voice control integration</li>
      </ul>
      
      <h2>Energy Efficiency Benefits</h2>
      <p>Smart home devices can reduce your energy consumption by up to 30%. Smart thermostats alone can save homeowners an average of $180 per year on heating and cooling costs.</p>
      
      <h3>Installation Tips</h3>
      <p>Start small with one or two devices and gradually expand your smart home ecosystem. Many devices are designed for easy DIY installation, but don't hesitate to consult professionals for complex setups.</p>
      
      <h2>Future-Proofing Your Investment</h2>
      <p>Choose devices that support common protocols like Wi-Fi, Zigbee, or Z-Wave to ensure compatibility as you expand your system.</p>
    `,
    author: "Mike Chen",
    publishedAt: "2024-01-10",
    category: "smart-home",
    featuredImage: "/placeholder.svg?height=400&width=800",
    readTime: 6,
    views: 890,
  },
  {
    id: "3",
    title: "DIY Kitchen Renovation: Budget-Friendly Ideas That Work",
    excerpt:
      "Transform your kitchen without breaking the bank. Learn professional techniques for updating cabinets, countertops, and more.",
    content: `
      <h2>Planning Your Kitchen Makeover</h2>
      <p>A successful kitchen renovation starts with careful planning. Set a realistic budget and prioritize the changes that will have the biggest impact on both function and aesthetics.</p>
      
      <h3>Cabinet Transformation</h3>
      <p>Instead of replacing cabinets entirely, consider these cost-effective alternatives:</p>
      <ul>
        <li>Paint existing cabinets for a fresh new look</li>
        <li>Replace cabinet doors while keeping the frames</li>
        <li>Add new hardware for an instant upgrade</li>
        <li>Install under-cabinet lighting for ambiance</li>
      </ul>
      
      <h2>Countertop Options</h2>
      <p>Countertops can make or break your kitchen's appearance. Consider these budget-friendly options that still deliver style and durability.</p>
      
      <h3>Backsplash Impact</h3>
      <p>A new backsplash can completely transform your kitchen's appearance. Subway tiles remain popular for their timeless appeal and easy maintenance.</p>
      
      <h2>Lighting Makes a Difference</h2>
      <p>Good lighting is crucial in any kitchen. Layer different types of lighting - ambient, task, and accent - to create a functional and inviting space.</p>
      
      <blockquote>
        "The key to a successful DIY renovation is knowing when to tackle projects yourself and when to call in professionals."
      </blockquote>
    `,
    author: "Emily Rodriguez",
    publishedAt: "2024-01-05",
    category: "diy",
    featuredImage: "/placeholder.svg?height=400&width=800",
    readTime: 10,
    views: 2100,
  },
  {
    id: "4",
    title: "5 Quick Weekend Projects to Boost Your Home's Curb Appeal",
    excerpt:
      "Make a big impact in just a weekend with these simple projects that will dramatically improve your home's exterior appearance.",
    content: `
      <h2>Front Door Makeover</h2>
      <p>Your front door is the focal point of your home's exterior. A fresh coat of paint in a bold, welcoming color can transform your entire facade in just a few hours.</p>
      
      <h3>Color Selection Tips</h3>
      <p>Choose a color that complements your home's exterior but also makes a statement. Deep blues, rich reds, and forest greens are perennial favorites that add character and charm.</p>
      
      <h2>Landscape Lighting</h2>
      <p>Strategic outdoor lighting enhances safety while showcasing your home's best features after dark. Solar-powered options make this an eco-friendly and easy-to-install upgrade.</p>
      
      <h2>Mailbox Upgrade</h2>
      <p>Often overlooked, your mailbox is a small but impactful element of your home's curb appeal. A new, stylish mailbox can be installed in under an hour.</p>
      
      <h2>Window Box Planters</h2>
      <p>Add charm and color with window box planters filled with seasonal flowers. This simple addition brings life and dimension to your home's exterior.</p>
      
      <h2>House Number Display</h2>
      <p>Modern, clearly visible house numbers not only help visitors find your home but also add a contemporary design element to your entrance.</p>
    `,
    author: "Jason Miller",
    publishedAt: "2024-02-12",
    category: "diy",
    featuredImage: "/placeholder.svg?height=400&width=800",
    readTime: 4,
    views: 1560,
  },
  {
    id: "5",
    title: "The Complete Guide to Home Insulation: Save Energy and Money",
    excerpt:
      "Learn how proper insulation can reduce your energy bills by up to 20% while making your home more comfortable year-round.",
    content: `
      <h2>Understanding R-Values</h2>
      <p>The R-value measures insulation's resistance to heat flow. Higher R-values indicate better insulating performance. Different areas of your home require different R-values for optimal efficiency.</p>
      
      <h3>Recommended R-Values by Region</h3>
      <ul>
        <li>Northern regions: R-49 to R-60 for attics, R-13 to R-21 for walls</li>
        <li>Mid-regions: R-38 to R-49 for attics, R-13 to R-15 for walls</li>
        <li>Southern regions: R-30 to R-38 for attics, R-13 for walls</li>
      </ul>
      
      <h2>Types of Insulation</h2>
      <p>Each insulation type has specific applications and benefits. Understanding these differences helps you choose the right solution for each area of your home.</p>
      
      <h3>Fiberglass Insulation</h3>
      <p>The most common and economical option, fiberglass insulation comes in batts or rolls and is ideal for walls, floors, and ceilings.</p>
      
      <h3>Spray Foam Insulation</h3>
      <p>Though more expensive, spray foam creates an air-tight seal and offers the highest R-value per inch. It's perfect for irregular spaces and air sealing.</p>
      
      <h3>Cellulose Insulation</h3>
      <p>Made from recycled paper products, cellulose is an eco-friendly option that works well for retrofitting existing walls and attic spaces.</p>
      
      <h2>DIY vs. Professional Installation</h2>
      <p>While some insulation projects are suitable for DIY, others require professional expertise. This section helps you determine which approach is best for your specific needs.</p>
    `,
    author: "Robert Chang",
    publishedAt: "2024-02-28",
    category: "maintenance",
    featuredImage: "/placeholder.svg?height=400&width=800",
    readTime: 12,
    views: 980,
  },
  {
    id: "6",
    title: "Seasonal Home Maintenance Checklist: Spring Edition",
    excerpt:
      "Your comprehensive guide to essential spring maintenance tasks that will prepare your home for the warmer months ahead.",
    content: `
      <h2>Post-Winter Inspection</h2>
      <p>Winter can be harsh on your home's exterior. As temperatures rise, it's crucial to assess any damage and address issues promptly before they worsen.</p>
      
      <h3>Roof and Gutters</h3>
      <ul>
        <li>Check for missing or damaged shingles</li>
        <li>Clear debris from gutters and downspouts</li>
        <li>Ensure proper drainage away from foundation</li>
        <li>Inspect flashing around chimneys and vents</li>
      </ul>
      
      <h2>HVAC Maintenance</h2>
      <p>Preparing your cooling system before the heat arrives will ensure comfort and efficiency when you need it most.</p>
      
      <h3>Air Conditioning Prep</h3>
      <p>Replace filters, clean condenser coils, and consider a professional tune-up to ensure your system runs efficiently during peak summer months.</p>
      
      <h2>Lawn and Garden</h2>
      <p>Spring is the ideal time to prepare your outdoor spaces for the growing season ahead.</p>
      
      <h3>Early Season Lawn Care</h3>
      <p>Aerate compacted soil, apply pre-emergent weed control, and give your lawn its first careful mowing of the season.</p>
      
      <h2>Windows and Screens</h2>
      <p>Clean windows inside and out, repair any damaged screens, and check weatherstripping to prepare for open-window days ahead.</p>
    `,
    author: "Sarah Johnson",
    publishedAt: "2024-03-10",
    category: "seasonal",
    featuredImage: "/placeholder.svg?height=400&width=800",
    readTime: 7,
    views: 1420,
  },
  {
    id: "7",
    title: "How to Choose the Perfect Paint Colors for Every Room",
    excerpt:
      "Master the art of color selection with our room-by-room guide to creating the perfect atmosphere in your home.",
    content: `
      <h2>Understanding Color Psychology</h2>
      <p>Colors significantly impact our mood and perception of space. Before selecting paint, consider the emotional response you want to evoke in each room.</p>
      
      <h3>Living Room Colors</h3>
      <p>As a gathering space, living rooms benefit from warm, inviting colors like soft neutrals, gentle blues, or muted greens that encourage conversation and relaxation.</p>
      
      <h2>Kitchen Color Strategies</h2>
      <p>Kitchens thrive with energetic colors that stimulate appetite and activity. Consider warm whites, sunny yellows, or gentle terra cottas for a welcoming cooking space.</p>
      
      <h2>Bedroom Palettes</h2>
      <p>Promote restful sleep with cool, calming colors like soft blues, lavenders, or sophisticated neutrals that create a peaceful retreat from daily stress.</p>
      
      <h3>Color Testing Tips</h3>
      <p>Always test paint samples on multiple walls and observe them at different times of day. Natural and artificial lighting dramatically affects how colors appear in your space.</p>
      
      <blockquote>
        "The right paint color can transform a room more dramatically than any other design element, and at a fraction of the cost of renovation."
      </blockquote>
      
      <h2>Color Coordination</h2>
      <p>Create a cohesive home by selecting a color palette that flows naturally from room to room, using varying intensities of complementary colors to define separate spaces.</p>
    `,
    author: "Lisa Wong",
    publishedAt: "2024-03-05",
    category: "tips",
    featuredImage: "/placeholder.svg?height=400&width=800",
    readTime: 9,
    views: 1850,
  },
  {
    id: "8",
    title: "Smart Thermostats: A Comprehensive Comparison Guide",
    excerpt:
      "Find the perfect smart thermostat for your home with our detailed analysis of features, compatibility, and energy-saving potential.",
    content: `
      <h2>Why Upgrade to a Smart Thermostat?</h2>
      <p>Smart thermostats offer convenience, energy savings, and unprecedented control over your home's climate. Most users report saving 10-15% on heating and cooling costs after installation.</p>
      
      <h3>Top Models Compared</h3>
      <ul>
        <li><strong>Nest Learning Thermostat:</strong> Best for automatic adaptation to your schedule</li>
        <li><strong>Ecobee SmartThermostat:</strong> Ideal for homes with varying temperature zones</li>
        <li><strong>Honeywell Home T9:</strong> Excellent for room-specific temperature control</li>
        <li><strong>Amazon Smart Thermostat:</strong> Best budget-friendly option with Alexa integration</li>
      </ul>
      
      <h2>Installation Considerations</h2>
      <p>Before purchasing, verify compatibility with your HVAC system. Most smart thermostats require a C-wire for power, though some include adapters for homes without this wiring.</p>
      
      <h3>DIY Installation Tips</h3>
      <p>Many homeowners can install smart thermostats themselves in under an hour. Always photograph your existing wiring before disconnecting anything, and follow manufacturer instructions carefully.</p>
      
      <h2>Feature Comparison</h2>
      <p>Consider which features matter most to you: learning capabilities, geofencing, voice control compatibility, remote sensors, or energy usage reports.</p>
      
      <h2>Return on Investment</h2>
      <p>While smart thermostats require an upfront investment of $100-$250, most users recoup this cost through energy savings within 1-2 years of installation.</p>
    `,
    author: "Mike Chen",
    publishedAt: "2024-02-20",
    category: "smart-home",
    featuredImage: "/placeholder.svg?height=400&width=800",
    readTime: 11,
    views: 1340,
  },
  {
    id: "9",
    title: "Quick Fixes for Common Plumbing Problems",
    excerpt:
      "Learn how to handle minor plumbing issues yourself and save money on service calls with these expert DIY solutions.",
    content: `
      <h2>Dealing with Clogged Drains</h2>
      <p>Before reaching for harsh chemicals, try these effective and eco-friendly methods to clear stubborn clogs in sinks and showers.</p>
      
      <h3>Natural Drain Cleaners</h3>
      <p>A mixture of baking soda followed by vinegar can break down many clogs. Pour half a cup of baking soda down the drain, followed by half a cup of vinegar. Cover the drain for 5-10 minutes, then flush with hot water.</p>
      
      <h2>Fixing a Running Toilet</h2>
      <p>A running toilet can waste hundreds of gallons of water daily. Fortunately, most issues can be resolved by replacing the flapper or adjusting the fill valve.</p>
      
      <h3>Step-by-Step Flapper Replacement</h3>
      <ol>
        <li>Turn off the water supply to the toilet</li>
        <li>Flush to empty the tank</li>
        <li>Disconnect the old flapper</li>
        <li>Install the new flapper following package instructions</li>
        <li>Turn water back on and test</li>
      </ol>
      
      <h2>Stopping Dripping Faucets</h2>
      <p>That annoying drip is usually caused by a worn washer or O-ring that can be replaced in minutes with basic tools.</p>
      
      <h2>When to Call a Professional</h2>
      <p>While many plumbing issues can be DIY projects, know when to call in experts. Any problems with main water lines, sewage backups, or persistent leaks warrant professional attention.</p>
      
      <blockquote>
        "The average household can save over $100 annually by addressing minor plumbing issues promptly before they become major problems."
      </blockquote>
    `,
    author: "Carlos Mendez",
    publishedAt: "2024-01-25",
    category: "maintenance",
    featuredImage: "/placeholder.svg?height=400&width=800",
    readTime: 5,
    views: 2250,
  },
]

export async function getBlogPosts(): Promise<BlogPost[]> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 500))
  return mockPosts.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
}

export async function getBlogPost(id: string): Promise<BlogPost | null> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 300))
  return mockPosts.find((post) => post.id === id) || null
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
  }

  mockPosts.unshift(newPost)
  return newPost
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

  return filteredPosts
}
