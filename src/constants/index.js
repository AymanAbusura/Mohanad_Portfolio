import {
    mobile,
    backend,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    nextjs,
    git,
    figma,
    docker,
    yan,
    dada,
    addiqa,
    // coursera,
    // udemy,
    meu,
    diagram,
    ecommerce,
    fitness,
    aora,
    leadhunter,
    threejs,
  } from "../assets";

  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
    // {
    //   id: "AR",
    //   title: "AR",
    // },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Developer",
      icon: backend,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    // {
    //   title: "Backend Developer",
    //   icon: backend,
    // },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Next JS",
      icon: nextjs,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Sales",
      company_name: "YAN Trading Company",
      location: "Amman, Jordan",
      icon: yan,
      // iconBg: "#E6DEDD",
      iconBg: "#fff",
      date: "Jun 2019 - May 2020",
      points: [
        "Assist the Retail Store Manager in planning and implementing strategies to attract customers.",
        "Coordinate daily customer service operations (e.g., sales processes, orders and payments).",
        "Achieving the monthly sales target for the first time since the showroom opened two years ago.",
        "Resolve customer complaints, direct them and provide the necessary information.",
        "Delivery to customers.",
      ],
    },
    {
      title: "Marketing Officer",
      company_name: "Addiqa Alalia - Industry & Trade",
      location: "Amman, Jordan",
      icon: addiqa,
      // iconBg: "#E6DEDD",
      iconBg: "#fff",
      date: "Jul 2020 - Nov 2020",
      points: [
        "External and internal marketing officer.",
        "Writing content marketing.",
        "Sales representative.",
        "Follow up on customers.",
        "Products Pricing.",
        "Banking liaison officer.",
      ],
    },
    {
      title: "Marketing Coordinator & analyst",
      company_name: "Dada Group",
      location: "Amman, Jordan",
      icon: dada,
      // iconBg: "#E6DEDD",
      iconBg: "#fff",
      date: "Jun 2021 - Dec 2022",
      points: [
        "Conducting marketing plans.",
        "Analyzing competitive and Market activities.",
        "Marketing campaign ideas and their registration in the Ministry of Industry, Trade and Supply.",
        "Providing the marketing department with information and data first-hand.",
        "Conduct marketing studies on products and collect details with high accuracy.",
        "Daily visit to the market by dealers or major markets in order to improve the display stands and submit proposals to display products or stands in the sales channels",
        "Train sales promoters and Channel sales representatives on and recall key product and technology specifications.",
        "Building strong relationships with sales channels.",
        "Submit periodic reports to the direct manager.",
      ],
    },
    {
      title: "Marketing Officer",
      company_name: "Dada Group",
      location: "Amman, Jordan",
      icon: dada,
      iconBg: "#fff",
      date: "Jan 2023 - Present",
      points: [
        "Submit proposals for plans and activities to develop special marketing strategies in the brand.",
        "Submit a proposal to price the brand's products competitively in the market.",
        "Implementation of all necessary in order to support the sales department inthe market.",
        "Executing promotional materials such as catalogs and publications and distributing them to sales channels.",
        "Procurement Management: Compare offers, negotiate prices, ensure quality of promotional materials, and maintain supplier relationships.",
        "Prepare periodic reports on effectiveness and supplier performance.",
        "Weekly visits to the local market.",
        "Providing marketing studies and knowing competitors' selling methods and their offers.",
        "Pricing products and supervising the updating of the price list.",
        "Make offers on brand products.",
        "Provide suggestions for marketing campaigns and implement them to achieve brand awareness.",
        "Preparing training materials with brand specifications and training the sales department.",
        "Effective communication with the brand supplier and coordination in all matters related to the brand.",
        "Responsible for managing marketing campaigns in collaboration with the Ministry of Industry, Trade, and Supply.",
        "Submitting the report periodically and weekly to the direct manager.",
      ],
    },
  ];
  
  const certifications = [
    // {
    //   title: "SEO 2021: Complete SEO Training + SEO for WordPress Websites",
    //   company_name: "Udemy",
    //   icon: udemy,
    //   // iconBg: "#E6DEDD",
    //   iconBg: "#fff",
    //   date: "Mar 2021",
    //   link: import.meta.env.VITE_APP_CERTIFICATION_LINK1,
    // },
    // {
    //   title: "Team Leadership & Team Management Skills",
    //   company_name: "Udemy",
    //   icon: udemy,
    //   // iconBg: "#E6DEDD",
    //   iconBg: "#fff",
    //   date: "Dec 2021",
    //   link: import.meta.env.VITE_APP_CERTIFICATION_LINK2,
    // },
    {
      title: "Bachelor of Marketing",
      company_name: "Middle East University",
      icon: meu,
      // iconBg: "#E6DEDD",
      iconBg: "#fff",
      date: "Oct 2013 - Aug 2019",
      location: "Amman, Jordan",
      points: [
        "GPA (Very Good 3.22/4.00)",
      ],
      link: import.meta.env.VITE_APP_CERTIFICATION_LINK3,
    },
    // {
    //   title: "Meta React Native Specialization",
    //   company_name: "Coursera",
    //   icon: coursera,
    //   // iconBg: "#E6DEDD",
    //   iconBg: "#fff",
    //   date: "Feb 2024",
    //   link: import.meta.env.VITE_APP_CERTIFICATION_LINK4,
    // },
    // {
    //   title: "Agile with Atlassian Jira",
    //   company_name: "Coursera",
    //   icon: coursera,
    //   // iconBg: "#E6DEDD",
    //   iconBg: "#fff",
    //   date: "Feb 2024",
    //   link: import.meta.env.VITE_APP_CERTIFICATION_LINK5,
    // },
  ];

  // const testimonials = [
  //   {
  //     testimonial:
  //       "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
  //     name: "Sara Lee",
  //     designation: "CFO",
  //     company: "Acme Co",
  //     image: "https://randomuser.me/api/portraits/women/4.jpg",
  //   },
  //   {
  //     testimonial:
  //       "I've never met a web developer who truly cares about their clients' success like Rick does.",
  //     name: "Chris Brown",
  //     designation: "COO",
  //     company: "DEF Corp",
  //     image: "https://randomuser.me/api/portraits/men/5.jpg",
  //   },
  //   {
  //     testimonial:
  //       "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
  //     name: "Lisa Wang",
  //     designation: "CTO",
  //     company: "456 Enterprises",
  //     image: "https://randomuser.me/api/portraits/women/6.jpg",
  //   },
  // ];
  
  const projects = [
    {
      name: "Diagram",
      description: "Social Media App that enable users to create and share content and participate in social networking.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "Vite",
          color: "blue-text-gradient",
        },
        {
          name: "appwrite",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
        {
          name: "shadcn/ui",
          color: "red-text-gradient",
        },
        {
          name: "reactQuery",
          color: "purple-text-gradient",
        },
      ],
      image: diagram,
      source_code_link: import.meta.env.VITE_APP_PROJECT_LINK1,
    },
    {
      name: "Aora",
      description: "Social Media App that enable users to create and share content and participate in social networking.",
      tags: [
        {
          name: "reactNative",
          color: "blue-text-gradient",
        },
        {
          name: "expo",
          color: "blue-text-gradient",
        },
        {
          name: "appwrite",
          color: "green-text-gradient",
        },
        {
          name: "nativewind",
          color: "pink-text-gradient",
        },
        {
          name: "Animatable",
          color: "red-text-gradient",
        },
      ],
      image: aora,
      source_code_link: import.meta.env.VITE_APP_PROJECT_LINK2,
    },
    {
      name: "E-Shop",
      description: "Online shop, browse product catalogs, create wish lists, add items to a cart, and complete purchases. It also provides payment processing, shipping, and order management capabilities.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "next",
          color: "green-text-gradient",
        },
        {
          name: "stripe",
          color: "pink-text-gradient",
        },
        {
          name: "sanity",
          color: "purple-text-gradient",
        },
      ],
      image: ecommerce,
      source_code_link: import.meta.env.VITE_APP_PROJECT_LINK3,
    },
    {
      name: "Fitness",
      description: "Fitness app designed to help with exercise, other types of physical training, nutrition and diet, and other ways to get fit.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "rapidAPI's",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: fitness,
      source_code_link: import.meta.env.VITE_APP_PROJECT_LINK4,
    },
    {
      name: "LeadHunters",
      description: "Corporate website designed for presenting a LeadHunters company.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: leadhunter,
      source_code_link: import.meta.env.VITE_APP_PROJECT_LINK5,
    },
  ];
  
  export { services, technologies, experiences, certifications, projects };