import { Link } from "react-router-dom"

function CardMovie(props) {

    const { id, title, director, image } = props.movie;

    return (
        <>
            <div className="card-movie">
                <img className="card-movie-img" src={image} alt={title} />
                <div className="card-movie-title-container">
                    <Link to={`/movie/${id}`} className="card-movie-title">{title}</Link>
                </div>
                <h4 className="card-movie-director">Directed by {director}</h4>
            </div>
        </>

    )
}

export default CardMovie
