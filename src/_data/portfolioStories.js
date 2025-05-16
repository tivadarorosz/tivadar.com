const portfolio = require('./portfolio.js');

module.exports = function() {
  const stories = [];
  
  // Add featured main story
  if (portfolio.featured.main) {
    stories.push(portfolio.featured.main);
  }
  
  // Add featured gallery stories
  portfolio.featured.gallery.forEach(item => {
    stories.push(item);
  });
  
  // Add all portfolio items
  portfolio.items.forEach(item => {
    stories.push(item);
  });
  
  return stories;
};