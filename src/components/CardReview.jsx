function CardReview(props) {

    const { name, vote, text } = props.review

    return (
        <div className="card-review-container">
            <div className="card-review-name-vote-container">
                <h4 className="card-review-name">By {name}</h4>
                <h4 className="card-review-vote">Vote:{vote}/5</h4>
            </div>
            <p className="card-review-text">{text}?</p>
        </div>
    )
}

export default CardReview