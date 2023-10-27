import { useEffect, useRef, useState } from "react";
import { get_movie } from "../services/movix";
import "../assets/style/App.css"
import bg1 from "../assets/images/johnwick.jpg"
import { Link, useParams } from "react-router-dom";

// 
function Search_result() {
    let [movie, setMovie] = useState([])
    const inputRef = useRef(null)
    let isMounted = true
    // const { input } = useContext(Context)
    const { param } = useParams()
    const [loading, setLoading] = useState(false)
    const [play, setPlay] = useState(false)
    const [errors, setError] = useState({ status: false, message: "" })

    useEffect(() => {
        let fetch = async () => {
            try {
                setLoading(true)
                let data = []
                const response = await get_movie()
                console.log(response.data);
                data.push(response.data)
                // if (param !== ""){
                const filter = data.filter((item) => {
                    return Object.values(item).join('').toLowerCase().includes(param.toLowerCase())
                })
                movie = filter
                setMovie(movie)
                console.log(movie);
                // }

            } catch (error) {
                console.log(error?.message);
                setError({ ...errors, status: true, message: error?.message });
                console.log(errors);
            } finally {
                setLoading(false);
            }
        }

        if (isMounted) fetch();
        return () => {
            isMounted = false;
        }
    }, [])

    const getInput = (value) => {
        window.location.pathname = `search/${value}`;
    }


    return (
        <>
            <main>
                <section className="background2">
                    <nav className="nav">
                        <Link to={"/"}>
                            <div className='app_name'>MOVIX</div>
                        </Link>
                        <div>
                            <ul>
                                <Link className="hide_menu" to={"/"}>
                                    <li>Home</li>
                                </Link>
                                <li className="hide_menu">Movies</li>
                                <li className="hide_menu">Actors</li>
                                <li>
                                    {/* <Search_btn /> */}

                                    <div style={{ display: "flex", alignItems: "center" }}>
                                        <input type="text" ref={inputRef} className='search_inp' placeholder='🎥 Search Movie' />
                                        <button type="submit" onClick={() => getInput(inputRef.current.value)} className='search_btn' >
                                            Search
                                        </button>
                                    </div>


                                </li>
                            </ul>
                        </div>
                    </nav>
                    <div className="content" style={{ padding: "1rem 3rem", marginBottom: "auto", marginTop: "auto" }}>
                        {loading ? <div>'Loading...'</div> :

                            <>
                                {errors.status ? <div>{errors.message}</div> :
                                    <main>
                                        {movie.length == 0 ? <div>No result match your search</div> :
                                            <div>{
                                                movie.map((value, index) =>
                                                    !play ?
                                                        <section key={index}>
                                                            <div className="f_img" style={{ backgroundImage: `url(${bg1})` }}>
                                                                <section className="watchlist"> 📜 Add to Watchlist</section>

                                                                <section className="movie_display">
                                                                    <h2 className="f_name">{value.Title}</h2>
                                                                    <section className="f_info">
                                                                        <i>{value.Language}</i> |
                                                                        <i>{value.Year}</i> ∙
                                                                        <i>{value.Runtime}</i> ∙
                                                                        <i>{value.Type}</i>
                                                                    </section>
                                                                    <button onClick={() => setPlay(true)} className="watch_now">▶</button>
                                                                </section>
                                                                <section className="sound"><i>Sound | Off 🔊</i></section>

                                                            </div>
                                                        </section> :
                                                        <section className="f_video">
                                                            <button onClick={() => setPlay(false)} className="backbtn">Back</button>
                                                            <h2 className="f_name">{value.Title}</h2>
                                                            <i>{value.Language}</i>
                                                            <h1>{value.Plot}</h1>
                                                        </section>



                                                )}


                                            </div>
                                        }
                                    </main>
                                }

                            </>}
                    </div>



                </section>
                {/* <Movie_list> */}

                {/* </Movie_list> */}
            </main>
        </>
    );
}

export default Search_result;