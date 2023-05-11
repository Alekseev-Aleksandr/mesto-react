import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import PopupWithForm from './PopupWithForm.js';
import ImagePopup from './ImagePopup.js';
import { useState } from 'react';

function App() {

    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false)
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false)
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false)

    const [isSelectedCardPopupOpen, setIsSelectedCardPopupOpen] = useState(false)
    const [selectedCard, setSelectedCard] = useState({})

    function handleEditProfileClick() {
        setIsEditProfilePopupOpen(!isEditProfilePopupOpen)
    }

    function handleEditAvatarClick() {
        setIsEditAvatarPopupOpen(!isEditAvatarPopupOpen)
    }

    function handleAddPlaceClick() {
        setIsAddPlacePopupOpen(!isAddPlacePopupOpen)
    }

    function closeAllPopups() {
        setIsEditProfilePopupOpen(false)
        setIsEditAvatarPopupOpen(false)
        setIsAddPlacePopupOpen(false)
        setIsSelectedCardPopupOpen(false)
    }

    function handleCardClick(cardData) {
        setIsSelectedCardPopupOpen(!isSelectedCardPopupOpen)
        setSelectedCard(cardData)
    }

    return (
        <div className="root">
            <Header />
            <Main onEditProfile={handleEditProfileClick}
                onAddPlace={handleAddPlaceClick}
                onEditAvatar={handleEditAvatarClick}
                onCardClick={handleCardClick} />
            <Footer />

            <PopupWithForm title='Редактировать профиль'
                isOpen={isEditProfilePopupOpen}
                onClose={closeAllPopups} 
                buttonText={'Сохранить'}>

                <div className="popup__items-wrapper">
                    <input className="popup__input popup__input_type_firstname"
                        id="popup__input-firstname"
                        name="firstname"
                        required
                        minLength="2"
                        maxLength="40"
                        placeholder='Имя' />

                    <span className="popup__inputs-error popup__input-firstname-error"></span>
                </div>
                <div className="popup__items-wrapper">
                    <input className="popup__input popup__input_type_profession"
                        id="popup__input-profession"
                        name="profession"
                        required
                        minLength="2"
                        maxLength="200"
                        placeholder='Обо мне' />

                    <span className="popup__inputs-error popup__input-profession-error"></span>
                </div>
                

            </PopupWithForm>.

            <PopupWithForm title='Новое место'
                isOpen={isAddPlacePopupOpen}
                onClose={closeAllPopups}
                buttonText={'Сохранить'} >

                <div className="popup__items-wrapper">
                    <input className="popup__input popup__input_type_firstname"
                        id="popup__input-firstname"
                        name="firstname"
                        required
                        minLength="2"
                        maxLength="40"
                        placeholder='Новое место' />

                    <span className="popup__inputs-error popup__input-firstname-error"></span>
                </div>
                <div className="popup__items-wrapper">
                    <input className="popup__input popup__input_type_profession"
                        id="popup__input-profession"
                        name="profession"
                        required
                        minLength="2"
                        maxLength="200"
                        placeholder='Ссылка' />

                    <span className="popup__inputs-error popup__input-profession-error"></span>
                </div>

            </PopupWithForm>

            <PopupWithForm title='Обновить аватар'
                isOpen={isEditAvatarPopupOpen}
                onClose={closeAllPopups}
                buttonText={'Сохранить'} >

                <div className="popup__items-wrapper">
                    <input className="popup__input popup__input_type_profession"
                        id="popup__input-profession"
                        name="profession"
                        required
                        minLength="2"
                        maxLength="200"
                        placeholder='Ссылка' />

                    <span className="popup__inputs-error popup__input-profession-error"></span>
                </div>

            </PopupWithForm>

            <ImagePopup card={selectedCard}
                isOpen={isSelectedCardPopupOpen}
                onClose={closeAllPopups} />

        </div>
    );
}



export default App;
