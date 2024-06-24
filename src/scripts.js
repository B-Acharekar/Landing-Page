$(document).ready(function() {
    // Add underline class to the current active link
    $(".nav-link.active");
  
    // Remove underline on click and add it to the clicked link
    $(".nav-link").click(function() {
      $(".nav-link").removeClass("active");
      $(this).addClass("active");
    });
  });
  
  const toggleButton = document.querySelector('.toggle-fullscreen-button');
  const closeButton = document.querySelector('.close-fullscreen'); // Assuming the class is 'close-fullscreen'
  const checkoutForm = document.querySelector('.checkout-form');
  
  // Event listener for toggle button to toggle fullscreen class
  toggleButton.addEventListener('click', () => {
    checkoutForm.classList.toggle('fullscreen');
  });
  
  // Event listener for close button to remove fullscreen class
  closeButton.addEventListener('click', () => {
    checkoutForm.classList.remove('fullscreen'); // Directly removes the class
  });
  
  