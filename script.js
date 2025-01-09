const map = L.map('map', {
    center: [0, 0], // Center the map at the equator
    zoom: 2, // Default zoom level
    minZoom: 2, // Minimum zoom level (restricts zooming out too far)
    maxZoom: 19, // Maximum zoom level
    maxBounds: [
      [-90, -180], // Southwest corner of the world
      [90, 180]    // Northeast corner of the world
    ],
    maxBoundsViscosity: 1.0 // Fully restricts panning outside bounds
  });
  
  // Add the tile layer
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
        { type: "image", src: "https://i.ido.bi/assets/high-life/2023/06/jfb-tour-01-1536x1536.jpeg", tour: "summer-2015", highlight: true },
        { type: "video", src: "https://www.w3schools.com/html/mov_bbb.mp4", tour: "fall-2015" },
        { type: "image", src: "https://via.placeholder.com/800x600?text=Performance+2", tour: "summer-2016" }
      ]
    },
    {
      name: "House of Blues",
      city: "Chicago, IL",
      coordinates: [41.8927, -87.6244],
      media: [
        { type: "image", src: "https://chorus.fm/wp-content/uploads/cdn/kzbwkejl_39303.jpeg", tour: "fall-2016", highlight: true},
        { type: "video", src: "https://www.w3schools.com/html/movie.mp4", tour: "summer-2016"},
        { type: "image", src: "https://via.placeholder.com/800x600?text=Performance+2", tour: "summer-2016"}
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

// Handle year-checkbox toggle
document.querySelectorAll('.year-checkbox').forEach((yearCheckbox) => {
    yearCheckbox.addEventListener('change', (event) => {
      const isChecked = event.target.checked;
  
      // Find the corresponding <ul> of child checkboxes and update them
      const parentLi = event.target.closest('li'); // Get the parent <li> of the year-checkbox
      if (parentLi) {
        parentLi.querySelectorAll('.tour-checkbox').forEach((checkbox) => {
          checkbox.checked = isChecked;
        });
      }
  
      updateMarkers(); // Refresh the map markers
    });
  });
  
  // Handle individual tour-checkbox toggle
  document.querySelectorAll('.tour-checkbox').forEach((tourCheckbox) => {
    tourCheckbox.addEventListener('change', () => {
      const parentLi = tourCheckbox.closest('ul').closest('li'); // Get the parent <li> of the year-checkbox
      if (parentLi) {
        // Check if all tour-checkboxes inside the <ul> are selected
        const allSelected = Array.from(parentLi.querySelectorAll('.tour-checkbox')).every(
          (checkbox) => checkbox.checked
        );
  
        // Update the year-checkbox based on the state of its children
        const yearCheckbox = parentLi.querySelector('.year-checkbox');
        if (yearCheckbox) {
          yearCheckbox.checked = allSelected;
        }
      }
  
      updateMarkers(); // Refresh the map markers
    });
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
  
        // Find the highlighted content
        const highlightMedia = filteredMedia.find(item => item.highlight) || filteredMedia[0]; // Fallback to the first item
  
        // Tooltip on hover
        const flyer = highlightMedia?.src || ""; // Use the highlight's source
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

// Select all tours by default on page load
window.addEventListener('DOMContentLoaded', () => {
    // Trigger the "Select All" functionality
    document.querySelectorAll('#filter-container input[type="checkbox"]').forEach(checkbox => {
      checkbox.checked = true;
    });
  
    // Update the markers to reflect the selected tours
    updateMarkers();
  });

// Initial load
updateMarkers();
