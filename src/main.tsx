import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './style/index.css'

import { FaBook } from "react-icons/fa";
import { AiOutlineBranches } from "react-icons/ai";
import { IoMdPerson, IoIosMail } from "react-icons/io";


//create the page body
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <nav>
      <div>
        <a href='#'><span><IoMdPerson/></span> About Me</a>
        <a href='#resume'><span><FaBook/></span> Resume</a>
        <a href='#portfolioContainer'><span><AiOutlineBranches /></span> Portfolio</a>
        <a href='#contact'><span><IoIosMail /></span> Contact Me</a>
      </div>
    </nav>
    <App />
  </React.StrictMode>,
)






