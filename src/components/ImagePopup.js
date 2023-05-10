function ImagePopup(props) {

    return (
        <section className={`popup popup-show-card-image ${props.isOpen ? 'popup_opened' : ''}`}>

            <div className="popup__wrapper popup__card-image-wrapper">
                <button className="popup__button popup__button_type_close" onClick={props.onClose} type="button"></button>
                <img className="popup__full-image" src={`${props.card.link}`} alt={`${props.card.name}`} />
                <p className="popup__full-image-capture">{`${props.card.name}`}</p>
            </div>

        </section>
    )
}

export default ImagePopup