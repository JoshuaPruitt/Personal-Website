import './style/index.css'
import React, { useEffect, useState } from 'react'


const actions = [
    {name: 'aboutMe', type: 'b1' },
    {name: 'portfolio', type:"b2"},
    {name: 'contactMe', type: 'b3'},
    {name: 'resume', type: 'b4'},
]

function App(){
    let pageInfo
    const [content, setPage] = useState('b1')


    
    if (content == "portfolio"){
        pageInfo = <div>
                    <h2>Layout 1</h2>
                    {/* Content for layout 1 */}
                    </div>

    } else if (content == "contactMe"){
        pageInfo = <div>
                    <h2>Layout 2</h2>
                    {/* Content for layout 1 */}
                    </div>
    
    } else if (content == "resume"){
        pageInfo = <div>
                    <h2>Layout 3</h2>
                    {/* Content for layout 1 */}
                    </div>
    
    } else {
        pageInfo = <div>
                    <h2>Layout 0</h2>
                    {/* Content for layout 1 */}
                   </div>
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
