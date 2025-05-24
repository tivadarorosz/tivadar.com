// ==============================================
// CITIES HERO ANIMATION
// ==============================================
// Independent animation script specifically for the cities hero title

document.addEventListener('DOMContentLoaded', function() {
  const citiesTitleWrapper = document.querySelector('.cities-title-wrapper');
  
  if (citiesTitleWrapper) {
    // Get the title text from the data attribute
    const titleText = citiesTitleWrapper.getAttribute('data-title');
    const staticTitle = citiesTitleWrapper.querySelector('.cities-title-static');
    
    // For mobile: Just show the static title immediately
    if (window.innerWidth < 768) {
      if (staticTitle) {
        staticTitle.style.opacity = '1';
      }
      return;
    }
    
    // For desktop: Add the animation class and trigger the animation
    if (staticTitle) {
      staticTitle.classList.add('cities-title-animation');
      
      // Delay the animation slightly
      setTimeout(() => {
        staticTitle.classList.add('animate');
      }, 300);
    }
  }
});