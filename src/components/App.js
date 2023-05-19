import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import ImagePopup from './ImagePopup.js';
import { useState, useEffect } from 'react';
import { api } from '../utils/Api.js';
import { UserInfoContext } from '../context/CurrentUserContext.js';
import EditProfilePopup from './EditProfilePopup.js';
import EditAvatarPopup from './EditAvatarPopup.js';
import AddPlacePopup from './AddPlacePopup.js';
import { AppContext } from '../context/AppContext.js';

function App() {

    const [currentUser, setCurrentUser] = useState({})
    const [cards, setCards] = useState([])

    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        api.getInitialCards()
            .then((cards) => setCards(cards))
            .catch(console.error)
        api.getUserInfo()
            .then((userInfo) => setCurrentUser(userInfo))
            .catch(console.error)
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
                .catch(console.error)
        } else {
            api.removeLikeCard(card._id)
                .then((newCard) => {
                    setCards((state) => state.map((c) => c._id === card._id ? newCard : c))
                })
                .catch(console.error)
        }

    }

    function handleCardDelete(cardId) {
        api.deleteCard(cardId)
            .then(() => setCards((state) => state.filter((card) => card._id != cardId)))
            .catch(console.error)
    }

    function handleUpdateUser(dataUs) {
        setIsLoading(true)
        api.editProfileInfo(dataUs)
            .then(setCurrentUser)
            .then(closeAllPopups)
            .catch(console.error)
            .finally(() => setIsLoading(false))
    }

    function handleUpdateAvatar(newAvatar) {
        setIsLoading(true)
        api.editAvatar(newAvatar)
            .then(setCurrentUser)
            .then(closeAllPopups)
            .catch(console.error)
            .finally(() => setIsLoading(false))
    }

    function handleAddPlaceSubmit(newCard) {
        setIsLoading(true)
        api.addNewCard(newCard)
            .then(res => {
                setCards([res, ...cards])
                closeAllPopups()
            })
            .catch(console.error)
            .finally(()=> setIsLoading(false))
    }

    return (
        <div className="root">
            <AppContext.Provider value={{ isLoading, closeAllPopups }}>

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
                        onUpdateUser={handleUpdateUser} />
                </UserInfoContext.Provider>

                <AddPlacePopup
                    isOpen={isAddPlacePopupOpen}
                    onAddPlace={handleAddPlaceSubmit} />

                <EditAvatarPopup
                    isOpen={isEditAvatarPopupOpen}
                    onUpdateAvatar={handleUpdateAvatar} />

                <ImagePopup card={selectedCard}
                    isOpen={isSelectedCardPopupOpen}
                />

            </AppContext.Provider>
        </div>
    );
}

export default App;