//file imports for correctly loading images on netlify's site
import employeeCreator from "../assets/personalProjects/employee-creator.png";
import vehicleCreator from "../assets/personalProjects/vehicle-creator.png";
import payrollTracker from "../assets/personalProjects/challenge-03-payroll-tracker.png";
import readMeGenerator from "../assets/personalProjects/readme-generator.png";
import project1 from "../assets/personalProjects/project-1.png";
import blogWebsite from "../assets/personalProjects/blog-website.png";
import colorCanvas from "../assets/personalProjects/colorCanvasProject2.png";

//will contain all projects that I wish to display on the page
export const projects = [
  {
    name: "Employee Creator",
    link: "https://github.com/JoshuaPruitt/Challenge-10-Employee-Creator",
    img: employeeCreator,
  },

  {
    name: "Vehicle Creator",
    link: "https://github.com/JoshuaPruitt/Challenge-08-Vehicle-Creator-",
    img: vehicleCreator,
  },

  {
    name: "Employee Payroll Tracker",
    link: "https://github.com/JoshuaPruitt/challenge-03",
    img: payrollTracker,
    dep: "https://joshuapruitt.github.io/challenge-03/",
  },

  {
    name: "README File Generator",
    link: "https://github.com/JoshuaPruitt/Challenge-07",
    img: readMeGenerator,
  },

  {
    name: "Scene it game: Project 1",
    link: "https://github.com/JoshuaPruitt/Project-1--Scene-it-?tab=readme-ov-file",
    dep: "https://joshuapruitt.github.io/Project-1--Scene-it-/questionsPage.html",
    img: project1,
  },

  {
    name: "Blog website",
    link: "https://github.com/JoshuaPruitt/Challenge-04?tab=readme-ov-file",
    dep: "https://joshuapruitt.github.io/Challenge-04/",
    img: blogWebsite,
  },

  {
    name: "Color Canvas: Project 2",
    link: "https://github.com/Mekenna-Baker/Color-Canvas",
    dep: "https://color-canvas.onrender.com",
    img: colorCanvas,
  },
];
