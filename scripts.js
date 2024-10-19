$(document).ready(function () {
    // Rotate images with Y-axis animation and change images when rotation completes
    let images = ["assets/image1.jpg", "assets/image2.jpg"];
    let currentIndex = 0;
  
    setInterval(function () {
      $("#rotatingImage").css("animation", "none"); // Reset animation
      setTimeout(function () {
        $("#rotatingImage").css("animation", "turner 5s infinite");
        currentIndex = (currentIndex + 1) % images.length;
        $("#rotatingImage").attr("src", images[currentIndex]);
      }, 5000); // Change image every 5 seconds after rotation
    }, 10000); // Total duration including the rotation
  
    // Carousel auto-change logic
    let items = $(".carousel-item");
    let currentItem = 0;
  
    function showItem(index) {
      items.removeClass("active");
      items.eq(index).addClass("active");
    }
  
    setInterval(function () {
      currentItem = (currentItem + 1) % items.length;
      showItem(currentItem);
    }, 10000); // Auto change every 10 seconds
  
    // Toggle sidebar in small screens
    $('#sidebarToggle').on('click', function () {
      $('#sidebar').toggleClass('active');
    });
  });
  
  // scripts.js
$(document).ready(function () {
  setTimeout(function () {
      $('.preloader').fadeOut(500); // Fade out preloader
      $('#sidebar').fadeIn(500); // Fade in main content
      $('#Main').fadeIn(500); // Fade in main content
      $('#Footer').fadeIn(500); // Fade in main content
      $('#sidebarnav').fadeIn(500); // Fade in main content

  }, 3000); // Show preloader for 3 seconds
});