export interface Product {
  id: string;
  name: string;
  brand: string;
  category: 'refrigerators' | 'air-conditioners' | 'fans' | 'washing-machines' | 'televisions';
  originalPrice: number;
  discountPrice: number;
  rating: number;
  reviewsCount: number;
  badge?: string;
  inStock: boolean;
  warranty: string;
  specs: string[];
  image: string;
  description: string;
}

export interface Category {
  id: 'refrigerators' | 'air-conditioners' | 'fans' | 'washing-machines' | 'televisions';
  name: string;
  tagline: string;
  iconName: string;
  image: string;
  popularBrands: string[];
  itemCount: number;
}

export interface Review {
  id: string;
  name: string;
  location: string;
  rating: number;
  date: string;
  comment: string;
  verifiedPurchase: string;
}

export const STORE_INFO = {
  name: 'Malik Electronics',
  owner: 'Malik Electronics Store',
  phone: '0312 9340205',
  phoneClean: '03129340205',
  phoneIntl: '+923129340205',
  whatsappNumber: '923129340205',
  address: 'Main Bazar, Near Allied Bank / Main Chowk, Shabqadar, Charsadda, Khyber Pakhtunkhwa, Pakistan',
  landmark: 'Opposite Main Bazar Commercial Market, Shabqadar',
  hours: '9:00 AM - 8:00 PM',
  statusText: 'OPEN - Until 8:00 PM',
  experience: '15+ Years Experience',
  city: 'Shabqadar',
  district: 'Charsadda, KPK',
  email: 'info@malikelectronics.pk',
  googleMapsUrl: 'https://maps.google.com/?q=Shabqadar+Main+Bazar+Charsadda+KPK+Pakistan',
  googleMapsEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d105658.98064560947!2d71.51685387431641!3d34.21550570000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38d9319ee02f92bf%3A0x6b4ef84c78dcf40b!2sShabqadar%2C%20Charsadda%2C%20Khyber%20Pakhtunkhwa!5e0!3m2!1sen!2s!4v1709500000000!5m2!1sen!2s'
};

export const CATEGORIES: Category[] = [
  {
    id: 'refrigerators',
    name: 'Refrigerators',
    tagline: 'Inverter & Deep Freezers',
    iconName: 'Refrigerator',
    image: 'https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?auto=format&fit=crop&w=800&q=80',
    popularBrands: ['Dawlance', 'Haier', 'Waves', 'Pel'],
    itemCount: 24
  },
  {
    id: 'air-conditioners',
    name: 'Air Conditioners',
    tagline: 'T3 Inverter & Low Voltage',
    iconName: 'Snowflake',
    image: 'https://images.unsplash.com/photo-1614633833026-06204558231c?auto=format&fit=crop&w=800&q=80',
    popularBrands: ['Gree', 'Haier', 'Kenwood', 'Orient'],
    itemCount: 18
  },
  {
    id: 'fans',
    name: 'Fans',
    tagline: '100% Pure Copper Wire',
    iconName: 'Fan',
    image: 'https://images.unsplash.com/photo-1618941716939-553df3c6c278?auto=format&fit=crop&w=800&q=80',
    popularBrands: ['Pak Fan', 'Royal Deluxe', 'GFC', 'Wahid'],
    itemCount: 32
  },
  {
    id: 'washing-machines',
    name: 'Washing Machines',
    tagline: 'Automatic & Semi-Automatic',
    iconName: 'WashingMachine',
    image: 'https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?auto=format&fit=crop&w=800&q=80',
    popularBrands: ['Haier', 'Super Asia', 'Dawlance', 'Boss'],
    itemCount: 16
  },
  {
    id: 'televisions',
    name: 'Televisions',
    tagline: '4K UHD Smart Android & QLED',
    iconName: 'Tv',
    image: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=800&q=80',
    popularBrands: ['Samsung', 'TCL', 'EcoStar', 'Hisense'],
    itemCount: 20
  }
];

