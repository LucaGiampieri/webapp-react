import { Link } from "react-router-dom"

function CardMovie() {

    return (
        <>
            <div className="card-movie">
                <img className="card-movie-img" src="https://pad.mymovies.it/filmclub/2002/06/038/locandina.jpg" alt="Metropolis" />
                <div className="card-movie-title-container">
                    <Link to="/movie/:id" className="card-movie-title">Metropolis</Link>
                </div>
                <h4 className="card-movie-director">Directed by Fritz Lang</h4>
            </div>
        </>

    )
}

export default CardMovie
