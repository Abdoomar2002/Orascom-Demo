// Site Configuration - Single Responsibility: Manage site-wide constants
export const siteConfig = {
  name: "Orascom Construction",
  description: "A leading global engineering and construction contractor primarily focused on infrastructure, industrial and high-end commercial projects.",
  url: "https://orascom.com",
  ogImage: "/wp-content/uploads/Orascom_Construction-Logo.wine_.png",
  links: {
    facebook: "https://www.facebook.com/OrascomConstructionLtd/",
    instagram: "https://www.instagram.com/orascomconstruction/",
    linkedin: "https://www.linkedin.com/company/orascom-construction-ltd/",
  },
  navigation: {
    main: [
      {
        name: "About Us",
        href: "/about",
        children: [
          { name: "At a Glance", href: "/about" },
          { name: "History", href: "/about#history" },
          { name: "Strategy", href: "/about#strategy" },
          { name: "Global Footprint", href: "/about#global" },
          { name: "Brands", href: "/about#brands" },
          { name: "Leadership", href: "/about#leadership" }
        ]
      },
      {
        name: "Services",
        href: "/services",
        children: [
          { name: "Construction", href: "/services/construction" },
          { name: "Concessions & Investments", href: "/services/concessions-investments" },
          { name: "O&M and Facilities Management", href: "/services/OM-and-Facilities-Management" },
          { name: "Building Materials", href: "/services/building-materials" },
          { name: "Equipment Services", href: "/services/Equipment-Services" }
        ]
      },
      { name: "Projects", href: "/projects" },
      { name: "Investors", href: "/investors-updates" },
      { name: "Sustainability", href: "/sustainability" },
      { name: "NewsRoom", href: "/updates" },
      { name: "Careers", href: "https://careers.orascom.com" }
    ]
  },
  hero: {
    title: "Our story goes beyond construction",
    slides: [
      {
        image: "/wp-content/uploads/DJI_0104-0-e1687423876762-1366x768.jpg",
        caption: "Decades of experience have laid out the path for a local family-owned business to become..."
      },
      {
        image: "/wp-content/uploads/Plant-1-Bahr-2.png",
        caption: "A leading global engineering and construction group..."
      },
      {
        image: "/wp-content/uploads/Clarkson-Aerial-Jan2023-5-1366x768.png",
        caption: "Transforming landscapes and empowering the communities to operate in."
      }
    ]
  },
  about: {
    title: "ABOUT US",
    subtitle: "Leading Global Engineering & Construction",
    description: "Orascom Construction PLC is a leading global engineering and construction contractor primarily focused on infrastructure, industrial and high-end commercial projects in the Middle East, North Africa, the United States, and the Pacific Rim for public and private clients.",
    images: [
      "/wp-content/uploads/EG-FNC-00015-310x540.jpg",
      "/wp-content/uploads/DJI_0594-0-310x540.jpg",
      "/wp-content/uploads/EG-PST-00297-1-310x540.jpg",
      "/wp-content/uploads/US-NTG-00282-310x540.jpg"
    ]
  },
  news: {
    title: "LATEST NEWS",
    subtitle: "Stay Updated",
    articles: [
      {
        title: "Orascom Construction and Técnicas Reunidas to Build the 3 GW Qurayyah IPP Power Plant Expansion in Saudi Arabia",
        date: "24 March, 2025",
        image: "/wp-content/uploads/OC-TR-to-Build-Qurayah-IPP-310x400.jpg",
        href: "/updates/orascom-construction-and-tecnicas-reunidas-to-build-the-3-gw-qurayyah-ipp-power-plant-expansion-in-saudi-arabia"
      },
      {
        title: "Orascom Construction to Build the New American University in Cairo Campus Expansion",
        date: "24 February, 2025",
        image: "/wp-content/uploads/OC-to-Build-the-New-AUC-Campus-Expansion-310x400.png",
        href: "/updates/orascom-construction-to-build-the-new-american-university-in-cairo-campus-expansion"
      },
      {
        title: "Orascom Construction Consortium Begins Commercial Operations and Achieves New Financial Milestones on 650 MW Wind Farm in Egypt",
        date: "09 January, 2025",
        image: "/wp-content/uploads/Ras-Ghareeb-Wind-Farm-3-310x400.jpeg",
        href: "/updates/orascom-construction-consortium-begins-commercial-operations-and-achieves-new-financial-milestones-on-650-mw-wind-farm-in-egypt"
      },
      {
        title: "Board Resolution – Dividend January 2025",
        date: "31 December, 2024",
        image: "/wp-content/uploads/GEM-Walkway-Presentation_Page_1-310x400.jpg",
        href: "/updates/board-resolution-dividend-january-2025"
      },
      {
        title: "Orascom Construction Contributes to the Single Largest Gift in AUC's History",
        date: "03 December, 2024",
        image: "/wp-content/uploads/auc-post2-1-e1733220620870-310x400.jpg",
        href: "/updates/orascom-construction-contributes-to-the-single-largest-gift-in-aucs-history"
      }
    ]
  },
  stocks: {
    egp: "315.00",
    usd: "5.99"
  },
  contact: {
    address: {
      street: "2005A Nile City Towers",
      suite: "South Tower, Corniche El Nil",
      city: "Ramlet Beaulac, Cairo 11221, Egypt"
    },
    phone: "+20 2 2461 8000",
    email: "info@orascom.com"
  }
};

export const SERVICES = [
  {
    id: 'web-development',
    title: 'Web Development',
    description: 'Custom websites and web applications built with modern technologies.',
    features: [
      'Custom Website Development',
      'E-commerce Solutions',
      'Web Application Development',
      'API Development & Integration',
      'Website Maintenance & Support'
    ]
  },
  {
    id: 'digital-marketing',
    title: 'Digital Marketing',
    description: 'Comprehensive digital marketing strategies to grow your business.',
    features: [
      'Search Engine Optimization (SEO)',
      'Pay-Per-Click Advertising (PPC)',
      'Social Media Marketing',
      'Content Marketing',
      'Email Marketing Campaigns'
    ]
  },
  {
    id: 'ui-ux-design',
    title: 'UI/UX Design',
    description: 'We design intuitive and engaging user experiences that delight users and drive business results.',
    features: [
      'User Interface Design',
      'User Experience Design',
      'Wireframing & Prototyping',
      'User Research & Testing',
      'Design System Creation'
    ]
  },
  {
    id: 'consulting',
    title: 'Consulting',
    description: 'Our expert consultants provide strategic guidance to help you make informed decisions.',
    features: [
      'Digital Strategy Consulting',
      'Technology Assessment',
      'Process Optimization',
      'Team Training & Workshops',
      'Project Management'
    ]
  }
]

export const COMPANY_VALUES = [
  {
    id: 'innovation',
    title: 'Innovation',
    description: 'We constantly explore new technologies and approaches to deliver the best solutions.'
  },
  {
    id: 'excellence',
    title: 'Excellence',
    description: 'We maintain the highest standards in everything we do, from code quality to client service.'
  },
  {
    id: 'integrity',
    title: 'Integrity',
    description: 'We build trust through honest communication and reliable delivery.'
  },
  {
    id: 'collaboration',
    title: 'Collaboration',
    description: 'We work closely with our clients to ensure their vision becomes reality.'
  }
] 