class Auth {
  constructor({address}) {
    this._address = address;
  }

  _getResponseData(res) {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(new Error(`Ошибка: ${res.status}`));
    }
  }

  register(password, email) {
    return fetch(`${this._address}/signup`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({password, email})
    })
    .then(res => {
      return this._getResponseData(res);
    })
  }

  authorize(password, email) {
    return fetch(`${this._address}/signin`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({password, email})
    })
    .then(res => {
      return this._getResponseData(res);
    })
  }

  getUserInfo(token) {
    return fetch(`${this._address}/users/me`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    })
    .then(res => {
      return this._getResponseData(res);
    })
  }
}

const auth = new Auth ({
  address: 'http://api.mesto.cards.nomoredomains.club',
}); 

export default auth;