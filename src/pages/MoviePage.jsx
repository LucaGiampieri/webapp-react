//import Link di connessione rotte
import { Link } from "react-router-dom"

//import CardReview
import CardReview from "../components/CardReview"

function MoviePage() {

    return (
        <main>
            <div className="movie-container">
                <div className="movie-img-container">
                    <img className="movie-img" src="https://pad.mymovies.it/filmclub/2002/06/038/locandina.jpg" alt="Metropolis" />
                </div>
                <div className="movie-description-container">
                    <h1 className="movie-title">Metropolis</h1>
                    <h2 className="movie-director">Directed by Fritz Lang</h2>
                    <p className="movie-description">
                        Set in a futuristic, dystopian city in the year 2026, Metropolis depicts a sharply stratified society. The wealthy elite live in luxury in skyscrapers and "Pleasure Gardens" above ground, while the working class toils in an underground, dark industrial city, operating the machinery that powers the upper world.
                    </p>
                    <div className="movie-back-btn-container">
                        <Link className="movie-back-btn" to="/">Back to home</Link>
                    </div>
                </div>
            </div>
            <CardReview />



        </main>
    )
}

export default MoviePage
