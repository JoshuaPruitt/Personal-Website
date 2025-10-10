import { Nav } from "./components/nav"
import { Header } from "./components/header"
import { AboutMe } from "./components/aboutMe"

function App() {

  return (
    <>
      <div className="m-5">
        <Nav></Nav>
      </div>

      <div className="m-5">
        <Header></Header>
      </div>

      <div className="m-5">
        <AboutMe></AboutMe>
      </div>

    </>
  )
}

export default App
