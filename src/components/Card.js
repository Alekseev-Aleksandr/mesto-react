function Card(props) {

    function handleClick() {
        props.onCardClick(props.card);
    }

    return (
        <div className="card">
            <img className="card__image" src={props.card.link} onClick={handleClick} />
            <h2 className="card__capture">{props.card.name}</h2>

            <div className="card__likes-container">
                <button className="card__like-button " type="button"></button>
                <span className="card__count-likes">{props.card.likes.length}</span>
            </div>

            <button className="card__trash-button" type="button"></button>
        </div>

    )
}
export default Card