export const PRODUCTS: Product[] = [
  {
    id: 'dawlance-chrome-refrigerator',
    name: 'Dawlance Chrome Inverter Refrigerator (91996 WB)',
    brand: 'Dawlance',
    category: 'refrigerators',
    originalPrice: 158000,
    discountPrice: 139500,
    rating: 4.9,
    reviewsCount: 38,
    badge: 'BESTSELLER',
    inStock: true,
    warranty: '12 Years Compressor Warranty',
    specs: [
      '18 Cu. Ft Large Capacity',
      'Inverter Technology (Saves up to 55% Electricity)',
      'Works on Low Voltage (135V without Stabilizer)',
      'Faster Cooling with Nature Lock Tech',
      'Toughened Glass Shelves'
    ],
    image: 'https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?auto=format&fit=crop&w=800&q=80',
    description: 'Dawlance Inverter Refrigerator is designed specifically for Pakistani climate and power conditions. Operates smoothly on UPS/Solar and maintains cooling up to 6 days during load shedding.'
  },
  {
    id: 'gree-fairy-inverter-ac',
    name: 'Gree 1.5 Ton Fairy Series T3 Inverter AC (Heat & Cool)',
    brand: 'Gree',
    category: 'air-conditioners',
    originalPrice: 195000,
    discountPrice: 178000,
    rating: 5.0,
    reviewsCount: 47,
    badge: 'SUMMER SPECIAL',
    inStock: true,
    warranty: '10 Years Compressor + 4 Years PCB Kit',
    specs: [
      'T3 Extreme Heat Tropical Compressor (Cooling at 54°C)',
      'Dual Heating & Cooling Capability',
      'Eco-Friendly R32 Refrigerant',
      'Self-Cleaning 4-Step Hygiene Mode',
      'WiFi Smart App Control Enabled'
    ],
    image: 'https://images.unsplash.com/photo-1527016021513-b09758b777bd?auto=format&fit=crop&w=800&q=80',
    description: 'The undisputed king of heavy duty cooling. Gree Fairy Series handles the scorching summer temperatures of Shabqadar and Charsadda with effortless low power consumption.'
  },
  {
    id: 'pak-fan-royal-deluxe-inverter',
    name: 'Pak Fan Royal Deluxe 56" Inverter Ceiling Fan',
    brand: 'Pak Fan',
    category: 'fans',
    originalPrice: 14500,
    discountPrice: 11800,
    rating: 4.9,
    reviewsCount: 64,
    badge: 'ENERGY SAVER',
    inStock: true,
    warranty: '2 Years Official Motor Replacement Warranty',
    specs: [
      '100% Pure Copper Winding Wire',
      'BLDC Super Energy Saver (Consumes only 50W)',
      'Includes Full Function Wireless Remote',
      'Double Ball Bearings for Silent Performance',
      'Aerodynamic Aluminum Blades for High Air Delivery'
    ],
    image: 'https://images.unsplash.com/photo-1618941716939-553df3c6c278?auto=format&fit=crop&w=800&q=80',
    description: 'Authentic Gujrat-made Pak Fan with guaranteed 99.9% electrical grade copper wire. Delivers strong airflow while cutting your electricity bill by more than half.'
  },
  {
    id: 'samsung-55-crystal-4k-tv',
    name: 'Samsung 55" Crystal UHD 4K Smart HDR LED TV',
    brand: 'Samsung',
    category: 'televisions',
    originalPrice: 185000,
    discountPrice: 164000,
    rating: 4.8,
    reviewsCount: 29,
    badge: 'POPULAR',
    inStock: true,
    warranty: '2 Years Panel & Official Service Warranty',
    specs: [
      'Crystal Processor 4K with Upscaling',
      'Dynamic Crystal Color & HDR10+',
      '3-Side Boundless Frameless Sleek Design',
      'Built-in YouTube, Netflix, & Voice Search',
      'Dolby Digital Plus 20W Audio'
    ],
    image: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=800&q=80',
    description: 'Cinematic clarity with vivid colors and ultra-crisp motion. Comes preloaded with streaming apps, wireless mobile screen sharing, and optical audio output.'
  },
  {
    id: 'haier-12kg-auto-washing-machine',
    name: 'Haier 12KG Fully Automatic Top Load Washing Machine',
    brand: 'Haier',
    category: 'washing-machines',
    originalPrice: 115000,
    discountPrice: 99500,
    rating: 4.9,
    reviewsCount: 31,
    badge: 'NEW ARRIVAL',
    inStock: true,
    warranty: '10 Years Motor Warranty',
    specs: [
      'Pillow Drum Design to Protect Delicate Clothes',
      'Near Zero Pressure (NZP) works at low water pressure',
      'Fuzzy Logic Automatic Load & Water Sensing',
      'Child Lock & Tempered Glass Soft Closing Lid',
      'Anti-Bacterial Technology'
    ],
    image: 'https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?auto=format&fit=crop&w=800&q=80',
    description: 'Effortless laundry with one-touch operation. Specially engineered NZP valve enables smooth filling even with very low water pressure common in local areas.'
  },
  {
    id: 'haier-turbo-cool-inverter-ac',
    name: 'Haier 1.5 Ton Thunder Inverter AC (Heat & Cool)',
    brand: 'Haier',
    category: 'air-conditioners',
    originalPrice: 189000,
    discountPrice: 172000,
    rating: 4.8,
    reviewsCount: 26,
    badge: 'HEAVY DUTY',
    inStock: true,
    warranty: '10 Years Compressor + 4 Years PCB',
    specs: [
      'Self Cleaning 99.9% Cold Expansion Tech',
      'Turbo Fast Cooling in just 30 seconds',
      '100% Grooved Copper Piping',
      'Upshift & Low Voltage Start up to 130V',
      'A-PAM Inverter Frequency Control'
    ],
    image: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=800&q=80',
    description: 'Haier Thunder Inverter AC provides heavy-duty cooling even in high ambient temperatures with silent indoor operation and anti-rust gold fin condenser.'
  },
  {
    id: 'super-asia-twin-tub-washer',
    name: 'Super Asia Big-Wash 10KG Twin Tub Washing Machine',
    brand: 'Super Asia',
    category: 'washing-machines',
    originalPrice: 42000,
    discountPrice: 36500,
    rating: 4.9,
    reviewsCount: 52,
    badge: 'VALUE DEAL',
    inStock: true,
    warranty: '2 Years Comprehensive Motor Warranty',
    specs: [
      'Shock & Rust Proof High Grade Plastic Body',
      'Super Strong High-Torque Copper Motor',
      'Fast Air Turbo Drying System',
      'Low Electricity Consumption on Solar/UPS',
      'Buzzer Notification System'
    ],
    image: 'https://images.unsplash.com/photo-1582735689369-4fe89db7114c?auto=format&fit=crop&w=800&q=80',
    description: 'Pakistans most trusted semi-automatic washing machine for heavy blanket and daily family laundry. Virtually indestructible body and powerful washing pulse.'
  },
  {
    id: 'waves-deep-freezer-double-door',
    name: 'Waves 16 Cu.Ft Double Door Cool Bank Deep Freezer',
    brand: 'Waves',
    category: 'refrigerators',
    originalPrice: 112000,
    discountPrice: 98000,
    rating: 4.8,
    reviewsCount: 35,
    badge: 'FREEZER DEAL',
    inStock: true,
    warranty: '10 Years Compressor Warranty',
    specs: [
      'Cool Bank Technology (Holds Freeze for 72 Hours)',
      'Dual Compartment (Cooling & Freezing)',
      'Thick Thermal Insulation Layer',
      'Copper Evaporator Coil',
      'Low Voltage Startup'
    ],
    image: 'https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?auto=format&fit=crop&w=800&q=80',
    description: 'Ideal for meat storage, milk shops, and family food preservation in Shabqadar with extended cooling retention during power interruptions.'
  }
];

