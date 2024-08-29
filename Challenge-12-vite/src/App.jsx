import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './style/App.css'
import Body from './components/aboutMe'
import Header from './components/navBar'


//send data from body.jsx to be imported and used.
function App() {

  return Body();
  
}

export default App
