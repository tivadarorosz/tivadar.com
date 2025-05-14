// Mobile menu toggle and logo scroll animation functionality
document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.querySelector('.mobile-menu-toggle');
  const mobileMenu = document.querySelector('.mobile-menu');
  const body = document.body;
  let scrollTimer;

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
});