import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import PopupWithForm from './PopupWithForm.js';
import ImagePopup from './ImagePopup.js';
import React, { useState } from 'react';

function App() {

    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false)
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false)
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false)

    const [isSelectedCardPopupOpen, setIsSelectedCardPopupOpen] = React.useState(false)
    const [selectedCard, setSelectedCard] = React.useState({})

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
                id='edit-profile'
                isOpen={isEditProfilePopupOpen}
                onClose={closeAllPopups} >

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
                <button className="popup__button popup__button_type_save popup__button_active"
                    type="submit">Сохранить</button>

            </PopupWithForm>.

            <PopupWithForm title='Новое место'
                id='add-card'
                isOpen={isAddPlacePopupOpen}
                onClose={closeAllPopups} >

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
                <button className="popup__button popup__button_type_save popup__button_active"
                    type="submit">Сохранить</button>

            </PopupWithForm>

            <PopupWithForm title='Обновить аватар'
                id='edit-avatar'
                isOpen={isEditAvatarPopupOpen}
                onClose={closeAllPopups}>

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
                <button className="popup__button popup__button_type_save popup__button_active"
                    type="submit">Сохранить</button>

            </PopupWithForm>

            <ImagePopup card={selectedCard}
                isOpen={isSelectedCardPopupOpen}
                onClose={closeAllPopups} />

        </div>
    );
}



export default App;


{/* <section className="popup popup-edit-profile">

        <div className="popup__wrapper">
            <button className="popup__button popup__button_type_close" type="button"></button>
            <h2 className="popup__name">Редактировать профиль</h2>

            <form className="popup__items edit-profile-form" name="info" noValidate>
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
            </form>
        </div>
    </section>

    <section className="popup popup-add-card">

        <div className="popup__wrapper">
            <button className="popup__button popup__button_type_close" type="button"></button>
            <h2 className="popup__name">Новое место</h2>

            <form className="popup__items add-card-form" name="info">
                <div className="popup__items-wrapper">
                    <input className="popup__input popup__input_type_firstname" placeholder="Название" name="nameImage"
                        id="name-image-input" required minLength="2" maxLength="30"/>

                    <span className="popup__inputs-error name-image-input-error"></span>
                </div>
                <div className="popup__items-wrapper">
                    <input className="popup__input popup__input_type_profession" placeholder="Ссылка на картинку" type="url"
                        id="link-image-input" name="linkImage" required/>

                    <span className="popup__inputs-error link-image-input-error"></span>
                </div>
                <button className="popup__button popup__button_type_save" type="submit">Сохранить</button>

            </form>
        </div>

    </section> */}
{/* 
    <section className="popup popup-show-card-image">

        <div className="popup__wrapper popup__card-image-wrapper">
            <button className="popup__button popup__button_type_close" type="button"></button>
            <img className="popup__full-image" src="#" alt=""/>
            <p className="popup__full-image-capture"></p>
        </div>

    </section> */}

{/* <section className="popup popup-confirm">
        <div className="popup__wrapper">
            <button className="popup__button popup__button_type_close" type="button"></button>
            <h2 className="popup__name">Вы уверены?</h2>
            <button className="popup__button popup__button_type_confirm popup__button_active" type="button"> Да</button>
        </div>

     </section> */}

{/*<section className="popup popup-edit-avatar">
        <div className="popup__wrapper">
            <button className="popup__button popup__button_type_close" type="button"></button>
            <h2 className="popup__name">Обновить аватар</h2>

            <form className="popup__items edit-avatar" name="info">

                <div className="popup__items-wrapper">
                    <input className="popup__input popup__input_type_link-avatar" placeholder="Ссылка на картинку" type="url"
                        id="link-image-edit-avatar" name="linkImageAvatar" required/>

                    <span className="popup__inputs-error link-image-edit-avatar-error"></span>
                </div>

                <button className="popup__button popup__button_type_save popup__button_active" type="submit"> Cохранить</button>
            </form>

        </div>

    </section> */}