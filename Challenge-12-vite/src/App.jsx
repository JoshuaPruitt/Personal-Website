
import './style/App.css'
import send from './components/pages.jsx'
import body from './main.jsx'


//send data from body.jsx to be imported and used.
function App(peram) {
  send(peram)
  return body
}

export default App
