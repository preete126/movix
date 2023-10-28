import { Link } from "react-router-dom";

function HomeNav() {
    return ( 
        <>
            <nav className="navbar navbar-expand-lg text-white py-4 px-0 px-sm-4">
                <div className="container-fluid">
                    <Link to={"/"} className="navbar-brand app_name" href="#">MOVIX</Link>
                    <button className="navbar-toggler" style={{background:"linear-gradient(rgb(33,73,55), rgb(148, 216, 183))"}} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to={"/"} className="nav-link active" aria-current="page" href="#">Home</Link>
                            </li>
                            <li className="nav-item">
                            <Link to={"/movies"} className="nav-link" href="#">Movies</Link>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="#">Series</a>
                            </li>
                        </ul>
                       
                    </div>
                </div>
            </nav>
        </>
     );
}

export default HomeNav;