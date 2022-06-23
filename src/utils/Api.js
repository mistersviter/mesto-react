class Api {
  constructor(options) {
    this._url = options.baseUrl;
    this._headers = options.headers;
  }

  _handleResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  getUserInfo() {
    return fetch(`${this._url}/users/me`, {
      method: 'GET',
      headers: this._headers
    })
      .then(this._handleResponse)
  }

  getInitialCards() {
    return fetch(`${this._url}/cards`, {
      method: 'GET',
      headers: this._headers
    })
      .then(this._handleResponse)
  }

  updateUserInfo(userData) {
    return fetch(`${this._url}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name: userData.name,
        about: userData.about
      })
    })
      .then(this._handleResponse)
  }

  addUserCard(cardData) {
    return fetch(`${this._url}/cards`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        name: cardData.name,
        link: cardData.link
      })
    })
      .then(this._handleResponse)
  }

  deleteUserCard(cardData) {
    return fetch(`${this._url}/cards/${cardData._id}`, {
      method: 'DELETE',
      headers: this._headers
    })
      .then(this._handleResponse)
  }

  likeCard(cardData) {
    return fetch(`${this._url}/cards/${cardData._id}/likes`, {
      method: 'PUT',
      headers: this._headers
    })
      .then(this._handleResponse)
  }

  removeLikeCard(cardData) {
    return fetch(`${this._url}/cards/${cardData._id}/likes`, {
      method: 'DELETE',
      headers: this._headers
    })
      .then(this._handleResponse)
  }

  updateUserAvatar(userData) {
    return fetch(`${this._url}/users/me/avatar`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        avatar: userData.avatar
      })
    })
      .then(this._handleResponse)
  }

  getInitialData() {
    return Promise.all([this.getInitialCards(), this.getUserInfo()])
  }
}

const api = new Api (
  {
    baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-42',
    headers: {
      authorization: '8b1d9511-936f-474d-a48e-0881c6bc032b',
      'Content-Type': 'application/json'
    }
  }
)

export default api;