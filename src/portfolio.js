/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Diggy's Portfolio",
  description:
    "Hi, my name is Diggy Bani Nusantara. 22 years old, avid programmer and gamer, and someone who prefers work to studies, but at the same time someone who never stops learning. I studied informatics engineering because I really likes technology development and technology industry. Right now i'm living in Tegal, Central Java. My passion is to become a web developer. Whether it's back-end, front-end or even a fullstack engineer. I can use several web development frameworks like Laravel, Code Igniter, React, Vue and Angular. I can code in Java decently, as well as in Javascript, and want to learn Python and other languages too. I prefer to study on my own, learning things I can realistically apply in doing what I enjoy doing for a living–programming.",
  og: {
    title: "Diggy Nusantara Portfolio",
    type: "website",
    url: "https://portfolio.diggynusantara.repl.co/",
  },
};

//Home Page
const greeting = {
  title: "Diggy Bani Nusantara",
  logo_name: "Diggy Nusantara",
  nickname: "Web Developer",
  subTitle:
    "Hi, my name is Diggy Bani Nusantara. 22 years old, avid programmer and gamer, and someone who prefers work to studies, but at the same time someone who never stops learning. I studied informatics engineering because I really likes technology development and technology industry. Right now i'm living in Tegal, Central Java. My passion is to become a web developer. Whether it's back-end, front-end or even a fullstack engineer. I can use several web development frameworks like Laravel, Code Igniter, React, Vue and Angular. I can code in Java decently, as well as in Javascript, and want to learn Python and other languages too. I prefer to study on my own, learning things I can realistically apply in doing what I enjoy doing for a living–programming.",
  resumeLink:
    "https://drive.google.com/file/d/1cd-RxeVZa9YrEtSsHnStr214TcvhzUIr/view?usp=share_link",
  portfolio_repository: "https://github.com/diggynusantara",
  githubProfile: "https://github.com/diggynusantara",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/diggynusantara",
  // linkedin: "https://www.linkedin.com/in/diggynusantara/",
  // youtube: "https://www.youtube.com/channel/UCLaD_M6YDTUt_TfOrk1f4zg"
  // gmail: "diggynusantara@gmail.com",
  // gitlab: "https://gitlab.com/diggynusantara",
  // twitter: "https://twitter.com/DiggyNusantara",
  // facebook: "https://www.facebook.com/diggynusantara",
  // instagram: "https://www.instagram.com/dgybn__/"

  {
    name: "Github",
    link: "https://github.com/diggynusantara",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/diggynusantara/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "YouTube",
    link: "https://www.youtube.com/channel/UCLaD_M6YDTUt_TfOrk1f4zg",
    fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
    backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  },
  {
    name: "Gmail",
    link: "mailto:diggynusantara@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Twitter",
    link: "https://twitter.com/DiggyNusantara",
    fontAwesomeIcon: "fa-twitter", // Reference https://fontawesome.com/icons/twitter?style=brands
    backgroundColor: "#1DA1F2", // Reference https://simpleicons.org/?q=twitter
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/diggynusantara",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/dgybn__/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
  {
    name: "Whatsapp",
    link: "https://wa.me/6282257219980?text=Hello,%20you%20can%20contact%20me%20in%20this%20number",
    fontAwesomeIcon: "fa-whatsapp", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#25D366", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "▶ Building responsive website front end using React-Redux",
        "▶ Creating application backend in Node, Laravel, Code Igniter & Express",
        "▶ Developing mobile applications using Flutter, React Native and solo android apps using Kotlin",
        "▶ Experience in API, writing unit or integration test",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        /*{
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },*/
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Yarn",
          fontAwesomeClassname: "simple-icons:yarn",
          style: {
            color: "#2C8EBB",
          },
        },
        {
          skillName: "Flutter",
          fontAwesomeClassname: "simple-icons:flutter",
          style: {
            color: "#02569B",
          },
        },
      ],
    },
    {
      title: "Data Science & AI",
      fileName: "DataScienceImg",
      skills: [
        "▶ Developing highly scalable production ready models for various deeplearning and statistical use cases",
        "▶ Creating project with Computer Vision and Natural Language Processing (NLP)",
        "▶ Complex quantitative modelling for dynamic forecasting and time series analysis",
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Jupyter",
          fontAwesomeClassname: "simple-icons:jupyter",
          style: {
            backgroundColor: "transparent",
          },
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "▶ Experience working on multiple cloud platforms",
        "▶ Hosting and maintaining websites on virtual machine instances along with integration of databases",
        "▶ Deploying deep learning models on cloud to use on mobile devices",
        "▶ Setting up streaming jobs from DB to Server or vice-versa on AWS and GCP",
      ],
      softwareSkills: [
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
      ],
    },
    {
      title: "UI/UX Design",
      fileName: "DesignImg",
      skills: [
        "▶ Designing highly attractive user interface for mobile and web applications",
        "▶ Customizing logo designs and building logos from scratch",
        "▶ Creating the flow of application functionalities to optimize user experience",
      ],
      softwareSkills: [
        {
          skillName: "Adobe Illustrator",
          fontAwesomeClassname: "simple-icons:adobeillustrator",
          style: {
            color: "#FF4500",
          },
        },
        {
          skillName: "Adobe Photoshop",
          fontAwesomeClassname: "simple-icons:adobephotoshop",
          style: {
            color: "#008B8B",
          },
        },
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },
        {
          skillName: "Inkscape",
          fontAwesomeClassname: "simple-icons:inkscape",
          style: {
            color: "#000000",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/diggynusantara",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.codechef.com/users/diggynusantara",
    },
    /*{
      siteName: "Codeforces",
      iconifyClassname: "simple-icons:codeforces",
      style: {
        color: "#1F8ACB",
      },
      profileLink: "http://codeforces.com/profile/diggynusantara",
    },*/
    {
      siteName: "Hackerearth",
      iconifyClassname: "simple-icons:hackerearth",
      style: {
        color: "#323754",
      },
      profileLink: "https://www.hackerearth.com/@diggynusantara",
    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/diggynusantara",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Universitas Dian Nuswantoro",
      subtitle: "S.Kom in Informatics Engineering",
      logo_path: "udinus.png",
      alt_name: "UDINUS Semarang",
      duration: "2017 - 2021",
      descriptions: [
        "▶ I have studied basic - intermediate programming language like C/C++, PHP, Java, Javascript, and Python.",
        "▶ I can use various applications Visual Studio Code, CodeBlock, Netbeans, Android Studio, etc in my college study.",
        "▶ Apart from this, I have done courses on Full Stack Development, Deep Learning, Data Science, and Cloud Computing.",
        "▶ My thesis is web application based with title 'APPLICATION OF EXPERT SYSTEMS IN EARLY DIAGNOSIS OF THE COVID-19 VIRUS USING THE CERTAINTY FACTOR METHOD'.",
      ],
      website_link: "https://dinus.ac.id/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Machine Learning Developer",
      subtitle: "- IBM",
      logo_path: "ibm.png",
      certificate_link:
        "https://drive.google.com/file/d/16T8ofKC3YslHgW2d7SCHshv24zn7VhTP/view?usp=sharing",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    {
      title: "Cloud Foundation",
      subtitle: "- AWS",
      logo_path: "aws.png",
      certificate_link:
        "https://drive.google.com/file/d/1Swzsb4S2vF9Mxso2iBZKpP-BGt3zx4f4/view?usp=sharing",
      alt_name: "AWS",
      color_code: "#ffffff",
    },
    {
      title: "Cloud Architecting",
      subtitle: "- AWS",
      logo_path: "aws.png",
      certificate_link:
        "https://drive.google.com/file/d/1On85l1SOeE7jZsi4X7H3yxJlJIEHnFnV/view?usp=sharing",
      alt_name: "AWS",
      color_code: "#ffffff",
    },
    {
      title: "Basic Machine Learning",
      subtitle: "- Dicoding",
      logo_path: "dicoding.jpeg",
      certificate_link:
        "https://drive.google.com/file/d/1ZjPX_aLTYCLjmDmI1_QM97JeV-7h4Gns/view?usp=sharing",
      alt_name: "Dicoding",
      color_code: "#2d3e50",
    },
    {
      title: "Data Visualization",
      subtitle: "- Dicoding",
      logo_path: "dicoding.jpeg",
      certificate_link:
        "https://drive.google.com/file/d/1cLgmljX6w6bjfdf-5y-Mj4UbXd6MPexn/view?usp=sharing",
      alt_name: "Dicoding",
      color_code: "#2d3e50",
    },
    {
      title: "Python Programming",
      subtitle: "- Dicoding",
      logo_path: "dicoding.jpeg",
      certificate_link:
        "https://drive.google.com/file/d/1UZe8yiYMa_J5WiAz48VtdoAILnE7_dGr/view?usp=sharing",
      alt_name: "Dicoding",
      color_code: "#2d3e50",
    },
    {
      title: "Javascript Programming",
      subtitle: "- Dicoding",
      logo_path: "dicoding.jpeg",
      certificate_link:
        "https://drive.google.com/file/d/1n5HukLmE3G8lx9YQAxaMiQT1YcHn-sum/view?usp=sharing",
      alt_name: "Dicoding",
      color_code: "#2d3e50",
    },
    {
      title: "Cloud Practitioner Essentials",
      subtitle: "- Dicoding",
      logo_path: "dicoding.jpeg",
      certificate_link:
        "https://drive.google.com/file/d/1k4rV_-4t05m-sNBSmoxHk8u5CPosGaSh/view?usp=sharing",
      alt_name: "Dicoding",
      color_code: "#2d3e50",
    },
    {
      title: "Javascript Engineer using Node.js",
      subtitle: "- Course-net",
      logo_path: "course-net.jpg",
      certificate_link:
        "https://drive.google.com/file/d/1lhkJ5eYk0JFC9XZ-WTsX-a4nguQ5micF/view?usp=sharing",
      alt_name: "Course-net",
      color_code: "#ffffff",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "This is my experience for work, internship, and volunteership. I like to make projects based on machine learning and intelligent systems and I love organising events and that is why I am also involved with many opensource communities.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      experiences: [
        {
          title: "IT Staff",
          company: "J&T Cargo",
          company_url: "https://www.jtcargo.id/",
          logo_path: "cargo.png",
          duration: "June 2022 - Present",
          location: "Tegal, Jawa Tengah",
          description:
            "I am working on expedition logistic company. My job is to create a specific networking technology that can help system easier to maintenance, troubleshooting programs and many more.",
          color: "#228B22",
        },
        {
          title: "Computer Lab Assistant",
          company: "Universitas Dian Nuswantoro",
          company_url: "https://www.dinus.ac.id/",
          logo_path: "udinus.png",
          duration: "May 2019 - Oct 2019",
          location: "Semarang, Jawa Tengah",
          description:
            "I am working as Computer Lab Assistant in my campus. Work as a lecturer assistant in teaching lecture practice in the lab computer to help students if there are any difficulties.",
          color: "#008080",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Web Developer",
          company: "Dinas Pertanian, Perikanan dan Pangan",
          company_url: "https://pertanikap.semarangkab.go.id/",
          logo_path: "pertanikap.png",
          duration: "May 2019 - Sept 2020",
          location: "Semarang, Jawa Tengah",
          description:
            "I have worked on project of an Official Travel Warrant Application (SPPD) web-based to make it easier to manage official orders. Using PHP and Javascript to make it.",
          color: "#ee3c26",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Discord Active Developer",
          company: "Discord",
          company_url: "https://discord.com/",
          logo_path: "discord.png",
          duration: "Jan 2020 - Present",
          location: "Work From Home",
          description:
            "I created a bot for Discord and use it as a tool like setting up servers, playing music, etc. I use the javascript programming language to make it.",
          color: "#4169E1",
        },
        {
          title: "Developer Program Member",
          company: "Github",
          company_url: "https://github.com/",
          logo_path: "github_logo.png",
          duration: "July 2019 - Present",
          location: "Work From Home",
          description:
            "I am actively contributing to many opensource projects. I have contributed to projects like web based, machine learning and mobile project. These contributions include bug fixes, feature requests and formulating proper documentation for project.",
          color: "#181717",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create web applications and deploy them using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description:
    "I have worked on and published a few research papers and publications of my own.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    /*{
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzQ=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Sistem Pakar COVID-19 Certainty Factor",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzi=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNze=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzt=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzb=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },*/
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "diggy_nusantara.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with Web Developing, React, Angular, Vue, ML, AI, Android, Cloud and Opensource Development.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "For individual fundamental empowerment, I like to write about something about technology and my gaming experience in my blog.",
    link: "https://lookyoursmile.blogspot.com/",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle:
      "Jl. Sipuyuh No. 32 RT 03/RW 04 Kel. Pagerbarang Kec. Pagerbarang Kab. Tegal Jawa Tengah Indonesia (52462)",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://goo.gl/maps/Gg6yd87mqwH4Fk9cA",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+6282257219980",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
