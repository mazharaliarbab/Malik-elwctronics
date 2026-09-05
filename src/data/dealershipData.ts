export interface Car {
  id: string;
  name: string;
  badge?: string;
  modelYear: number;
  make: string;
  category: 'Hybrid' | 'Sedan' | 'Crossover' | 'MPV' | 'Luxury';
  bodyType: string;
  engine: string;
  engineCc: number;
  mileage: string;
  mileageKm: number;
  transmission: string;
  fuelType: string;
  color: string;
  auctionGrade: string;
  pricePkr: string;
  priceRaw: number; // in PKR for sorting
  image: string;
  gallery?: string[];
  keyFeatures: string[];
  description: string;
  isFeatured?: boolean;
}

export const DEALERSHIP_INFO = {
  name: 'Premium Imports',
  tagline: 'Premium Imported Cars. Trusted Service. Exceptional Quality.',
  heroHeadline: 'Drive Your Dream Car',
  location: {
    village: 'Almas Khalil Car Village',
    area: 'Achini Payan',
    city: 'Peshawar',
    postalCode: '25000',
    country: 'Pakistan',
    fullAddress: 'Almas Khalil Car Village, Achini Payan, Peshawar, 25000, Pakistan',
    landmark: 'Ring Road Achini Payan Junction, Almas Khalil Car Market',
    cityDistrict: 'Peshawar, Khyber Pakhtunkhwa'
  },
  contact: {
    phoneDisplay: '0344 9102668',
    phoneClean: '+923449102668',
    phoneInternational: '+92 344 9102668',
    whatsappNumber: '923449102668',
    whatsappFormatted: '+92 344 9102668'
  },
  timings: {
    days: 'Monday – Saturday',
    hours: '9:00 AM – 8:00 PM',
    sunday: 'Sunday: Open by Prior Appointment',
    statusText: 'Showroom Open Today'
  },
  googleMaps: {
    directionsUrl: 'https://www.google.com/maps/dir/?api=1&destination=Almas+Khalil+Car+Village,+Achini+Payan,+Peshawar,+Pakistan',
    searchUrl: 'https://www.google.com/maps/search/?api=1&query=Almas+Khalil+Car+Village,+Achini+Payan,+Peshawar,+Pakistan',
    embedQuery: 'Almas+Khalil+Car+Village+Peshawar'
  }
};

