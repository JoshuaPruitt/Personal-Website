import '../style/header.css'
import { useState } from 'react'

function Header(){
    const [text, setPage] = useState()

    return (
        <>
            <div>
                <button id='aboutMe' onClick={() => setPage((text) => text = 'CLICKED')}>
                    About Me {text}
                </button>
  
                <button id="portfolio" onClick={() => setPage(console.log('portfolio clicked'))}>
                    Portfolio
                </button>
  
                <button id="contactMe" onClick={() => setPage(console.log('contact Me clicked'))}>
                    Contact Me
                </button>
  
                <button id="resume" onClick={() => setPage(console.log('resume clicked'))}>
                    Resume
                </button>
            </div>
        </>
    )
    
}

export default Header