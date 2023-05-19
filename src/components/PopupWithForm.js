function PopupWithForm(props) {

    return (
        <section className={`popup ${props.isOpen ? 'popup_opened' : ''}`}>

            <div className="popup__wrapper">
                <button className="popup__button popup__button_type_close"
                    type="button"
                    onClick={props.onClose}>
                </button>

                <h2 className="popup__name">{props.title}</h2>

                <form onSubmit={props.onSubmit}>
                    {props.children}
                    <button className="popup__button popup__button_type_save popup__button_active"
                        type="submit">{props.buttonText}
                    </button>
                </form>

            </div>
        </section>
    )
}

export default PopupWithForm
