import { useState } from 'react'
import form from '../components/form.jsx'
import '../style/App.css'

//file imports for correctly loading images on netlify's site
import githubLogo from '../assets/github-logo.png'
import githubInvLogo from '../assets/github-inv-logo.png';
import wwwInvLogo from '../assets/www-inv-logo.png'

import employeeCreator from "../assets/employee-creator.png";
import vehicleCreator from "../assets/vehicle-creator.png";
import payrollTracker from '../assets/challenge-03-payroll-tracker.png';
import readMeGenerator from '../assets/readme-generator.png';
import project1 from '../assets/project-1.png';
import blogWebsite from '../assets/blog-website.png';

import profilePicture from "../assets/IMG_1862.jpg";

//will contain all projects that I wish to display on the page
const projects = [
    {
        name: "Employee Creator", 
        link: "https://github.com/JoshuaPruitt/Challenge-10-Employee-Creator",
        img: employeeCreator,
        logo: [githubInvLogo, wwwInvLogo],
        type: 'p1',
    },

    {
        name: 'Vehicle Creator',
        link: 'https://github.com/JoshuaPruitt/Challenge-08-Vehicle-Creator-',
        img: vehicleCreator,
        logo: [githubInvLogo, wwwInvLogo],
        type: 'p2'
    },

    {
        name: 'Employee Payroll Tracker',
        link: 'https://github.com/JoshuaPruitt/challenge-03',
        img: payrollTracker,
        logo: [githubLogo, wwwInvLogo],
        dep: 'https://joshuapruitt.github.io/challenge-03/',
        type: 'p3'
    },

    {
        name: 'README File Generator',
        link: 'https://github.com/JoshuaPruitt/Challenge-07',
        img: readMeGenerator,
        logo: [githubInvLogo, wwwInvLogo],
        type: 'p4'
    },

    {
        name: 'project 1 (Scene it game)',
        link: 'https://github.com/JoshuaPruitt/Project-1--Scene-it-?tab=readme-ov-file',
        dep: 'https://joshuapruitt.github.io/Project-1--Scene-it-/questionsPage.html',
        img:  project1,
        logo: [githubInvLogo, wwwInvLogo],
        type: 'p5'
    },

    {
        name: 'Blog website',
        link: 'https://github.com/JoshuaPruitt/Challenge-04?tab=readme-ov-file',
        dep: 'https://joshuapruitt.github.io/Challenge-04/',
        img: blogWebsite,
        logo: [githubInvLogo, wwwInvLogo],
        type: 'p6'
    }
]

class PageData {
    aboutMe(){
        return(
            <>
                <div>
                    <h2>About Me</h2>
                    {/* Content for about me */}
                    <img className="pfp" src={profilePicture} width='160' height='200'></img>

                    <p>Hello!
                        My name is Joshua Pruitt. I am a programmer taking the Coding bootcamp Web design course. 
                        Some special interests of mine are Computers, Video Games, and Model kits.
                        Currently im trying to branch out into other areas of programming so that I can get into game design some day!

                        Thank you for taking the time to visit my page! 
                    </p>
                </div>
            </>
        )};

    //portfolio sends back the portfolio page data
    portfolio() {
        return(
            <>
                <div id="mainTextBox">
                    <h2>My Portfolio</h2>
                    <p>
                    This is my work! Hover over an image to see its links!
                    </p>
                </div>

                <div id='portfolioContiner'>
                    {projects.map((project) => (
                       <div id='projects' key={project.type}>
                        <div className='projectImg' style={{  
                                        backgroundImage: `url(${project.img})`,
                                        backgroundPosition: 'center',
                                        backgroundSize: 'contain',
                                        backgroundRepeat: 'no-repeat'
                                        }}>

                        <a href={project.link}>
                            <img className='github' src={project.logo[0]} width='50' height='50'></img>
                        </a>
                        
                        <a href={project.dep || '#none'}>
                            <img className='www' src={project.logo[1]} width='60' height='60'></img>             
                        </a>
                        </div>
                       </div>
                    ))}
                </div>
            </>
        )};

    contactMe(){
        
        return(
            <>
                <div>
                    <h2>Contact Me</h2>
                </div>

                <form>
                    <label>Name: </label>
                    <input id="name" type='text'></input>

                    <label>Email Address: </label>
                    <input id='email' name='email' type='email'></input>

                    <label>Message: </label>
                    <input id='message' type='text'></input>

                    <button id='submit' type='submit'>Submit</button>
                </form>
                
                {form.errorMessage && (
                    <div>
                        <p className='error-text'>{form.errorMessage}</p>
                    </div>
                )}
            </>
    )};

    resume(){
        return(
            <>
                <div>
                    <h2>My Resume</h2>
                </div>

                <h3>Click the link <a href='../src/assets/placeholder.txt' download>here</a> to download my resume!</h3>
            </>
    )};
}


//send out the page information requested
export default PageData