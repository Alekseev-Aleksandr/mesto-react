class Api {

    constructor(setFromServer) {
        this._baseUrl = setFromServer.baseUrl
        this._headers = setFromServer.headers
    }
    chekAnswer(res) {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
    }

    getInitialCards() {
        return fetch(`${this._baseUrl}/cards`,
            {
                method: 'GET',
                headers: this._headers
            })
            .then((res) => {
                res = this.chekAnswer(res)
                return res
            })
    }

    getUserInfo() {
        return fetch(`${this._baseUrl}/users/me`,
            {
                method: "GET",
                headers: this._headers
            })
            .then((res) => res.json())
    }

    editProfileInfo(data) {

        return fetch(`${this._baseUrl}/users/me`,
            {
                method: "PATCH",
                headers: this._headers,
                body: JSON.stringify({
                    name: data.name,
                    about: data.about
                })
            })
            .then((res) => {
                res = this.chekAnswer(res)
                return res
            })
            
    }

    addNewCard(data) {
        
        return fetch(`${this._baseUrl}/cards`,
            {
                method: "POST",
                headers: this._headers,
                body: JSON.stringify({
                    name: data.nameImage,
                    link: data.linkImage
                })
            })
            .then((res) => {
                res = this.chekAnswer(res)
                return res
            })
            
    }


    editAvatar(data) { 
        return fetch(`${this._baseUrl}/users/me/avatar`,
            {
                method: "PATCH",
                headers: this._headers,
                body: JSON.stringify({
                    avatar: data.linkImageAvatar
                })
            })
            .then((res) => {
                res = this.chekAnswer(res)
                return res
            })
           
    }

    deleteCard(cardId) {
        return fetch(`${this._baseUrl}/cards/${cardId}`,
            {
                method: "DELETE",
                headers: this._headers,
            })
            .then((res) => {
                res = this.chekAnswer(res)
                return res
            })
           
    }

    addLikeCard(cardId) {
        return fetch(`${this._baseUrl}/cards/${cardId}/likes`,
            {
                method: "PUT",
                headers: this._headers,
            })
            .then((res) => {
                res = this.chekAnswer(res)
                return res
            })
    }

    removeLikeCard(cardId) {
        return fetch(`${this._baseUrl}/cards/${cardId}/likes`,
            {
                method: "DELETE",
                headers: this._headers,
            })
            .then((res) => {
                res = this.chekAnswer(res)
                return res
            })
    }
}

export const api = new Api({
    baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-62',
    headers: {
        authorization: 'f2a9a4e2-fdf5-42ce-aab3-69e2f1a13e71',
        'Content-Type': 'application/json'
    }
})