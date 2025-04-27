import webdesign from "../public/certificates/web design.png";
import javascript from "../public/certificates/javascript certificate gr.png";
import react from "../public/certificates/reactJs.png";
import advancedtyping from "../public/certificates/typing.png";

import CoderCoffee from "../public/projects/coderCoffee.png";
import netflix from "../public/projects/netflix.png";
import projectManagment from "../public/projects/project-managment.png";
import lms from "../public/projects/lms-front.png";
import rickMorty from "../public/projects/rick and morty.png";


export const navbarData = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "Services",
    link: "/services",
  },
  {
    title: "Resume",
    link: "/resume",
  },
  {
    title: "Work",
    link: "/work",
  },
  {
    title: "Contact",
    link: "/contact",
  },
];
export const servicesData = [
  {
    id: "01",
    title: "web development",
    description:
      " As a passionate and dedicated web developer, I specialize in Next.js, Tailwind CSS, and Framer Motion, creating dynamic and responsive web applications. My experience with Next.js allows me to implement server-side rendering and static site generation, which optimizes performance and enhances user experience. With Tailwind CSS, I enjoy crafting visually appealing and highly customizable user interfaces, ensuring that each project stands out while maintaining a seamless aesthetic across devices.",
    href: "#",
  },
  {
    id: "02",
    title: "Mobile Application development",
    description:
      " I am also proficient in mobile app development using Flutter. This framework enables me to build cross-platform applications that provide a consistent user experience on both iOS and Android devices. I am particularly interested in leveraging Flutter's capabilities to create intuitive and engaging mobile solutions that meet the needs of users in various domains. My goal is to deliver high-quality applications that are not only functional but also visually attractive.",
      href: "#",
    },
  {
    id: "03",
    title: "peer and online Tutoring ",
    description:
      " hI am committed to sharing my knowledge and skills as a peer and online tutor. I believe in the power of education and enjoy helping others navigate the complexities of web development and mobile app creation. Through personalized tutoring sessions, I aim to empower students with the tools and confidence they need to excel in their learning journey, fostering a collaborative environment where creativity and innovation thrive.",
      href: "#",
    },
  {
    id: "04",
    title: "Video Editing  ",
    description:
      " My creativity extends beyond coding, as I also have a strong background in video editing. I utilize various editing tools to produce engaging content that can effectively convey messages and capture audiences' attention. Whether it's creating tutorials, promotional videos, or social media content, I strive to enhance visual storytelling through thoughtful editing techniques and a keen eye for detail.",
      href: "/contact",
    },
];
export const skills = [
  { id: 1, name: "JavaScript", level: 95, slug: "javascript" },
  { id: 2, name: "TypeScript", level: 85, slug: "typescript" },
  { id: 3, name: "React", level: 90, slug: "react" },
  { id: 4, name: "Vue js", level: 55, slug: "vue js" },

  { id: 5, name: "Next.js", level: 85, slug: "nextjs" },
  { id: 6, name: "Node.js", level: 80, slug: "nodejs" },
  { id: 7, name: "Express.js", level: 75, slug: "expressjs" },
  { id: 8, name: "Redux Toolkit", level: 70, slug: "redux" },
  { id: 9, name: "MongoDB", level: 75, slug: "mongodb" },
  { id: 10, name: "ORM?prisma", level: 75, slug: "ORM" },
  { id: 11, name: "Tailwind CSS", level: 88, slug: "tailwindcss" },
  { id: 12, name: "HTML5", level: 90, slug: "html5" },
  { id: 13, name: "CSS3", level: 88, slug: "css3" },
  { id: 14, name: "VS Code", level: 95, slug: "vscode" },
  { id: 15, name: "Git", level: 85, slug: "git" },
  { id: 16, name: "GitHub", level: 80, slug: "github" },
  { id: 17, name: "Figma", level: 85, slug: "figma" },
  { id: 18, name: "Java", level: 70, slug: "java" },
  { id: 19, name: "Phyton", level: 45, slug: "phyton" },
  { id: 20, name: "Firebase", level: 70, slug: "firebase" },
  { id: 21, name: "Flutter", level: 70, slug: "flutter" },
  { id: 22, name: "Vercel", level: 85, slug: "vercel" },
  { id: 23, name: "Netlify", level: 80, slug: "netlify" },
];
export const certificates = [
  {
    id: 1,
    title: "React Certification",
    description: "Advanced React concepts and best practices",
    image: react,
  },
  {
    id: 2,
    title: "Responsive Web Design",
    description: "FreeCodeCamp certified in responsive design",
    image: webdesign,
  },
  {
    id: 3,
    title: "JavaScript Certified",
    description: "JavaScript projects certification",
    image: javascript,
  },
  {
    id: 4,
    title: "Typing Certified",
    description: "Advanced typing skills certification",
    image: advancedtyping,
  },
];

