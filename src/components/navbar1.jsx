import { useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "../assets/style/App.css"
import Searchbtn from "./searchbtn";

function Navbar(data) {
    // const inputRef = useRef(null)
    // const Navigate = useNavigate(null)
    // let { pathname } = useLocation(null)

    // const getInput = (ev, value) => {
    //     ev.preventDefault()
    //     if (value !== " ") {
    //         // console.log(window.location.pathname.substring(1)); 
    //         window.location.pathname = `search/${inputRef.current.value}`
    //         // Navigate()(pathname = `search/${inputRef.current.value}`) ;
    //     }
    //     else {
    //         alert("Please enter a value")
    //     }
    // }

    return (
        <>
            <nav className="navbar navbar-expand-lg text-white py-4 px-0 px-sm-4">
                <div className="container-fluid">
                    <Link to={"/"} className="navbar-brand app_name" href="#">MOVIX</Link>
                    <button className="navbar-toggler" style={{background:"linear-gradient(rgb(33,73,55), rgb(148, 216, 183))"}} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to={"/"} className="nav-link active" aria-current="page" href="#">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={"/movies"} className="nav-link" href="#">Movies</Link>
                            </li>

                            <li className="nav-item position-relative">
                                Watchlist
                                    <span className="position-absolute top-0 start-100 translate-middle p-1 pb-0 pt-0 bg-success border border-light rounded-circle ms-2">
                                        <span className="font-thin" style={{fontSize:"small"}}>{data.watchList}</span>
                                    </span>
                            </li>
                        </ul>
                        <Searchbtn/>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;