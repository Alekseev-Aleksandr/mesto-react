import { useContext, useEffect, useState } from "react"
import PopupWithForm from "./PopupWithForm"
import { UserInfoContext } from "../context/CurrentUserContext"

function EditProfilePopup({isOpen, onUpdateUser}) {
    const currentUser = useContext(UserInfoContext)

    const [name, setName] = useState(' ')
    const [description, setDescription] = useState(' ')
    
    function handleChangeName(e){
        setName(e.target.value)
    }

    function handleChangeDescription(e){
        setDescription(e.target.value)
    }

    function handleSubmit(e){
        e.preventDefault();
        onUpdateUser({
            name: name,
            about: description
        })
    }

    useEffect(()=>{
        setName(currentUser.name)
        setDescription(currentUser.about)
    },[currentUser, isOpen])

    return (
        <PopupWithForm title='Редактировать профиль'
            isOpen={isOpen}
            onSubmit={handleSubmit}>

            <div className="popup__items-wrapper">
                <input className="popup__input popup__input_type_firstname"
                    id="popup__input-firstname"
                    name="firstname"
                    required
                    minLength="2"
                    maxLength="40"
                    placeholder='Имя'
                    value={name || ''}
                    onChange={handleChangeName} />

                <span className="popup__inputs-error popup__input-firstname-error"></span>
            </div>
            <div className="popup__items-wrapper">
                <input className="popup__input popup__input_type_profession"
                    id="popup__input-profession"
                    name="profession"
                    required
                    minLength="2"
                    maxLength="200"
                    placeholder='Обо мне'
                    value={description || ''} 
                    onChange={handleChangeDescription}/>

                <span className="popup__inputs-error popup__input-profession-error"></span>
            </div>
        </PopupWithForm>
    )
}
export default EditProfilePopup