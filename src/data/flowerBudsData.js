import heroImg from '../assets/images/hero_wedding_floral_1792066021720.jpg';
import poruwaImg from '../assets/images/floral_poruwa_stage_1792066024046.jpg';
import bouquetImg from '../assets/images/bridal_bouquet_artistry_1792066023829.jpg';
import receptionImg from '../assets/images/table_centerpiece_gala_1792066023102.jpg';
import clientEvent01 from '../assets/images/client-gallery/client-event-01.jpg';
import clientEvent02 from '../assets/images/client-gallery/client-event-02.jpg';
import clientEvent03 from '../assets/images/client-gallery/client-event-03.jpg';
import clientEvent04 from '../assets/images/client-gallery/client-event-04.jpg';
import clientEvent05 from '../assets/images/client-gallery/client-event-05.jpg';
import clientEvent06 from '../assets/images/client-gallery/client-event-06.jpg';
import clientEvent07 from '../assets/images/client-gallery/client-event-07.jpg';
import clientEvent08 from '../assets/images/client-gallery/client-event-08.jpg';
import clientEvent09 from '../assets/images/client-gallery/client-event-09.jpg';
import clientEvent10 from '../assets/images/client-gallery/client-event-10.jpg';
import clientEvent11 from '../assets/images/client-gallery/client-event-11.jpg';

export { heroImg, poruwaImg, bouquetImg, receptionImg };

