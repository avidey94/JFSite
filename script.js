const map = L.map('map', {
    center: [39.8283, -98.5795], // Center on the USA
    zoom: 4, // Default zoom level
    minZoom: 2, // Restrict zooming out too far
    maxZoom: 19, // Restrict zooming in too far
    maxBounds: [
      [-90, -180], // Southwest corner of the world
      [90, 180]    // Northeast corner of the world
    ],
    maxBoundsViscosity: 1.0 // Restrict panning outside bounds
  });
  
  // Add the tile layer
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap contributors'
  }).addTo(map);

  const venues = [
    // 2017 Venues
    {
      name: "The Fillmore",
      city: "San Francisco, CA",
      coordinates: [37.7841, -122.4338],
      media: [
        { type: "image", src: "https://via.placeholder.com/800x600?text=Performance+Fillmore", tour: "summer-2017", highlight: true },
        { type: "video", src: "https://www.w3schools.com/html/mov_bbb.mp4", tour: "fall-2017" }
      ]
    },
    {
      name: "First Avenue",
      city: "Minneapolis, MN",
      coordinates: [44.9797, -93.2760],
      media: [
        { type: "image", src: "https://via.placeholder.com/800x600?text=Performance+First+Ave", tour: "summer-2017" },
        { type: "video", src: "https://www.w3schools.com/html/movie.mp4", tour: "fall-2017", highlight: true }
      ]
    },
  
    // 2018 Venues
    {
      name: "9:30 Club",
      city: "Washington, DC",
      coordinates: [38.9170, -77.0230],
      media: [
        { type: "image", src: "https://via.placeholder.com/800x600?text=Performance+930+Club", tour: "spring-2018", highlight: true },
        { type: "video", src: "https://www.w3schools.com/html/movie.mp4", tour: "fall-2018" }
      ]
    },
    {
      name: "Paradise Rock Club",
      city: "Boston, MA",
      coordinates: [42.3519, -71.1193],
      media: [
        { type: "image", src: "https://via.placeholder.com/800x600?text=Performance+Paradise+Rock", tour: "spring-2018" },
        { type: "image", src: "https://via.placeholder.com/800x600?text=Performance+Paradise+Fall", tour: "fall-2018", highlight: true }
      ]
    },
  
    // 2019 Venues
    {
      name: "The Metro",
      city: "Chicago, IL",
      coordinates: [41.9483, -87.6588],
      media: [
        { type: "image", src: "https://via.placeholder.com/800x600?text=Performance+Metro", tour: "summer-2019", highlight: true },
        { type: "video", src: "https://www.w3schools.com/html/mov_bbb.mp4", tour: "fall-2019" }
      ]
    },
    {
      name: "Bowery Ballroom",
      city: "New York, NY",
      coordinates: [40.7203, -73.9939],
      media: [
        { type: "image", src: "https://via.placeholder.com/800x600?text=Performance+Bowery", tour: "spring-2019" },
        { type: "video", src: "https://www.w3schools.com/html/movie.mp4", tour: "fall-2019", highlight: true }
      ]
    },
  
    // 2020 Venues
    {
      name: "El Rey Theatre",
      city: "Los Angeles, CA",
      coordinates: [34.0625, -118.3499],
      media: [
        { type: "image", src: "https://via.placeholder.com/800x600?text=Performance+El+Rey", tour: "summer-2020", highlight: true },
        { type: "video", src: "https://www.w3schools.com/html/movie.mp4", tour: "fall-2020" }
      ]
    },
    {
      name: "The Orange Peel",
      city: "Asheville, NC",
      coordinates: [35.5947, -82.5515],
      media: [
        { type: "image", src: "https://via.placeholder.com/800x600?text=Performance+Orange+Peel", tour: "spring-2020" },
        { type: "video", src: "https://www.w3schools.com/html/mov_bbb.mp4", tour: "fall-2020", highlight: true }
      ]
    },
  
    // 2021 Venues
    {
      name: "Variety Playhouse",
      city: "Atlanta, GA",
      coordinates: [33.7655, -84.3498],
      media: [
        { type: "image", src: "https://via.placeholder.com/800x600?text=Performance+Variety", tour: "spring-2021", highlight: true },
        { type: "video", src: "https://www.w3schools.com/html/movie.mp4", tour: "fall-2021" }
      ]
    },
    {
      name: "Brooklyn Steel",
      city: "Brooklyn, NY",
      coordinates: [40.7143, -73.9478],
      media: [
        { type: "image", src: "https://via.placeholder.com/800x600?text=Performance+Brooklyn+Steel", tour: "summer-2021" },
        { type: "video", src: "https://www.w3schools.com/html/mov_bbb.mp4", tour: "fall-2021", highlight: true }
      ]
    },
  
    // 2022 Venues
    {
      name: "Ogden Theatre",
      city: "Denver, CO",
      coordinates: [39.7404, -104.9754],
      media: [
        { type: "image", src: "https://via.placeholder.com/800x600?text=Performance+Ogden", tour: "spring-2022", highlight: true },
        { type: "video", src: "https://www.w3schools.com/html/movie.mp4", tour: "fall-2022" }
      ]
    },
    {
      name: "Thalia Hall",
      city: "Chicago, IL",
      coordinates: [41.8501, -87.6546],
      media: [
        { type: "image", src: "https://via.placeholder.com/800x600?text=Performance+Thalia+Hall", tour: "summer-2022" },
        { type: "video", src: "https://www.w3schools.com/html/mov_bbb.mp4", tour: "fall-2022", highlight: true }
      ]
    },
  
    // 2023 Venues
    {
      name: "Revolution Hall",
      city: "Portland, OR",
      coordinates: [45.5165, -122.6458],
      media: [
        { type: "image", src: "https://via.placeholder.com/800x600?text=Performance+Revolution", tour: "spring-2023", highlight: true },
        { type: "video", src: "https://www.w3schools.com/html/movie.mp4", tour: "fall-2023" }
      ]
    },
    {
      name: "The Crescent Ballroom",
      city: "Phoenix, AZ",
      coordinates: [33.4522, -112.0738],
      media: [
        { type: "image", src: "https://via.placeholder.com/800x600?text=Performance+Crescent", tour: "summer-2023" },
        { type: "video", src: "https://www.w3schools.com/html/mov_bbb.mp4", tour: "fall-2023", highlight: true }
      ]
    },
  
    // 2024 Venues
    {
      name: "Terminal 5",
      city: "New York, NY",
      coordinates: [40.7684, -73.9921],
      media: [
        { type: "image", src: "https://via.placeholder.com/800x600?text=Performance+Terminal+5", tour: "spring-2024", highlight: true },
        { type: "video", src: "https://www.w3schools.com/html/movie.mp4", tour: "fall-2024" }
      ]
    },
    {
      name: "The Anthem",
      city: "Washington, DC",
      coordinates: [38.8807, -77.0219],
      media: [
        { type: "image", src: "https://via.placeholder.com/800x600?text=Performance+Anthem", tour: "summer-2024" },
        { type: "video", src: "https://www.w3schools.com/html/mov_bbb.mp4", tour: "fall-2024", highlight: true }
      ]
    },
  
    // 2025 Venues
    {
      name: "Mission Ballroom",
      city: "Denver, CO",
      coordinates: [39.7591, -104.9721],
      media: [
        { type: "image", src: "https://via.placeholder.com/800x600?text=Performance+Mission", tour: "spring-2025", highlight: true },
        { type: "video", src: "https://www.w3schools.com/html/movie.mp4", tour: "fall-2025" }
      ]
    },
    {
        name: "House of Blues San Diego",
        city: "San Diego, CA",
        coordinates: [32.7545, -117.8633],
        media: [
          { type: "image", src: "https://via.placeholder.com/800x600?text=Performance+Observatory", tour: "summer-2025" },
          { type: "video", src: "https://www.w3schools.com/html/mov_bbb.mp4", tour: "fall-2025", highlight: true }
        ]
    },
    {
      name: "The Observatory",
      city: "Santa Ana, CA",
      coordinates: [33.7545, -117.8633],
      media: [
        { type: "image", src: "https://via.placeholder.com/800x600?text=Performance+Observatory", tour: "fall-2018" },
        { type: "video", src: "https://www.w3schools.com/html/mov_bbb.mp4", tour: "fall-2018", highlight: true }
      ]
    }
  ];