export const REVIEWS: Review[] = [
  {
    id: 'rev-1',
    name: 'Haji Gulzar Khan',
    location: 'Main Bazar, Shabqadar',
    rating: 5,
    date: '3 days ago',
    comment: 'Alhamdulillah, bought Dawlance Inverter refrigerator from Malik Electronics. They provided genuine company warranty card with stamp, gave me the best cash discount in the entire bazaar, and delivered it right to my home in Shabqadar safely.',
    verifiedPurchase: 'Dawlance Inverter Refrigerator'
  },
  {
    id: 'rev-2',
    name: 'Engineer Farhan Ullah',
    location: 'Matta Mughalkhel, Shabqadar',
    rating: 5,
    date: '1 week ago',
    comment: 'Got 2 Gree 1.5 Ton ACs installed before summer. Original copper pipe, sealed box units, and Malik sahab himself guided me on low-voltage compatibility. Cooling is exceptionally fast. Highly recommend this store for authentic products.',
    verifiedPurchase: 'Gree Fairy T3 Inverter AC'
  },
  {
    id: 'rev-3',
    name: 'Muhammad Tariq Jan',
    location: 'Charsadda Road, Shabqadar',
    rating: 5,
    date: '2 weeks ago',
    comment: 'Purchased 6 Pak Fan ceiling fans for our new house. 100% genuine copper guaranteed, silent operation and remote control is very convenient. Malik Electronics has been our family store for 12 years.',
    verifiedPurchase: 'Pak Fan Inverter Ceiling Fans'
  },
  {
    id: 'rev-4',
    name: 'Sardar Zahir Shah',
    location: 'Battagram Bazar, Shabqadar',
    rating: 5,
    date: '3 weeks ago',
    comment: 'Best electronics rates compared to Peshawar and Charsadda markets! No need to travel to Peshawar when Malik Electronics provides authorized company rates and after-sales service right here in Shabqadar.',
    verifiedPurchase: 'Haier Automatic Washing Machine'
  }
];

