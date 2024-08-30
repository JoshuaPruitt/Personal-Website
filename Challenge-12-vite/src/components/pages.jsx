import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import '../style/App.css'

const aboutMe = () => {
    (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button>
          count is
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
    )
};

const portfolio = () => {
<>
<div>
  <p>
      Hey guys! This code is working now!
  </p>
</div>
</>
};

//send out the page information requested
function send(peram) {
  if(peram == "portfolio"){
    return portfolio
  } else {
    return aboutMe
  }
}

export default send