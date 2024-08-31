import './style/index.css'
import React, { useEffect, useState } from 'react'
import PageData from './components/pages'


const actions = [
    {name: 'aboutMe', type: 'b1' },
    {name: 'portfolio', type:"b2"},
    {name: 'contactMe', type: 'b3'},
    {name: 'resume', type: 'b4'},
]

function App(){
    let pageInfo
    const [content, setPage] = useState('b1')
    const pageData = new PageData
    
    if (content == "portfolio"){
      pageInfo = pageData.portfolio();

    } else if (content == "contactMe"){
      pageInfo = pageData.contactMe();
    
    } else if (content == "resume"){
      pageInfo = pageData.resume();

    } else {
      pageInfo = pageData.aboutMe();
    }

    return (
        <>
            <header>
                <div>
                  <h2>Joshua Pruitt</h2>
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
