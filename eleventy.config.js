module.exports = function(eleventyConfig) {
  // Add YAML support
  eleventyConfig.addDataExtension("yaml", contents => require("js-yaml").load(contents));
  
  // Watch CSS files for changes
  eleventyConfig.addWatchTarget("./src/css/");
  
  // Pass through static files
  eleventyConfig.addPassthroughCopy("./src/css");
  eleventyConfig.addPassthroughCopy("./src/js");
  eleventyConfig.addPassthroughCopy("./src/images");
  eleventyConfig.addPassthroughCopy("./src/fonts");
  eleventyConfig.addPassthroughCopy("./src/robots.txt");

  // Add date formatting filter
  eleventyConfig.addFilter("formatAvailabilityDate", function(startDate, endDate) {
    const start = new Date(startDate);
    const end = new Date(endDate);
    
    const startMonth = start.toLocaleDateString('en-US', { month: 'long' });
    const startDay = start.getDate();
    const endDay = end.getDate();
    const endYear = end.getFullYear();
    
    return `${startMonth} ${startDay}-${endDay}, ${endYear}`;
  });

  // Check if availability dates have passed
  eleventyConfig.addFilter("isAvailabilityExpired", function(endDate) {
    const end = new Date(endDate);
    const today = new Date();
    return today > end;
  });

  // Get next upcoming city tour
  eleventyConfig.addFilter("getNextCityTour", function(cities) {
    if (!cities || !Array.isArray(cities)) {
      return null;
    }
    
    const today = new Date();
    const sixMonthsFromNow = new Date();
    sixMonthsFromNow.setMonth(sixMonthsFromNow.getMonth() + 6);
    
    // Filter and sort cities by start date
    const upcomingCities = cities
      .filter(city => {
        if (!city || !city.dates || !city.dates.start) return false;
        const startDate = new Date(city.dates.start);
        return startDate > today && startDate <= sixMonthsFromNow;
      })
      .sort((a, b) => new Date(a.dates.start) - new Date(b.dates.start));
    
    // Get the first upcoming city
    return upcomingCities.length > 0 ? upcomingCities[0] : null;
  });

  // Format city tour dates
  eleventyConfig.addFilter("formatCityTourDates", function(startDate, endDate) {
    const start = new Date(startDate);
    const end = new Date(endDate);
    
    const monthYear = start.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
    const startDay = start.getDate();
    const endDay = end.getDate();
    
    // If same month, format as "Month D–D, YYYY"
    if (start.getMonth() === end.getMonth()) {
      return `${monthYear.split(' ')[0]} ${startDay}–${endDay}, ${monthYear.split(' ')[1]}`;
    } else {
      // If different months, format as "Month D – Month D, YYYY"
      const endMonth = end.toLocaleDateString('en-US', { month: 'long' });
      return `${monthYear.split(' ')[0]} ${startDay} – ${endMonth} ${endDay}, ${end.getFullYear()}`;
    }
  });
  
  // Format city dates with short month (e.g., "Sept 5-10, 2025")
  eleventyConfig.addFilter("formatCityDates", function(startDate, endDate) {
    const start = new Date(startDate);
    const end = new Date(endDate);
    
    const startMonth = start.toLocaleDateString('en-US', { month: 'short' });
    const startDay = start.getDate();
    const endDay = end.getDate();
    const year = end.getFullYear();
    
    // If same month, format as "Sept 5-10, 2025"
    if (start.getMonth() === end.getMonth()) {
      return `${startMonth} ${startDay}-${endDay}, ${year}`;
    } else {
      // If different months, format as "Sept 29 - Oct 4, 2025"
      const endMonth = end.toLocaleDateString('en-US', { month: 'short' });
      return `${startMonth} ${startDay} - ${endMonth} ${endDay}, ${year}`;
    }
  });
  
  // Add collections
  eleventyConfig.addCollection("featuredPosts", function(collectionApi) {
    // Get all posts with featured.enabled: true
    const featuredPosts = collectionApi.getFilteredByGlob("./src/posts/*.md")
      .filter(item => {
        // Only support new format: featured.enabled: true
        return item.data.featured && 
               typeof item.data.featured === 'object' && 
               item.data.featured.enabled === true;
      });
    
    // Check for duplicate positions and warn
    const positionMap = new Map();
    featuredPosts.forEach(post => {
      const position = post.data.featured.position;
      if (position) {
        if (!positionMap.has(position)) {
          positionMap.set(position, []);
        }
        positionMap.get(position).push(post.fileSlug);
      }
    });
    
    // Warn about duplicates
    positionMap.forEach((posts, position) => {
      if (posts.length > 1) {
        console.warn(`⚠️  Warning: Multiple posts have featured position ${position}: ${posts.join(', ')}`);
      }
    });
    
    // Sort posts first
    const sortedPosts = featuredPosts.sort((a, b) => {
      // Extract position values
      const posA = a.data.featured.position || null;
      const posB = b.data.featured.position || null;
      
      // If both have positions, sort by position (ascending)
      if (posA !== null && posB !== null) {
        // If same position, sort by date as tiebreaker
        if (posA === posB) {
          return b.date - a.date;
        }
        return posA - posB;
      }
      
      // If only A has position, it comes first
      if (posA !== null && posB === null) {
        return -1;
      }
      
      // If only B has position, it comes first
      if (posA === null && posB !== null) {
        return 1;
      }
      
      // If neither has position, sort by date (newest first)
      return b.date - a.date;
    });
    
    // Warn if more than 5 featured posts (AFTER sorting)
    if (sortedPosts.length > 5) {
      console.warn(`⚠️  Warning: You have ${sortedPosts.length} featured posts, but only 5 slots available on the homepage.`);
      console.warn(`   The following posts won't be shown on the homepage:`);
      sortedPosts.slice(5).forEach((post, index) => {
        console.warn(`   ${index + 6}. ${post.fileSlug} (position: ${post.data.featured.position || 'none'})`);
      });
    }
    
    return sortedPosts;
  });

  eleventyConfig.addCollection("allPosts", function(collectionApi) {
    // Get all posts, sorted by date (newest first)
    return collectionApi.getFilteredByGlob("./src/posts/*.md")
      .sort((a, b) => {
        return b.date - a.date;
      });
  });


  // Format date filter: YYYY-MM-DD to formatted date (e.g., "Apr 12, 2025")
  eleventyConfig.addFilter("formatPostDate", function(dateObj) {
    const date = new Date(dateObj);
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric', 
      year: 'numeric'
    });
  });

  // Format date to RFC2822 for RSS feeds
  eleventyConfig.addFilter("dateToRfc2822", function(dateObj) {
    const date = new Date(dateObj);
    return date.toUTCString();
  });

  // Format date to ISO for structured data
  eleventyConfig.addFilter("dateToISO", function(dateObj) {
    const date = new Date(dateObj);
    return date.toISOString();
  });

  // Format date for sitemap (W3C format)
  eleventyConfig.addFilter("htmlDateString", function(dateObj) {
    const date = new Date(dateObj);
    return date.toISOString().split('T')[0];
  });

  // Format tags to be displayed as category
  eleventyConfig.addFilter("formatTags", function(tags) {
    if (!tags || !Array.isArray(tags)) return "";
    return tags.join(", ");
  });

  // Calculate reading time based on word count
  eleventyConfig.addFilter("readingTime", function(content) {
    if (!content) return "1 min read";
    
    // Strip HTML tags and get just text content
    const textContent = content.toString().replace(/(<([^>]+)>)/gi, "");
    
    // Count words by splitting on whitespace
    const words = textContent.trim().split(/\s+/).length;
    
    // Calculate reading time (200 words per minute)
    const readingTime = Math.ceil(words / 200);
    
    // Return formatted string
    return `${readingTime} min read`;
  });

  // Get featured position for a post (returns 1, 2, 3 or null)
  eleventyConfig.addFilter("getFeaturedPosition", function(postUrl, featuredPosts) {
    if (!featuredPosts || !postUrl) return null;
    
    // Get top 3 featured posts
    const topThree = featuredPosts.slice(0, 3);
    
    // Find position (1-based index)
    for (let i = 0; i < topThree.length; i++) {
      if (topThree[i].url === postUrl) {
        return i + 1;
      }
    }
    
    return null;
  });

  // Map theme color names to CSS variables
  eleventyConfig.addFilter("getThemeColor", function(colorName, pageUrl) {
    const colorMap = {
      'terracotta': 'var(--theme-terracotta)',
      'pale-sage': 'var(--theme-pale-sage)',
      'soft-stone': 'var(--theme-soft-stone)',
      'warm-beige': 'var(--theme-warm-beige)',
      'neutral-cream': 'var(--theme-neutral-cream)',
      'warm-bronze': 'var(--theme-warm-bronze)',
      'sage-green': 'var(--theme-sage-green)',
      'soft-blue': 'var(--theme-soft-blue)',
      'dusty-violet': 'var(--theme-dusty-violet)',
      'light-purple': 'var(--theme-light-purple)'
    };
    
    // If a valid color name is provided, return the CSS variable
    if (colorName && colorMap[colorName]) {
      return colorMap[colorName];
    }
    
    // If no color or invalid color, return a deterministic "random" color based on URL
    const colors = Object.values(colorMap);
    
    // Create a simple hash from the page URL for deterministic randomness
    let hash = 0;
    if (pageUrl) {
      for (let i = 0; i < pageUrl.length; i++) {
        const char = pageUrl.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash = hash & hash; // Convert to 32-bit integer
      }
    }
    
    // Use the hash to pick a color deterministically
    const index = Math.abs(hash) % colors.length;
    return colors[index];
  });

  // Get the appropriate background color for a post considering featured position
  eleventyConfig.addFilter("getPostBackgroundColor", function(post, featuredPosts) {
    // Check if this post is in the top 3 featured positions
    if (!featuredPosts || !post || !post.url) {
      // Fallback to standard color logic if no featured posts collection
      return eleventyConfig.getFilter("getThemeColor")(post?.data?.background, post?.url);
    }
    
    // Get top 3 featured posts
    const topThree = featuredPosts.slice(0, 3);
    
    // Find position (1-based index)
    let featuredPosition = null;
    for (let i = 0; i < topThree.length; i++) {
      if (topThree[i].url === post.url) {
        featuredPosition = i + 1;
        break;
      }
    }
    
    // If it's in top 3 featured, use the fixed featured colors
    if (featuredPosition === 1) {
      return 'var(--theme-terracotta)';
    } else if (featuredPosition === 2) {
      return 'var(--theme-pale-sage)';
    } else if (featuredPosition === 3) {
      return 'var(--theme-light-purple)';
    }
    
    // Otherwise, use the standard color logic
    return eleventyConfig.getFilter("getThemeColor")(post.data.background, post.url);
  });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      layouts: "_includes",
      data: "_data"
    }
  };
};