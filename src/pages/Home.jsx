import { useRef } from "react"
import { Link, useNavigate } from "react-router-dom"
import "../assets/style/App.css"
import mobile from "../assets/images/mobile.png"
import HomeNav from "../components/navbar2"

function App() {
  const inputRef = useRef(null)
  const Navigate = useNavigate(null)

  const getInput = (value) => {
    if (value !== " ") {
      Navigate(`search/${inputRef.current.value}`)
    }
    else {
      alert("Please enter a value")
    }
  }

  return (
    <>
      <main>
        <section className="background">
          <HomeNav />
          <div className="px-3" style={{ textAlign: "center", margin: "auto" }}>
            <div className='intro'>
              Pass the day <br /> by watching the best streaming <br /> according to your version.
            </div>
            <form onSubmit={() => getInput(inputRef.current.value)} className="d-flex mt-4" role="search">
              <input className="form-control-lg w-75 me-2 rounded-0 border-0" required ref={inputRef} style={{ outline: "none" }} type="search" placeholder="Search" aria-label="Search" />
              <button className="btn w-25 search_btn" type="submit">Search</button>
            </form>
          </div>
        </section>
      </main>
    </>
  )
}

export default App
