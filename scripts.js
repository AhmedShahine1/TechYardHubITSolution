$(document).ready(function () {
    // Carousel auto-change logic
    let items = $(".Large-screen .carousel-item");
    let itemsSmall = $(".small-screen .carousel-item");
    let currentItem = 0;
  
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
      const itemsPerSlide = screenWidth >= 600 ? items.length%3 : itemsSmall.length;
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