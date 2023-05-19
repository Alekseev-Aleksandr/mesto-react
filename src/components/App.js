import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import PopupWithForm from './PopupWithForm.js';
import ImagePopup from './ImagePopup.js';
import { useState, useEffect } from 'react';
import { api } from '../utils/Api.js';
import { UserInfoContext } from '../context/CurrentUserContext.js';
import EditProfilePopup from './EditProfilePopup.js';
import EditAvatarPopup from './EditAvatarPopup.js';
import AddPlacePopup from './AddPlacePopup.js';

function App() {

    const [currentUser, setCurrentUser] = useState({})
    const [cards, setCards] = useState([])

    useEffect(() => {
        api.getInitialCards()
            .then((cards) => setCards(cards))
            .catch((err) => { console.log(err); })
        api.getUserInfo()
            .then((userInfo) => setCurrentUser(userInfo))
            .catch((err) => { console.log(err); })
    }, [])


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

    function handleCardLike(card) {
        const isLike = card.likes.some(i => i._id === currentUser._id)

        if (!isLike) {
            api.addLikeCard(card._id)
                .then((newCard) => {
                    setCards((state) => state.map((c) => c._id === card._id ? newCard : c))
                })
                .catch((err) => { console.log(err); })
        } else {
            api.removeLikeCard(card._id)
                .then((newCard) => {
                    setCards((state) => state.map((c) => c._id === card._id ? newCard : c))
                })
                .catch((err) => { console.log(err); })
        }

    }

    function handleCardDelete(cardId) {
        api.deleteCard(cardId)
            .then(() => setCards(cards.filter((card) => card._id != cardId)))
            .catch((err) => { console.log(err); })
    }

    function handleUpdateUser(dataUs) {
        api.editProfileInfo(dataUs)
            .then(newInfoUser => {
                setCurrentUser(newInfoUser)
                closeAllPopups()
            })
            .catch((err) => { console.log(err); })
    }

    function handleUpdateAvatar(newAvatar) {
        api.editAvatar(newAvatar)
            .then(newInfoUser => {
                setCurrentUser(newInfoUser)
                closeAllPopups()
            })
            .catch((err) => { console.log(err); })
    }

    function handleAddPlaceSubmit(newCard) {
        api.addNewCard(newCard)
            .then(res => {
                setCards([res, ...cards])
                closeAllPopups()
            })
            .catch((err) => { console.log(err); })
    }

    return (
        <div className="root">
            <Header />
            <UserInfoContext.Provider value={currentUser}>

                <Main onEditProfile={handleEditProfileClick}
                    onAddPlace={handleAddPlaceClick}
                    onEditAvatar={handleEditAvatarClick}
                    onCardClick={handleCardClick}
                    onCardLike={handleCardLike}
                    onCardDelete={handleCardDelete}
                    cards={cards} />

                <Footer />

                <EditProfilePopup isOpen={isEditProfilePopupOpen}
                    onClose={closeAllPopups}
                    onUpdateUser={handleUpdateUser} />
            </UserInfoContext.Provider>

            <AddPlacePopup
                isOpen={isAddPlacePopupOpen}
                onClose={closeAllPopups}
                onAddPlace={handleAddPlaceSubmit} />

            <EditAvatarPopup
                isOpen={isEditAvatarPopupOpen}
                onClose={closeAllPopups}
                onUpdateAvatar={handleUpdateAvatar} />

            <ImagePopup card={selectedCard}
                isOpen={isSelectedCardPopupOpen}
                onClose={closeAllPopups} />

        </div>
    );
}



export default App;
