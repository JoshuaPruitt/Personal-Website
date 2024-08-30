import '../style/header.css'
import React, { useEffect, useState } from 'react'

const actions = [
    {name: 'aboutMe', type: 'b1' },
    {name: 'portfolio', type:"b2"},
    {name: 'contactMe', type: 'b3'},
    {name: 'resume', type: 'b4'},
]

function navBar(){
    let pageInfo
    const [content, setPage] = useState('b1')


    if (content == "aboutMe"){
        pageInfo = <div>
                    <h2>Layout 1</h2>
                    {/* Content for layout 1 */}
                   </div>
    } else if (content == "portfolio"){
        pageInfo = <div>
                    <h2>Layout 2</h2>
                    {/* Content for layout 1 */}
                   </div>

    } else if (content == "contactMe"){
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
            <div>
                {/* map out all buttons on the nav bar*/}
                {actions.map((action) => (
                    <button key={action.type} onClick={() => setPage(action.name)}>
                    {action.name}
                </button>
                ))}

            {pageInfo}
            </div>
        </>
    )
    
}

export default navBar