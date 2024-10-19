export const navLinks = [
  { id: 1, name: "Home", href: "#home" },
  { id: 2, name: "About", href: "#about" },
  { id: 3, name: "Projects", href: "#projects" },
  { id: 4, name: "Work", href: "#work" },
  { id: 5, name: "Contact", href: "#contact" },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall
      ? [4, -5, 0]
      : isMobile
      ? [5, -5, 0]
      : isTablet
      ? [5, -5, 0]
      : [9, -5.5, 0],
    reactLogoPosition: isSmall
      ? [3, 4, 0]
      : isMobile
      ? [5, 4, 0]
      : isTablet
      ? [5, 4, 0]
      : [12, 3, 0],
    ringPosition: isSmall
      ? [-5, 7, 0]
      : isMobile
      ? [-10, 10, 0]
      : isTablet
      ? [-12, 10, 0]
      : [-24, 10, 0],
    targetPosition: isSmall
      ? [-5, -10, -10]
      : isMobile
      ? [-9, -10, -10]
      : isTablet
      ? [-11, -7, -10]
      : [-13, -13, -10],
  };
};

export const myProjects = [
  {
    title: "Skill learn",
    desc: "Skill Learn is an inclusive online learning platform designed to revolutionize knowledge sharing by enabling direct interactions between users and professionals through chat and video. It offers a subscription-based model for premium access, allowing users to assign tasks and receive expert guidance, all while ensuring a seamless user experience.",
    subdesc:
      "Skill Learn is built using Angular, NGRX, Node.js, and NestJS for a robust, scalable backend, with MongoDB for data storage. It integrates Cloudinary for cloud storage and Razorpay for secure payment processing, ensuring a smooth and reliable experience for users.",
    href: "https://skilllearn.rizin.info/",

    texture: "/textures/project/project1.mp4",
    logo: "/assets/skilllearn.png",
    logoStyle: {
      backgroundColor: "#2A1816",
      border: "0.2px solid #36201D",
      boxShadow: "0px 0px 60px 0px #AA3C304D",
    },
    spotlight: "/assets/spotlight1.png",
    tags: [
      { id: 1, name: "Angular", path: "/assets/angular.svg" },
      { id: 1, name: "Node.js", path: "/assets/nodejs.svg" },
      { id: 2, name: "NestJS", path: "assets/nestjs.svg" },
      { id: 3, name: "TypeScript", path: "/assets/typescript.png" },
    ],
  },
  {
    title: "Hufiko",
    desc: "A dynamic E-Commerce platform designed for selling footballs, featuring a user-friendly interface, robust user authentication, and seamless online payment options, including cash-on-delivery. The platform provides efficient management of products, categories, banners, and stock operations, delivering a smooth shopping experience for users.",
    subdesc:
      "Built with Node.js and Express for the backend, and MongoDB for data storage, HUFIKO integrates Razorpay for secure payments and supports cash-on-delivery. It also features an admin panel for easy product and stock management, ensuring efficient operations.",
    href: "https://hufiko.rizin.info/",

    texture: "/textures/project/project2.mp4",
    logo: "/assets/hufiko.png",
    logoStyle: {
      backgroundColor: "#13202F",
      border: "0.2px solid #17293E",
      boxShadow: "0px 0px 60px 0px #2F6DB54D",
    },
    spotlight: "/assets/spotlight2.png",
    tags: [
      { id: 1, name: "Node.js", path: "/assets/nodejs.svg" },
      { id: 1, name: "MongoDB", path: "/assets/mongodb.png" },
      { id: 2, name: "Razorpay", path: "assets/razorpay.png" },
    ],
  },
];

export const workExperiences = [
  {
    id: 1,
    name: "SRV Infotech",
    pos: "MERN Stack Developer",
    duration: "2023 nov - Present",
    title:
      "At SRV Infotech, I worked as a MERN stack developer, focusing on creating interactive applications for various projects. I leveraged my skills to develop robust APIs, enhancing the functionality and user experience of the applications while collaborating closely with cross-functional teams.",
    icon: "/assets/srv.jpeg",
    animation: "victory",
    // animation: "salute",
  },
  {
    id: 2,
    name: "Brototype",
    pos: "MEAN Stack Developer",
    duration: "2023 jan - 2023 nov",
    title:
      "Brototype is my immersive bootcamp experience where I dedicated 10 months to mastering the MEAN stack. Throughout this journey, I successfully developed two impactful projects, enhancing my skills in MongoDB, Express, Angular, and Node.js. I also gained a solid understanding of Data Structures and Algorithms, equipping me to tackle complex programming challenges effectively.",
    icon: "/assets/brototype.jpeg",
    animation: "clapping",
  },
];

export const technologies = [
  { id: 1, name: "React", path: "/assets/react.svg" },
  { id: 2, name: "Next JS", path: "/assets/next-js.svg" },
  { id: 3, name: "Angular", path: "/assets/angular.svg" },
  { id: 4, name: "Node.js", path: "/assets/nodejs.svg" },
  { id: 5, name: "NestJS", path: "assets/nestjs.svg" },
  { id: 6, name: "MongoDB", path: "/assets/mongodb.png" },
  { id: 7, name: "TypeScript", path: "/assets/typescript.png" },
  { id: 8, name: "AWS", path: "assets/aws.svg" },
  { id: 9, name: "Postman", path: "assets/postman.svg" },
  { id: 10, name: "GIT", path: "assets/github.svg" },
  { id: 11, name: "Razorpay", path: "assets/razorpay.png" },
  { id: 12, name: "Socket.io", path: "assets/socket-io.svg" },
];

export const socialMedias = [
  { id: 1, name: "Git hub", path: "/assets/github.svg", href: "https://github.com/muhammed-rizin" },
  {
    id: 2,
    name: "Leet Code",
    path: "/assets/leetcode.svg",
    href: "https://leetcode.com/muhammed-rizin/",
  },
  {
    id: 3,
    name: "LinkedIn",
    path: "/assets/linkedin.svg",
    href: "https://www.linkedin.com/in/muhammed-rizin/",
  },
  {
    id: 4,
    name: "Instagram",
    path: "/assets/instagram.svg",
    href: "https://www.instagram.com/r.izin/",
  },
  { id: 5, name: "Twitter", path: "/assets/twitter.svg", href: "https://x.com/Rizinbst" },
];
