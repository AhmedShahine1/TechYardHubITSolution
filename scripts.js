$(document).ready(function () {
    // Carousel auto-change logic
    let items = $(".best-sales .carousel-item");
    let currentItem = 0;
    let itemsWrapper = $(".wrapper .carousel-item");
    let currentItemWrapper = 0;

    let videoTimeout;

    function moveToNextSlide() {
      clearTimeout(videoTimeout); // Clear the existing timeout for safety

      // Hide the current item and show the next item
      itemsWrapper.eq(currentItemWrapper).removeClass('active');
      currentItemWrapper = (currentItemWrapper + 1) % itemsWrapper.length; // Loop back to the first item
      itemsWrapper.eq(currentItemWrapper).addClass('active');

      // Get the video element of the next item and start the timer
      let nextVideo = itemsWrapper.eq(currentItemWrapper).find('video')[0];
      startVideoTimer(nextVideo);
    }

    function startVideoTimer(video) {
      if (video) {
        video.play().then(() => {
          // Get the video's duration and set a timeout for the next slide transition
          let videoDuration = video.duration * 1000; // Convert to milliseconds
          videoTimeout = setTimeout(moveToNextSlide, videoDuration); // Transition to the next slide after the video ends
        }).catch((error) => {
          console.log('Error playing video: ', error);
          // Handle error, e.g., fallback behavior
        });
      }
    }

    // Wait for user interaction to start playing videos
    $(document).on('click', function () {
      // Start the carousel with the first video's timer after user interaction
      let firstVideo = itemsWrapper.eq(currentItemWrapper).find('video')[0];
      startVideoTimer(firstVideo);
      $(document).off('click'); // Remove this handler after first interaction
    });

    // Optionally, you can also listen for the 'ended' event on videos if you want to handle it differently
    itemsWrapper.find('video').on('ended', moveToNextSlide);
    function showItemLarge(index) {
      items.removeClass("active");
      items.eq(index).addClass("active");
    }
    function showItemSmall(index) {
      itemsSmall.removeClass("active");
      itemsSmall.eq(index).addClass("active");
    }
    setInterval(function () {
      const screenWidth = window.innerWidth;
      const itemsPerSlide = items.length;
      currentItem = (currentItem + 1) % itemsPerSlide;
      screenWidth >= 600 ? showItemLarge(currentItem):showItemSmall(currentItem);
    }, 10000); // Auto change every 10 seconds
  
    // Toggle sidebar in small screens
    $('#sidebarToggle').on('click', function () {
      $('#sidebar').toggleClass('active');
    });
  });
  
  // scripts.js
$(document).ready(function () {
  setTimeout(function () {
      $('#preloader').fadeOut(500); // Fade out preloader
      $('#sidebar').fadeIn(500); // Fade in main content
      $('#Main').fadeIn(500); // Fade in main content
      $('#Footer').fadeIn(500); // Fade in main content
      $('#sidebarnav').fadeIn(500); // Fade in main content

  }, 3000); // Show preloader for 3 seconds
});

const products = [
  {
    title: "Apple MacBook Pro",
    img: "assets/Apple MacBook (13-inch).jpg",
    desc: "The latest high-performance MacBook for professionals."
  },
  {
    title: "Apple MacBook Air",
    img: "assets/Apple MacBook Air.jpg",
    desc: "Lightweight and portable with impressive performance."
  },
  {
    title: "Apple MacBook (13-inch)",
    img: "assets/Apple MacBook (13-inch).jpg",
    desc: "Compact design with powerful performance for everyday tasks."
  },
  {
    title: "Apple iMac",
    img: "assets/Apple MacBook (13-inch).jpg",
    desc: "Stunning 24-inch display with powerful M1 chip performance."
  },
  {
    title: "Apple Mac Mini",
    img: "assets/Apple Mac Mini.jpg",
    desc: "Compact desktop with incredible power for any task."
  },
  {
    title: "Apple Mac Studio",
    img: "assets/Apple Mac Studio.jpg",
    desc: "Professional desktop with unmatched performance for creatives."
  }
];

function createCarousel() {
  const indicators = document.getElementById('carouselIndicators');
  const carouselContent = document.getElementById('carouselContent');

  let itemsPerSlide = window.innerWidth >= 768 ? 3 : 1;
  let totalSlides = Math.ceil(products.length / itemsPerSlide);

  for (let i = 0; i < totalSlides; i++) {
    // Create carousel indicators
    const indicator = document.createElement('button');
    indicator.type = 'button';
    indicator.dataset.bsTarget = '#salesCarousel';
    indicator.dataset.bsSlideTo = i;
    indicator.ariaLabel = `Slide ${i + 1}`;
    if (i === 0) {
      indicator.classList.add('active');
      indicator.ariaCurrent = 'true';
    }
    indicators.appendChild(indicator);

    // Create carousel items
    const carouselItem = document.createElement('div');
    carouselItem.classList.add('carousel-item');
    if (i === 0) carouselItem.classList.add('active');

    const row = document.createElement('div');
    row.classList.add('row');

    for (let j = i * itemsPerSlide; j < (i + 1) * itemsPerSlide && j < products.length; j++) {
      const col = document.createElement('div');
      col.classList.add('col-12', 'col-md-4');
      
      const card = `
        <div class="card">
          <img src="${products[j].img}" class="card-img-top" alt="${products[j].title}">
          <div class="card-body">
            <h5 class="card-title">${products[j].title}</h5>
            <p class="card-text">${products[j].desc}</p>
          </div>
        </div>
      `;
      
      col.innerHTML = card;
      row.appendChild(col);
    }

    carouselItem.appendChild(row);
    carouselContent.appendChild(carouselItem);
  }
}

// Initialize carousel
createCarousel();

// Rebuild carousel on window resize
window.addEventListener('resize', function () {
  document.getElementById('carouselIndicators').innerHTML = '';
  document.getElementById('carouselContent').innerHTML = '';
  createCarousel();
});