export const TRUST_POINTS = [
  {
    icon: 'ShieldCheck',
    title: '100% Authentic Brand Warranty',
    description: 'Direct official authorized dealer for Dawlance, Haier, Gree, Pak Fan, and Samsung. Every product includes official warranty card & serial verification.'
  },
  {
    icon: 'Percent',
    title: 'Best Price Guarantee in Shabqadar',
    description: 'We match or beat local retail prices. Special discounts for wedding packages, government employees, and bulk home setups.'
  },
  {
    icon: 'Truck',
    title: 'Fast Doorstep Delivery',
    description: 'Quick and safe doorstep delivery across Shabqadar Bazar, Matta, Tangi, Charsadda, and surrounding villages with payment on delivery.'
  },
  {
    icon: 'Wrench',
    title: 'Expert After-Sales Support',
    description: 'Need installation, stabilizer advice, or warranty claim assistance? Malik Electronics assists you every step of the way.'
  }
];

export const BRANDS = [
  { name: 'Dawlance', slogan: 'Reliable for Life' },
  { name: 'Haier', slogan: 'Inspired Living' },
  { name: 'Gree', slogan: 'Global AC Leader' },
  { name: 'Pak Fan', slogan: 'Guaranteed Pure Copper' },
  { name: 'Royal Deluxe', slogan: 'Premium Fans' },
  { name: 'Samsung', slogan: 'Smart 4K Entertainment' },
  { name: 'TCL', slogan: 'The Creative Life' },
  { name: 'Super Asia', slogan: 'Quality Washing Machines' },
  { name: 'Waves', slogan: 'Cool Bank Freezers' },
  { name: 'Orient', slogan: 'Innovation for Living' },
  { name: 'Kenwood', slogan: 'Eco Inverter Tech' },
  { name: 'PEL', slogan: 'Change Your Life' }
];