const markers = [];
const swiperWrapper = document.querySelector('.swiper-wrapper');
// Get references to the overlay and close button
const overlay = document.getElementById('fullscreen-overlay');
const closeButton = document.getElementById('close-button');

// Close the overlay when clicking the close button
closeButton.addEventListener('click', () => {
  overlay.style.display = 'none';
});

// Close the overlay when clicking on the black area outside the close button
overlay.addEventListener('click', (event) => {
  if (event.target === overlay) { // Ensure click is on the overlay itself
    overlay.style.display = 'none';
  }
});

// Reference the "All Tours" checkbox
const selectAllCheckbox = document.getElementById('select-all');

// Handle "All Tours" checkbox toggle
selectAllCheckbox.addEventListener('change', () => {
  const isChecked = selectAllCheckbox.checked;

  // Check/uncheck all other checkboxes based on the state of "All Tours"
  document.querySelectorAll('#filter-container input[type="checkbox"]:not(#select-all)').forEach(checkbox => {
    checkbox.checked = isChecked;
  });

  // Call the update function for markers (if applicable)
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

  // sup hanit

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

// Reference the map and scroll indicator
const mapScrollIndicator = document.getElementById('map-scroll-indicator');

// Function to hide the scroll indicator
function hideMapScrollIndicator() {
  if (mapScrollIndicator) {
    mapScrollIndicator.classList.add('hidden'); // Add the "hidden" class to fade it out
    setTimeout(() => {
      mapScrollIndicator.style.display = 'none'; // Remove it from view after fade-out
    }, 500); // Wait for the fade-out animation (0.5s)
  }
}

// Detect user interaction with the map
map.on('move', hideMapScrollIndicator); // Hide on drag or pan
map.on('zoom', hideMapScrollIndicator); // Hide on zoom

// Update parent and child checkboxes when individual changes occur
document.querySelectorAll('.year-checkbox').forEach(yearCheckbox => {
  console.log('year checkbox checked');
  yearCheckbox.addEventListener('change', () => {
    updateAllCheckboxState();
  });
});

document.querySelectorAll('.tour-checkbox').forEach(tourCheckbox => {
  tourCheckbox.addEventListener('change', () => {
    updateAllCheckboxState();
  });
});

// Function to update the "All" checkbox state
function updateAllCheckboxState() {
  const allCheckboxes = document.querySelectorAll('#filter-container input[type="checkbox"]:not(#select-all)');
  const allChecked = Array.from(allCheckboxes).every(checkbox => checkbox.checked);
}

