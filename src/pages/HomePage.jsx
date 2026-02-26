//import axios
import axios from "axios";

//import useState e useEffect
import { useState, useEffect } from "react";

//import useGlobal
import { useGlobal } from "../context/GlobalContext";

//import CardMovie
import CardMovie from "../components/CardMovie"


function HomePage() {

    //importiamo gli elementi che ci servono tramite la useContext
    const { setIsLoading } = useGlobal();

    //creazione varibile endpoint in un salvare l'API
    const endpoint = "http://localhost:3000/api/movies";

    //creazione varbile di stato come un array vuoto
    const [movies, setMovies] = useState([]);

    //creiamo una funzione per gestire la chiamta axios alla rotta index
    function fetchMovies() {

        //facciamo in modo che all'avvio della chiamata la varibile di stato cambi in true e parta il Loader
        setIsLoading(true)

        axios.get(endpoint)
            .then(res => { setMovies(res.data) })
            .catch(err => {
                console.log(err);
            })
            //facciamo in modo che a chiamta effettuata la varibile di stato torni false e scompaia il Loader
            .finally(() => {
                //metto questi secondi per verificare che funzioni
                setTimeout(() => setIsLoading(false), 1000);
            });
    };

    //richiamiamo la funzione fetchMovies (una sola volta) al motnaggio della pagine grazie ad useEffect
    useEffect(fetchMovies, []);

    return (
        <main>
            <div className="home-title-container">
                <h1 className="home-title">Bool Movie</h1>
                <h2 className="home-subtitle">The boolean nerd movie community</h2>
            </div>
            <div className="home-card-container">
                {movies.map(movie => {
                    return (< CardMovie
                        key={movie.id}
                        movie={movie}
                    />
                    )
                })}
            </div>
        </main>
    )
}

export default HomePage
