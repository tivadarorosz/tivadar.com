// Mobile menu toggle, logo scroll, and hero title animations
document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.querySelector('.mobile-menu-toggle');
  const mobileMenu = document.querySelector('.mobile-menu');
  const body = document.body;
  const titleWrapper = document.querySelector('.title-animation-wrapper');
  let scrollTimer;
  
  // Dropdown menu functionality
  const dropdownWrapper = document.querySelector('.dropdown-wrapper');
  const offeringsLink = document.querySelector('.offerings-link');
  
  if (offeringsLink && dropdownWrapper) {
    // Handle click on offerings link
    offeringsLink.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      dropdownWrapper.classList.toggle('active');
    });
    
    // Close dropdown when clicking outside
    document.addEventListener('click', function(e) {
      if (!dropdownWrapper.contains(e.target)) {
        dropdownWrapper.classList.remove('active');
      }
    });
  }
  
  // Initialize title animations for all wrappers if we're on desktop
  if (window.innerWidth >= 768) {
    // Find all title animation wrappers
    const titleWrappers = document.querySelectorAll('.title-animation-wrapper');
    titleWrappers.forEach(wrapper => {
      initTitleAnimation(wrapper);
    });
    
    // Location page will be handled by the standard title animation function above
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
    
    // Special animation for pricing page and cities page
    if (title === "Pricing" || title === "On Location") {
      initPricingTitleAnimation(wrapper);
      return;
    }
    
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
    const isMultiline = wrapper.classList.contains('title-multiline');
    const isOffset = wrapper.classList.contains('title-offset');
    
    // Split title into words
    const words = title.split(' ');
    
    // Create an array of indices and shuffle the indices
    // This way we keep the original words but randomize the order they appear
    let indices = Array.from(Array(words.length).keys());
    shuffleArray(indices);
    
    // For multiline titles, create line containers
    let line1Container, line2Container;
    
    if (isMultiline) {
      // Clear any existing animated words
      const existingWords = wrapper.querySelectorAll('.title-word');
      existingWords.forEach(word => word.remove());
      
      // Create line containers for animated words
      line1Container = document.createElement('div');
      line1Container.className = 'title-line title-line-1 animated-line';
      line1Container.style.whiteSpace = 'nowrap'; // Prevent wrapping
      
      line2Container = document.createElement('div');
      line2Container.className = 'title-line title-line-2 animated-line';
      line2Container.style.whiteSpace = 'nowrap'; // Prevent wrapping
      
      // Apply offset styling for all multiline titles
      line1Container.style.transform = 'translateX(-6%)';
      line2Container.style.transform = 'translateX(6%)';
      
      wrapper.appendChild(line1Container);
      wrapper.appendChild(line2Container);
    }
    
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
      
      // For multiline titles, add words to appropriate line containers
      if (isMultiline) {
        // Special handling for known titles to ensure visually balanced splits
        if (title === "Making AI systems you can rely on") {
          // First 3 words in first line, rest in second line
          if (i < 3) {
            line1Container.appendChild(wordSpan);
          } else {
            line2Container.appendChild(wordSpan);
          }
        } else if (title === "Command the frame") {
          // First word in first line, rest in second line
          if (i < 1) {
            line1Container.appendChild(wordSpan);
          } else {
            line2Container.appendChild(wordSpan);
          }
        } else {
          // Better visual splitting algorithm
          const totalLength = words.join(' ').length;
          let runningLength = 0;
          let splitIndex = 0;
          
          // Find the word that gets us closest to the middle of the sentence
          for (let j = 0; j < words.length; j++) {
            runningLength += words[j].length + (j > 0 ? 1 : 0); // Add word length + space
            if (runningLength >= totalLength / 2) {
              splitIndex = j;
              break;
            }
          }
          
          // Use the calculated split point
          if (i <= splitIndex) {
            line1Container.appendChild(wordSpan);
          } else {
            line2Container.appendChild(wordSpan);
          }
        }
      } else {
        wrapper.appendChild(wordSpan);
      }
      
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
  
  // Pricing page specific animation
  function initPricingTitleAnimation(wrapper) {
    const staticTitle = wrapper.querySelector('.title-static');
    
    // Add class for CSS animation
    staticTitle.classList.add('pricing-title-animation');
    
    // Trigger the animation after a brief delay
    setTimeout(() => {
      staticTitle.classList.add('animate');
    }, 100);
  }
  
  
  // Pricing button group functionality
  const pricingButtons = document.querySelectorAll('.pricing-button');
  if (pricingButtons.length > 0) {
    pricingButtons.forEach(button => {
      button.addEventListener('click', function() {
        // Remove active class from all buttons
        pricingButtons.forEach(btn => btn.classList.remove('active'));
        
        // Add active class to clicked button
        this.classList.add('active');
        
        // Hide all sections
        document.querySelectorAll('.pricing-section').forEach(section => {
          section.style.display = 'none';
        });
        
        // Show the corresponding section
        const sectionId = this.getAttribute('data-section') + '-section';
        const targetSection = document.getElementById(sectionId);
        if (targetSection) {
          targetSection.style.display = 'block';
        }
      });
    });
  }
  
  // Mobile submenu functionality
  const mobileMenuLink = document.querySelector('.mobile-menu-link.has-submenu');
  const mobileSubmenu = document.querySelector('.mobile-submenu');
  
  if (mobileMenuLink && mobileSubmenu) {
    mobileMenuLink.addEventListener('click', function(e) {
      e.preventDefault();
      this.classList.toggle('active');
      mobileSubmenu.classList.toggle('active');
    });
  }
});