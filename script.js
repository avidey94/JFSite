const map = L.map('map').setView([39.8283, -98.5795], 4);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '© OpenStreetMap contributors'
}).addTo(map);

const venues = [
  {
    name: "The Roxy Theatre",
    city: "Los Angeles, CA",
    coordinates: [34.0909, -118.3856],
    media: [
      { type: "image", src: "https://i.ido.bi/assets/high-life/2023/06/jfb-tour-01-1536x1536.jpeg", tour: "summer-2015" },
      { type: "video", src: "https://www.w3schools.com/html/mov_bbb.mp4", tour: "fall-2015" },
      { type: "image", src: "https://via.placeholder.com/800x600?text=Performance+2", tour: "summer-2016" }
    ]
  },
  {
    name: "House of Blues",
    city: "Chicago, IL",
    coordinates: [41.8927, -87.6244],
    media: [
      { type: "image", src: "https://via.placeholder.com/800x600?text=Performance+3", tour: "fall-2016" },
      { type: "video", src: "https://www.w3schools.com/html/movie.mp4", tour: "summer-2016" }
    ]
  }
];

const markers = [];
const swiperWrapper = document.querySelector('.swiper-wrapper');
const overlay = document.getElementById('fullscreen-overlay');
const closeButton = document.getElementById('close-button');

// Handle Select All functionality
document.getElementById('select-all').addEventListener('click', () => {
  document.querySelectorAll('#filter-container input[type="checkbox"]').forEach(checkbox => {
    checkbox.checked = true;
  });
  updateMarkers();
});

// Handle year checkbox toggle
document.querySelectorAll('.year-checkbox').forEach(yearCheckbox => {
  yearCheckbox.addEventListener('change', (event) => {
    const year = event.target.getAttribute('data-year');
    const isChecked = event.target.checked;

    // Auto-check/uncheck all child tours of the selected year
    document.querySelectorAll(`.tour-checkbox[data-tour^="${year}"]`).forEach(checkbox => {
      checkbox.checked = isChecked;
    });

    updateMarkers();
  });
});

// Handle individual tour checkbox change
document.querySelectorAll('.tour-checkbox').forEach(tourCheckbox => {
  tourCheckbox.addEventListener('change', updateMarkers);
});

// Update markers based on selected tours
function updateMarkers() {
  markers.forEach(marker => map.removeLayer(marker));
  markers.length = 0;

  const selectedTours = Array.from(document.querySelectorAll('.tour-checkbox:checked')).map(checkbox =>
    checkbox.getAttribute('data-tour')
  );

  venues.forEach(venue => {
    const filteredMedia = venue.media.filter(item => selectedTours.includes(item.tour));

    if (filteredMedia.length > 0) {
      const marker = L.marker(venue.coordinates).addTo(map);
      markers.push(marker);

      // Tooltip on hover
      const flyer = filteredMedia.find(item => item.type === "image")?.src || ""; // Use the first flyer image
      marker.bindTooltip(
        `<strong>${venue.name}</strong><br/><img src="${flyer}" alt="Flyer" style="width:100px;">`,
        { permanent: false, direction: "top", offset: [0, -10] }
      );

      // Fullscreen on click
      marker.on('click', () => openFullscreen(filteredMedia));
    }
  });
}

function openFullscreen(media) {
  swiperWrapper.innerHTML = ''; // Clear previous content
  media.forEach(item => {
    const slide = document.createElement('div');
    slide.classList.add('swiper-slide');
    if (item.type === 'image') {
      slide.innerHTML = `<img src="${item.src}" alt="Performance Image">`;
    } else if (item.type === 'video') {
      slide.innerHTML = `<video controls>
                           <source src="${item.src}" type="video/mp4">
                         </video>`;
    }
    swiperWrapper.appendChild(slide);
  });

  const swiper = new Swiper('.swiper', {
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    }
  });

  overlay.style.display = 'flex';
}

closeButton.addEventListener('click', () => {
  overlay.style.display = 'none';
});

// Initial load
updateMarkers();