export const PORTFOLIO_ITEMS = [
  {
    id: 'poruwa-shangrila',
    title: 'The Golden Lotus Poruwa Sanctuary',
    category: 'poruwa',
    categoryLabel: 'Poruwa & Stages',
    venue: 'Shangri-La Hotel Grand Ballroom',
    location: 'Colombo, Sri Lanka',
    palette: ['#F5EBE1', '#E8D3B9', '#B58D54', '#5B6B56'],
    image: poruwaImg,
    description: 'A modern architectural interpretation of the traditional Sri Lankan Poruwa. Features tiered gilded lattices draped with cascading phalaenopsis orchids, blush roses, white lotus buds, and fragrant jasmine garlands illuminated by concealed warm ambient LEDs.',
    floralRecipe: [
      'Fresh White Phalaenopsis Orchids',
      'David Austin Keira Garden Roses',
      'Natural Local White Lotus Blossoms',
      'Fresh Jasmine (Pichcha) Strands',
      'Italian Ruscus & Silver Dollar Eucalyptus'
    ],
    guestCount: 450,
    highlight: 'Over 3,200 fresh hand-woven stems with synchronized evening warm glow'
  },
  {
    id: 'bouquets-artisan',
    title: 'Heirloom Peach & Ivory Bridal Bouquet',
    category: 'bouquets',
    categoryLabel: 'Bridal Bouquets',
    venue: 'The Kingsbury Ocean Terrace',
    location: 'Colombo, Sri Lanka',
    palette: ['#F7EDE2', '#F5CAC3', '#F28482', '#84A59D'],
    image: bouquetImg,
    description: 'An airy, organic hand-tied garden bridal bouquet composed of Juliet garden roses, delicate ranunculus, and sweet peas, wrapped in pure trailing ivory habotai silk ribbon with custom mother-of-pearl boutonnières for the bridal retinue.',
    floralRecipe: [
      'David Austin Juliet Garden Roses',
      'Blush & Peach Ranunculus',
      'Scented White Sweet Peas',
      'White Jasmine Vine Tendrils',
      'Hand-Dyed 100% Habotai Silk Ribbon'
    ],
    highlight: 'Crafted on wedding morning within 4 hours of ceremony for peak bloom'
  },
  {
    id: 'ceremony-cinnamon-lakeside',
    title: 'The Whispering Garden Cathedral Arch',
    category: 'arches',
    categoryLabel: 'Ceremonial Arches',
    venue: 'Cinnamon Bentota Beach Lawn',
    location: 'Bentota, Sri Lanka',
    palette: ['#FAF0CA', '#0D3B66', '#F4D35E', '#EE964C'],
    image: heroImg,
    description: 'A 14-foot grand rectangular floral arch suspended under coastal palm groves. Features a meadow-style aisle carpeted in rose petals leading to an imposing floral gateway with trailing wisteria and English garden roses.',
    floralRecipe: [
      'White Delphinium & Hydrangeas',
      'Avalanche & O\'Hara Garden Roses',
      'Silver Dollar & Seeded Eucalyptus',
      'Cascading Ivy & White Lisianthus'
    ],
    guestCount: 300,
    highlight: 'Engineered wind-resistant structural frame with ocean breeze endurance'
  },
  {
    id: 'reception-mount-lavinia',
    title: 'Midnight Velvet & Candelabra Banquet',
    category: 'reception',
    categoryLabel: 'Reception Tables',
    venue: 'Mount Lavinia Hotel Colonial Hall',
    location: 'Mount Lavinia, Sri Lanka',
    palette: ['#0B1B3D', '#C8A97E', '#FFF5EA', '#31493C'],
    image: receptionImg,
    description: 'An imperial banquet setup featuring 60-foot royal blue velvet draped tables adorned with towering elevated bronze floral stands, cascading white hydrangeas, crystal candelabras, and low intimacy glass compotes.',
    floralRecipe: [
      'White Dutch Hydrangeas',
      'Playa Blanca & Peach Shimmer Roses',
      'Hanging Green Amaranthus',
      'Flickering 12-inch Ivory Taper Candles',
      'Flocked Dusty Miller & Olive Branches'
    ],
    guestCount: 380,
    highlight: '32 custom elevated bronze candelabras maintaining open eye-level guest sightlines'
  },
  {
    id: 'client-event-01',
    title: 'A Softly Framed Ceremony Stage',
    category: 'events',
    categoryLabel: 'Client Event Gallery',
    location: 'Sri Lanka',
    image: clientEvent01,
    imageAspect: '3 / 4',
    palette: ['#F7F2E9', '#E8D8C8', '#87917A', '#44382F'],
    description: 'An elegant floral stage framed with delicate hanging details and a softly styled aisle.',
    floralRecipe: ['Hanging floral framing', 'Soft white and greenery palette', 'Flower-lined ceremony aisle'],
    highlight: 'A Flower Buds celebration, captured in bloom.'
  },
  {
    id: 'client-event-02',
    title: 'Ivory Blooms & Warm Lights',
    category: 'events',
    categoryLabel: 'Client Event Gallery',
    location: 'Sri Lanka',
    image: clientEvent02,
    imageAspect: '3 / 4',
    palette: ['#F7F4EC', '#E7D8C7', '#D7C07B', '#56604D'],
    description: 'A luminous ceremony backdrop with layered ivory florals, soft draping, and a flower-lined walkway.',
    floralRecipe: ['Layered ivory flower backdrop', 'Warm ambient lighting', 'Coordinated floral aisle styling'],
    highlight: 'A Flower Buds celebration, captured in bloom.'
  },
  {
    id: 'client-event-03',
    title: 'A Garden Ring Ceremony',
    category: 'events',
    categoryLabel: 'Client Event Gallery',
    location: 'Sri Lanka',
    image: clientEvent03,
    imageAspect: '4 / 3',
    palette: ['#F4EEE4', '#C9D1C2', '#D2B66F', '#33332E'],
    description: 'A striking circular floral arch creates a garden-inspired focal point for an evening celebration.',
    floralRecipe: ['Circular garden-style arch', 'White floral clusters', 'Open-air ceremony stage'],
    highlight: 'A Flower Buds celebration, captured in bloom.'
  },
  {
    id: 'client-event-04',
    title: 'A Modern Green & Ivory Stage',
    category: 'events',
    categoryLabel: 'Client Event Gallery',
    location: 'Sri Lanka',
    image: clientEvent04,
    imageAspect: '2.08 / 1',
    palette: ['#F5F1E8', '#E9DCCB', '#718064', '#394532'],
    description: 'Sculptural white arches and abundant greenery bring a fresh, contemporary feel to this stage.',
    floralRecipe: ['Sculptural white arch backdrop', 'Fresh greenery details', 'Wide, symmetrical stage design'],
    highlight: 'A Flower Buds celebration, captured in bloom.'
  },
  {
    id: 'client-event-05',
    title: 'A Sacred Setting in White & Green',
    category: 'events',
    categoryLabel: 'Client Event Gallery',
    location: 'Sri Lanka',
    image: clientEvent05,
    imageAspect: '3 / 4',
    palette: ['#F7F4EB', '#D9D2C3', '#6B7D57', '#C9A850'],
    description: 'A serene ceremonial setting accented with fresh blooms and natural greenery.',
    floralRecipe: ['Serene floral altar styling', 'Fresh blooms with natural greenery', 'Balanced arrangements framing the ceremony'],
    highlight: 'A Flower Buds celebration, captured in bloom.'
  },
  {
    id: 'client-event-06',
    title: 'A Colourful Floral Altar',
    category: 'events',
    categoryLabel: 'Client Event Gallery',
    location: 'Sri Lanka',
    image: clientEvent06,
    imageAspect: '3 / 4',
    palette: ['#F7F1E5', '#F1D64B', '#A95174', '#617A4F'],
    description: 'Vibrant seasonal flowers create a joyful focal point, layered from the canopy down to the altar.',
    floralRecipe: ['Colourful seasonal flower canopy', 'Layered floral altar display', 'Greenery woven through the arrangement'],
    highlight: 'A Flower Buds celebration, captured in bloom.'
  },
  {
    id: 'client-event-07',
    title: 'A Classic White & Gold Backdrop',
    category: 'events',
    categoryLabel: 'Client Event Gallery',
    location: 'Sri Lanka',
    image: clientEvent07,
    imageAspect: '4 / 3',
    palette: ['#F7F1E9', '#E4D5C4', '#C5A66D', '#68715D'],
    description: 'A timeless stage design with a softly draped backdrop, balanced floral clusters, and an ivory aisle.',
    floralRecipe: ['Classic white draped backdrop', 'Balanced stage floral clusters', 'Floral aisle accents'],
    highlight: 'A Flower Buds celebration, captured in bloom.'
  },
  {
    id: 'client-event-08',
    title: 'A Celebration of Colour',
    category: 'events',
    categoryLabel: 'Client Event Gallery',
    location: 'Sri Lanka',
    image: clientEvent08,
    imageAspect: '3 / 4',
    palette: ['#F8F4E9', '#E8D5AF', '#E8A63D', '#778052'],
    description: 'A bright, welcoming floral arrangement with a fresh mix of seasonal colour and greenery.',
    floralRecipe: ['Bright seasonal colour palette', 'Layered flowers around the altar', 'Fresh greenery accents'],
    highlight: 'A Flower Buds celebration, captured in bloom.'
  },
  {
    id: 'client-event-09',
    title: 'A Floral Altar Beneath the Canopy',
    category: 'events',
    categoryLabel: 'Client Event Gallery',
    location: 'Sri Lanka',
    image: clientEvent09,
    imageAspect: '3 / 4',
    palette: ['#F8F3E9', '#E8DCCF', '#B24D82', '#73854E'],
    description: 'A richly layered altar framed by a canopy of colourful flowers and soft hanging lights.',
    floralRecipe: ['Overhead floral canopy', 'Colourful seasonal flower arrangement', 'Soft, ambient light details'],
    highlight: 'A Flower Buds celebration, captured in bloom.'
  },
  {
    id: 'client-event-10',
    title: 'Double Arch & Evening Florals',
    category: 'events',
    categoryLabel: 'Client Event Gallery',
    location: 'Sri Lanka',
    image: clientEvent10,
    imageAspect: '4 / 3',
    palette: ['#F5F0E9', '#C9B5A5', '#899078', '#443B3C'],
    description: 'A romantic floral backdrop with illuminated arches and a softly glowing evening palette.',
    floralRecipe: ['Illuminated double-arch backdrop', 'Layered floral canopy', 'Romantic evening styling'],
    highlight: 'A Flower Buds celebration, captured in bloom.'
  },
  {
    id: 'client-event-11',
    title: 'Floral Stage, Framed in Light',
    category: 'events',
    categoryLabel: 'Client Event Gallery',
    location: 'Sri Lanka',
    image: clientEvent11,
    imageAspect: '4 / 3',
    palette: ['#F6F1E8', '#E8D9C8', '#9BA184', '#D1B46D'],
    description: 'A light-filled floral stage with a fresh, layered backdrop for a memorable celebration.',
    floralRecipe: ['Floral stage backdrop', 'Balanced seasonal flower clusters', 'Light, fresh colour palette'],
    highlight: 'A Flower Buds celebration, captured in bloom.'
  }
];

