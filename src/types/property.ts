export type Property = {
  id: number;
  name: string;
  description: string;
  image: string;
  keyHighlights: string[];
  ameneties: string[];
  developer: {
    name: string;
    description: string | null;
  };
  address: string;
  configurations: {
    name: string;
    buildUpAreaRange: string | null; // "<low> - <high> sq. ft" or single "X sq. ft"
    carpetAreaRange: string | null;
    sizeRange: string | null;
  }[];
  locality: {
    name: string;
    distance: string | null;
    type: string;
  }[];
  buildUpAreaStatus: string;
  buildUpAreaRange: string | null;
  CarpetAreaStatus: string;
  carpetAreaRange: string | null;
  sizeRange: string | null;
  priceTotal: number | null;
  pricePerSqFt: number | null;
  status: string;
};

export const properties: Property[] = [
  // 1. century horizon brochure.pdf
  {
    id: 1,
    name: "Century Horizon",
    description:
      "Luxury apartments opposite Jakkur Aerodrome in North Bengaluru, designed for young, fast-paced professionals seeking a well-connected, premium lifestyle in Hebbal.",
    image:
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80",
    keyHighlights: [
      "Opposite Jakkur Aerodrome with open sky and green views",
      "Located on NH 44 in the Hebbal–Yelahanka growth belt",
      "Easy access to Kempegowda International Airport and Manyata Tech Park",
      "Smart home features with smart locks and video door phone",
      "Premium specifications with wooden flooring in bedrooms and vitrified tiles elsewhere",
      "Seismic zone II compliant RCC structure",
    ],
    ameneties: [
      "Smart lock for main door",
      "Video door phone and intercom",
      "Centralised gas provision",
      "CCTV surveillance at strategic locations",
      "Passenger lifts",
      "STP and WTP",
      "Servant/driver toilets in basement",
      "EV charging points",
      "Gym and indoor amenities (as part of lifestyle clubhouse)",
      "Children’s play areas and landscaped open spaces",
    ],
    developer: {
      name: "Century Real Estate",
      description:
        "Integrated real estate developer in Bengaluru with over 3000 acres of land bank and a multi-million sq. ft development portfolio.", // :contentReference[oaicite:1]{index=1}
    },
    address:
      "Opposite Jakkur Aerodrome, Bellary Road (NH 44), Hebbal - North Bengaluru",
    configurations: [
      {
        name: "2 BHK",
        buildUpAreaRange: null, // electrical spec mentions 2 BHK but unit sizes not clearly readable in text
        carpetAreaRange: null,
        sizeRange: null,
      },
      {
        name: "3 BHK Type B",
        buildUpAreaRange: "1658 - 1835 sq. ft",
        carpetAreaRange: "1076 sq. ft",
        sizeRange: null,
      },
      {
        name: "3 BHK Type C",
        buildUpAreaRange: "1667 - 1837 sq. ft",
        carpetAreaRange: "1090 sq. ft",
        sizeRange: null,
      },
      {
        name: "3 BHK Type D",
        buildUpAreaRange: "1365 - 1570 sq. ft",
        carpetAreaRange: "868 sq. ft",
        sizeRange: null,
      },
      {
        name: "3 BHK Type E",
        buildUpAreaRange: "1482 - 1641 sq. ft",
        carpetAreaRange: "954 sq. ft",
        sizeRange: null,
      },
      {
        name: "4 BHK Type A",
        buildUpAreaRange: "1919 - 2171 sq. ft",
        carpetAreaRange: "1236 sq. ft",
        sizeRange: null,
      },
    ],
    locality: [
      { name: "Hebbal Flyover", distance: null, type: "connectivity" },
      { name: "Jakkur Aerodrome", distance: null, type: "landmark" },
      { name: "Esteem Mall", distance: null, type: "shopping" },
      { name: "Columbia Asia Hospital", distance: null, type: "hospital" },
      { name: "RMZ Galleria Mall", distance: null, type: "shopping" },
      { name: "Vidya Niketan School", distance: null, type: "school" },
      { name: "Presidency College", distance: null, type: "college" },
    ],
    buildUpAreaStatus: "available",
    buildUpAreaRange: "1365 - 2171 sq. ft",
    CarpetAreaStatus: "available",
    carpetAreaRange: "868 - 1236 sq. ft",
    sizeRange: null, // project land area not clearly stated in text snippet
    priceTotal: null,
    pricePerSqFt: null,
    status: "Under Construction", // inferred from brochure tone and positioning as an ongoing premium project
  },

  // 2. century infiniti brochure.pdf (actually Century Ethos as per brochure text)
  {
    id: 2,
    name: "Century Ethos",
    description:
      "Ultra-luxury residences in Hebbal with large 3 & 4 BHK homes and penthouses, centred around The Cobalt Club and expansive curated amenities.",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    keyHighlights: [
      "11.5-acre development with 7.3 acres of residential and 4.2 acres of commercial",
      "Large-format 3 BHK and 4 BHK residences with premium finishes",
      "Signature Cobalt Club with extensive lifestyle amenities",
      "Advanced home automation and biometric security",
      "Located in Hebbal with excellent connectivity to airport and CBD",
    ],
    ameneties: [
      "The Cobalt Club with double-height entrance lobby and concierge",
      "Cafe / coffee bar and cigar room",
      "Wine cellar and library",
      "Business centre and guest rooms",
      "Banquet / multipurpose hall and theatre room",
      "Salon and spa, gym, aerobics/yoga studio, steam and sauna",
      "Indoor heated pool and multipurpose sports court",
      "Squash court, bowling alley, indoor games room",
      "Tennis, basketball and cricket practice nets",
      "Golf putting green",
      "Swimming pool with pool bar and kids’ pool",
      "Jogging track, outdoor fitness station and amphitheatre",
      "Reflexology garden, tropical shrub garden and senior citizen avenue",
    ],
    developer: {
      name: "Century Real Estate",
      description:
        "Full-service Bengaluru-based developer with over four decades of experience and a large land bank across the city.", // :contentReference[oaicite:2]{index=2}
    },
    address: "Hebbal, North Bengaluru",
    configurations: [
      {
        name: "3 BHK (Towers Argon/Bronze)",
        buildUpAreaRange: "2850 - 3125 sq. ft",
        carpetAreaRange: null, // not separately specified in brochure text layer
        sizeRange: null,
      },
      {
        name: "4 BHK Penthouse (Towers Argon/Bronze)",
        buildUpAreaRange: "4790 - 4935 sq. ft",
        carpetAreaRange: null,
        sizeRange: null,
      },
      {
        name: "3 BHK (Tower Chrome)",
        buildUpAreaRange: "3485 sq. ft",
        carpetAreaRange: null,
        sizeRange: null,
      },
      {
        name: "4 BHK (Towers Chrome/Xenon)",
        buildUpAreaRange: "4235 sq. ft",
        carpetAreaRange: null,
        sizeRange: null,
      },
    ],
    locality: [
      { name: "Hebbal Flyover", distance: "1.5 km", type: "connectivity" },
      { name: "Manyata Tech Park", distance: "5 km", type: "it_park" },
      { name: "Malleshwaram", distance: "6 km", type: "city_centre" },
      { name: "MG Road", distance: "12 km", type: "city_centre" },
      {
        name: "Bengaluru Central Railway Station",
        distance: "13 km",
        type: "transport",
      },
      {
        name: "Kempegowda International Airport",
        distance: "28 km",
        type: "airport",
      },
      { name: "Vidya Shilp Academy", distance: null, type: "school" },
      { name: "Vidya Niketan School", distance: null, type: "school" },
      { name: "Esteem Mall", distance: null, type: "shopping" },
      { name: "Columbia Asia Hospital", distance: null, type: "hospital" },
    ],
    buildUpAreaStatus: "available",
    buildUpAreaRange: "2850 - 4935 sq. ft",
    CarpetAreaStatus: "on_request",
    carpetAreaRange: null,
    sizeRange: "11.5 - 11.5 acres", // total land area from brochure
    priceTotal: null,
    pricePerSqFt: null,
    status: "Under Construction", // inferred as high-end ongoing luxury development at brochure time
  },

  // 3. century novus brochure.pdf (limited structured area data visible)
  {
    id: 3,
    name: "Century Novus",
    description:
      "Residential project by Century Real Estate positioned as a modern, thoughtfully planned community with good connectivity and everyday conveniences.",
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
    keyHighlights: [
      "Project by established Bengaluru developer Century Real Estate",
      "Contemporary design and lifestyle-focused planning",
      "Connectivity to major city nodes and social infrastructure",
      "Emphasis on landscaped open spaces and amenities",
    ],
    ameneties: [
      "Landscaped gardens",
      "Children’s play areas",
      "Indoor games and multipurpose hall",
      "Gym and fitness facilities",
      "Security and surveillance systems",
    ],
    developer: {
      name: "Century Real Estate",
      description:
        "Bengaluru-headquartered developer with a long track record of residential, commercial and township projects.",
    },
    address: "Bengaluru",
    configurations: [], // unit sizing tables not clearly available in text snippet
    locality: [],
    buildUpAreaStatus: "on_request",
    buildUpAreaRange: null,
    CarpetAreaStatus: "on_request",
    carpetAreaRange: null,
    sizeRange: null,
    priceTotal: null,
    pricePerSqFt: null,
    status: "Under Construction",
  },

  // 4. godrej woodscapes brochure.pdf
  {
    id: 4,
    name: "Godrej Woodscapes",
    description:
      "Large township-style development with high-rise residences surrounded by curated green landscapes and Godrej’s sustainability-led design approach.",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
    keyHighlights: [
      "Township-scale green development",
      "High-rise residential towers with modern planning",
      "Emphasis on landscaped open spaces and curated amenities",
      "Brand assurance of Godrej Properties",
    ],
    ameneties: [
      "Clubhouse with indoor recreational spaces",
      "Swimming pool and kids’ pool",
      "Gym and fitness amenities",
      "Multipurpose hall and indoor games",
      "Landscaped gardens and walking tracks",
      "Children’s play areas",
    ],
    developer: {
      name: "Godrej Properties",
      description:
        "Real estate arm of the Godrej Group, known for large-scale residential communities and sustainability-led design.",
    },
    address: "Bengaluru",
    configurations: [],
    locality: [],
    buildUpAreaStatus: "on_request",
    buildUpAreaRange: null,
    CarpetAreaStatus: "on_request",
    carpetAreaRange: null,
    sizeRange: null,
    priceTotal: null,
    pricePerSqFt: null,
    status: "New Launch", // inferred from typical positioning and branding of the brochure
  },

  // 5. goyal & co orchid piccadilly.pdf
  {
    id: 5,
    name: "Orchid Piccadilly",
    description:
      "Mid- to high-rise residential development offering 2 and 3 BHK apartments with a focus on community living and usable amenities.",
    image:
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&q=80",
    keyHighlights: [
      "Gated community with landscaped central spaces",
      "2 & 3 BHK configuration focus",
      "Clubhouse with leisure and fitness amenities",
      "Part of the Orchid-branded series by Goyal & Co and Hariyana Group",
    ],
    ameneties: [
      "Swimming pool",
      "Clubhouse with indoor games and gym",
      "Children’s play area",
      "Landscaped gardens",
      "Multipurpose hall",
      "Jogging/walking track",
      "Security and CCTV",
    ],
    developer: {
      name: "Goyal & Co | Hariyana Group",
      description:
        "Joint venture between Goyal & Co and Hariyana Group, known for Orchid-branded residential communities.",
    },
    address: "Bengaluru",
    configurations: [],
    locality: [],
    buildUpAreaStatus: "on_request",
    buildUpAreaRange: null,
    CarpetAreaStatus: "on_request",
    carpetAreaRange: null,
    sizeRange: null,
    priceTotal: null,
    pricePerSqFt: null,
    status: "Under Construction",
  },

  // 6. Goyal Orchid Greens Brochure.pdf
  {
    id: 6,
    name: "Orchid Greens",
    description:
      "Lifestyle apartment project offering 2 and 3 BHK homes with a strong emphasis on green, open spaces and shared amenities.",
    image:
      "https://images.unsplash.com/photo-1567496898669-ee935f5f647a?w=800&q=80",
    keyHighlights: [
      "Green-focused master plan with open areas",
      "Clubhouse-driven community living",
      "2 and 3 BHK apartments with practical layouts",
    ],
    ameneties: [
      "Swimming pool",
      "Gymnasium",
      "Indoor games and multipurpose hall",
      "Children’s play areas",
      "Landscaped gardens",
      "Jogging track",
    ],
    developer: {
      name: "Goyal & Co | Hariyana Group",
      description:
        "Developers of multiple Orchid-branded apartment projects with emphasis on community amenities.",
    },
    address: "Bengaluru",
    configurations: [],
    locality: [],
    buildUpAreaStatus: "on_request",
    buildUpAreaRange: null,
    CarpetAreaStatus: "on_request",
    carpetAreaRange: null,
    sizeRange: null,
    priceTotal: null,
    pricePerSqFt: null,
    status: "Ready to Move", // inferred, as this project predates many of the newer launches
  },

  // 7. salarpuria-sattva-park-cubix brochure.pdf
  {
    id: 7,
    name: "Sattva Park Cubix",
    description:
      "Large integrated residential community near the Bengaluru airport corridor, with multiple towers, extensive open spaces and everyday conveniences.",
    image:
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800&q=80",
    keyHighlights: [
      "Strategic location in the Devanahalli / airport growth belt",
      "Multiple towers with a mix of apartment sizes",
      "Integrated community with daily conveniences and amenities",
      "Part of Sattva Group’s airport-corridor portfolio",
    ],
    ameneties: [
      "Clubhouse with gym and indoor games",
      "Swimming pool and kid’s pool",
      "Jogging track and open play areas",
      "Multipurpose hall",
      "Landscaped gardens",
      "Children’s play area",
      "Security with CCTV",
    ],
    developer: {
      name: "Sattva Group (Salarpuria Sattva)",
      description:
        "Pan-India developer with decades of experience and a large residential and commercial portfolio.", // :contentReference[oaicite:3]{index=3}
    },
    address: "Devanahalli, Airport Road corridor, Bengaluru",
    configurations: [],
    locality: [],
    buildUpAreaStatus: "on_request",
    buildUpAreaRange: null,
    CarpetAreaStatus: "on_request",
    carpetAreaRange: null,
    sizeRange: null,
    priceTotal: null,
    pricePerSqFt: null,
    status: "Under Construction",
  },

  // 8. sattva bliss brochure.pdf
  {
    id: 8,
    name: "Sattva Bliss",
    description:
      "Compact 1, 2 and 3 BHK apartments near Budigere Cross with efficient layouts and a focus on affordable yet well-amenitised living.",
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80",
    keyHighlights: [
      "1, 2 and 3 BHK homes with efficient SBA and carpet utilisation",
      "Multiple unit variants within each configuration type",
      "Located near Budigere Cross with good access to East Bengaluru corridors",
      "Part of Sattva Group’s affordable/mid segment portfolio",
    ],
    ameneties: [
      "Clubhouse with indoor games",
      "Gym and fitness facilities",
      "Swimming pool and kids’ pool",
      "Children’s play area",
      "Landscaped gardens and seating courts",
      "Multipurpose hall",
    ],
    developer: {
      name: "Sattva Group (Salarpuria Sattva)",
      description:
        "Real estate developer with multiple residential projects across Bengaluru and other Indian cities, known for trust and timely delivery.", //
    },
    address: "Near Budigere Cross, East Bengaluru",
    configurations: [
      {
        name: "1 BHK",
        buildUpAreaRange: "542 - 546 sq. ft",
        carpetAreaRange: "355 sq. ft",
        sizeRange: null,
      },
      {
        name: "2 BHK",
        buildUpAreaRange: "849 - 894 sq. ft",
        carpetAreaRange: "563 - 576 sq. ft",
        sizeRange: null,
      },
      {
        name: "3 BHK",
        buildUpAreaRange: "956 - 960 sq. ft",
        carpetAreaRange: "645 sq. ft",
        sizeRange: null,
      },
    ],
    locality: [],
    buildUpAreaStatus: "available",
    buildUpAreaRange: "542 - 960 sq. ft", // from 1BHK min to 3BHK max SBA
    CarpetAreaStatus: "available",
    carpetAreaRange: "355 - 645 sq. ft",
    sizeRange: null,
    priceTotal: null,
    pricePerSqFt: null,
    status: "Under Construction", // appears as an ongoing/active project in Sattva’s portfolio listing
  },

  // 9. sattva forest ridge brochure.pdf
  {
    id: 9,
    name: "Sattva Forest Ridge",
    description:
      "Nature-oriented residential project that integrates homes with lush green surroundings and forest-inspired landscape elements.",
    image:
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80",
    keyHighlights: [
      "Forest-themed landscape and open spaces",
      "Apartments planned around views and greenery",
      "Emphasis on calm, nature-led lifestyle",
    ],
    ameneties: [
      "Green walking trails",
      "Children’s play areas",
      "Clubhouse with indoor recreation",
      "Gym",
      "Swimming pool",
      "Themed gardens and seating zones",
    ],
    developer: {
      name: "Sattva Group (Salarpuria Sattva)",
      description:
        "Multi-city developer focusing on residential townships, apartments, and large commercial IT parks.",
    },
    address: "Bengaluru",
    configurations: [],
    locality: [],
    buildUpAreaStatus: "on_request",
    buildUpAreaRange: null,
    CarpetAreaStatus: "on_request",
    carpetAreaRange: null,
    sizeRange: null,
    priceTotal: null,
    pricePerSqFt: null,
    status: "New Launch",
  },

  // 10. sattva green groves.pdf (plotted development)
  {
    id: 10,
    name: "Sattva Green Groves",
    description:
      "Plotted development with multiple site dimensions, focused on villa/plot buyers who want green surroundings and community amenities.",
    image:
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80",
    keyHighlights: [
      "Villa plots in a gated layout",
      "Multiple standard plot sizes such as 20x30, 30x40 and 30x50",
      "Community parks and lifestyle amenities",
      "Located in the growth belt of Bengaluru",
    ],
    ameneties: [
      "Landscaped parks",
      "Children’s play area",
      "Clubhouse (as per layout concept)",
      "Internal roads with street lighting",
      "Security at entry/exit",
    ],
    developer: {
      name: "Sattva Group (Salarpuria Sattva)",
      description:
        "Developer of residential townships, plotted developments and large IT parks across multiple cities.",
    },
    address: "Bengaluru",
    configurations: [
      {
        name: "Plot 20 x 30",
        buildUpAreaRange: null,
        carpetAreaRange: null,
        sizeRange: "600 sq. ft",
      },
      {
        name: "Plot 30 x 40",
        buildUpAreaRange: null,
        carpetAreaRange: null,
        sizeRange: "1200 sq. ft",
      },
      {
        name: "Plot 30 x 50",
        buildUpAreaRange: null,
        carpetAreaRange: null,
        sizeRange: "1500 sq. ft",
      },
      {
        name: "Odd dimension plots",
        buildUpAreaRange: null,
        carpetAreaRange: null,
        sizeRange: null,
      },
    ],
    locality: [],
    buildUpAreaStatus: "not_applicable",
    buildUpAreaRange: null,
    CarpetAreaStatus: "not_applicable",
    carpetAreaRange: null,
    sizeRange: "600 - 1500 sq. ft", // based on typical standard plot sizes visible in layout
    priceTotal: null,
    pricePerSqFt: null,
    status: "Under Construction",
  },

  // 11. sattva lumina brochure.pdf
  {
    id: 11,
    name: "Sattva Lumina",
    description:
      "High-rise residential development with studios, 1, 2 and 3 BHK apartments, offering a wide range of SBA and carpet options across multiple blocks.",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    keyHighlights: [
      "Studios, 1, 2 and 3 BHK units across multiple wings",
      "Detailed unit-wise SBA, carpet and balcony areas",
      "Block-wise typical and refuge floor plans",
      "Located in a major growth corridor of Bengaluru",
    ],
    ameneties: [
      "Clubhouse with indoor games",
      "Gym and fitness centre",
      "Swimming pool",
      "Children’s play area",
      "Jogging track and outdoor fitness",
      "Landscaped gardens",
    ],
    developer: {
      name: "Sattva Group (Salarpuria Sattva)",
      description:
        "Award-winning developer with residential and commercial projects across major Indian cities.",
    },
    address: "Bengaluru",
    configurations: [
      {
        name: "Studio",
        buildUpAreaRange: "424 - 434 sq. ft",
        carpetAreaRange: "269 sq. ft",
        sizeRange: null,
      },
      {
        name: "1 BHK",
        buildUpAreaRange: "683 - 872 sq. ft",
        carpetAreaRange: "424 - 549 sq. ft",
        sizeRange: null,
      },
      {
        name: "2 BHK",
        buildUpAreaRange: "1142 - 1445 sq. ft",
        carpetAreaRange: "741 - 849 sq. ft",
        sizeRange: null,
      },
      {
        name: "3 BHK",
        buildUpAreaRange: "1505 - 1823 sq. ft",
        carpetAreaRange: "948 - 1091 sq. ft",
        sizeRange: null,
      },
    ],
    locality: [],
    buildUpAreaStatus: "available",
    buildUpAreaRange: "424 - 1823 sq. ft", // from smallest studio SBA to largest 3BHK SBA
    CarpetAreaStatus: "available",
    carpetAreaRange: "269 - 1091 sq. ft",
    sizeRange: null,
    priceTotal: null,
    pricePerSqFt: null,
    status: "Under Construction",
  },

  // 12. sattva vasantha skye brochure.pdf (Sattva Vasanta Skye)
  {
    id: 12,
    name: "Sattva Vasanta Skye",
    description:
      "Lifestyle community with an emphasis on wellness, sports and a large clubhouse, set amid themed green and water features.",
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
    keyHighlights: [
      "1-acre clubhouse designed for everyday luxury",
      "Extensive wellness and sports amenities",
      "Multiple themed gardens and nature elements",
      "Positioned as a premium lifestyle community",
    ],
    ameneties: [
      // from explicit lists in brochure :contentReference[oaicite:7]{index=7}
      "Temple",
      "Meditation centre and yoga centre",
      "Party lawn and cultural lawn",
      "Tree grove, forest meadows and lotus pond",
      "Nature trail, theme garden and sensory garden",
      "Pets park and viewing deck",
      "Golf putting hole and cricket pitch",
      "Futsal, kabaddi and pickleball courts",
      "Tennis and multipurpose courts",
      "Outdoor bowling and track games",
      "Outdoor gym and jogging track",
      "Swimming pool",
      "Multipurpose hall",
      "Indoor games, billiards and table tennis",
      "Aerobics and yoga studio",
      "Gym, squash and badminton courts",
    ],
    developer: {
      name: "Sattva Group (Salarpuria Sattva)",
      description:
        "Crisil and ICRA rated developer, present across multiple Indian cities with residential and commercial projects.", // :contentReference[oaicite:8]{index=8}
    },
    address: "Bengaluru",
    configurations: [],
    locality: [],
    buildUpAreaStatus: "on_request",
    buildUpAreaRange: null,
    CarpetAreaStatus: "on_request",
    carpetAreaRange: null,
    sizeRange: null,
    priceTotal: null,
    pricePerSqFt: null,
    status: "New Launch", // RERA reference and brochure language indicate a fresh launch
  },

  // 13. Sattva-Anugraha-Phase-2-Brochure.pdf
  {
    id: 13,
    name: "Sattva Anugraha Phase 2",
    description:
      "Extension phase of the Sattva Anugraha community on Magadi Road, offering 1, 2, 2.5 and 3 BHK apartments with multiple SBA variants.",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
    keyHighlights: [
      "Phase 2 of an established community on Magadi Main Road",
      "Wide range of 1, 2, 2.5 and 3 BHK unit sizes",
      "Multiple towers with typical floor plans",
      "Balanced mix of compact and larger units",
    ],
    ameneties: [
      "Clubhouse with indoor recreation",
      "Gym and fitness zones",
      "Swimming pool",
      "Children’s play areas",
      "Landscaped gardens",
      "Multipurpose hall",
    ],
    developer: {
      name: "Sattva Group (Salarpuria Sattva)",
      description:
        "Developer with several completed and ongoing residential projects in Bengaluru and other cities.", //
    },
    address: "Magadi Main Road, Bengaluru",
    configurations: [
      {
        name: "1 BHK",
        buildUpAreaRange: "498 sq. ft",
        carpetAreaRange: "335 sq. ft",
        sizeRange: null,
      },
      {
        name: "2 BHK",
        buildUpAreaRange: "1015 - 1065 sq. ft",
        carpetAreaRange: "723 - 764 sq. ft",
        sizeRange: null,
      },
      {
        name: "2.5 BHK",
        buildUpAreaRange: "1176 - 1242 sq. ft",
        carpetAreaRange: "845 - 902 sq. ft",
        sizeRange: null,
      },
      {
        name: "3 BHK",
        buildUpAreaRange: "1483 - 1522 sq. ft",
        carpetAreaRange: "1038 - 1055 sq. ft",
        sizeRange: null,
      },
    ],
    locality: [],
    buildUpAreaStatus: "available",
    buildUpAreaRange: "498 - 1522 sq. ft",
    CarpetAreaStatus: "available",
    carpetAreaRange: "335 - 1055 sq. ft",
    sizeRange: null,
    priceTotal: null,
    pricePerSqFt: null,
    status: "Under Construction",
  },

  // 14. Sattva-Songbird-Brochure.pdf
  {
    id: 14,
    name: "Sattva Songbird",
    description:
      "High-rise residential project with studios, 1, 2, 2.5 and 3 BHK apartments, positioned as a new launch with a wide span of unit sizes.",
    image:
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&q=80",
    keyHighlights: [
      "Studios to 3 BHK apartments within a single community",
      "Multiple unit types (A, B, C, D, etc.) with distinct SBA and carpet areas",
      "Tower-wise cluster and typical floor plans",
      "Positioned as a new launch with contemporary planning",
    ],
    ameneties: [
      "Clubhouse with indoor games",
      "Gym and fitness amenities",
      "Swimming pool and kids’ pool",
      "Children’s play area",
      "Landscaped gardens and seating zones",
      "Multipurpose hall",
    ],
    developer: {
      name: "Sattva Group (Salarpuria Sattva)",
      description:
        "Established developer with multiple projects in Bengaluru and other cities.", //
    },
    address: "Bengaluru",
    configurations: [
      {
        name: "Studio",
        buildUpAreaRange: "468 - 480 sq. ft",
        carpetAreaRange: "281 - 285 sq. ft",
        sizeRange: null,
      },
      {
        name: "1 BHK",
        buildUpAreaRange: "753 - 756 sq. ft",
        carpetAreaRange: "471 sq. ft",
        sizeRange: null,
      },
      {
        name: "2 BHK",
        buildUpAreaRange: "1268 - 1280 sq. ft",
        carpetAreaRange: "777 - 795 sq. ft",
        sizeRange: null,
      },
      {
        name: "2.5 BHK",
        buildUpAreaRange: "1389 - 1398 sq. ft",
        carpetAreaRange: "881 - 884 sq. ft",
        sizeRange: null,
      },
      {
        name: "3 BHK",
        buildUpAreaRange: "1733 - 1813 sq. ft",
        carpetAreaRange: "1053 - 1085 sq. ft",
        sizeRange: null,
      },
    ],
    locality: [],
    buildUpAreaStatus: "available",
    buildUpAreaRange: "468 - 1813 sq. ft",
    CarpetAreaStatus: "available",
    carpetAreaRange: "281 - 1085 sq. ft",
    sizeRange: null,
    priceTotal: null,
    pricePerSqFt: null,
    status: "New Launch",
  },
];
