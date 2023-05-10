function PopupWithForm(props) {

    return (
        <section className={`popup popup-${props.id} ${props.isOpen ? 'popup_opened' : ''}`}>

            <div className="popup__wrapper">
                <button className="popup__button popup__button_type_close" type="button" onClick={props.onClose}></button>
                <h2 className="popup__name">{props.title}</h2>

                <form>
                    {props.children}
                </form>
                
            </div>
        </section>
    )
}

export default PopupWithForm

/*<form className="popup__items edit-profile-form" name={props.name} noValidate>
                <div className="popup__items-wrapper">
                    <input className="popup__input popup__input_type_firstname" id="popup__input-firstname" name="firstname"
                        required minLength="2" maxLength="40"/>

                    <span className="popup__inputs-error popup__input-firstname-error"></span>
                </div>
                <div className="popup__items-wrapper">
                    <input className="popup__input popup__input_type_profession" id="popup__input-profession"
                        name="profession" required minLength="2" maxLength="200"/>

                    <span className="popup__inputs-error popup__input-profession-error"></span>
                </div>
                <button className="popup__button popup__button_type_save popup__button_active"
                    type="submit">Сохранить</button>
            </form>*/