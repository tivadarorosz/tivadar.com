// Contact form functionality for web3forms.com integration
(function() {
  'use strict';
  
  const form = document.getElementById('contact-form');
  
  if (!form) return;
  
  // Handle blur event for required fields
  const emailInput = form.querySelector('#email');
  const emailError = form.querySelector('#email-error');
  
  // Handle Photography checkbox functionality for conditional fields
  const photographyCheckbox = form.querySelector('#photography');
  const comfortLevelGroup = form.querySelector('#comfort-level-group');
  const shootLocationGroup = form.querySelector('#shoot-location-group');
  const visualInspirationGroup = form.querySelector('#visual-inspiration-group');
  
  if (photographyCheckbox) {
    photographyCheckbox.addEventListener('change', function() {
      if (this.checked) {
        if (comfortLevelGroup) comfortLevelGroup.style.display = 'block';
        if (shootLocationGroup) shootLocationGroup.style.display = 'block';
        if (visualInspirationGroup) visualInspirationGroup.style.display = 'block';
      } else {
        if (comfortLevelGroup) {
          comfortLevelGroup.style.display = 'none';
          // Clear selection when hidden
          const faceInFrameSelect = comfortLevelGroup.querySelector('#face-in-frame');
          if (faceInFrameSelect) faceInFrameSelect.value = '';
        }
        if (shootLocationGroup) {
          shootLocationGroup.style.display = 'none';
          // Clear selection when hidden
          const shootLocationSelect = shootLocationGroup.querySelector('#shoot-location');
          if (shootLocationSelect) shootLocationSelect.value = '';
        }
        if (visualInspirationGroup) {
          visualInspirationGroup.style.display = 'none';
          // Clear input when hidden
          const visualInspirationInput = visualInspirationGroup.querySelector('#visual-inspiration');
          if (visualInspirationInput) visualInspirationInput.value = '';
        }
      }
    });
  }
  
  // Handle "Other" checkbox functionality
  const contactOtherCheckbox = form.querySelector('#contact-other');
  const contactOtherInput = form.querySelector('#contact-other-input');
  const otherDetails = form.querySelector('#contact-other-details');
  
  if (contactOtherCheckbox && contactOtherInput && otherDetails) {
    contactOtherCheckbox.addEventListener('change', function() {
      if (this.checked) {
        contactOtherInput.style.display = 'block';
        otherDetails.setAttribute('required', '');
      } else {
        contactOtherInput.style.display = 'none';
        otherDetails.removeAttribute('required');
        otherDetails.value = '';
        // Clear any validation error
        otherDetails.classList.remove('is-invalid');
      }
    });
  }
  
  // Handle "Encrypted message" checkbox functionality
  const contactEncryptedCheckbox = form.querySelector('#contact-encrypted');
  const contactEncryptedInput = form.querySelector('#contact-encrypted-input');
  const encryptedDetails = form.querySelector('#contact-encrypted-details');
  
  if (contactEncryptedCheckbox && contactEncryptedInput && encryptedDetails) {
    contactEncryptedCheckbox.addEventListener('change', function() {
      if (this.checked) {
        contactEncryptedInput.style.display = 'block';
        encryptedDetails.setAttribute('required', '');
      } else {
        contactEncryptedInput.style.display = 'none';
        encryptedDetails.removeAttribute('required');
        encryptedDetails.value = '';
        // Clear any validation error
        encryptedDetails.classList.remove('is-invalid');
      }
    });
  }
  
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
  
  // Blur event for conditional required fields
  if (otherDetails) {
    otherDetails.addEventListener('blur', function() {
      if (contactOtherCheckbox.checked && !this.value.trim()) {
        this.classList.add('is-invalid');
        let otherError = contactOtherInput.querySelector('.form-error');
        if (!otherError) {
          otherError = document.createElement('div');
          otherError.className = 'form-error';
          contactOtherInput.appendChild(otherError);
        }
        otherError.textContent = 'Please complete this required field.';
        otherError.classList.add('show');
      } else {
        this.classList.remove('is-invalid');
        let otherError = contactOtherInput.querySelector('.form-error');
        if (otherError) {
          otherError.textContent = '';
          otherError.classList.remove('show');
        }
      }
    });
    
    otherDetails.addEventListener('input', function() {
      if (this.value) {
        this.classList.remove('is-invalid');
        let otherError = contactOtherInput.querySelector('.form-error');
        if (otherError) {
          otherError.textContent = '';
          otherError.classList.remove('show');
        }
      }
    });
  }
  
  if (encryptedDetails) {
    encryptedDetails.addEventListener('blur', function() {
      if (contactEncryptedCheckbox.checked && !this.value.trim()) {
        this.classList.add('is-invalid');
        let encryptedError = contactEncryptedInput.querySelector('.form-error');
        if (!encryptedError) {
          encryptedError = document.createElement('div');
          encryptedError.className = 'form-error';
          contactEncryptedInput.appendChild(encryptedError);
        }
        encryptedError.textContent = 'Please complete this required field.';
        encryptedError.classList.add('show');
      } else {
        this.classList.remove('is-invalid');
        let encryptedError = contactEncryptedInput.querySelector('.form-error');
        if (encryptedError) {
          encryptedError.textContent = '';
          encryptedError.classList.remove('show');
        }
      }
    });
    
    encryptedDetails.addEventListener('input', function() {
      if (this.value) {
        this.classList.remove('is-invalid');
        let encryptedError = contactEncryptedInput.querySelector('.form-error');
        if (encryptedError) {
          encryptedError.textContent = '';
          encryptedError.classList.remove('show');
        }
      }
    });
  }
  
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
    
    // Validate conditional required fields
    if (contactOtherCheckbox && contactOtherCheckbox.checked && otherDetails) {
      if (!otherDetails.value.trim()) {
        otherDetails.classList.add('is-invalid');
        // Create or update error message
        let otherError = contactOtherInput.querySelector('.form-error');
        if (!otherError) {
          otherError = document.createElement('div');
          otherError.className = 'form-error';
          contactOtherInput.appendChild(otherError);
        }
        otherError.textContent = 'Please complete this required field.';
        otherError.classList.add('show');
        return;
      }
    }
    
    if (contactEncryptedCheckbox && contactEncryptedCheckbox.checked && encryptedDetails) {
      if (!encryptedDetails.value.trim()) {
        encryptedDetails.classList.add('is-invalid');
        // Create or update error message
        let encryptedError = contactEncryptedInput.querySelector('.form-error');
        if (!encryptedError) {
          encryptedError = document.createElement('div');
          encryptedError.className = 'form-error';
          contactEncryptedInput.appendChild(encryptedError);
        }
        encryptedError.textContent = 'Please complete this required field.';
        encryptedError.classList.add('show');
        return;
      }
    }
    
    // Collect form data
    const formData = new FormData(form);
    
    // Get selected services
    const services = [];
    const checkboxes = form.querySelectorAll('input[name="services"]:checked');
    checkboxes.forEach(checkbox => services.push(checkbox.value));
    
    // Add services to formData as a single string
    formData.delete('services');
    formData.append('services', services.join(', '));
    
    // TODO: Integrate with web3forms.com
    // For now, just log the data
    console.log('Form data:', Object.fromEntries(formData));
    
    // Show success message (temporary)
    const button = form.querySelector('button[type="submit"]');
    const originalText = button.textContent;
    button.textContent = 'Message sent!';
    button.disabled = true;
    
    setTimeout(() => {
      button.textContent = originalText;
      button.disabled = false;
      form.reset();
    }, 3000);
  });
  
  function isValidEmail(email) {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
  }
})();
