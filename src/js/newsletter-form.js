// Newsletter form functionality
(function() {
  'use strict';
  
  const form = document.getElementById('newsletter-form');
  
  if (!form) return;
  
  // Handle blur event for email field
  const emailInput = form.querySelector('#email');
  const emailError = form.querySelector('#email-error');
  
  emailInput.addEventListener('blur', function() {
    if (!emailInput.value) {
      emailInput.classList.add('is-invalid');
      emailError.textContent = 'Please complete this required field.';
      emailError.classList.add('show');
    } else if (!isValidEmail(emailInput.value)) {
      emailInput.classList.add('is-invalid');
      emailError.textContent = 'Please enter a valid email address.';
      emailError.classList.add('show');
    } else {
      emailInput.classList.remove('is-invalid');
      emailError.textContent = '';
      emailError.classList.remove('show');
    }
  });
  
  // Clear error when user starts typing
  emailInput.addEventListener('input', function() {
    if (emailInput.value) {
      emailInput.classList.remove('is-invalid');
      emailError.textContent = '';
      emailError.classList.remove('show');
    }
  });
  
  form.addEventListener('submit', async function(e) {
    e.preventDefault();
    
    // Clear any previous errors
    const errorElements = form.querySelectorAll('.form-error');
    errorElements.forEach(el => {
      el.textContent = '';
      el.classList.remove('show');
    });
    
    // Remove invalid class from inputs
    const inputs = form.querySelectorAll('.form-input');
    inputs.forEach(input => input.classList.remove('is-invalid'));
    
    // Validate email
    if (!emailInput.value) {
      emailInput.classList.add('is-invalid');
      emailError.textContent = 'Please complete this required field.';
      emailError.classList.add('show');
      return;
    }
    
    if (!isValidEmail(emailInput.value)) {
      emailInput.classList.add('is-invalid');
      emailError.textContent = 'Please enter a valid email address.';
      emailError.classList.add('show');
      return;
    }
    
    // TODO: Integrate with newsletter service (Mailchimp, ConvertKit, etc.)
    // For now, just log the email
    console.log('Newsletter subscription:', emailInput.value);
    
    // Show success message (temporary)
    const button = form.querySelector('button[type="submit"]');
    const originalText = button.textContent;
    button.textContent = 'Subscribed!';
    button.disabled = true;
    
    setTimeout(() => {
      button.textContent = originalText;
      button.disabled = false;
      form.reset();
      
      // Redirect to thank you page
      window.location.href = '/message/newsletter';
    }, 1500);
  });
  
  function isValidEmail(email) {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
  }
})();