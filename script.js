// Determine the initial zoom level based on screen size
const initialZoom = window.innerWidth <= 768 ? 3 : 4; // Zoom out more on mobile (<= 768px)

// Initialize the map with the dynamic zoom level
const map = L.map('map', {
  center: [39.8283, -98.5795], // Center on the USA
  zoom: initialZoom, // Use the calculated initial zoom level
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
    // {
    //   name: "First Avenue",
    //   city: "Minneapolis, MN",
    //   coordinates: [44.9797, -93.2760],
    //   media: [
    //     { type: "image", src: "https://via.placeholder.com/800x600?text=Performance+First+Ave", tour: "summer-2017" },
    //     { type: "video", src: "https://www.w3schools.com/html/movie.mp4", tour: "fall-2017", highlight: true }
    //   ]
    // },
  
    // // 2018 Venues
    // {
    //   name: "9:30 Club",
    //   city: "Washington, DC",
    //   coordinates: [38.9170, -77.0230],
    //   media: [
    //     { type: "image", src: "https://via.placeholder.com/800x600?text=Performance+930+Club", tour: "spring-2018", highlight: true },
    //     { type: "video", src: "https://www.w3schools.com/html/movie.mp4", tour: "fall-2018" }
    //   ]
    // },
    // {
    //   name: "Paradise Rock Club",
    //   city: "Boston, MA",
    //   coordinates: [42.3519, -71.1193],
    //   media: [
    //     { type: "image", src: "https://via.placeholder.com/800x600?text=Performance+Paradise+Rock", tour: "spring-2018" },
    //     { type: "image", src: "https://via.placeholder.com/800x600?text=Performance+Paradise+Fall", tour: "fall-2018", highlight: true }
    //   ]
    // },
  
    // // 2019 Venues
    // {
    //   name: "The Metro",
    //   city: "Chicago, IL",
    //   coordinates: [41.9483, -87.6588],
    //   media: [
    //     { type: "image", src: "https://via.placeholder.com/800x600?text=Performance+Metro", tour: "summer-2019", highlight: true },
    //     { type: "video", src: "https://www.w3schools.com/html/mov_bbb.mp4", tour: "fall-2019" }
    //   ]
    // },
    // {
    //   name: "Bowery Ballroom",
    //   city: "New York, NY",
    //   coordinates: [40.7203, -73.9939],
    //   media: [
    //     { type: "image", src: "https://via.placeholder.com/800x600?text=Performance+Bowery", tour: "spring-2019" },
    //     { type: "video", src: "https://www.w3schools.com/html/movie.mp4", tour: "fall-2019", highlight: true }
    //   ]
    // },
  
    // // 2020 Venues
    // {
    //   name: "El Rey Theatre",
    //   city: "Los Angeles, CA",
    //   coordinates: [34.0625, -118.3499],
    //   media: [
    //     { type: "image", src: "https://via.placeholder.com/800x600?text=Performance+El+Rey", tour: "summer-2020", highlight: true },
    //     { type: "video", src: "https://www.w3schools.com/html/movie.mp4", tour: "fall-2020" }
    //   ]
    // },
    // {
    //   name: "The Orange Peel",
    //   city: "Asheville, NC",
    //   coordinates: [35.5947, -82.5515],
    //   media: [
    //     { type: "image", src: "https://via.placeholder.com/800x600?text=Performance+Orange+Peel", tour: "spring-2020" },
    //     { type: "video", src: "https://www.w3schools.com/html/mov_bbb.mp4", tour: "fall-2020", highlight: true }
    //   ]
    // },
  
    // // 2021 Venues
    // {
    //   name: "Variety Playhouse",
    //   city: "Atlanta, GA",
    //   coordinates: [33.7655, -84.3498],
    //   media: [
    //     { type: "image", src: "https://via.placeholder.com/800x600?text=Performance+Variety", tour: "spring-2021", highlight: true },
    //     { type: "video", src: "https://www.w3schools.com/html/movie.mp4", tour: "fall-2021" }
    //   ]
    // },
    // {
    //   name: "Brooklyn Steel",
    //   city: "Brooklyn, NY",
    //   coordinates: [40.7143, -73.9478],
    //   media: [
    //     { type: "image", src: "https://via.placeholder.com/800x600?text=Performance+Brooklyn+Steel", tour: "summer-2021" },
    //     { type: "video", src: "https://www.w3schools.com/html/mov_bbb.mp4", tour: "fall-2021", highlight: true }
    //   ]
    // },
  
    // // 2022 Venues
    // {
    //   name: "Ogden Theatre",
    //   city: "Denver, CO",
    //   coordinates: [39.7404, -104.9754],
    //   media: [
    //     { type: "image", src: "https://via.placeholder.com/800x600?text=Performance+Ogden", tour: "spring-2022", highlight: true },
    //     { type: "video", src: "https://www.w3schools.com/html/movie.mp4", tour: "fall-2022" }
    //   ]
    // },
    // {
    //   name: "Thalia Hall",
    //   city: "Chicago, IL",
    //   coordinates: [41.8501, -87.6546],
    //   media: [
    //     { type: "image", src: "https://via.placeholder.com/800x600?text=Performance+Thalia+Hall", tour: "summer-2022" },
    //     { type: "video", src: "https://www.w3schools.com/html/mov_bbb.mp4", tour: "fall-2022", highlight: true }
    //   ]
    // },
  
    // 2023 Venues
    // JF | BEARINGS TOUR 
    {
        name: "RIOT FEST",
        city: "Chicago, IL",
        coordinates: [41.8623, -87.6995],
        media: [
            { type: "image", src: "https://cdn.shopify.com/s/files/1/0839/0154/6770/files/F5g_uoeW8AA0jiH.jpg-large.jpg?v=1736550264", tour: "fall-2023", highlight: true },
            { type: "video", src: "https://www.w3schools.com/html/mov_bbb.mp4", tour: "fall-2023", highlight: true }
        ]
    },
    {
        name: "THE SANCTUARY",
        city: "Detroit, MI",
        coordinates: [42.3999, -83.0590],
        media: [
            { type: "image", src: "https://cdn.shopify.com/s/files/1/0839/0154/6770/files/F5g_uoeW8AA0jiH.jpg-large.jpg?v=1736550264", tour: "fall-2023", highlight: true },
            { type: "video", src: "https://www.w3schools.com/html/mov_bbb.mp4", tour: "fall-2023", highlight: true }
        ]
    },
    {
        name: "THE OPERA HOUSE",
        city: "Toronto, ON",
        coordinates: [43.6589, -79.3488],
        media: [
            { type: "image", src: "https://cdn.shopify.com/s/files/1/0839/0154/6770/files/F5g_uoeW8AA0jiH.jpg-large.jpg?v=1736550264", tour: "fall-2023", highlight: true },
            { type: "video", src: "https://www.w3schools.com/html/mov_bbb.mp4", tour: "fall-2023", highlight: true }
        ]
    },
    {
        name: "EMPIRE UNDERGROUND",
        city: "Albany, NY",
        coordinates: [42.6527, -73.7504],
        media: [
            { type: "image", src: "https://cdn.shopify.com/s/files/1/0839/0154/6770/files/F5g_uoeW8AA0jiH.jpg-large.jpg?v=1736550264", tour: "fall-2023", highlight: true },
            { type: "video", src: "https://www.w3schools.com/html/mov_bbb.mp4", tour: "fall-2023", highlight: true }
        ]
    },
    {
        name: "UNION TRANSFER",
        city: "Philadelphia, PA",
        coordinates: [39.9614, -75.1553],
        media: [
            { type: "image", src: "https://cdn.shopify.com/s/files/1/0839/0154/6770/files/F5g_uoeW8AA0jiH.jpg-large.jpg?v=1736550264", tour: "fall-2023", highlight: true },
            { type: "video", src: "https://www.w3schools.com/html/mov_bbb.mp4", tour: "fall-2023", highlight: true }
        ]
    },
    {
        name: "RACKET",
        city: "NYC, NY",
        coordinates: [40.7431, -74.0057],
        media: [
            { type: "image", src: "https://cdn.shopify.com/s/files/1/0839/0154/6770/files/F5g_uoeW8AA0jiH.jpg-large.jpg?v=1736550264", tour: "fall-2023", highlight: true },
            { type: "video", src: "https://www.w3schools.com/html/mov_bbb.mp4", tour: "fall-2023", highlight: true }
        ]
    },
    {
        name: "CRYSTAL BALLROOM",
        city: "Boston, MA",
        coordinates: [42.39665, -71.12300],
        media: [
            { type: "image", src: "https://cdn.shopify.com/s/files/1/0839/0154/6770/files/F5g_uoeW8AA0jiH.jpg-large.jpg?v=1736550264", tour: "fall-2023", highlight: true },
            { type: "video", src: "https://www.w3schools.com/html/mov_bbb.mp4", tour: "fall-2023", highlight: true }
        ]
    },
    {
        name: "SPACE BALLROOM",
        city: "New Haven, CT",
        coordinates: [41.3535, -72.9254],
        media: [
            { type: "image", src: "https://cdn.shopify.com/s/files/1/0839/0154/6770/files/F5g_uoeW8AA0jiH.jpg-large.jpg?v=1736550264", tour: "fall-2023", highlight: true },
            { type: "video", src: "https://www.w3schools.com/html/mov_bbb.mp4", tour: "fall-2023", highlight: true }
        ]
    },
    {
        name: "THE SONG & DANCE",
        city: "Syracus, NY",
        coordinates: [43.0472, -76.1517],
        media: [
            { type: "image", src: "https://cdn.shopify.com/s/files/1/0839/0154/6770/files/F5g_uoeW8AA0jiH.jpg-large.jpg?v=1736550264", tour: "fall-2023", highlight: true },
            { type: "video", src: "https://www.w3schools.com/html/mov_bbb.mp4", tour: "fall-2023", highlight: true }
        ]
    },
    {
        name: "THE ENCLAVE",
        city: "Pittsburgh, PA",
        coordinates: [40.4287, -79.9824],
        media: [
            { type: "image", src: "https://cdn.shopify.com/s/files/1/0839/0154/6770/files/F5g_uoeW8AA0jiH.jpg-large.jpg?v=1736550264", tour: "fall-2023", highlight: true },
            { type: "video", src: "https://www.w3schools.com/html/mov_bbb.mp4", tour: "fall-2023", highlight: true }
        ]
    },
    {
        name: "ACE OF CUPS",
        city: "Columnbus, OH",
        coordinates: [40.0156, -83.0118],
        media: [
            { type: "image", src: "https://cdn.shopify.com/s/files/1/0839/0154/6770/files/F5g_uoeW8AA0jiH.jpg-large.jpg?v=1736550264", tour: "fall-2023", highlight: true },
            { type: "video", src: "https://www.w3schools.com/html/mov_bbb.mp4", tour: "fall-2023", highlight: true }
        ]
    },
    {
        name: "OTTOBAR",
        city: "Baltimore, MD",
        coordinates: [39.3189, -76.6196],
        media: [
            { type: "image", src: "https://cdn.shopify.com/s/files/1/0839/0154/6770/files/F5g_uoeW8AA0jiH.jpg-large.jpg?v=1736550264", tour: "fall-2023", highlight: true },
            { type: "video", src: "https://www.w3schools.com/html/mov_bbb.mp4", tour: "fall-2023", highlight: true }
        ]
    },
    {
        name: "AMOS' SOUTHEND",
        city: "Charolette, NC",
        coordinates: [35.2168, -80.8552],
        media: [
            { type: "image", src: "https://cdn.shopify.com/s/files/1/0839/0154/6770/files/F5g_uoeW8AA0jiH.jpg-large.jpg?v=1736550264", tour: "fall-2023", highlight: true },
            { type: "video", src: "https://www.w3schools.com/html/mov_bbb.mp4", tour: "fall-2023", highlight: true }
        ]
    },
    {
        name: "THE MASQUERADE",
        city: "Atlanta, GA",
        coordinates: [33.7516, -84.3898],
        media: [
            { type: "image", src: "https://cdn.shopify.com/s/files/1/0839/0154/6770/files/F5g_uoeW8AA0jiH.jpg-large.jpg?v=1736550264", tour: "fall-2023", highlight: true },
            { type: "video", src: "https://www.w3schools.com/html/mov_bbb.mp4", tour: "fall-2023", highlight: true }
        ]
    },
    {
        name: "LONE STAR ROOM",
        city: "Dallas, TX",
        coordinates: [32.7708, -96.7970],
        media: [
            { type: "image", src: "https://cdn.shopify.com/s/files/1/0839/0154/6770/files/F5g_uoeW8AA0jiH.jpg-large.jpg?v=1736550264", tour: "fall-2023", highlight: true },
            { type: "video", src: "https://www.w3schools.com/html/mov_bbb.mp4", tour: "fall-2023", highlight: true }
        ]
    },
    {
        name: "PAPER TIGER",
        city: "San Antonio, TX",
        coordinates: [29.4486, -98.4876],
        media: [
            { type: "image", src: "https://cdn.shopify.com/s/files/1/0839/0154/6770/files/F5g_uoeW8AA0jiH.jpg-large.jpg?v=1736550264", tour: "fall-2023", highlight: true },
            { type: "video", src: "https://www.w3schools.com/html/mov_bbb.mp4", tour: "fall-2023", highlight: true }
        ]
    },
    {
        name: "CRESCENT BALLROOM",
        city: "Phoenix, AZ",
        coordinates: [33.45177, -112.07684],
        media: [
            { type: "image", src: "https://cdn.shopify.com/s/files/1/0839/0154/6770/files/F5g_uoeW8AA0jiH.jpg-large.jpg?v=1736550264", tour: "fall-2023", highlight: true },
            { type: "video", src: "https://www.w3schools.com/html/mov_bbb.mp4", tour: "fall-2023", highlight: true }
        ]
    },
    {
        name: "ECHOPLEX",
        city: "Los Angeles, CA",
        coordinates: [34.0776, -118.2605],
        media: [
            { type: "image", src: "https://cdn.shopify.com/s/files/1/0839/0154/6770/files/F5g_uoeW8AA0jiH.jpg-large.jpg?v=1736550264", tour: "fall-2023", highlight: true },
            { type: "video", src: "https://www.w3schools.com/html/mov_bbb.mp4", tour: "fall-2023", highlight: true }
        ]
    },
    {
        name: "CHAIN REACTION",
        city: "Anaheim, CA",
        coordinates: [33.83, -117.94],
        media: [
            { type: "image", src: "https://cdn.shopify.com/s/files/1/0839/0154/6770/files/F5g_uoeW8AA0jiH.jpg-large.jpg?v=1736550264", tour: "fall-2023", highlight: true },
            { type: "video", src: "https://www.w3schools.com/html/mov_bbb.mp4", tour: "fall-2023", highlight: true }
        ]
    },
    {
        name: "HARLOW'S",
        city: "Sacramento, CA",
        coordinates: [38.5739, -121.4702],
        media: [
            { type: "image", src: "https://cdn.shopify.com/s/files/1/0839/0154/6770/files/F5g_uoeW8AA0jiH.jpg-large.jpg?v=1736550264", tour: "fall-2023", highlight: true },
            { type: "video", src: "https://www.w3schools.com/html/mov_bbb.mp4", tour: "fall-2023", highlight: true }
        ]
    },
    {
        name: "CORNERSTONE",
        city: "Berkeley, CA",
        coordinates: [37.8663, -122.2673],
        media: [
            { type: "image", src: "https://cdn.shopify.com/s/files/1/0839/0154/6770/files/F5g_uoeW8AA0jiH.jpg-large.jpg?v=1736550264", tour: "fall-2023", highlight: true },
            { type: "video", src: "https://www.w3schools.com/html/mov_bbb.mp4", tour: "fall-2023", highlight: true }
        ]
    },
    {
        name: "EL CORAZON",
        city: "Seattle, WA",
        coordinates: [47.6188, -122.3293],
        media: [
            { type: "image", src: "https://cdn.shopify.com/s/files/1/0839/0154/6770/files/F5g_uoeW8AA0jiH.jpg-large.jpg?v=1736550264", tour: "fall-2023", highlight: true },
            { type: "video", src: "https://www.w3schools.com/html/mov_bbb.mp4", tour: "fall-2023", highlight: true }
        ]
    },
    {
        name: "HAWTHORNE THEATER",
        city: "Portland, OR",
        coordinates: [45.5118, -122.6231],
        media: [
            { type: "image", src: "https://cdn.shopify.com/s/files/1/0839/0154/6770/files/F5g_uoeW8AA0jiH.jpg-large.jpg?v=1736550264", tour: "fall-2023", highlight: true },
            { type: "video", src: "https://www.w3schools.com/html/mov_bbb.mp4", tour: "fall-2023", highlight: true }
        ]
    },
    {
        name: "SOUNDWELL",
        city: "Salt Lake City, UT",
        coordinates: [40.7646, -111.8957],
        media: [
            { type: "image", src: "https://cdn.shopify.com/s/files/1/0839/0154/6770/files/F5g_uoeW8AA0jiH.jpg-large.jpg?v=1736550264", tour: "fall-2023", highlight: true },
            { type: "video", src: "https://www.w3schools.com/html/mov_bbb.mp4", tour: "fall-2023", highlight: true }
        ]
    },
    {
        name: "MARQUIS THEATER",
        city: "Denver, CO",
        coordinates: [40.7589, -73.9864],
        media: [
            { type: "image", src: "https://cdn.shopify.com/s/files/1/0839/0154/6770/files/F5g_uoeW8AA0jiH.jpg-large.jpg?v=1736550264", tour: "fall-2023", highlight: true },
            { type: "video", src: "https://www.w3schools.com/html/mov_bbb.mp4", tour: "fall-2023", highlight: true }
        ]
    },
    // JF | BRARINGS TOUR END
    
  
    // 2024 Venues
    // HOT MULLIGAN TOUR START
    {
        name: "BUFFALO RIVERWORKS",
        city: "Buffalo, NY",
        coordinates: [42.887691, -78.879372],
        media: [
        { type: "image", src: "https://www.brooklynvegan.com/wp-content/uploads/2023/12/11/hot-mulligan-2024-tour.jpeg", tour: "spring-2024", highlight: true },
        ]
    },
    {
        name: "COLLEGE ST. MUSIC HALL",
        city: "New Haven, CT",
        coordinates: [41.303071, -72.931808],
        media: [
            { type: "image", src: "https://www.brooklynvegan.com/wp-content/uploads/2023/12/11/hot-mulligan-2024-tour.jpeg", tour: "spring-2024", highlight: true },
        ]
    },
    {
      name: "PALLADIUM",
      city: "Worcester, MA",
      coordinates: [42.2667, -71.8007],
      media: [
        { type: "image", src: "https://www.brooklynvegan.com/wp-content/uploads/2023/12/11/hot-mulligan-2024-tour.jpeg", tour: "spring-2024", highlight: true },
      ]
    },
    {
        name: "ATLANTIC CITY CONV CENTER",
        city: "Atlantic City, NJ",
        coordinates: [39.3631, -74.4386],
        media: [
          { type: "image", src: "https://www.brooklynvegan.com/wp-content/uploads/2023/12/11/hot-mulligan-2024-tour.jpeg", tour: "spring-2024", highlight: true },
        ]
    },
    {
      name: "NORVA",
      city: "Norfolk, VA",
      coordinates: [36.8502, -76.2895],
      media: [
        { type: "image", src: "https://www.brooklynvegan.com/wp-content/uploads/2023/12/11/hot-mulligan-2024-tour.jpeg", tour: "spring-2024", highlight: true },
      ]
    },
    {
      name: "JANNUS LIVE",
      city: "Tampa, FL",
      coordinates: [27.7719, -82.6363],
      media: [
        { type: "image", src: "https://www.brooklynvegan.com/wp-content/uploads/2023/12/11/hot-mulligan-2024-tour.jpeg", tour: "spring-2024", highlight: true },
        { type: "video", src: "https://www.w3schools.com/html/mov_bbb.mp4", tour: "spring-2024", highlight: true }
      ]
    },
    {
      name: "IRON CITY",
      city: "Birmingham, AL",
      coordinates: [33.51, -86.8],
      media: [
        { type: "image", src: "https://www.brooklynvegan.com/wp-content/uploads/2023/12/11/hot-mulligan-2024-tour.jpeg", tour: "spring-2024", highlight: true },
        { type: "video", src: "https://www.w3schools.com/html/mov_bbb.mp4", tour: "spring-2024", highlight: true }
      ]
    },
    {
      name: "THE FACTORY",
      city: "Dallas, TX",
      coordinates: [32.4651, -96.471],
      media: [
        { type: "image", src: "https://www.brooklynvegan.com/wp-content/uploads/2023/12/11/hot-mulligan-2024-tour.jpeg", tour: "spring-2024", highlight: true },
        { type: "video", src: "https://www.w3schools.com/html/mov_bbb.mp4", tour: "spring-2024", highlight: true }
      ]
    },
    {
      name: "AZTEC THEATER",
      city: "San Antonio, TX",
      coordinates: [29.424444, -98.490833],
      media: [
        { type: "image", src: "https://www.brooklynvegan.com/wp-content/uploads/2023/12/11/hot-mulligan-2024-tour.jpeg", tour: "spring-2024", highlight: true },
        { type: "video", src: "https://www.w3schools.com/html/mov_bbb.mp4", tour: "spring-2024", highlight: true }
      ]
    },
    {
      name: "LOWBROW PALACE",
      city: "El PASO, TX",
      coordinates: [31.763608, -106.478578],
      media: [
        { type: "image", src: "https://www.brooklynvegan.com/wp-content/uploads/2023/12/11/hot-mulligan-2024-tour.jpeg", tour: "spring-2024", highlight: true },
        { type: "video", src: "https://www.w3schools.com/html/mov_bbb.mp4", tour: "spring-2024", highlight: true }
      ]
    },
    {
        name: "HOUSE OF BLUES - ANAHEIM",
        city: "Anaheim, CA",
        coordinates: [33.81, -117.91],
        media: [
          { type: "image", src: "https://www.brooklynvegan.com/wp-content/uploads/2023/12/11/hot-mulligan-2024-tour.jpeg", tour: "spring-2024", highlight: true },
          { type: "video", src: "https://www.w3schools.com/html/mov_bbb.mp4", tour: "spring-2024", highlight: true }
        ]
      },
    {
      name: "SOMA",
      city: "San Diego, CA",
      coordinates: [32.7546, -117.2089],
      media: [
        { type: "image", src: "https://www.brooklynvegan.com/wp-content/uploads/2023/12/11/hot-mulligan-2024-tour.jpeg", tour: "spring-2024", highlight: true },
        { type: "video", src: "https://www.w3schools.com/html/mov_bbb.mp4", tour: "spring-2024", highlight: true }
      ]
    },
    {
      name: "UC THEATER",
      city: "Berkeley, CA",
      coordinates: [37.8718, -122.2698],
      media: [
        { type: "image", src: "https://www.brooklynvegan.com/wp-content/uploads/2023/12/11/hot-mulligan-2024-tour.jpeg", tour: "spring-2024", highlight: true },
        { type: "video", src: "https://www.w3schools.com/html/mov_bbb.mp4", tour: "spring-2024", highlight: true }
      ]
    },
    {
      name: "BROOKLYN BOWL",
      city: "Las Vegas, NV",
      coordinates: [36.11756, -115.17061],
      media: [
        { type: "image", src: "https://www.brooklynvegan.com/wp-content/uploads/2023/12/11/hot-mulligan-2024-tour.jpeg", tour: "spring-2024", highlight: true },
        { type: "video", src: "https://www.w3schools.com/html/mov_bbb.mp4", tour: "spring-2024", highlight: true }
      ]
    },
    {
      name: "BOULDER THEATER",
      city: "Boulder, CO",
      coordinates: [40.0192, -105.2774],
      media: [
        { type: "image", src: "https://www.brooklynvegan.com/wp-content/uploads/2023/12/11/hot-mulligan-2024-tour.jpeg", tour: "spring-2024", highlight: true },
        { type: "video", src: "https://www.w3schools.com/html/mov_bbb.mp4", tour: "spring-2024", highlight: true }
      ]
    },
    {
      name: "UPTOWN THEATER",
      city: "Kansas City, MO",
      coordinates: [39.0610, -94.5907],
      media: [
        { type: "image", src: "https://www.brooklynvegan.com/wp-content/uploads/2023/12/11/hot-mulligan-2024-tour.jpeg", tour: "spring-2024", highlight: true },
        { type: "video", src: "https://www.w3schools.com/html/mov_bbb.mp4", tour: "spring-2024", highlight: true }
      ]
    },
    // HOT MULLIGAN TOUR END

    // MICROWAVE TOUR START
    {
        name: "IRON CITY",
        city: "Birmingham, AL",
        coordinates: [33.51, -86.8],
        media: [
            { type: "image", src: "https://www.brooklynvegan.com/wp-content/uploads/2024/07/16/microwave-2024tour.jpg", tour: "fall-2024", highlight: true },
            { type: "video", src: "https://www.w3schools.com/html/mov_bbb.mp4", tour: "fall-2024", highlight: true }
        ]
    },
    {
        name: "HOUSE OF BLUES - NEW ORLEANS",
        city: "New Orleans, LA",
        coordinates: [29.95326, -90.06613],
        media: [
        { type: "image", src: "https://www.brooklynvegan.com/wp-content/uploads/2024/07/16/microwave-2024tour.jpg", tour: "fall-2024", highlight: true },
        { type: "video", src: "https://www.w3schools.com/html/mov_bbb.mp4", tour: "fall-2024", highlight: true }
        ]
    },
    {
        name: "PAPER TIGER",
        city: "San Antonio, TX",
        coordinates: [29.4486, -98.48756],
        media: [
        { type: "image", src: "https://www.brooklynvegan.com/wp-content/uploads/2024/07/16/microwave-2024tour.jpg", tour: "fall-2024", highlight: true },
        { type: "video", src: "https://www.w3schools.com/html/mov_bbb.mp4", tour: "fall-2024", highlight: true }
    ]
    },
    {
        name: "Tulips",
        city: "Fort Worth, TX",
        coordinates: [32.74302, -97.32883],
        media: [
        { type: "image", src: "https://www.brooklynvegan.com/wp-content/uploads/2024/07/16/microwave-2024tour.jpg", tour: "fall-2024", highlight: true },
        { type: "video", src: "https://www.w3schools.com/html/mov_bbb.mp4", tour: "fall-2024", highlight: true }
        ]
    },
    {
    name: "VANGUARD",
    city: "Tulsa, OK",
    coordinates: [36.1588, -95.9943],
    media: [
        { type: "image", src: "https://www.brooklynvegan.com/wp-content/uploads/2024/07/16/microwave-2024tour.jpg", tour: "fall-2024", highlight: true },
        { type: "video", src: "https://www.w3schools.com/html/mov_bbb.mp4", tour: "fall-2024", highlight: true }
    ]
    },
    {
    name: "THE GRANADA",
    city: "Lawrence, KS",
    coordinates: [38.9648, -95.2356],
    media: [
        { type: "image", src: "https://www.brooklynvegan.com/wp-content/uploads/2024/07/16/microwave-2024tour.jpg", tour: "fall-2024", highlight: true },
        { type: "video", src: "https://www.w3schools.com/html/mov_bbb.mp4", tour: "fall-2024", highlight: true }
    ]
    },
    {
    name: "DELMAR HALL",
    city: "ST. LOUIS, MO",
    coordinates: [38.6555, -90.2972],
    media: [
        { type: "image", src: "https://www.brooklynvegan.com/wp-content/uploads/2024/07/16/microwave-2024tour.jpg", tour: "fall-2024", highlight: true },
        { type: "video", src: "https://www.w3schools.com/html/mov_bbb.mp4", tour: "fall-2024", highlight: true }
    ]
    },
    {
    name: "TURNER HALL",
    city: "MILWAUKEE, IW",
    coordinates: [40.1, -88.2],
    media: [
        { type: "image", src: "https://www.brooklynvegan.com/wp-content/uploads/2024/07/16/microwave-2024tour.jpg", tour: "fall-2024", highlight: true },
        { type: "video", src: "https://www.w3schools.com/html/mov_bbb.mp4", tour: "fall-2024", highlight: true }
    ]
    },
    {
    name: "THE FORGE",
    city: "Joilet, IL",
    coordinates: [41.5277, -88.08226],
    media: [
        { type: "image", src: "https://www.brooklynvegan.com/wp-content/uploads/2024/07/16/microwave-2024tour.jpg", tour: "fall-2024", highlight: true },
        { type: "video", src: "https://www.w3schools.com/html/mov_bbb.mp4", tour: "fall-2024", highlight: true }
    ]
    },
    {
    name: "ELEVATION",
    city: "Grand Rapids, MI",
    coordinates: [42.9599, -85.6742],
    media: [
        { type: "image", src: "https://www.brooklynvegan.com/wp-content/uploads/2024/07/16/microwave-2024tour.jpg", tour: "fall-2024", highlight: true },
        { type: "video", src: "https://www.w3schools.com/html/mov_bbb.mp4", tour: "fall-2024", highlight: true }
    ]
    },
    {
        name: "DELUXE @ OLD NATIONAL",
        city: "Indianpolois, IN",
        coordinates: [39.7744, -86.1511],
        media: [
        { type: "image", src: "https://www.brooklynvegan.com/wp-content/uploads/2024/07/16/microwave-2024tour.jpg", tour: "fall-2024", highlight: true },
        { type: "video", src: "https://www.w3schools.com/html/mov_bbb.mp4", tour: "fall-2024", highlight: true }
        ]
    },
    {
    name: "BOGARTS",
    city: "Cincinatti, OH",
    coordinates: [41.3959, -82.6510],
    media: [
        { type: "image", src: "https://www.brooklynvegan.com/wp-content/uploads/2024/07/16/microwave-2024tour.jpg", tour: "fall-2024", highlight: true },
        { type: "video", src: "https://www.w3schools.com/html/mov_bbb.mp4", tour: "fall-2024", highlight: true }
    ]
    },
    {
    name: "DISTRICT MUSIC HALL",
    city: "Norwalk, CT",
    coordinates: [41.1170, -73.4140],
    media: [
        { type: "image", src: "https://www.brooklynvegan.com/wp-content/uploads/2024/07/16/microwave-2024tour.jpg", tour: "fall-2024", highlight: true },
        { type: "video", src: "https://www.w3schools.com/html/mov_bbb.mp4", tour: "fall-2024", highlight: true }
    ]
    },
    {
    name: "ASBURY LANES",
    city: "Asbury Park, NJ",
    coordinates: [40.2232, -74.0019],
    media: [
        { type: "image", src: "https://www.brooklynvegan.com/wp-content/uploads/2024/07/16/microwave-2024tour.jpg", tour: "fall-2024", highlight: true },
        { type: "video", src: "https://www.w3schools.com/html/mov_bbb.mp4", tour: "fall-2024", highlight: true }
    ]
    },
    {
    name: "MULCAHY'S",
    city: "Wantagh, NY",
    coordinates: [61.2052, -149.8778],
    media: [
        { type: "image", src: "https://www.brooklynvegan.com/wp-content/uploads/2024/07/16/microwave-2024tour.jpg", tour: "fall-2024", highlight: true },
        { type: "video", src: "https://www.w3schools.com/html/mov_bbb.mp4", tour: "fall-2024", highlight: true }
    ]
    },
    {
    name: "THE RECHER",
    city: "BALTIMORE, MD",
    coordinates: [39.4009, -76.6021],
    media: [
        { type: "image", src: "https://www.brooklynvegan.com/wp-content/uploads/2024/07/16/microwave-2024tour.jpg", tour: "fall-2024", highlight: true },
        { type: "video", src: "https://www.w3schools.com/html/mov_bbb.mp4", tour: "fall-2024", highlight: true }
    ]
    },
    {
    name: "CANAL CLUB",
    city: "RICHMOND, VA",
    coordinates: [37.5326, -77.4296],
    media: [
        { type: "image", src: "https://www.brooklynvegan.com/wp-content/uploads/2024/07/16/microwave-2024tour.jpg", tour: "fall-2024", highlight: true },
        { type: "video", src: "https://www.w3schools.com/html/mov_bbb.mp4", tour: "fall-2024", highlight: true }
    ]
    },
    {
    name: "LINCOLN THEATER",
    city: "RALEIGH, NC",
    coordinates: [35.7739, -78.6374],
    media: [
        { type: "image", src: "https://www.brooklynvegan.com/wp-content/uploads/2024/07/16/microwave-2024tour.jpg", tour: "fall-2024", highlight: true },
        { type: "video", src: "https://www.w3schools.com/html/mov_bbb.mp4", tour: "fall-2024", highlight: true }
    ]
    },
    {
    name: "MUSIC FARM",
    city: "CHARLESTON, SC",
    coordinates: [32.79019, -79.93833],
    media: [
        { type: "image", src: "https://www.brooklynvegan.com/wp-content/uploads/2024/07/16/microwave-2024tour.jpg", tour: "fall-2024", highlight: true },
        { type: "video", src: "https://www.w3schools.com/html/mov_bbb.mp4", tour: "fall-2024", highlight: true }
    ]
    },
    {
    name: "THE BEACHAM",
    city: "ORLANDO, FL",
    coordinates: [28.5430, -81.3792],
    media: [
        { type: "image", src: "https://www.brooklynvegan.com/wp-content/uploads/2024/07/16/microwave-2024tour.jpg", tour: "fall-2024", highlight: true },
        { type: "video", src: "https://www.w3schools.com/html/mov_bbb.mp4", tour: "fall-2024", highlight: true }
    ]
    }
    // MICROWAVE TOUR END
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
          checkbox.checked = isChecked; // Check/uncheck all child tour-checkboxes
        });
      }
  
      updateMarkers(); // Refresh the map markers
    });
  });
  
  // Handle individual tour-checkbox toggle
  document.querySelectorAll('.tour-checkbox').forEach((tourCheckbox) => {
    tourCheckbox.addEventListener('change', () => {
      // Prevent any changes to the corresponding year-checkbox
      // (No logic to update the year-checkbox based on child tour-checkbox states)
  
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
    // Apply the transition inline
    mapScrollIndicator.style.transition = "opacity 3s ease-out";
    mapScrollIndicator.style.opacity = "0"; // Start the fade-out effect

    setTimeout(() => {
      mapScrollIndicator.style.display = "none"; // Remove it from view after fade-out
    }, 3000); // Match the 3-second fade-out duration
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

// Get references to the button and the filter container
const filterToggleButton = document.getElementById('filter-toggle-button');
const filterContainer = document.getElementById('filter-container');

// Toggle the filter container visibility
filterToggleButton.addEventListener('click', () => {
  if (filterContainer.classList.contains('collapsed')) {
    // Expand the filter container
    filterContainer.classList.remove('collapsed');
    filterContainer.classList.add('expanded');
    filterToggleButton.textContent = 'Close Filter'; // Update button text
  } else {
    // Collapse the filter container
    filterContainer.classList.remove('expanded');
    filterContainer.classList.add('collapsed');
    filterToggleButton.textContent = 'Filter'; // Update button text
  }
});