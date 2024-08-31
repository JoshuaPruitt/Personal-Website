import { useState } from 'react'
import '../style/App.css'

//will contain all projects that I wish to display on the page
const projects = [
    {
        name: "Employee Creator", 
        link: "https://github.com/JoshuaPruitt/Challenge-10-Employee-Creator",
        img: "../src/assets/placeholder-image.jpg",
        type: 'p1'
    },

    {
        name: 'Vehicle Creator',
        link: 'https://github.com/JoshuaPruitt/Challenge-08-Vehicle-Creator-',
        img: "../src/assets/placeholder-image.jpg",
        type: 'p2'
    }
]

class PageData {
    aboutMe(){
        return(
            <>
                <div>
                    <h2>About Me</h2>
                    {/* Content for about me */}
                    <p>Hello!
                        My name is Joshua Pruitt. I am a junior web designer.
                        I design webpages from the ground up. Some special interests of mine are Computers, Video Games, and Model kits.
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
                <div>
                    <h2>Portfolio</h2>
                    <p>
                    This is my work!
                    </p>
                </div>

                <div>
                    {projects.map((project) => (
                       <div id='projects' key={project.type} style={{backgroundImage: `url(${project.img})`,
                                                                     backgroundPosition: 'center',
                                                                     backgroundSize: 'cover',
                                                                     backgroundRepeat: 'no-repeat'}}>
                         <a href={project.link}>{project.name}</a>
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
                    {/* Content for layout 1 */}
                </div>
            </>
    )};

    resume(){
        return(
            <>
                <div>
                    <h2>Resume</h2>
                </div>
            </>
    )};
}


//send out the page information requested
export default PageData