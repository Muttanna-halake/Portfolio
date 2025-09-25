// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import reduxLogo from './assets/tech_logo/redux.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import hibernateLogo from './assets/tech_logo/hibernate-icon.png';
import wordpressLogo from './assets/tech_logo/wordpress-logo.png';
import ElementorLogo from './assets/tech_logo/Elementor-Logo.png';
import EclipseLogo from './assets/tech_logo/eclipse-logo.png';


// Experience Section Logo's
import walstarLogo from './assets/company_logo/walstar-logo.png';
import Tecnobrillient from './assets/company_logo/Tecnobrillient.png';
import newtonschoolLogo from './assets/company_logo/newtonschool_logo.png';

// Education Section Logo's
import GovernementCollege from './assets/education_logo/Government-college-logo.png';
import MV from './assets/education_logo/MV.png';
import vpsLogo from './assets/education_logo/vps_logo.png';

// Project Section Logo's
import XVP from './assets/work_logo/Xvp.png';
import Secured from './assets/work_logo/secured.png';
import TotalImpact from './assets/work_logo/totalimpact.png';
import AmazonLogo from './assets/work_logo/ammazon.png';
import Bus from './assets/work_logo/Bus.png';
import Farm from './assets/work_logo/Farm.png';



export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      // { name: 'SASS', logo: sassLogo },
      { name: 'Java Script', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      // { name: 'Angular', logo: angularLogo },
      { name: 'Redux', logo: reduxLogo },
      // { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      // { name: 'GSAP', logo: gsapLogo },
      // { name: 'Material UI', logo: materialuiLogo },
      { name: 'Boot strap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Spring boot', logo: springbootLogo },
      { name: 'Spring', logo: springbootLogo },
      { name: 'Hibernate', logo: hibernateLogo },
      { name: 'MySQL', logo: mysqlLogo },
      
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Java Script', logo: javascriptLogo },
    ],
  },
  {
    title: 'Tools / CMS',
    skills: [
      // { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
       { name: 'Eclipse', logo: EclipseLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Word press', logo: wordpressLogo },
      { name: 'Eleme ntor', logo: ElementorLogo  },
      
      // { name: 'Figma', logo: figmaLogo },
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: walstarLogo,
      role: "Web Developer",
      company: "Walstar Technologies Pvt. Ltd",
      date: "May 2024 - Present",
      desc: "Developed responsive and user-friendly websites using HTML, CSS, JavaScript, and React JS, ensuring seamless UI/UX across devices. Integrated and customized WordPress themes and plugins to meet client requirements. Built and maintained backend functionalities using PHP, contributing to full-stack development in an agile team environment.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "WordPress",
        "React JS",
        "PHP",
      
      ],
    },
    {
      id: 1,
      img: Tecnobrillient,
      role: "Fullstack Java Developer Intern",
      company: "Technobrilliant Learning Solutions",
      date: "July 2023 - March 2024",
      desc: "Utilized modern technologies such as Spring Boot, Spring, Hibernate, JavaScript, and ReactJS to develop secure and scalable web applications. Successfully built a Smart Contact Manager project using the Spring Boot framework, implementing Spring Security for user authentication. Applied Spring Validation for server-side validation, ensuring data integrity and security. Leveraged JPA for efficient and seamless database interactions, optimizing both data retrieval and storage processes.",
      skills: [
        "Java",
        "Springboot",
        "Hibernate",
        "ReactJS",
        "JavaScript",
        "HTML",
        "CSS",
        "SQL",
      ],
    },
    // {
    //   id: 2,
    //   img: newtonschoolLogo,
    //   role: "Frontend Intern",
    //   company: "Newton School",
    //   date: "September 2021 - August 2022",
    //   desc: "Worked as a Frontend Developer Intern, designing and implementing scalable UI components and responsive websites using HTML, CSS, JavaScript, Bootstrap, and Material UI. Collaborated with the design team to translate wireframes and prototypes from Figma into interactive, user-friendly web pages.",
    //   skills: [
    //     "HTML",
    //     "CSS",
    //     "Javascript",
    //     "Bootstrap",
    //     "Figma",
    //     "Material UI",
    //   ],
    // },
  ];
  
  export const education = [
    {
      id: 0,
      img: GovernementCollege,
      school: "Governement Engineering College, Talakal",
      date: "Aug 2019 - May 2023",
      grade: "7.50 CGPA",
      desc: "I have completed my degree (B.E) in Computer Science from VTU University, Belagavi. During my time at VTU, I gained a strong foundation in programming, software development, and computer science principles. I have studied courses such as Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Web Development, and Software Engineering. I actively participated in various workshops and technical events, which enhanced my skills and knowledge. My experience at VTU University has been instrumental in shaping my technical abilities and professional growth.",
      degree: "Computer Science & Engineering -CSE",
    },
    {
      id: 1,
      img: MV,
      school: "M V High School & JR College Umadi",
      date: "Sept 2017 - Aug 2019",
      grade: "62%",
      desc: "I completed my 12th in Science field (HSC) from M V College, Umadi. Throughout my studies, I was immersed in a variety of subjects. College allowed me learn varies subjects like Maths, Physics, Biology and Computer Applications.",
      degree: "State Board (XII) -PCMB",
    },
    {
      id: 3,
      img: MV,
      school: "M V High School Umadi",
      date: "March 2017",
      grade: "79%",
      desc: "I completed my class 10 education from M V High School Umadi, under the State board, where I studied Science with Computer.",
      degree: "State Board (X)",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "XVP Studios",
      description:
        "Designed and developed a client website using Elementor Pro, incorporating custom functionality with HTML, CSS, and JavaScript to deliver a visually appealing, fully responsive, and user-friendly experience.",
      image: XVP,
      tags: ["HTML", "CSS", "JavaScript","Wordpress"],
      github: "https://github.com/MuttannaHalake/Amazon_Clone_JavaScript",
      // webapp: "https://githubprofiledetective.netlify.app/",
    },
     {
      id: 1,
      title: "SecureShred",
      description:
        "Designed and developed a client website using Elementor Pro, incorporating custom functionality with HTML, CSS, and JavaScript to deliver a visually appealing, fully responsive, and user-friendly experience.",
      image: Secured,
      tags: ["HTML", "CSS", "JavaScript","Wordpress"],
      github: "https://github.com/MuttannaHalake/Amazon_Clone_JavaScript",
      // webapp: "https://githubprofiledetective.netlify.app/",
    },
     {
      id: 2,
      title: "Total impact",
      description:
        "Built a client website with Elementor Pro, adding custom HTML, CSS, and JavaScript functionality to create a responsive, visually engaging, and highly intuitive user experience.",
      image: TotalImpact,
      tags: ["HTML", "CSS", "JavaScript","Wordpress"],
      github: "https://github.com/MuttannaHalake/Amazon_Clone_JavaScript",
      // webapp: "https://githubprofiledetective.netlify.app/",
    },
    {
      id: 3,
      title: "Amazon Clone UI",
      description:
        "Created a responsive Amazon clone using HTML, CSS, and JavaScript, closely replicating the platform’s original design and aesthetic. Integrated dynamic features such as product listings, user authentication, and a seamless search function to enhance overall user experience. Additionally, improved the website's responsiveness through JavaScript to ensure optimal performance across different devices.",
      image: AmazonLogo,
      tags: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/MuttannaHalake/Amazon_Clone_JavaScript",
      // webapp: "https://githubprofiledetective.netlify.app/",
    },
    {
      id: 4,
      title: "Online Bus Reservation System",
      description:
        "Developed an Online Bus Reservation System to enable seamless passenger ticket booking. The website was designed with dedicated sections for contact, admin, and user login on the homepage to enhance accessibility. A user registration feature was implemented to allow new users to sign up and access the booking portal.",
      image: Bus,
      tags: ["HTML", "CSS", "Servlet", "JSP", "MySQL"],
      github: "https://github.com/MuttannaHalake/DEO-OnlineBusTicketBooking-UI",
      // webapp: "https://csprep.netlify.app/",
    },
    {
      id: 5,
      title: "Form Management System",
      description:
        "Developed a direct online platform enabling farmers to sell their agricultural products without intermediaries. The platform not only facilitates online sales for farmers but also provides guidance on best farming practices to help improve productivity and sustainability.",
      image: Farm,
      tags: ["HTML", "CSS", "PHP", "MySql"],
      github: "https://github.com/MuttannaHalake/Farm-Management-",
      // webapp: "https://movie-recommendation-app-jet.vercel.app/",
    },
    // {
    //   id: 3,
    //   title: "Email Validator NPM Package",
    //   description:
    //     "An efficient and customizable NPM package for validating email addresses. Built using React.js and Node.js, it provides robust validation features to help developers ensure that email inputs meet required formats and standards.",
    //   image: npmLogo,
    //   tags: ["React JS", "Node.js", "NPM", "Validation"],
    //   github: "https://github.com/codingmastr/cmtk-email-validator",
    //   webapp: "https://www.npmjs.com/package/cmtk-email-validator",
    // },
    // {
    //   id: 4,
    //   title: "Task Reminder Chrome Extension Tool",
    //   description:
    //     "A productivity-boosting Chrome extension designed to help users manage and remember their daily tasks. Built using JavaScript, it offers a simple interface with reminders and task notifications to keep users on track.",
    //   image: taskremLogo,
    //   tags: ["JavaScript", "Chrome Extension", "HTML", "CSS"],
    //   github: "https://github.com/codingmastr/Task-Reminder-Tool",
    //   webapp: "chrome://extensions/?id=kngheeibjnnidhfoomkpnbeghackheci",
    // },
    // {
    //   id: 5,
    //   title: "Webverse Digital",
    //   description:
    //     "The official website for Webverse Digital, a creative digital marketing agency. Built using HTML, CSS, and JavaScript, it features visually appealing animations and a clean design to showcase the agency's services.",
    //   image: webverLogo,
    //   tags: ["HTML", "CSS", "JavaScript", "Framer Motion"],
    //   github: "https://github.com/codingmastr/Webverse-Digital",
    //   webapp: "https://webversedigital.com/",
    // },
    // {
    //   id: 6,
    //   title: "Coding Master",
    //   description:
    //     "An ed-tech platform where users can access tech and coding-related blogs, notes, interview questions, e-books, and premium content with payment integration. Built with full-stack technologies for a seamless learning experience.",
    //   image: cmLogo,
    //   tags: ["React JS", "Node.js", "MongoDB", "Express", "Payment Integration"],
    //   github: "https://codingmasterweb.in/",
    //   webapp: "https://codingmasterweb.in/",
    // },
    // {
    //   id: 7,
    //   title: "Image Search App",
    //   description:
    //     "A React.js-based image search application that allows users to search and download high-quality images from the web. Built using external APIs to ensure a vast library of results for various queries.",
    //   image: imagesearchLogo,
    //   tags: ["React JS", "API", "Search Feature", "CSS", "Javascript"],
    //   github: "https://github.com/codingmastr/Image-Search-App",
    //   webapp: "https://imagsearch.netlify.app/",
    // },
    // {
    //   id: 8,
    //   title: "Image Background Remover",
    //   description:
    //     "An efficient background removal app built with React.js and API integration. Users can upload any image, remove the background, and download the transparent version for further use.",
    //   image: removebgLogo,
    //   tags: ["React JS", "API", "Image Processing", "HTML", "CSS", "Javascript"],
    //   github: "https://github.com/codingmastr/Image-Background-Remover",
    //   webapp: "https://removeyourbg.netlify.app/",
    // },
  ];  
