import '../style/header.css'
import React, { useEffect } from 'react'
import App from '../App.jsx'

const actions = [
    {name: 'aboutMe', type: 'b1' },
    {name: 'portfolio', type:"b2"},
    {name: 'contactMe', type: 'b3'},
    {name: 'resume', type: 'b4'},
]

function Header(){
    const [content, setPage] = React.useState('b1')

    return (
        <>
            <div>
                {actions.map((action) => (
                    <button key={action.type} onClick={() => setPage(App(action.type))}>
                    {action.name}
                </button>
                ))}
            </div>
        </>
    )
    
}

export default Header