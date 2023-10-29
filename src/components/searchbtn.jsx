import { useEffect } from "react";
import { useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";

function Searchbtn({top}) {
    const inputRef = useRef(null)
    const navigate = useNavigate()

    useEffect(()=>{;
      return;
    },[inputRef])
  
    const getInput = (value) => {
      if (value !== " ") {
          console.log(value);
        navigate(`/search?title=${value}`)
      }
      else {
        alert("Please enter a value")
      }
    }

    return ( 
        <>
            <form onSubmit={() => getInput(inputRef.current.value)} className={`d-flex ${top}`} role="search">
              <input className="form-control-lg w-75 me-2 rounded-0 border-0" required ref={inputRef} style={{ outline: "none" }} type="search" placeholder="Search" aria-label="Search" />
              <button className="btn w-25 search_btn" type="submit">Search</button>
            </form>
        </>
     );
}

export default Searchbtn;