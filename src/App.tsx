import { Nav } from "./components/nav"
import { Header } from "./components/header"
import { AboutMe } from "./components/aboutMe"
import { Resume } from "./components/resume"
import { Projects } from "./components/projects"

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

      <div className="m-5">
        <Resume></Resume>
      </div>

      <div className="m-5">
        <Projects></Projects>
      </div>
    </>
  )
}

export default App