export const SERVICES_LIST = [
  {
    number: '01',
    title: 'Poruwa & Mandap Artistry',
    subtitle: 'Cultural Heritage Meets Modern Fine Art',
    description: 'We reimagine traditional Sri Lankan Poruwa ceremonies and mandaps through sculptural botanical arrangements, hand-woven jasmine garlands, and gold lattice accents that honor heritage with modern luxury elegance.'
  },
  {
    number: '02',
    title: 'Bridal Bouquets & Retinue Florals',
    subtitle: 'Artisanal Hand-Tied Masterpieces',
    description: 'Each bridal bouquet is uniquely crafted on the wedding morning using premium garden roses, rare orchids, and cascading silk ribbons tailored to complement your bridal saree or gown silhouette.'
  },
  {
    number: '03',
    title: 'Banquet & Candelabra Centerpieces',
    subtitle: 'Elevated Sightlines & Ambient Radiance',
    description: 'Engineered on slender bronze and crystal candelabras to keep table conversation flowing while filling the ballroom with dramatic height, lush textures, and gentle candlelit warmth.'
  },
  {
    number: '04',
    title: 'Aisle Runways & Ceremonial Arches',
    subtitle: 'Breathtaking Walk-in Experiences',
    description: 'From verdant meadow clusters along the aisle to monumental freestanding ceremony arches framing your exchange of vows, we create iconic moments captured forever in your wedding photography.'
  },
  {
    number: '05',
    title: 'Ceiling Canopies & Hanging Installations',
    subtitle: 'Immersive Overhead Botanical Architecture',
    description: 'Transform grand hotel ballrooms and outdoor marquees with suspended greenery clouds, trailing wisteria, and fairy-lit hanging floral chandeliers floating above the dance floor.'
  },
  {
    number: '06',
    title: 'Bridal Car & Venue Entrance Statements',
    subtitle: 'First Impressions & Unforgettable Exits',
    description: 'Sleek, scratch-safe floral garlands for luxury bridal transport, combined with monumental foyer entryway installations welcoming your guests with intoxicating botanical fragrance.'
  }
];

