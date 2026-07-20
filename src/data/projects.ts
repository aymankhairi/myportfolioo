import { assetPath } from "@/src/lib/path";

export const projects = [
  {
    slug: "viveecommerce",

    title: "Vive E-Commerce",

    category: "E-Commerce",

    featured: true,

    description:
      "Modern fashion e-commerce platform with responsive shopping experience, product presentation, and optimized user interface.",

    tech: ["Next.js", "React", "JavaScript", "CSS"],

    image: assetPath("/projects/vive.png"),

    gallery: [
      assetPath("/projects/vive/vive.jpg"),
      assetPath("/projects/vive/vive1.jpg"),
      assetPath("/projects/vive/vive2.jpg"),
      assetPath("/projects/vive/vive3.jpg"),
    ],

    demo: "https://aymankhairi.github.io/vive/",

    github: "https://github.com/aymankhairi/vive",
  },

  {
    slug: "newlookbarbershop",

    title: "Barbershop Management System",

    category: "Business System",

    featured: true,

    description:
      "Full-stack appointment management platform with booking workflow, service management, authentication, and database integration.",

    tech: [
      "C#",
      "ASP.NET Core",
      "Entity Framework Core",
      "SQL Server",
      "Bootstrap",
    ],

    image: assetPath("/projects/barber.png"),

    gallery: [
      assetPath("/projects/newlook/new1.jpg"),
      assetPath("/projects/newlook/new2.jpg"),
      assetPath("/projects/newlook/new3.jpg"),
    ],

    demo: "https://aymankhairi.github.io/newlook",
  },

  {
    slug: "arraf",

    title: "Arraf Mobile Application",

    category: "Mobile Application",

    featured: true,

    description:
      "Multi-role mobile application with admin, moderator, and user systems connected with backend services.",

    tech: [
      "Flutter",
      "Dart",
      "PHP",
      "SQL Server",
      "Firebase",
      "Firebase Cloud Messaging",
    ],

    image: assetPath("/projects/arraf.png"),

    gallery: [
      assetPath("/projects/arraf/home.png"),
      assetPath("/projects/arraf/products.png"),
      assetPath("/projects/arraf/mobile.png"),
    ],
  },

  {
    slug: "gimuemaoltd",

    title: "GIM UEMOA LTD",

    category: "Client Website",

    featured: false,

    description:
      "Professional e-commerce website developed for a London-based footwear and clothing company.",

    tech: ["HTML5", "CSS3", "Bootstrap", "JavaScript"],

    image: assetPath("/projects/gim.jpg"),

    demo: "https://gim-uemoa-ltd.uk/",
  },

  {
    slug: "aimsfinanceservice",

    title: "AIMS Finance Services",

    category: "Business Website",

    featured: false,

    description:
      "Business website designed for financial services, showcasing company solutions, services, and professional branding.",

    tech: ["HTML5", "CSS3", "Bootstrap", "JavaScript"],

    image: assetPath("/projects/aims.jpg"),

    demo: "https://aimsfinance.uk/",
  },

  {
    slug: "eoscoinvstltd",

    title: "EOS COINVST LTD",

    category: "IT Services",

    featured: false,

    description:
      "Technology services website focused on cybersecurity, cloud solutions, infrastructure management, and analytics.",

    tech: ["HTML5", "CSS3", "Bootstrap", "JavaScript"],

    image: assetPath("/projects/eos.jpg"),

    demo: "https://eoscoinvst.uk/",
  },

  {
    slug: "reverie",

    title: "Reverie Restaurant",

    category: "Business Website",

    featured: false,

    description:
      "Restaurant website focused on customer experience, menu presentation, and mobile-friendly design.",

    tech: ["Next.js", "React", "Tailwind CSS"],

    image: assetPath("/projects/restaurant.png"),

    demo: "https://aymankhairi.github.io/restaurants/",

    github: "https://github.com/aymankhairi/restaurants",
  },

  {
    slug: "sparkclean",

    title: "Spark Clean",

    category: "Service Platform",

    featured: false,

    description:
      "Modern service website helping customers discover services and request information easily.",

    tech: ["Next.js", "React", "Tailwind CSS"],

    image: assetPath("/projects/cleaning.png"),

    demo: "https://aymankhairi.github.io/sparkclean/",

    github: "https://github.com/aymankhairi/sparkclean",
  },

  {
    slug: "hemstrans",

    title: "HemsTrans LTD",

    category: "Business Website",

    featured: false,

    description:
      "Corporate website created to present security camera and technology services.",

    tech: ["HTML5", "CSS3", "Bootstrap", "JavaScript"],

    image: assetPath("/projects/hemstrans.jpg"),

    demo: "https://aymankhairi.github.io/Hems-Trans/",
  },
];
