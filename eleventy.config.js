module.exports = function(eleventyConfig) {
  // Watch CSS files for changes
  eleventyConfig.addWatchTarget("./src/css/");
  
  // Pass through static files
  eleventyConfig.addPassthroughCopy("./src/css");
  eleventyConfig.addPassthroughCopy("./src/js");
  eleventyConfig.addPassthroughCopy("./src/images");
  eleventyConfig.addPassthroughCopy("./src/fonts");

  // Add collections
  eleventyConfig.addCollection("featuredPosts", function(collectionApi) {
    // Get all posts with featured: true, sorted by date (newest first)
    return collectionApi.getFilteredByGlob("./src/posts/*.md")
      .filter(item => item.data.featured === true)
      .sort((a, b) => {
        return b.date - a.date;
      });
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

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      layouts: "_includes"
    }
  };
};