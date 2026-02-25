//import axios
import axios from "axios";

//import useState 
import { useState } from "react";

function ReviewForm(props) {

    //ricaviamo in prop l'id del film
    const { movie_id } = props;

    //salviamo l'url API in una costante (con id dinamico)
    const endpoint = `http://localhost:3000/api/movies/${movie_id}/reviews`;

    //creiamo una variabile per i valori di defaul iniziali e a cui dobbiamo tornarnare dopo submit
    const initialFormData = {
        name: "",
        text: "",
        vote: ""
    }

    //creiamo una varibile di stato per inserire i dati di input del form
    const [formData, setFormData] = useState(initialFormData);

    //creiamo una funzione per gestire i dati del form all'invio
    function setFieldValue(e) {
        setFormData((formData) => ({
            ...formData,
            [e.target.name]: e.target.value,
        }));
    };

    //creiamo una funzione per gestire il submit del form e aggiunta dei dati al DB
    function handleSubmit(e) {
        //preveniamo il refresh della pagina
        e.preventDefault();
        //chimata all'endpoint axios
        axios.post(endpoint, formData, { headers: { 'Content-Type': 'application/json' } })
            .then(() => {
                //svuotiamo i campi del form
                setFormData(initialFormData);

                console.log("Call successful")
            })
            .catch((err) => {
                console.log(err);
            })
    };

    return (
        <form className="review-form" onSubmit={handleSubmit} >
            <div className="review-form-separator">
                <label>Name</label>
                <input type="text" name="name" className="review-form-name" value={formData.name} placeholder="Enter your name" onChange={setFieldValue} required />
            </div>
            <div className="review-form-separator">
                <label>Review</label>
                <textarea className="review-form-text" name="text" value={formData.text} placeholder="Enter your review here" onChange={setFieldValue} required />
            </div>
            <div className="review-form-separator">
                <label>Voto</label>
                <input type="number" name="vote" min="1" max="5" className="reviwe-form-vote" value={formData.vote} placeholder="Enter your vote here" onChange={setFieldValue} required />
            </div>
            <div className="review-form-separator">
                <button type="submit" className="review-form-btn" >Send your review</button>
            </div>
        </form >

    )
}

export default ReviewForm