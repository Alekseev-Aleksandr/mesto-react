import { useRef } from "react"
import PopupWithForm from "./PopupWithForm"

function EditAvatarPopup({isOpen, onClose, onUpdateAvatar}) {

    const newAvatar = useRef()

    function handleSubmit(e){
        e.preventDefault()

        onUpdateAvatar({
            linkImageAvatar: newAvatar.current.value
        })
    }

    return (
        <PopupWithForm title='Обновить аватар'
            isOpen={isOpen}
            onClose={onClose}
            buttonText={'Сохранить'}
            onSubmit={handleSubmit} >

            <div className="popup__items-wrapper">
                <input className="popup__input popup__input_type_profession"
                    id="popup__input-profession"
                    name="profession"
                    required
                    minLength="2"
                    maxLength="200"
                    placeholder='Ссылка'
                    ref={newAvatar} />

                <span className="popup__inputs-error popup__input-profession-error"></span>
            </div>

        </PopupWithForm>)
}

export default EditAvatarPopup