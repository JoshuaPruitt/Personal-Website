import form from '../components/form.jsx'
import '../style/App.css'

import profilePicture from "../assets/IMG_1862.jpg";
import placeholderResume from '../assets/placeholder.txt';

import { projects } from '../data/projects.js'

class PageData {
    aboutMe(){
        return(
            <>
                <div>
                    <h2>About Me</h2>
                    {/* Content for about me */}
                    <img className="pfp" src={profilePicture} width='160' height='200'></img>
                </div>

                <div className='introduction'>
                    <p>Hello!</p>

                    <p>
                        My name is Joshua Pruitt. I am a programmer taking the Coding bootcamp Web design course. 
                        Some special interests of mine are Computers, Video Games, and Model kits.
                        Currently im trying to branch out into other areas of programming so that I can get into game design some day!
                    </p>

                    <p>
                        Thank you for taking the time to visit my page! 
                    </p>
                </div>
                    
            </>
        )}

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
        )}

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
    )}

    resume(){
        return(
            <>
                <div>
                    <h2>My Resume</h2>
                </div>

                <h3>Click the link <a href={placeholderResume} download>here</a> to download my resume!</h3>
            </>
    )}
}


//send out the page information requested
export default PageData