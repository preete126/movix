import { useRef } from "react"
import { Link, useNavigate } from "react-router-dom"
import "../assets/style/App.css"
import mobile from "../assets/images/mobile.png"

function App() {
  const inputRef = useRef(null)
  const Navigate = useNavigate(null)

  const getInput = (value) => {
    if (value !== "" && value !== " ") {
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
          <nav>
            <Link to={"/"}>
              <div className='app_name'>MOVIX</div>
            </Link>
            <div>
              <ul className="show_mobile">
                <img src={mobile} width={"32px"} alt="" />
              </ul>
              <ul className="hide_mobile">
                <Link to={"/"}>
                  <li>Home</li>
                </Link>
                <li>Movies</li>
                <li>Actors</li>
                <li>
                  <button className='sign_up'>Sign up</button>
                </li>
              </ul>
            </div>
          </nav>
          <div style={{ maxWidth: "29rem", padding: "1rem 3rem", marginBottom: "auto", marginTop: "auto" }}>
            <div className='intro'>
              Pass the day <br /> by watching the best streaming according to your version.
            </div>
            {/* <Search_btn margin={"2rem"} width1={"68%"} width2={"22%"} route={"single"} /> */}
            <div style={{ display: "flex", alignItems: "center", marginTop: "2rem" }}>
              <input type="text" ref={inputRef} className='search_inp' placeholder='🎥 Search Movie' />
              <button onClick={() => getInput(inputRef.current.value)} type="submit" className='search_btn'>
                Search
              </button>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default App