export const FEATURED_CARS: Car[] = [
  {
    id: 'toyota-prius-2021',
    name: 'Toyota Prius S-Touring Selection',
    badge: 'Popular Hybrid',
    modelYear: 2021,
    make: 'Toyota',
    category: 'Hybrid',
    bodyType: 'Liftback Sedan',
    engine: '1.8L Hybrid Synergy Drive',
    engineCc: 1800,
    mileage: '38,500 km',
    mileageKm: 38500,
    transmission: 'Automatic e-CVT',
    fuelType: 'Hybrid Petrol',
    color: 'Pearl White Crystal',
    auctionGrade: '4.5 Grade A',
    pricePkr: 'PKR 7,850,000',
    priceRaw: 7850000,
    image: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1590362891991-f776e747a588?auto=format&fit=crop&w=1200&q=80'
    ],
    keyFeatures: [
      'Toyota Safety Sense (TSS-P)',
      'Lane Keep Assist & Radar Cruise',
      'Heated Leather Seats',
      'LED Projector Headlamps',
      'EV Mode / 24+ km/L Fuel Average',
      'Original Japanese Multimedia Screen'
    ],
    description: 'High-grade 2021 Toyota Prius in immaculate condition. Unmatched hybrid fuel efficiency ideal for Peshawar city driving and motorway travel. Verifiable auction sheet.',
    isFeatured: true
  },
  {
    id: 'toyota-aqua-2022',
    name: 'Toyota Aqua G-LED Package',
    badge: 'Ultra Fuel Efficient',
    modelYear: 2022,
    make: 'Toyota',
    category: 'Hybrid',
    bodyType: 'Compact Hatchback',
    engine: '1.5L Hybrid Dual VVT-i',
    engineCc: 1500,
    mileage: '24,000 km',
    mileageKm: 24000,
    transmission: 'Automatic Super CVT-i',
    fuelType: 'Hybrid Petrol',
    color: 'Silver Metallic',
    auctionGrade: '4.5 Grade A',
    pricePkr: 'PKR 5,950,000',
    priceRaw: 5950000,
    image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1200&q=80',
    keyFeatures: [
      'Bi-Beam LED Headlights',
      '30+ km/L Urban Fuel Economy',
      'Push Start & Smart Entry',
      'Pre-Crash Safety System',
      'Electronic Climate Control',
      'Compact & Effortless Maneuvering'
    ],
    description: 'Next-generation Toyota Aqua offering best-in-class fuel economy, agile handling, and modern Japanese interior tech. Perfect for daily urban commute in Peshawar.',
    isFeatured: true
  },
  {
    id: 'toyota-corolla-cross-2022',
    name: 'Toyota Corolla Cross Hybrid G',
    badge: 'Luxury Crossover',
    modelYear: 2022,
    make: 'Toyota',
    category: 'Crossover',
    bodyType: 'Compact SUV',
    engine: '1.8L Hybrid Atkinson Cycle',
    engineCc: 1800,
    mileage: '29,000 km',
    mileageKm: 29000,
    transmission: 'Automatic e-CVT',
    fuelType: 'Hybrid Petrol',
    color: 'Attitude Black Mica',
    auctionGrade: '5.0 Grade Spotless',
    pricePkr: 'PKR 9,650,000',
    priceRaw: 9650000,
    image: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=1200&q=80',
    keyFeatures: [
      'Panoramic Roof System',
      'High Ground Clearance (161mm)',
      'Blind Spot Monitor (BSM)',
      '360° Surround View Camera',
      'Dual Zone Digital Climate Control',
      'Spacious Executive Cabin'
    ],
    description: 'High-riding, prestigious Corolla Cross Hybrid combining SUV road command with proven Toyota hybrid reliability. Excellent ride comfort for family trips across KPK.',
    isFeatured: true
  },
  {
    id: 'honda-vezel-2021',
    name: 'Honda Vezel e:HEV Z Package',
    badge: 'Premium Crossover',
    modelYear: 2021,
    make: 'Honda',
    category: 'Crossover',
    bodyType: 'Sport Crossover SUV',
    engine: '1.5L i-VTEC Dual Motor e:HEV',
    engineCc: 1500,
    mileage: '33,000 km',
    mileageKm: 33000,
    transmission: 'E-CVT Automatic',
    fuelType: 'Hybrid Petrol',
    color: 'Premium Sunlit White Pearl',
    auctionGrade: '4.5 Grade A',
    pricePkr: 'PKR 8,950,000',
    priceRaw: 8950000,
    image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1200&q=80',
    keyFeatures: [
      'Honda SENSING Suite',
      'Hands-Free Power Tailgate with Walk Away Close',
      'Bespoke Two-Tone Interior',
      'Panoramic Glass Roof with Sunshade',
      'Sport / Normal / Econ Drive Modes',
      'Full LED Adaptive Lighting'
    ],
    description: 'Striking modern aesthetic with Honda e:HEV dual-motor electric hybrid power. Smooth acceleration, quiet cabin acoustics, and high-end executive road presence.',
    isFeatured: true
  },
  {
    id: 'toyota-sienta-2022',
    name: 'Toyota Sienta Hybrid G 7-Seater',
    badge: 'Family 7-Seater',
    modelYear: 2022,
    make: 'Toyota',
    category: 'MPV',
    bodyType: 'Compact 7-Seater MPV',
    engine: '1.5L Dynamic Force Hybrid',
    engineCc: 1500,
    mileage: '19,500 km',
    mileageKm: 19500,
    transmission: 'Automatic Super CVT-i',
    fuelType: 'Hybrid Petrol',
    color: 'Urban Khaki / Black Top',
    auctionGrade: '4.5 Grade A',
    pricePkr: 'PKR 6,850,000',
    priceRaw: 6850000,
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80',
    keyFeatures: [
      'Dual Power Sliding Doors',
      '7 Spacious Flexible Passenger Seats',
      'Low Flat Floor for Easy Access',
      'Toyota Safety Sense with Pedestrian Detection',
      'Ultra Efficient 28+ km/L',
      'Rear Air Circulation System'
    ],
    description: 'The ultimate versatile family vehicle. Dual automated sliding doors, fold-flat rear seats, and comfortable seating for up to 7 passengers with hybrid cost savings.',
    isFeatured: true
  },
  {
    id: 'toyota-alphard-2020',
    name: 'Toyota Alphard SC Executive Lounge',
    badge: 'First-Class Luxury',
    modelYear: 2020,
    make: 'Toyota',
    category: 'Luxury',
    bodyType: 'VIP Luxury Van',
    engine: '2.5L Hybrid E-Four AWD',
    engineCc: 2500,
    mileage: '42,000 km',
    mileageKm: 42000,
    transmission: 'Sequential Shift CVT',
    fuelType: 'Hybrid Petrol',
    color: 'Burning Black Crystal Shine',
    auctionGrade: '5.0 Grade Spotless',
    pricePkr: 'PKR 24,500,000',
    priceRaw: 24500000,
    image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80',
    keyFeatures: [
      'First-Class Ottoman Reclining VIP Captain Seats',
      'Twin Moonroof & 16-Color Ambient Ceiling Lighting',
      'JBL Premium 17-Speaker Surround Sound System',
      'Electric Curtains & Rear Entertainment Screen',
      'Soft-Close Doors & Electronic Tailgate',
      'E-Four All-Wheel Drive Confidence'
    ],
    description: 'The pinnacle of luxury ground transport in Pakistan. Features individual airline-grade captain chairs, serene soundproofing, and unmatched prestige.',
    isFeatured: true
  }
];

