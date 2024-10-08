//file imports for correctly loading images on netlify's site
import githubLogo from "../assets/github-logo.png";
import githubInvLogo from "../assets/github-inv-logo.png";
import wwwInvLogo from "../assets/www-inv-logo.png";

import employeeCreator from "../assets/employee-creator.png";
import vehicleCreator from "../assets/vehicle-creator.png";
import payrollTracker from "../assets/challenge-03-payroll-tracker.png";
import readMeGenerator from "../assets/readme-generator.png";
import project1 from "../assets/project-1.png";
import blogWebsite from "../assets/blog-website.png";
import colorCanvas from "../assets/colorCanvasProject2.png";

//will contain all projects that I wish to display on the page
export const projects = [
  {
    name: "Employee Creator",
    link: "https://github.com/JoshuaPruitt/Challenge-10-Employee-Creator",
    img: employeeCreator,
    logo: [githubInvLogo, wwwInvLogo],
    type: "p1",
  },

  {
    name: "Vehicle Creator",
    link: "https://github.com/JoshuaPruitt/Challenge-08-Vehicle-Creator-",
    img: vehicleCreator,
    logo: [githubInvLogo, wwwInvLogo],
    type: "p2",
  },

  {
    name: "Employee Payroll Tracker",
    link: "https://github.com/JoshuaPruitt/challenge-03",
    img: payrollTracker,
    logo: [githubLogo, wwwInvLogo],
    dep: "https://joshuapruitt.github.io/challenge-03/",
    type: "p3",
  },

  {
    name: "README File Generator",
    link: "https://github.com/JoshuaPruitt/Challenge-07",
    img: readMeGenerator,
    logo: [githubInvLogo, wwwInvLogo],
    type: "p4",
  },

  {
    name: "Scene it game: Project 1",
    link: "https://github.com/JoshuaPruitt/Project-1--Scene-it-?tab=readme-ov-file",
    dep: "https://joshuapruitt.github.io/Project-1--Scene-it-/questionsPage.html",
    img: project1,
    logo: [githubInvLogo, wwwInvLogo],
    type: "p5",
  },

  {
    name: "Blog website",
    link: "https://github.com/JoshuaPruitt/Challenge-04?tab=readme-ov-file",
    dep: "https://joshuapruitt.github.io/Challenge-04/",
    img: blogWebsite,
    logo: [githubInvLogo, wwwInvLogo],
    type: "p6",
  },

  {
    name: "Color Canvas: Project 2",
    link: "https://github.com/Mekenna-Baker/Color-Canvas",
    dep: "https://color-canvas.onrender.com",
    img: colorCanvas,
    logo: [githubInvLogo, wwwInvLogo],
    type: "p7",
  },
];
