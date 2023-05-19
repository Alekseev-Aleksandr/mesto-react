import usePopupClose from "../hooks/usePopupClose"

function ImagePopup({ isOpen, onClose, card }) {

    usePopupClose(isOpen, onClose)

    return (
        <section className={`popup popup-show-card-image ${isOpen ? 'popup_opened' : ''}`}>

            <div className="popup__wrapper popup__card-image-wrapper">
                <button className="popup__button popup__button_type_close" onClick={onClose} type="button"></button>
                <img className="popup__full-image" src={`${card.link}`} alt={`${card.name}`} />
                <p className="popup__full-image-capture">{`${card.name}`}</p>
            </div>

        </section>
    )
}

export default ImagePopup