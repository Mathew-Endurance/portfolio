import {
  FaHtml5,
  FaCss3,
  FaNodeJs,
  FaReact,
  FaSass,
  FaFigma,
  FaPhoneAlt,
  FaUser,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaDribbble,
  FaInstagram,
  FaLinkedin,
  FaFacebook,
} from "react-icons/fa";
import { DiJavascript } from "react-icons/di";
import { SiTypescript } from "react-icons/si";
import { BsMedium } from "react-icons/bs";
import portfolio from "../assets/portfolio.jpg";
import menu from "../assets/menu.jpg";
import infinite from "../assets/infinite.JPG";
import homeland from "../assets/homeland.JPG";
import project from "../assets/project-6.JPG";
import cocktail from "../assets/cocktail.JPG";
import accordion from "../assets/accordion.jpg";

export const navLinks = ["home", "about", "skills", "project", "contact"];

// export const socialIcons = [<FaLinkedin />, <FaFacebook />, <FaInstagram />];

export const socialIcons = [
  {
    id: 1,
    icons: <FaLinkedin />,
    link: "https://www.linkedin.com/in/endurance-mathew-42151699/",
  },
  {
    id: 2,
    icons: <FaFacebook />,
    link: "https://www.facebook.com",
  },
  {
    id: 3,
    icons: <FaInstagram />,
    key: "Email",
    link: "https://www.instagram.com",
  },
];

export const bios = [
  {
    id: 1,
    icon: <FaUser />,
    key: "Name",
    value: "Endurance Mathew",
  },
  

  {
    id: 2,
    icon: <FaPaperPlane />,
    key: "Email",
    value: "endurancemurray@gmail.com",
  },
];

export const icons = [
  <FaReact />,
 
  <FaNodeJs />,
  <FaSass />,
  <FaFigma />,
  <DiJavascript />,
  <SiTypescript />,
  <FaHtml5 />,
  <FaCss3 />,
  
];

export const experiences = [
  {
    id: 1,
    year: "2022",
    position: "Frontend Developer",
    company: "Sparklight Solutions",
  },
  {
    id: 2,
    year: "2021",
    position: "Junior Web Developer",
    company: "Upwork",
  },
  {
    id: 3,
    year: "2019",
    position: "Intern Web Developer",
    company: "Sparklight Solutions",
  },
];
export const finishes = [
  {
    id: 1,
    number: "2+",
    itemName: "Years Of Experience",
  },
  {
    id: 2,
    number: "30+",
    itemName: "Satisfied Customers",
  },
  {
    id: 3,
    number: "10+",
    itemName: "Designed Items",
  },
  {
    id: 4,
    number: "30+",
    itemName: "Clients Served",
  },
];
export const workImages = [
  {
    id: 1,
    img: menu,
    name: "Resturant",
    category: "web",
    demo: "https://menu-project-with-react.netlify.app/",
    git: "https://github.com/Mathew-Endurance/menu_with_react",
  },
  {
    id: 2,
    img: infinite,
    name: "Infinite Scroll",
    category: "web",
    demo: "https://infinite-scroll-image.netlify.app/",
    git: "https://github.com/Mathew-Endurance/real-estate",
  },
  {
    id: 3,
    img: homeland,
    name: "homeland Estate",
    category: "web",
    demo: "https://homelandrealestate.netlify.app/",
    git: "https://github.com/Mathew-Endurance/real-estate",
  },
  {
    id: 4,
    img: project,
    name: "Git user",
    category: "web",
    demo: "https://git-usersearch.netlify.app/",
    git: "https://github.com/Mathew-Endurance/search-github-users",
  },
  {
    id: 5,
    img: cocktail,
    name: "cocktail App",
    category: "design",
    demo: "https://cocktail-with-reactjs.netlify.app/",
    git: "https://github.com/Mathew-Endurance/cocktail_with_react",
  },
  {
    id: 6,
    img: accordion,
    name: "accordion",
    category: "design",
    demo: "https://accordion-with-reactjs.netlify.app/",
    git: "https://github.com/Mathew-Endurance/accordion_with_react",
  },
];

export const workNavs = ["All", "Web", "Design"];

export const contacts = [
  {
    id: 1,
    icon: <FaMapMarkerAlt />,
    infoText: "Lagos , Nigeria",
  },
  {
    id: 2,
    icon: <FaPaperPlane />,
    infoText: "endurancemurray@gmail.com",
  },
 
];
