import { useRef } from "react"
import { Link, useNavigate } from "react-router-dom"
import "../assets/style/App.css"
import mobile from "../assets/images/mobile.png"
import HomeNav from "../components/navbar2"
import Searchbtn from "../components/searchbtn"

function App() {
  

  return (
    <>
      <main>
        <section className="background">
          <HomeNav />
          <div className="px-3" style={{ textAlign: "center", margin: "auto" }}>
            <div className='intro'>
              Pass the day <br /> by watching the best streaming <br /> according to your version.
            </div>
            <Searchbtn top={"mt-4"}/>
          </div>
        </section>
      </main>
    </>
  )
}

export default App
