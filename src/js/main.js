// Mobile menu toggle, logo scroll, and hero title animations
document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.querySelector('.mobile-menu-toggle');
  const mobileMenu = document.querySelector('.mobile-menu');
  const body = document.body;
  const titleWrapper = document.querySelector('.title-animation-wrapper');
  let scrollTimer;
  
  // Initialize title animations for all wrappers if we're on desktop
  if (window.innerWidth >= 768) {
    // Find all title animation wrappers
    const titleWrappers = document.querySelectorAll('.title-animation-wrapper');
    titleWrappers.forEach(wrapper => {
      initTitleAnimation(wrapper);
    });
  }

  // Mobile menu toggle
  menuToggle.addEventListener('click', function() {
    menuToggle.classList.toggle('active');
    mobileMenu.classList.toggle('active');
    body.classList.toggle('menu-open');
  });

  // Only apply scroll animation on desktop (>= 768px)
  if (window.innerWidth >= 768) {
    // Logo transformation on scroll
    window.addEventListener('scroll', function() {
      // Clear the previous timeout
      clearTimeout(scrollTimer);

      // If scrolled down, add class immediately
      if (window.scrollY > 100) {
        body.classList.add('scrolled');
      } else {
        body.classList.remove('scrolled');
      }

      // Set a timer to add the class back after scrolling stops
      scrollTimer = setTimeout(function() {
        if (window.scrollY > 100) {
          body.classList.add('scrolled');
        } else {
          body.classList.remove('scrolled');
        }
      }, 100);
    });
  }
  
  // Title animation function
  function initTitleAnimation(wrapper) {
    const title = wrapper.getAttribute('data-title');
    
    // If title is empty or has only one word, don't animate
    if (!title || !title.includes(' ')) {
      wrapper.querySelector('.title-static').style.opacity = 1;
      return;
    }
    
    // Hide static title, we'll create animated elements
    const staticTitle = wrapper.querySelector('.title-static');
    staticTitle.style.opacity = 0;
    
    // Check if we're in the hero section (special handling for links)
    const isHeroText = wrapper.closest('.hero-text') !== null;
    
    // Split title into words
    const words = title.split(' ');
    
    // Create an array of indices and shuffle the indices
    // This way we keep the original words but randomize the order they appear
    let indices = Array.from(Array(words.length).keys());
    shuffleArray(indices);
    
    // Create a span for each word and add to wrapper with original order
    words.forEach((word, i) => {
      const wordSpan = document.createElement('span');
      wordSpan.className = 'title-word';
      wordSpan.textContent = word;
      wordSpan.style.opacity = 0;
      
      // Special styling for hero text
      if (isHeroText) {
        // Special handling for specific words in the hero that should have links
        if (word === "branding") {
          wordSpan.innerHTML = `<a href="#" class="hero-link">${word}</a>`;
        } else if (word === "vision.") {
          // Remove period for the link
          wordSpan.innerHTML = `<a href="#" class="hero-link">vision</a>.`;
        }
      }
      
      // Position the word in its correct place for final display
      wordSpan.style.position = 'relative';
      wrapper.appendChild(wordSpan);
      
      // Get this word's position in the animation sequence (random)
      const animationIndex = indices.indexOf(i);
      
      // Stagger the fade-in timing using the randomized indices - faster animation
      setTimeout(() => {
        fadeIn(wordSpan, 200); // Reduced from 300ms to 200ms for quicker fade-in
      }, 80 + (animationIndex * 80)); // Reduced from 100ms base + 120ms per word to 80ms base + 80ms per word
    });
  }
  
  // Shuffle array randomly
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  
  // Simple fade-in function - optimized for speed
  function fadeIn(element, duration) {
    let opacity = 0;
    const interval = 8; // Reduced from 10ms to 8ms for quicker updates
    const increment = interval / duration;
    
    const fadeEffect = setInterval(function() {
      opacity += increment;
      element.style.opacity = opacity;
      
      if (opacity >= 1) {
        clearInterval(fadeEffect);
        element.style.opacity = 1; // Ensure final opacity is exactly 1
      }
    }, interval);
  }
});