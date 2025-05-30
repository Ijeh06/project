import { Project, SkillCategories } from "./types";

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "A Student Result-Management System",
    description: "A full-featured School Result-Management platform with Role Based Dashboards, Announcement Management System, and secure User Settings.",
    image: "/Screen.png",
    technologies: ["React", "Next.js", "Tailwind CSS"],
    category: "Web App",
    demoUrl: "https://johnson-college--portal.vercel.app",
    githubUrl: "https://github.com/ijeh06/student-harmony-portal",
  },
  {
    id: 2,
    title: "Custom School Website",
    description: "A comprehensive dashboard for School-Curriculum, investments, and Admission.",
    image: "https://images.pexels.com/photos/7681096/pexels-photo-7681096.jpeg",
    technologies: ["HTML", "JavaScript", "CSS", "Material UI"],
    category: "Web App",
    demoUrl: "https://johnson-college.vercel.app",
    githubUrl: "https://github.com/ijeh06/master",
  },
  {
    id: 3,
    title: "QR-Code-generator",
    description: "A productivity app for Generating QR-Codes, For Project.",
    image: "https://images.pexels.com/photos/6177645/pexels-photo-6177645.jpeg",
    technologies: ["React", "JavaScript", "Node.js", "HTML"],
    category: "Web App",
    demoUrl: "https://qr-code-generator-ijeh06.vercel.app",
    githubUrl: "https://github.com/ijeh06/QR-code-generator",
  },
  {
    id: 4,
    title: "Fitness Tracker",
    description: "A mobile app for tracking workouts, nutrition, and fitness progress.",
    image: "https://images.pexels.com/photos/4482895/pexels-photo-4482895.jpeg",
    technologies: ["React Native", "Expo", "Firebase", "Redux"],
    category: "Mobile",
    demoUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    id: 5,
    title: "School-Result Management System",
    description: "A Result management platform with personalized recommendations for different User, Eg. Amin-Dashboard, Parent-Dashboard and Student-Dashboard.",
    image: "/puff.png",
    technologies: ["Next.js", "Node.js", "Prisma",],
    category: "Web App",
    demoUrl: "https://resultsystem-iota.vercel.app",
    githubUrl: "https://github.com/ijeh06/scholar-simplify",
  },
  // {
  //   id: 6,
  //   title: "Travel Website Redesign",
  //   description: "A complete redesign of a travel booking website focusing on user experience and conversion.",
  //   image: "https://images.pexels.com/photos/7412111/pexels-photo-7412111.jpeg",
  //   technologies: ["Figma", "Adobe XD", "Photoshop", "Illustrator"],
  //   category: "UI/UX",
  //   demoUrl: "https://example.com",
  //   githubUrl: "https://github.com",
  // },
];

export const SKILLS: SkillCategories = {
  frontend: [
    { name: "HTML5", level: 95 },
    { name: "CSS3 / SASS", level: 70 },
    { name: "JavaScript", level: 85 },
    { name: "TypeScript", level: 85 },
    { name: "React", level: 90 },
    { name: "Next.js", level: 88 },
    { name: "Tailwind CSS", level: 92 },
    // { name: "Vue.js", level: 80 },
  ],
  backend: [
    { name: "Node.js", level: 85 },
    { name: "Express", level: 82 },
    { name: "MongoDB", level: 78 },
    { name: "PostgreSQL", level: 75 },
    { name: "Firebase", level: 85 },
    { name: "RESTful APIs", level: 90 },
    { name: "GraphQL", level: 70 },
  ],
  tools: [
    { name: "Git & GitHub", level: 92 },
    { name: "Docker", level: 75 },
    { name: "Figma", level: 88 },
    { name: "Adobe XD", level: 80 },
    { name: "VS Code", level: 95 },
    // { name: "Jest", level: 78 },
    // { name: "Webpack", level: 75 },
  
  ],
};