export const WHY_CHOOSE_US = [
  {
    id: 'quality',
    title: 'Quality Imported Cars',
    subtitle: 'Handpicked Grade 4.0+ Units',
    description: 'Every vehicle in our showroom is selected for pristine mechanical health, verified low mileage, and spotless interior and exterior condition.',
    iconName: 'ShieldCheck',
    color: '#FF8A00'
  },
  {
    id: 'transparency',
    title: 'Transparent Dealings',
    subtitle: 'Verifiable Auction Sheets',
    description: 'Zero odometer tampering and 100% honest paperwork. We provide transparent documentation and authentic Japanese auction records with every car.',
    iconName: 'FileCheck2',
    color: '#7B61C9'
  },
  {
    id: 'service',
    title: 'Trusted Customer Service',
    subtitle: 'Dedicated Local Team',
    description: 'Our knowledgeable dealership staff assists you through vehicle selection, test inspections, ownership transfer guidance, and long-term care.',
    iconName: 'Users',
    color: '#3B82F6'
  },
  {
    id: 'selection',
    title: 'Wide Selection',
    subtitle: 'Hybrids, Sedans, SUVs & MPVs',
    description: 'From fuel-saving Japanese hybrids to spacious family multi-seaters and executive luxury cars, we stock models tailored for Pakistani driving.',
    iconName: 'Sparkles',
    color: '#10B981'
  }
];

export const BUYING_PROCESS_STEPS = [
  {
    number: '01',
    title: 'Choose Your Car',
    description: 'Explore our curated inventory online or visit our showroom at Almas Khalil Car Village in Peshawar to find the car that fits your lifestyle.'
  },
  {
    number: '02',
    title: 'Inspect & Discuss',
    description: 'Examine the vehicle in person, review verifiable Japanese auction sheets, check engine acoustics, and take a personalized test drive.'
  },
  {
    number: '03',
    title: 'Complete the Deal',
    description: 'Enjoy straightforward, transparent pricing with clear documentation, secure payment processing, and assistance with vehicle registration.'
  },
  {
    number: '04',
    title: 'Drive Away',
    description: 'Drive away in your dream imported car with complete confidence, pristine detailing, and our trusted ongoing customer support.'
  }
];

export const DEMO_TESTIMONIALS = [
  {
    id: 't1',
    author: 'Engr. Tariq Khattak',
    location: 'Hayatabad, Peshawar',
    carPurchased: 'Toyota Prius Hybrid (Demo)',
    rating: 5,
    quote: 'The team at Premium Imports provided the original Japanese auction sheet before I even visited. The car was in spotless condition just as described. Highly recommended dealership in Peshawar!'
  },
  {
    id: 't2',
    author: 'Dr. Asadullah Khan',
    location: 'University Town, Peshawar',
    carPurchased: 'Honda Vezel e:HEV (Demo)',
    rating: 5,
    quote: 'Found their location easily at Almas Khalil Car Village. Transparent pricing, courteous staff, and no hidden surprises. Truly a premium buying experience.'
  },
  {
    id: 't3',
    author: 'Malik Zeeshan',
    location: 'Charsadda Road, Peshawar',
    carPurchased: 'Toyota Aqua G (Demo)',
    rating: 5,
    quote: 'Very honest dealing regarding mileage and paint condition. They answered all my questions patiently on WhatsApp and finalized the deal smoothly.'
  }
];

export function getWhatsAppInquiryUrl(carName?: string, price?: string): string {
  const base = `https://wa.me/${DEALERSHIP_INFO.contact.whatsappNumber}`;
  if (carName) {
    const text = `Assalam o Alaikum Premium Imports, I am interested in inquiring about the *${carName}* ${price ? `(listed around ${price})` : ''} available at your Almas Khalil Car Village showroom in Peshawar. Please share further details.`;
    return `${base}?text=${encodeURIComponent(text)}`;
  }
  const generalText = `Assalam o Alaikum Premium Imports, I would like to inquire about available imported cars at your showroom in Almas Khalil Car Village, Peshawar.`;
  return `${base}?text=${encodeURIComponent(generalText)}`;
}
