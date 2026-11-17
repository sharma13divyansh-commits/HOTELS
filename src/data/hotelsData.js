export const hotelsData = [
  {
    id: 'yoyo-royal-mirage-dubai',
    name: 'YoYo Royal Mirage & Spa Resort',
    destination: 'Dubai',
    destinationId: 'dubai',
    address: 'King Salman Bin Abdulaziz Al Saud St, Dubai Marina, Dubai, UAE',
    starRating: 5,
    guestRating: 4.9,
    ratingLabel: 'Exceptional',
    reviewCount: 1840,
    pricePerNight: 24500,
    originalPrice: 32000,
    badge: 'Ultra Luxury',
    mainImage: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Perched along pristine Arabian Gulf waters, YoYo Royal Mirage is an oasis of Arabian opulence and contemporary elegance. Featuring private beach access, a lavish traditional Hammam spa, and world-class dining helmed by Michelin-starred culinary maestros.',
    highlights: [
      'Private 1-kilometer white sand beach',
      'Award-winning Royal Hammam & Wellness Sanctuary',
      'Temperature-controlled infinity pools facing the Palm Jumeirah',
      'Dedicated 24/7 personal butler service for suite guests',
      'Helicopter landing pad and luxury yacht charters'
    ],
    amenities: [
      'Free High-Speed WiFi',
      'Infinity Swimming Pool',
      'Luxury Wellness Spa',
      'Ocean View Balcony',
      'Gourmet Breakfast Included',
      '24/7 Fitness Center',
      'Airport Chauffeur',
      'Valet Parking',
      'Fine Dining Restaurants',
      'Private Beach Cabanas'
    ],
    roomTypes: [
      {
        id: 'rm-mirage-deluxe',
        name: 'Deluxe Arabian Sea King Room',
        size: '54 sq.m / 581 sq.ft',
        bed: '1 King Bed or 2 Twin Beds',
        capacity: '2 Adults, 1 Child',
        price: 24500,
        image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80',
        features: ['Arabian Gulf View', 'Marble Bath with Deep Soaking Tub', 'Complimentary Breakfast', 'Private Balcony', 'Nespresso Coffee Bar']
      },
      {
        id: 'rm-mirage-exec',
        name: 'Executive Palm Horizon Suite',
        size: '95 sq.m / 1022 sq.ft',
        bed: '1 Ultra King Bed',
        capacity: '3 Adults',
        price: 38000,
        image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80',
        features: ['Panoramic Palm View', 'Executive Club Lounge Access', '24/7 Butler Service', 'Free Airport Limousine Transfer', 'Champagne Welcome']
      },
      {
        id: 'rm-mirage-presidential',
        name: 'Royal Mirage Presidential Beach Villa',
        size: '220 sq.m / 2368 sq.ft',
        bed: '2 King Master Bedrooms',
        capacity: '4 Adults, 2 Children',
        price: 85000,
        image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=80',
        features: ['Private Infinity Pool & Garden', 'Direct Beachfront Footpath', 'Private Chef Upon Request', 'Complimentary Vintage Bar', 'Bespoke Spa Treatments']
      }
    ],
    policies: {
      checkIn: '15:00 onwards',
      checkOut: 'Until 12:00 noon',
      cancellation: 'Free cancellation up to 48 hours before check-in date. Full refund guaranteed.',
      children: 'Children of all ages welcome. Cribs available upon request at zero charge.',
      pets: 'Pets permitted only in designated private ground villas.'
    },
    locationMap: {
      lat: 25.0934,
      lng: 55.1528,
      landmark: 'Next to Dubai Marina & Palm Jumeirah Gateway'
    },
    reviews: [
      {
        id: 'rev-1',
        author: 'Alexander Wright',
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
        country: 'United Kingdom',
        rating: 5,
        date: 'October 2026',
        comment: 'An absolute masterpiece of luxury hospitality. From the fragrant courtyard to the private sunset yacht cruise arranged by our butler, YoYo Royal Mirage sets the global benchmark.'
      },
      {
        id: 'rev-2',
        author: 'Elena Rostova',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
        country: 'Switzerland',
        rating: 5,
        date: 'September 2026',
        comment: 'Flawless execution. The breakfast terrace overlooking the marina was divine, and the royal hammam therapy revitalized our entire family.'
      }
    ]
  },
  {
    id: 'yoyo-azure-beach-goa',
    name: 'YoYo Azure Beachfront Resort & Spa',
    destination: 'Goa',
    destinationId: 'goa',
    address: 'Sinquerim Beach Road, Candolim, North Goa, India',
    starRating: 5,
    guestRating: 4.8,
    ratingLabel: 'Superb',
    reviewCount: 2150,
    pricePerNight: 14800,
    originalPrice: 19500,
    badge: 'Beachfront Gem',
    mainImage: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Nestled on the serene coastline of North Goa, YoYo Azure combines Portuguese colonial architecture with contemporary tropical luxury. Direct access to golden sands, swaying palms, and a tranquil lagoon pool await your escape.',
    highlights: [
      'Direct private access to Candolim & Sinquerim Beach',
      'Ayurvedic and Balinese holistic spa treatments',
      'Sunset cocktail deck with live acoustic jazz',
      'Multi-cuisine beach shacks serving fresh coastal catches'
    ],
    amenities: [
      'Free High-Speed WiFi',
      'Lagoon Swimming Pool',
      'Ayurvedic Wellness Spa',
      'Ocean View Balcony',
      'Gourmet Breakfast Included',
      '24/7 Fitness Center',
      'Airport Shuttle',
      'Beachside Bar & Grill',
      'Water Sports Concierge'
    ],
    roomTypes: [
      {
        id: 'rm-azure-deluxe',
        name: 'Portuguese Heritage Garden Room',
        size: '48 sq.m / 516 sq.ft',
        bed: '1 King Bed',
        capacity: '2 Adults, 1 Child',
        price: 14800,
        image: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=800&q=80',
        features: ['Tropical Garden Terrace', 'Open-to-Sky Rain Shower', 'Complimentary Buffet Breakfast', 'Handcrafted Teak Furniture']
      },
      {
        id: 'rm-azure-ocean',
        name: 'Azure Oceanfront Sunset Suite',
        size: '80 sq.m / 861 sq.ft',
        bed: '1 Four-Poster King Bed',
        capacity: '2 Adults',
        price: 22000,
        image: 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=800&q=80',
        features: ['Unobstructed Sea Views', 'Private Plunge Pool', 'Daily Sunset Cocktails', 'Aromatherapy Bath Ritual']
      }
    ],
    policies: {
      checkIn: '14:00 onwards',
      checkOut: 'Until 11:00 am',
      cancellation: 'Free cancellation up to 72 hours before arrival.',
      children: 'Kids club available for ages 3-12.',
      pets: 'Small pets allowed upon prior confirmation.'
    },
    locationMap: {
      lat: 15.5037,
      lng: 73.7667,
      landmark: 'Minutes from Fort Aguada and Candolim Beach'
    },
    reviews: [
      {
        id: 'rev-3',
        author: 'Rohan & Ananya Kapoor',
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80',
        country: 'Mumbai, India',
        rating: 5,
        date: 'November 2026',
        comment: 'The perfect romantic getaway! The private plunge pool in the Oceanfront Suite during the sunset is unmatched. Exceptional staff hospitality.'
      }
    ]
  },
  {
    id: 'yoyo-marine-grande-mumbai',
    name: 'YoYo Marine Grande Luxury Suites',
    destination: 'Mumbai',
    destinationId: 'mumbai',
    address: 'Marine Drive, Nariman Point, South Mumbai, India',
    starRating: 5,
    guestRating: 4.9,
    ratingLabel: 'Exceptional',
    reviewCount: 3120,
    pricePerNight: 19500,
    originalPrice: 26000,
    badge: 'Iconic Landmark',
    mainImage: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Overlooking the illustrious Queen\'s Necklace on Marine Drive, YoYo Marine Grande is South Mumbai\'s premier address for discerning travelers. Marvel at Arabian Sea sunsets, indulge in Michelin-calibre dining, and bask in timeless high-society hospitality.',
    highlights: [
      'Sweeping panoramic vistas of Marine Drive and the Arabian Sea',
      'Rooftop heated infinity pool and cigar lounge',
      'Signature modern Indian and Japanese fine dining',
      'Centrally located near Colaba, Fort art district, and High Court'
    ],
    amenities: [
      'Free High-Speed WiFi',
      'Rooftop Infinity Pool',
      'Luxury Wellness Spa',
      'Sea Facing Rooms',
      'Gourmet Breakfast Included',
      '24/7 Fitness Center',
      'Chauffeur Limousine',
      'Valet Parking',
      'Executive Boardrooms'
    ],
    roomTypes: [
      {
        id: 'rm-marine-premier',
        name: 'Premier Sea View King Room',
        size: '50 sq.m / 538 sq.ft',
        bed: '1 Plush King Bed',
        capacity: '2 Adults',
        price: 19500,
        image: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=800&q=80',
        features: ['Direct Marine Drive Vista', 'Italian Marble Bathroom', '24/7 Room Service', 'Soundproof Triple-Glazed Windows']
      },
      {
        id: 'rm-marine-suite',
        name: 'Queen\'s Necklace Panoramic Suite',
        size: '98 sq.m / 1054 sq.ft',
        bed: '1 Master King Bed',
        capacity: '3 Adults',
        price: 36000,
        image: 'https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&w=800&q=80',
        features: ['180-Degree Marine Drive View', 'Walk-in Wardrobe', 'Private Dining Area', 'Complimentary Evening Cocktails']
      }
    ],
    policies: {
      checkIn: '14:00 onwards',
      checkOut: 'Until 12:00 noon',
      cancellation: 'Free cancellation up to 24 hours before check-in.',
      children: 'Family suites available with connecting rooms.',
      pets: 'Service animals permitted.'
    },
    locationMap: {
      lat: 18.9288,
      lng: 72.8229,
      landmark: 'Marine Drive Promenade, facing the Arabian Sea'
    },
    reviews: [
      {
        id: 'rev-4',
        author: 'Siddharth Mehra',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80',
        country: 'New Delhi, India',
        rating: 5,
        date: 'October 2026',
        comment: 'The view of Queen\'s necklace at night from our suite was mesmerizing. YoYo Hotels provides unparalleled service in Mumbai.'
      }
    ]
  },
  {
    id: 'yoyo-imperial-heritage-delhi',
    name: 'YoYo Imperial Heritage Manor',
    destination: 'Delhi',
    destinationId: 'delhi',
    address: '1 Janpath, Diplomatic Enclave, New Delhi, India',
    starRating: 5,
    guestRating: 4.8,
    ratingLabel: 'Superb',
    reviewCount: 1650,
    pricePerNight: 16500,
    originalPrice: 22000,
    badge: 'Colonial Elegance',
    mainImage: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Set amidst six acres of lush manicured British colonial gardens, YoYo Imperial Heritage Manor radiates refined aristocratic charm. Featuring museum-worthy art collections, high-tea verandas, and regal suites honoring India\'s imperial legacy.',
    highlights: [
      'Sprawling landscaped heritage gardens and vintage fountains',
      'Celebrated Victorian High Tea on the glass conservatory veranda',
      'Ayurvedic healing pavilion with bespoke herbal therapies',
      'Close proximity to India Gate, Rashtrapati Bhavan, and Khan Market'
    ],
    amenities: [
      'Free High-Speed WiFi',
      'Colonial Swimming Pool',
      'Ayurvedic Heritage Spa',
      'Garden View Rooms',
      'Gourmet Breakfast Included',
      '24/7 Fitness Center',
      'Airport Chauffeur',
      'Art Gallery & Library',
      'Valet Parking'
    ],
    roomTypes: [
      {
        id: 'rm-imperial-heritage',
        name: 'Heritage Garden View Room',
        size: '52 sq.m / 560 sq.ft',
        bed: '1 King Bed',
        capacity: '2 Adults',
        price: 16500,
        image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=800&q=80',
        features: ['Garden Outlook', 'Handmade Teak Furnishings', 'Deep Freestanding Tub', 'Complimentary Heritage Walk Tour']
      },
      {
        id: 'rm-imperial-viceroy',
        name: 'Viceroy Diplomatic Suite',
        size: '110 sq.m / 1184 sq.ft',
        bed: '1 Royal Canopy King Bed',
        capacity: '3 Adults',
        price: 32000,
        image: 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=800&q=80',
        features: ['Private Study & Library', 'Formal Living Room', 'Butler Service', 'Complimentary Champagne & Fruit Platter']
      }
    ],
    policies: {
      checkIn: '14:00 onwards',
      checkOut: 'Until 12:00 noon',
      cancellation: 'Free cancellation up to 48 hours prior to arrival.',
      children: 'Children welcome, extra rollaway beds on request.',
      pets: 'Not permitted.'
    },
    locationMap: {
      lat: 28.6139,
      lng: 77.2189,
      landmark: 'Next to Janpath & Central Vista, New Delhi'
    },
    reviews: [
      {
        id: 'rev-5',
        author: 'Lord Julian Montgomery',
        avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=150&q=80',
        country: 'United Kingdom',
        rating: 5,
        date: 'November 2026',
        comment: 'Stepping into YoYo Imperial is like stepping into an era of graceful serenity. The gardens are impeccably maintained and the culinary staff is top tier.'
      }
    ]
  },
  {
    id: 'yoyo-cedar-pines-manali',
    name: 'YoYo Cedar Pines Alpine Chalet',
    destination: 'Manali',
    destinationId: 'manali',
    address: 'Log Huts Area, Old Manali Road, Manali, Himachal Pradesh, India',
    starRating: 4,
    guestRating: 4.8,
    ratingLabel: 'Superb',
    reviewCount: 980,
    pricePerNight: 9800,
    originalPrice: 14000,
    badge: 'Mountain Retreat',
    mainImage: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Surrounded by fragrant deodar cedar forests and snow-capped Himalayan peaks, YoYo Cedar Pines Alpine Chalet offers warm pine-wood interiors, heated stone floors, roaring fireplaces, and stellar mountain views from every balcony.',
    highlights: [
      'Unbroken panoramic views of Pir Panjal snow peaks',
      'Individual wood-burning stone fireplaces in all suites',
      'Heated indoor swimming pool and Scandinavian pine sauna',
      'Daily guided mountain trails and stargazing sessions'
    ],
    amenities: [
      'Free High-Speed WiFi',
      'Heated Indoor Pool',
      'Scandinavian Sauna & Spa',
      'Mountain View Balcony',
      'Complimentary Hot Breakfast',
      'Cozy Fireplace Lounge',
      'Ski & Trek Concierge',
      'Pet Friendly',
      'Free Parking'
    ],
    roomTypes: [
      {
        id: 'rm-cedar-deluxe',
        name: 'Alpine Pine Deluxe Chalet Room',
        size: '42 sq.m / 452 sq.ft',
        bed: '1 Plush Queen Bed',
        capacity: '2 Adults, 1 Child',
        price: 9800,
        image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80',
        features: ['Himalayan Valley View', 'Cedar Wood Craftsmanship', 'Underfloor Heating', 'Balcony with Deck Chairs']
      },
      {
        id: 'rm-cedar-loft',
        name: 'Himalayan Penthouse Loft Suite',
        size: '82 sq.m / 882 sq.ft',
        bed: '1 King Bed + Loft Daybed',
        capacity: '4 Adults',
        price: 17500,
        image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=80',
        features: ['Two-Level Alpine Loft', 'Private Fireplace & Bar', 'Glass Stargazing Ceiling', 'Complimentary Evening Mulled Wine']
      }
    ],
    policies: {
      checkIn: '13:00 onwards',
      checkOut: 'Until 11:00 am',
      cancellation: 'Free cancellation up to 7 days before check-in date.',
      children: 'Cots and board games available for families.',
      pets: 'Pets welcome! Pet beds and bowls provided in chalet rooms.'
    },
    locationMap: {
      lat: 32.2432,
      lng: 77.1892,
      landmark: 'Near Hadimba Temple & Old Manali Forest'
    },
    reviews: [
      {
        id: 'rev-6',
        author: 'Priya & Kabir Sharma',
        avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80',
        country: 'Chandigarh, India',
        rating: 5,
        date: 'October 2026',
        comment: 'Waking up to the snow-covered peaks while having hot cinnamon apple tea on our wooden balcony was pure magic. The heated floors made all the difference!'
      }
    ]
  },
  {
    id: 'yoyo-rajvilas-palace-jaipur',
    name: 'YoYo Rajvilas Heritage Palace',
    destination: 'Jaipur',
    destinationId: 'jaipur',
    address: 'Goner Road, Jagatpura, Jaipur, Rajasthan, India',
    starRating: 5,
    guestRating: 4.9,
    ratingLabel: 'Exceptional',
    reviewCount: 1420,
    pricePerNight: 21000,
    originalPrice: 28000,
    badge: 'Royal Palace',
    mainImage: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Spread over thirty-two acres of lush gardens, pavilions, and reflecting pools, YoYo Rajvilas is a royal tribute to traditional Rajasthani fort architecture. Relish authentic royal feasts, peacock sanctuaries, and royal Rajputana hospitality.',
    highlights: [
      'Ancient Shiva temple on site and central lotus pond',
      'Royal tented luxury villas with clawfoot tubs and private gardens',
      'Evening Rajasthani folk dances, sitar recitals, and lantern ceremonies',
      'Private elephant and vintage car royal city excursions'
    ],
    amenities: [
      'Free High-Speed WiFi',
      'Royal Courtyard Pool',
      'Ayurvedic Heritage Spa',
      'Palace Garden Balcony',
      'Royal Rajasthani Breakfast Included',
      '24/7 Fitness Center',
      'Airport Chauffeur',
      'Tennis Courts',
      'Valet Parking'
    ],
    roomTypes: [
      {
        id: 'rm-rajvilas-deluxe',
        name: 'Premier Rajputana Courtyard Room',
        size: '56 sq.m / 602 sq.ft',
        bed: '1 Four-Poster King Bed',
        capacity: '2 Adults, 1 Child',
        price: 21000,
        image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80',
        features: ['Courtyard Fountain View', 'Hand-woven Silk Tapestries', 'Sunken Marble Bathtub', 'Traditional Garland Welcome']
      },
      {
        id: 'rm-rajvilas-tent',
        name: 'Royal Maharaja Tented Villa',
        size: '95 sq.m / 1022 sq.ft',
        bed: '1 Royal King Bed',
        capacity: '2 Adults',
        price: 39000,
        image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80',
        features: ['Private Walled Garden', 'Freestanding Gilded Tub', 'Air-Conditioned Canvas Luxury', 'Personal Palace Butler']
      }
    ],
    policies: {
      checkIn: '14:00 onwards',
      checkOut: 'Until 12:00 noon',
      cancellation: 'Free cancellation up to 48 hours prior to arrival.',
      children: 'Children welcome with cultural activities arranged.',
      pets: 'Not permitted on palace grounds.'
    },
    locationMap: {
      lat: 26.8529,
      lng: 75.8856,
      landmark: 'Goner Road, 20 mins from City Palace Jaipur'
    },
    reviews: [
      {
        id: 'rev-7',
        author: 'Princess Gayatri Kumari',
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
        country: 'Jaipur, India',
        rating: 5,
        date: 'October 2026',
        comment: 'YoYo Rajvilas captures the true spirit and royal grandeur of Rajputana. The hospitality, the candle-lit dinner by the lotus pond, and the spa were heavenly.'
      }
    ]
  },
  {
    id: 'yoyo-burj-crown-dubai',
    name: 'YoYo Burj Crown Sky Residences',
    destination: 'Dubai',
    destinationId: 'dubai',
    address: 'Sheikh Mohammed bin Rashid Blvd, Downtown Dubai, UAE',
    starRating: 5,
    guestRating: 4.8,
    ratingLabel: 'Superb',
    reviewCount: 2400,
    pricePerNight: 28500,
    originalPrice: 38000,
    badge: 'Skyline Icon',
    mainImage: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Commanding front-row views of the Burj Khalifa and the Dubai Fountain, YoYo Burj Crown features ultra-modern glass towers, sky lounges, Michelin-caliber gastronomy, and direct air-conditioned bridges to The Dubai Mall.',
    highlights: [
      'Direct unobstructed views of the Burj Khalifa light & fountain shows',
      '68th-floor sky infinity pool overlooking the city',
      'VIP shopping concierge and buggy transit to Dubai Mall',
      'Smart home automation in every suite'
    ],
    amenities: [
      'Free High-Speed WiFi',
      'Sky Infinity Pool',
      'Luxury Wellness Spa',
      'Burj Khalifa View Balcony',
      'Gourmet Breakfast Included',
      '24/7 Fitness Center',
      'Airport Chauffeur',
      'Valet Parking',
      'Sky Lounge & Bar'
    ],
    roomTypes: [
      {
        id: 'rm-burj-sky',
        name: 'Skyline Grand King Suite',
        size: '65 sq.m / 700 sq.ft',
        bed: '1 Plush King Bed',
        capacity: '2 Adults',
        price: 28500,
        image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80',
        features: ['Floor-to-Ceiling Burj Khalifa Views', 'Automated Curtains & Mood Lighting', 'Bang & Olufsen Sound System', 'Dyson Haircare Suite']
      },
      {
        id: 'rm-burj-penthouse',
        name: 'Downtown Imperial Penthouse',
        size: '180 sq.m / 1937 sq.ft',
        bed: '2 King Bedrooms',
        capacity: '4 Adults',
        price: 65000,
        image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80',
        features: ['Wraparound Sky Terrace', 'Private Jacuzzi on Balcony', 'Dedicated Chauffeur in Rolls-Royce', 'Private Mixologist']
      }
    ],
    policies: {
      checkIn: '15:00 onwards',
      checkOut: 'Until 12:00 noon',
      cancellation: 'Free cancellation up to 48 hours prior to arrival.',
      children: 'Children welcome. Babysitting services upon request.',
      pets: 'Not permitted.'
    },
    locationMap: {
      lat: 25.1972,
      lng: 55.2744,
      landmark: 'Downtown Dubai, beside Dubai Opera & Burj Khalifa'
    },
    reviews: [
      {
        id: 'rev-8',
        author: 'Marcus Vance',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
        country: 'United States',
        rating: 5,
        date: 'November 2026',
        comment: 'Watching the fountain show from our private balcony was unforgettable. YoYo Burj Crown defines ultra-modern luxury.'
      }
    ]
  },
  {
    id: 'yoyo-emerald-palms-goa',
    name: 'YoYo Emerald Palms Sanctuary',
    destination: 'Goa',
    destinationId: 'goa',
    address: 'Benaulim Beach Road, South Goa, India',
    starRating: 4,
    guestRating: 4.7,
    ratingLabel: 'Very Good',
    reviewCount: 1320,
    pricePerNight: 8900,
    originalPrice: 12500,
    badge: 'Serene Sanctuary',
    mainImage: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Tucked away in peaceful South Goa amongst coconut groves and paddy fields, YoYo Emerald Palms offers tranquil luxury, yoga pavilions, organic farm-to-table dining, and direct bicycle paths to uncrowded white beaches.',
    highlights: [
      'Peaceful non-commercial beach access (Benaulim Beach)',
      'Daily sunrise beach yoga and wellness meditation',
      'Organic garden-to-table chef specials',
      'Eco-luxury certified sustainable resort'
    ],
    amenities: [
      'Free High-Speed WiFi',
      'Outdoor Swimming Pool',
      'Holistic Wellness Spa',
      'Garden View Patio',
      'Free Organic Breakfast',
      'Bicycle Rentals Included',
      'Airport Shuttle',
      'Pet Friendly',
      'Free Parking'
    ],
    roomTypes: [
      {
        id: 'rm-emerald-villa',
        name: 'Tropical Garden Cottage',
        size: '45 sq.m / 484 sq.ft',
        bed: '1 Queen Bed',
        capacity: '2 Adults',
        price: 8900,
        image: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=800&q=80',
        features: ['Private Garden Hammock', 'Rain Shower with Herb Amenities', 'Fresh Farm Fruit Basket', 'Complimentary Yoga Mat']
      },
      {
        id: 'rm-emerald-pool',
        name: 'Poolside Sanctuary Villa',
        size: '70 sq.m / 753 sq.ft',
        bed: '1 King Bed',
        capacity: '2 Adults, 1 Child',
        price: 13500,
        image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=80',
        features: ['Step-Out Pool Access', 'Private Sun Deck', 'Complimentary Evening Wine', 'Late Checkout until 3 PM']
      }
    ],
    policies: {
      checkIn: '14:00 onwards',
      checkOut: 'Until 11:30 am',
      cancellation: 'Free cancellation up to 48 hours before check-in.',
      children: 'Family friendly with outdoor games and cycling trails.',
      pets: 'Pets welcome! Dedicated pet play zone.'
    },
    locationMap: {
      lat: 15.2638,
      lng: 73.9312,
      landmark: 'Benaulim Beach Road, South Goa'
    },
    reviews: [
      {
        id: 'rev-9',
        author: 'Nikhil & Tara Deshmukh',
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80',
        country: 'Pune, India',
        rating: 5,
        date: 'October 2026',
        comment: 'Pure peace. The quietest beach holiday we have ever had. The organic food was fresh and the staff treated us like family.'
      }
    ]
  },
  {
    id: 'yoyo-oberon-grand-mumbai',
    name: 'YoYo The Oberon Grand Seafront',
    destination: 'Mumbai',
    destinationId: 'mumbai',
    address: 'BJ Road, Bandra Bandstand, Mumbai, India',
    starRating: 5,
    guestRating: 4.8,
    ratingLabel: 'Superb',
    reviewCount: 2280,
    pricePerNight: 17800,
    originalPrice: 24000,
    badge: 'Celebrity Hub',
    mainImage: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Perched on the glamorous cliffs of Bandra Bandstand, YoYo The Oberon Grand delivers front-row sea views, celebrity sightings, avant-garde interior design, and an acclaimed seaside infinity pool overlooking Bandra-Worli Sea Link.',
    highlights: [
      'Breathtaking views of the Bandra-Worli Sea Link & Arabian Sea',
      'Heated cliffside infinity pool and sunset champagne lounge',
      'Private elevator access for penthouse suites',
      'Steps away from Bandra\'s trendiest cafes and boutiques'
    ],
    amenities: [
      'Free High-Speed WiFi',
      'Cliffside Infinity Pool',
      'Luxury Wellness Spa',
      'Sea Facing Rooms',
      'Gourmet Breakfast Included',
      '24/7 Fitness Center',
      'Airport Chauffeur',
      'Valet Parking',
      'Seaside Bistro'
    ],
    roomTypes: [
      {
        id: 'rm-oberon-deluxe',
        name: 'Bandstand Sea View Deluxe Room',
        size: '46 sq.m / 495 sq.ft',
        bed: '1 King Bed',
        capacity: '2 Adults',
        price: 17800,
        image: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=800&q=80',
        features: ['Full Arabian Sea View', 'Smart Lighting & Audio', 'Espresso Machine', 'Marble Bathroom']
      },
      {
        id: 'rm-oberon-suite',
        name: 'Sea Link Panoramic Grand Suite',
        size: '92 sq.m / 990 sq.ft',
        bed: '1 Ultra King Bed',
        capacity: '3 Adults',
        price: 33000,
        image: 'https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&w=800&q=80',
        features: ['Corner Suite with 270-degree Sea Views', 'Private Balcony', 'Complimentary Evening Cocktail Hour', 'Personal Butler']
      }
    ],
    policies: {
      checkIn: '14:00 onwards',
      checkOut: 'Until 12:00 noon',
      cancellation: 'Free cancellation up to 48 hours prior to arrival.',
      children: 'All ages welcome.',
      pets: 'Service animals only.'
    },
    locationMap: {
      lat: 19.0435,
      lng: 72.8198,
      landmark: 'Bandstand Promenade, Bandra West, Mumbai'
    },
    reviews: [
      {
        id: 'rev-10',
        author: 'Arjun Khanna',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80',
        country: 'Bangalore, India',
        rating: 5,
        date: 'October 2026',
        comment: 'Staying at YoYo Oberon Grand in Bandra is a vibe. The sunset view over the Sea Link while sipping their signature cocktails was world-class.'
      }
    ]
  },
  {
    id: 'yoyo-himalayan-whisper-manali',
    name: 'YoYo Himalayan Whisper Riverside Lodge',
    destination: 'Manali',
    destinationId: 'manali',
    address: 'Club House Road, Old Manali, Himachal Pradesh, India',
    starRating: 4,
    guestRating: 4.8,
    ratingLabel: 'Superb',
    reviewCount: 860,
    pricePerNight: 8500,
    originalPrice: 11500,
    badge: 'Riverside Charm',
    mainImage: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Perched right along the crystal-clear Manalsu River in Old Manali, YoYo Himalayan Whisper is a serene sanctuary of stone and timber chalets. Listen to the soothing rush of water, enjoy campfire barbecues, and explore apple orchards.',
    highlights: [
      'Direct riverfront wooden deck with bonfire pits',
      'Fresh trout barbecues and wood-fired artisanal pizzas',
      'Organic apple orchard walks and river-crossing zip lines',
      'Cozy library cafe with specialty Himalayan coffee'
    ],
    amenities: [
      'Free High-Speed WiFi',
      'Riverside Deck & Bonfire',
      'Himalayan Herbal Spa',
      'Balcony with River View',
      'Complimentary Hot Breakfast',
      'Wood-Fired Pizza Oven',
      'Trekking Guides',
      'Pet Friendly',
      'Free Parking'
    ],
    roomTypes: [
      {
        id: 'rm-whisper-river',
        name: 'Riverside Cedar Balcony Room',
        size: '40 sq.m / 430 sq.ft',
        bed: '1 Cozy King Bed',
        capacity: '2 Adults',
        price: 8500,
        image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80',
        features: ['Sound of River Rapids', 'Handcrafted Pine Bed', 'Room Heater Included', 'Private Wooden Balcony']
      },
      {
        id: 'rm-whisper-chalet',
        name: 'Apple Orchard Wooden Chalet',
        size: '75 sq.m / 807 sq.ft',
        bed: '1 King Bed + 1 Single Bed',
        capacity: '3 Adults, 1 Child',
        price: 14200,
        image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=80',
        features: ['Standalone Wooden Chalet', 'Living Room with Stone Fireplace', 'Orchard & Snow Mountain Views', 'Daily Evening High Tea']
      }
    ],
    policies: {
      checkIn: '13:00 onwards',
      checkOut: 'Until 11:00 am',
      cancellation: 'Free cancellation up to 5 days before check-in.',
      children: 'Children welcome, games and garden play area.',
      pets: 'Pets welcome at no extra fee.'
    },
    locationMap: {
      lat: 32.2530,
      lng: 77.1780,
      landmark: 'Old Manali, by the Manalsu Riverbank'
    },
    reviews: [
      {
        id: 'rev-11',
        author: 'Devika Sengupta',
        avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80',
        country: 'Kolkata, India',
        rating: 5,
        date: 'October 2026',
        comment: 'Sleeping with the sound of the river rushing by outside our window was the most therapeutic experience ever. The hotel staff was so gentle and caring.'
      }
    ]
  }
];
