import { useEffect, useState } from "react";
import { get_movie } from "../services/movix";
import "../assets/style/App.css"
import { Link, useParams } from "react-router-dom";
import Navbar from "../components/navbar1";
import bg1 from "../assets/images/johnwick.jpg"
import bg2 from "../assets/images/portrait.webp"

// 
function Filter({ input }) {
    let isMounted = true
    const { param } = useParams()
    const [movies, setMovies] = useState([])
    const [play, setPlay] = useState(false)
    const [displayData, setdisplayData] = useState(null)
    const [watchList, setWatchList] = useState(0)

    useEffect(() => {
        const fetch = async () => {
            let response = null;
            try {
                if (input == "latest") {
                    response = await get_movie(input)
                } else {
                    response = await get_movie(param)
                }
                movies.push(...response.data.Search)
                setMovies(movies)
                setdisplayData(movies[0])
                console.log(movies)
                console.log(displayData)
            } catch (error) {
                console.log(error);
            }
        }

        if (isMounted) fetch()
        return () => {
            isMounted = false
        }
    }, [])


    // function watch(param, gg) {
    //     console.log(param, gg);
    //     watchList.push(movies[gg])
    //     setWatchList(watchList)
    //     console.log(watchList)
    //   }


    return (
        <>
            <main>
                <section className="background2">
                    <Navbar watchList={watchList} />


                    <main className="mb-5">{
                        !play ?
                            <section  id="top">
                                <div className="f_img" style={{ backgroundImage: `url(${bg1})` }}>
                                    <section className="watchlist"> 📜 Add to Watchlist</section>

                                    <section className="movie_display">
                                        <h2 className="f_name">{displayData?.Title}</h2>
                                        <section className="f_info">
                                            <i> imdbID {displayData?.imdbID}</i> |
                                            <i>{displayData?.Year}</i> ∙
                                            <i>{displayData?.Runtime}</i> ∙
                                            <i>{displayData?.Type}</i>
                                        </section>
                                        <button onClick={() => setPlay(true)} className="watch_now">▶</button>
                                    </section>
                                    <section className="sound"><i>Sound | Off 🔊</i></section>

                                </div>
                            </section> :
                            <section className="f_video">
                                <button onClick={() => setPlay(false)} className="backbtn">Back</button>
                                <h2 className="f_name">{displayData?.Title}</h2>
                                <i>{displayData?.Language}</i>
                                <h1>{displayData?.Plot}</h1>
                            </section>
                    }
                    </main>

                    <main>
                        <main className="row row-cols-1 row-cols-md-3 g-2 w-100 ">
                            {movies.length == 0 ? <div>No result match your search</div> :
                                < >{
                                    movies.map((value, index) =>
                                        <div key={index} className="col ">
                                            <div className="card h-100 text-center list">
                                                <div className="card-body row g-0">
                                                    <div className="col-md-5">
                                                        <img src={bg2} className="card-img" alt="..." />
                                                    </div>
                                                    <div className="col-md-7">
                                                        <h5 className="f_name">{value?.Title}</h5>
                                                        <i>{value?.Year}</i> ∙
                                                        <i>{value?.Runtime}</i> ∙
                                                        <i>{value?.Type}</i>
                                                        <div className="card-footer bg-transparent border-success d-flex ">
                                                            <section className="watchlist " onClick={() => setWatchList(watchList + 1)}>➕ Watchlist</section>
                                                            <a href="#top" onClick={() => setdisplayData(movies[index])} >
                                                                <button className="watch_now2">
                                                                    ▶
                                                                </button>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                </>
                            }
                        </main>
                    </main>
                </section>
                
            </main>
        </>
    );
}

export default Filter;