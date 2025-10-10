import { Nav, Header, AboutMe, Resume, Projects, Footer } from "./components/index";

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

      <div>
        <Footer></Footer>
      </div>
    </>
  )
}

export default App
