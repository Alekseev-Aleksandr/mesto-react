import { api } from "../utils/Api"
import React from "react"
import Card from "./Card.js"

function Main(props) {
    const [userName, setUserName] = React.useState()
    const [userDescription, setUserDescription] = React.useState()
    const [userAvatar, setUserAvatar] = React.useState()
    const [cards, setCards] = React.useState([])

    React.useEffect(() => {
        api.getInitialCards()
            .then((cards) => {
                setCards(cards)
            })
    }, [])

    React.useEffect(() => {
        api.getUserInfo()
            .then((userInfo) => {

                setUserName(userInfo.name)
                setUserDescription(userInfo.about)
                setUserAvatar(userInfo.avatar)
            })

    },
        [userName, userDescription, userAvatar])

    return (
        <main className="main">

            <section className="profile">

                <button className="profile__button profile__button_type_edit-avatar" onClick={props.onEditAvatar}>
                    <img className="profile__avatar-image" src={userAvatar} alt="Аватар" />
                </button>

                <div className="profile__info">
                    <div className="profile__first-name">
                        <h1 className="profile__info-title">{userName}</h1>
                        <button className="profile__button profile__button_type_edit-info" type="button" onClick={props.onEditProfile}></button>
                    </div>
                    <p className="profile__info-subtitle">{userDescription}</p>
                </div>

                <button className="profile__button profile__button_type_add-card" type="button" onClick={props.onAddPlace}></button>
            </section>

            <section className="photo-grid" aria-label="Посты">

                {
                    cards.map((el) => (
                        <Card card={el}
                            key={el._id}
                            onCardClick={props.onCardClick} />
                    ))
                }

            </section>

        </main>
    )

}

export default Main