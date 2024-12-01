import './style/index.css'
import { useState, useRef } from 'react'
import pageData from "./pages/index.ts"
import emailJs from '@emailjs/browser';
import './style/App.css'

import { FaBook } from "react-icons/fa";
import { AiOutlineBranches } from "react-icons/ai";
import { IoMdPerson, IoIosMail } from "react-icons/io";

const service_id = process.env.SERVICE_ID || "";
const template_id = process.env.TEMPLATE_ID || "";
const public_key = process.env.PUBLIC_KEY || "";

import githubLogo from '../src/assets/github-logo.png';
import linkedInLogo from '../src/assets/linkedin-logo.png';


function App(){
    const form = useRef<HTMLFormElement>(null)!;
    const [isSent, setIsSent] = useState("");

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      emailJs
          .sendForm(service_id, template_id, form.current!, {
              publicKey: public_key,
          })
          .then(
              () => {
                  console.log("Sent email Sucessfully!");
                  setIsSent("Email sent successfully!")
              },
              (error: any) => {
                  console.error("Failed to send:", error.text);
                  setIsSent("Error sending email...")
              }
          );
    };

    return (
        <>
            <header>
                <div>
                  <h1 id='logo'>Joshua Pruitt</h1>
                </div>

                <nav>
                  <a href='#'><span><IoMdPerson/></span> About Me</a>
                  <a href='#resume'><span><FaBook/></span> Resume</a>
                  <a href='#portfolioContainer'><span></span><AiOutlineBranches /> Portfolio</a>
                  <a href='#contact'><span><IoIosMail /></span> Contact Me</a>
                </nav>
            </header>

            <body>
              {/*Will contain the about me section of the page */}
              <div>
                  {pageData.aboutMe()}
              </div>

              <div>
                  {pageData.resume()}
              </div>

              <div>
                  {pageData.portfolio()}
              </div>
              
              <div>
                <div>
                    <h2>Contact Me</h2>
                </div>

                <form className="contact" ref={form} onSubmit={(e: any) => sendEmail(e)}>
                    <label>Name: </label>
                    <input id="name" name="from_name" type='text'></input>

                    <label>Email Address: </label>
                    <input id='email' name='to_email' type='email'></input>

                    <label>Message: </label>
                    <textarea id='message' name="message"/>

                    <p style={{color: 'green'}}>{isSent}</p>

                    <input id='submit' type='submit' value="Send Email"/>
                </form>
              </div>
            </body>
                  
            
            
            <footer id='bottomBar'>
              <div id='linksbar'>
                <a href='https://github.com/JoshuaPruitt'>
                    <img src={githubLogo} width='50'height='50'></img>
                </a>

                <a href='https://www.linkedin.com/in/joshua-pruitt-1a494a311/'>
                    <img src={linkedInLogo} width='50' height='50'></img>
                </a>
              </div>
            </footer>
        </>
    )   
}

export default App