export const FAQS = [
  {
    question: 'How far in advance should we book Flower Buds for our wedding?',
    answer: 'We accept bookings up to 14 months in advance. To guarantee your event date—particularly during popular auspicious wedding seasons (May–July and November–January)—we recommend booking 6 to 9 months ahead. We commit to a limited number of weddings per weekend to maintain our artisan quality.'
  },
  {
    question: 'How do you ensure flowers remain fresh in Sri Lanka’s tropical climate?',
    answer: 'We source directly from climate-controlled Nuwara Eliya highland growers and cold-chain imported Dutch/Ecuadorian farms. All stems undergo deep cellular conditioning in our refrigerated studio and are hydrated with floral nutrients right up to placement on the wedding day.'
  },
  {
    question: 'Can you customize the floral design to match our wedding theme and saree color?',
    answer: 'Yes! Every commission is bespoke. During our consultation, we analyze your attire swatches, stationery, venue architecture, and lighting to craft a custom floral color harmony board with exact stem varieties.'
  },
  {
    question: 'Do you provide on-site mockups before the wedding?',
    answer: 'Yes. For our Grand Poruwa and Royal Bespoke commissions, we host an exclusive centerpiece and bouquet preview session at our Colombo studio so you can see, touch, and smell the live arrangement before the wedding day.'
  },
  {
    question: 'What happens to the flowers after the wedding reception ends?',
    answer: 'We prioritize sustainability. Our team can wrap your table centerpieces and focal blooms into handheld bouquets for your family and guests to take home, or we coordinate with local retirement communities and hospice centers for floral donation.'
  }
];
