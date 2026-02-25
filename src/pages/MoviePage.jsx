//import axios
import axios from "axios";

//import useState e useEffect
import { useState, useEffect } from "react";

//import Link di connessione rotte, useParams e useNavigate
import { Link, useParams, useNavigate } from "react-router-dom"

//import CardReview
import CardReview from "../components/CardReview"

//import ReviewForm
import ReviewForm from "../components/ReviewForm";

function MoviePage() {

    //creazione varibile endpoint in un salvare l'API
    const endpoint = "http://localhost:3000/api/movies/";

    //ricaviamo l'id dall'url di rotta
    const { id } = useParams();

    //salviamo un'istanza di useNavigate per poterlo poi utilizzare 
    const redirect = useNavigate();

    //creiamo una varibile di stato come un oggetto vuoto
    const [movie, setMovie] = useState({});

    //creiamo una funzione per gestire la chiamta axios alla rotta show
    function fetchMovie() {
        axios.get(endpoint + id)
            .then(res => { setMovie(res.data) })
            .catch(err => {
                console.log(err);
                if (err.response.status === 404) {
                    redirect('/404');
                }
            })

        console.log(movie);

    };

    //richiamiamo la funzione fetchMovie (una sola volta) al motnaggio della pagine grazie ad useEffect
    useEffect(fetchMovie, []);

    return (
        <>
            <main>
                <div className="movie-container">
                    <div className="movie-img-container">
                        <img className="movie-img" src={movie.image} alt={movie.title} />
                    </div>
                    <div className="movie-description-container">
                        <div>
                            <h1 className="movie-title">{movie.title}</h1>
                            <h2 className="movie-director">Directed by {movie.director}</h2>
                            <h3>Relase year: {movie.release_year}</h3>
                            <h3>Genre: {movie.genre}</h3>
                            <p className="movie-description">
                                {movie.abstract}
                            </p>
                        </div>
                        <div className="movie-back-btn-container">
                            <Link className="movie-back-btn" to="/">Back to home</Link>
                        </div>
                    </div>
                </div>
                <div className="movie-review-container">
                    <h3 className="movie-title-review">Our community reviews</h3>
                    {movie.reviews?.map(review => {
                        return (
                            <CardReview
                                key={review.id}
                                review={review} />
                        )
                    })}
                    <ReviewForm />
                </div>
            </main>
        </>
    )
}

export default MoviePage
