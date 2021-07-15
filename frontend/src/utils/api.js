class Api {
  constructor ({address, token, groupId}) {
    this._address = address;
    this._token = token;
    this._groupId = groupId;
  }

  _getResponseData(res) {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(new Error(`Ошибка: ${res.status}`));
    }
  }

  getInitialCards() {
    return fetch(`${this._address}/cards`)
    .then(res => {
      return this._getResponseData(res);
    })
  }

  addNewCard({name, link}) {
    return fetch(`${this._address}/cards`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: name,
        link: link

      })
    })
    .then(res => {
      return this._getResponseData(res);
    })
  }

  deleteCard(cardId) {
    return fetch (`${this._address}/cards/${cardId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => {
      return this._getResponseData(res);
    })
  }

  getUserInformation() {
    return fetch(`${this._address}/users/me`)
    .then(res => {
        return this._getResponseData(res);
    })
  }

  changeUserInformation(name, about) {
    return fetch (`${this._address}/users/me`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: name,
        about: about, 
      })
    })
    .then(res => {
      return this._getResponseData(res);
    })
  }

  changeUserAvatar(avatar) {
    return fetch (`${this._address}/users/me/avatar`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        avatar: avatar 
      })
    })
    .then(res => {
      return this._getResponseData(res);
    })
  }

  putLike(cardId) {
    return fetch (`${this._address}/cards/${cardId}/likes`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => {
      return this._getResponseData(res);
    })
  }

  removeLike(cardId) {
    return fetch (`${this._address}/cards/${cardId}/likes`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => {
      return this._getResponseData(res);
    })
  }

  changeLikeCardStatus(cardId, isLiked) {
    if (isLiked) {
      return fetch (`${this._address}/cards/${cardId}/likes`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(res => {
        return this._getResponseData(res);
      })
    } else {
      return fetch (`${this._address}/cards/${cardId}/likes`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(res => {
        return this._getResponseData(res);
      })
    }
  }

}

// const api = new Api({
//   address: 'http://api.mesto.cards.nomoredomains.club',
// }); 

const api = new Api ({
  address: 'http://localhost:3001',
}); 

export default api;