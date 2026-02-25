//import axios
import axios from "axios";

//import useState 
import { useState } from "react";

function ReviewForm(props) {

    //ricaviamo in prop l'id del film
    const { movie_id } = props;

    //salviamo l'url API in una costante (con id dinamico)
    const endpoint = `http://localhost:3000/api/movies/${movie_id}/reviews`;

    //creiamo una varibile di stato per inserire i dati di input del form
    const [formData, setFormData] = useState({
        name: "",
        text: "",
        vote: null
    });

    return (
        <form className="review-form" >
            <div className="review-form-separator">
                <label>Name</label>
                <input type="text" name="name" className="review-form-name" value={formData.name} placeholder="Enter your name" required />
            </div>
            <div className="review-form-separator">
                <label>Review</label>
                <textarea className="review-form-text" name="text" value={formData.text} placeholder="Enter your review here" required />
            </div>
            <div className="review-form-separator">
                <label>Voto</label>
                <input type="number" name="vote" min="1" max="5" className="reviwe-form-vote" value={formData.vote} placeholder="Enter your vote here" required />
            </div>
            <div className="review-form-separator">
                <button type="submit" className="review-form-btn" >Send your review</button>
            </div>
        </form >

    )
}

export default ReviewForm