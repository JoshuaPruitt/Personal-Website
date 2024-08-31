import './style/index.css'
import React, { useEffect, useState } from 'react'
import PageData from './components/pages'


const actions = [
    {name: 'About Me', type: 'b1' },
    {name: 'Portfolio', type:"b2"},
    {name: 'Contact Me', type: 'b3'},
    {name: 'Resume', type: 'b4'},
]

function App(){
    let pageInfo
    const [content, setPage] = useState('b1')
    const pageData = new PageData
    
    if (content == "Portfolio"){
      pageInfo = pageData.portfolio();

    } else if (content == "Contact Me"){
      pageInfo = pageData.contactMe();
    
    } else if (content == "Resume"){
      pageInfo = pageData.resume();

    } else {
      pageInfo = pageData.aboutMe();
    }

    return (
        <>
            <header>
                <div>
                  <h1 id='logo'>Joshua Pruitt</h1>
                </div>
                <nav>
                    {/* map out all buttons on the nav bar*/}
                    {actions.map((action) => (
                        <button key={action.type} onClick={() => setPage(action.name)}>
                        {action.name}
                    </button>
                    ))}
                </nav>
            </header>

            
            <div>
              {pageInfo}
            </div>
            
        </>
    )   
}

export default App