export const tabContent = {
  experiance: {
    title: "Professional Experiance",
    items: [
      {
        role: "Junior Frontend Developer",
        campny: "minab (hahu tech)",
        period: "2024",
        description:
          "At Hahu Tech, I received exceptional training in web development, which included engaging and innovative projects. This program introduced me to a multitude of new skills and working areas, such as GitLab and Docker, enriching my development toolkit. Currently, I am actively applying my knowledge in frontend technologies to create dynamic and user-friendly web applications. I am passionate about building intuitive interfaces and enhancing users' online experiences",
        highlights: [
          "vue",
          "Golang",
          "tailwindcss",
          "figma",
          "gitlab",
          "Graphql",
          "Docker",
          "mobile app",
        ],
      },
      {
        role: "Frontend developer Intern",
        campny: "Efuye Gela Web development and consultancy ",
        period: "2025 -present",
        description: "",
        highlights: [
          "Next js",
          "react Js",
          "tailwindcss",
          "Prisma ORM",
          "Postgresql",
          "MongoDb",
        ],
      },
    ],
  },
  education: {
    title: "Educational Background",
    items: [
      {
        degree: "Undergraduate Software engineering",
        institution: "Bahir Dar University",
        period: "2023 -present",
        description:
          "currently a software enginering student, focus on web and mobile application development and with many extra curicular activities i involved.",
        achivements: [
          "Web development certification",
          "EUPE peace Education certification",
        ],
      },
      {
        degree: "Grade 12 graduated",
        institution: "Mekane-Eyesus preparatory school ",
        period: "2002 -2023",
        description:
          " I proudly completed my elementary and secondary education at Mekane-Eyesus Preparatory School, where I consistently excelled in my studies. My dedication to academic excellence and my passion for learning enabled me to achieve outstanding grades throughout my educational journey. This formative experience has equipped me with the knowledge, skills, and determination to succeed in future endeavors, and I am excited to apply my learned competencies to new challenges ahead ",
        achivements: [
          "4.0 GPA in matrics(grade 10 national exam), 567/700 in Entance exam",
        ],
      },
    ],
  },
  skills: {
    title: "Technical Skills",
    items: [
      {
        name: " Frontend Development",

        description:
          " I am passionate about creating visually appealing and highly functional user interfaces. With a strong foundation in modern frontend technologies, I specialize in using React.js and Next.js to build dynamic web applications. My proficiency in Tailwind CSS enables me to design responsive layouts efficiently, while Figma helps me craft intuitive user experiences. I am also skilled in TypeScript for building robust applications and leverage Framer Motion to add engaging animations that enhance user interaction. I am committed to continuous learning and staying updated with the latest trends in frontend development to deliver exceptional digital products",
        catagories: [
          "react js",
          "Next js",
          "tailwindcss",
          "figma",
          "typeScript",
          "framer Motion",
        ],
      },
      {
        name: "Backend Development",
        description:
          "While my current focus is on frontend development, I am also on an exciting journey of learning backend development. I am exploring various technologies and concepts that will enable me to work effectively on full-stack applications. This dual approach allows me to gain a comprehensive understanding of web development, bridging the gap between client-side and server-side operations. I am committed to mastering backend frameworks and databases to enhance my overall development capabilities.",
        catagories: [
          "Node js",
          "Express js",
          "Rest API",
          "Grapql",
          "MongoDB",
          "ORM-Prisma",
          "postgresql",
        ],
      },
      {
        name: "Tools and Others",
        description:
          " I am well-versed in utilizing essential development tools that enhance productivity and streamline workflows. Proficient in Git for version control, I ensure effective collaboration and code management within teams. I actively use Visual Studio Code as my primary integrated development environment (IDE), leveraging its powerful features to write, debug, and optimize code efficiently. I embrace Agile methodology, which fosters flexibility and teamwork, allowing us to adapt quickly to changing project requirements. Additionally, my experience with GitLab supports seamless project collaboration and continuous integration. I value teamwork and believe that strong communication and collaboration are key to achieving outstanding results",
        catagories: [
          "Git",
          "Visual Studio code",
          "Agile Methdology",
          "teamwork",
          "gitlab",
        ],
      },
    ],
  },
  about: {
    title: "About Me",
    bio: "I am a Software Engineer with 1+ years of experience specializing in Next.js and React. I bridge the gap between front-end and back-end development to create seamless, user-friendly web applications.",

    "My expertise includes building single-page applications and implementing responsive designs that work across all devices. I'm passionate about creating intuitive interfaces that users love.":
      "Beyond coding, I thrive in team environments, communicating complex ideas clearly and adapting to new challenges. I'm committed to continuous learning and staying at the forefront of web development innovations.",
    interests: [
      "Open Source Contributing",
      "Artifical intelegence and machine learning",
      "web and mobile development",
    ],
    Languages: ["Amharic (native)", "English (intermidate)"],
  },
};
export const projects = [
  {
    id: "01",
    title: "Coder's coffe",
    catagory: "frontend",
    description:" coder's coffee is a web application that allows users to explore and discover various coffee types, brewing methods, and recipes. It features an intuitive interface, enabling users to search for their favorite coffee drinks and learn about their preparation techniques. The app is designed to provide coffee enthusiasts with a comprehensive resource for all things coffee-related.",
    stack: [
      "React",
      "tailwindcss",
     "framer motion"
    ],
    image: CoderCoffee,
    liveURL: "https://coffeeforcoders.vercel.app/",
    githubURL: "https://github.com/abrsh21son",
  },
  {
    id: "02",
    title: "Rick and morty",
    catagory: "Frontend",
    description:
      "I am well-versed in utilizing essential development tools that enhance productivity and streamline workflows. PI embrace Agile methodology, which fosters flexibility and teamwork, allowing us to adapt quickly to changing project requirements. Additionally, my experience with GitLab supports seamless project collaboration and continuous integration. I value teamwork and believe that strong communication and collaboration are key to achieving outstanding results.",
    stack: ["React", "tailwindcss", "Shadcn Ui"],
    image: rickMorty,
    liveURL: "https://github.com/abrsh21son",
    githubURL: "https://github.com/abrsh21son/Rick-And-Morty-web-Api",
  },
  
  {
    id: "03",
    title: "Project Management",
    category: "Frontend", 
    description:
      "This project focuses on creating an intuitive project management tool that allows users to organize tasks, assign team members, and track progress efficiently. With a user-friendly interface and responsive design, it enhances team collaboration and productivity.",
    stack: ["React", "Tailwind CSS"],
    image: projectManagment,
    liveURL: "https://github.com/abrsh21son",
    githubURL: "https://github.com/abrsh21son",
  },

  
  {
    id: "04",

    title: "Netflix clone",
    catagory: "Full stack",
    description:" this is the clone of the popular streaming platform, Netflix. It features a user-friendly interface, allowing users to browse and watch movies and TV shows seamlessly. The project showcases my skills in building responsive web applications with a focus on user experience.",
    stack: ["Next js", "tailwindcss", "Prisma ORM"],
    image: netflix,
    liveURL: " ",
    githubURL: "",
  },
  {
    id: "05",
    title: "Learning Management System",
    catagory: "Full stack",
    description:
      " This project focuses on creating an intuitive learning management system that allows educators to create and manage courses, track student progress, and facilitate online learning. With a user-friendly interface and responsive design, it enhances the educational experience for both instructors and learners.",
    stack: ["react js", "tailwindcss", "node js","express js", "Prisma ORM","mongodb"],
    image: lms,
    liveURL:"https://github.com/abrsh21son",
    githubURL: "https://github.com/abrsh21son",
  },

];
