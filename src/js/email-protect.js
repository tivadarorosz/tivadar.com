// Email protection script to prevent spam bots from harvesting email addresses
window.addEventListener('DOMContentLoaded', function() {
  // Define the email addresses in an encoded format
  const emails = {
    studio: ['studio', 'tivadarorosz', 'com'],
    hello: ['hello', 'tivadarorosz', 'com']
  };
  
  // Function to decode and set email
  function setProtectedEmail(elementId, emailParts) {
    const element = document.getElementById(elementId);
    if (element) {
      const email = emailParts[0] + '@' + emailParts[1] + '.' + emailParts[2];
      element.href = 'mailto:' + email;
      element.textContent = email;
    }
  }
  
  // Set the email addresses
  setProtectedEmail('studio-email', emails.studio);
  setProtectedEmail('hello-email', emails.hello);
});