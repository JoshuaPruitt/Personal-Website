import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './style/index.css'
import Header from './components/navBar.jsx'


//create the page header
function header(){
  ReactDOM.createRoot(document.getElementById('header')).render(
    <React.StrictMode>
      <Header />
    </React.StrictMode>
  )
}

//create the page body
function body(){
  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  )
}


header()
body()

export default body



