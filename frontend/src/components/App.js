import React from 'react';
import { Route, Switch, useHistory, Redirect } from 'react-router-dom';

import api from '../utils/api';
import auth from '../utils/auth'
import './../index.css';

import Register from './Register';
import Login from './Login';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';

import SuccessPopup from './SuccessPopup';
import ErrorPopup from './ErrorPopup';

import ProtectedRoute from './ProtectedRoute';

import CurrentUserContext from '../contexts/CurrentUserContext';

function App() {

  const [loggedIn, setLoggedIn] = React.useState(false);
  const [userEmail, setUserEmail] = React.useState('');

  const [successMessage, setSuccessMessage] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState(false);

  const history = useHistory();

  const tokenCheck = React.useCallback(() => {
    const jwt = localStorage.getItem('jwt');

    if (jwt) {
      auth.getUserInfo(jwt)
      .then((res) => {
        setUserEmail(res.user.email);
        setLoggedIn(true);
        history.push('/main');
      })
      .catch(() => {
        history.push('/sign-in')})
    }
  }, [history]) 

  React.useEffect(() => {
    tokenCheck();
  }, [tokenCheck])

  React.useEffect(() => {
    if (loggedIn) {
      const jwt = localStorage.getItem('jwt');

      if (jwt) {
        auth.getUserInfo(jwt)
        .then((res) => {
          setUserEmail(res.user.email);
        })
        .catch(err => console.log('Ошибка при получении почты пользователя'));
      }
    }
  }, [loggedIn])

  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);

  const [cards, setCards] = React.useState([]);
  const [selectedCard, setSelectedCard] = React.useState();

  const [currentUser, setCurrentUser] = React.useState({});

  React.useEffect(() => {
    const jwt = localStorage.getItem('jwt');
    api.getUserInformation(jwt)
    .then((res) => {
      const user = res.user;
      setCurrentUser(user);
    })
    .catch(err => console.log('Ошибка загрузки данных пользователя'));
  }, [loggedIn])

  React.useEffect(() => {
    const jwt = localStorage.getItem('jwt');
    api.getInitialCards(jwt)
    .then((res) => {
      setCards(res);
    })
    .catch(err => console.log('Ошибка загрузки карточек'));
  }, [loggedIn])

  function handleCardLike(card) {
    const jwt = localStorage.getItem('jwt');
    const isLiked = card.likes.some(i => i === currentUser._id);
    
    api.changeLikeCardStatus(card._id, !isLiked, jwt)
    .then((newCard) => {
      const newCards = cards.map((c) => c._id === card._id ? newCard.card : c);
      setCards(newCards);
    })
    .catch(err => console.log('Ошибка лайка'));
  } 

  function handleCardDelete(card) {
    const jwt = localStorage.getItem('jwt');
    api.deleteCard(card._id, jwt)
    .then(() => {
      const newCards = cards.filter((c) => c._id !== card._id);
      setCards(newCards);
    })
    .catch(err => console.log('Ошибка при удалении карточки'));
  }


  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
 }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);

    setSelectedCard(null);
    setSuccessMessage(null);
    setErrorMessage(null);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function handleUpdateUser({name, about}) {
    const jwt = localStorage.getItem('jwt');
    api.changeUserInformation(name, about, jwt)
    .then((res) => {
      setCurrentUser(res);
      setIsEditProfilePopupOpen(false);
    })
    .catch(err => console.log('Ошибка при изменении данных пользователя'));
  }

  function handleUpdateAvatar({avatar}) {
    const jwt = localStorage.getItem('jwt');
    api.changeUserAvatar(avatar, jwt)
    .then((res) => {
      setCurrentUser(res);
      setIsEditAvatarPopupOpen(false);
    })
    .catch(err => console.log('Ошибка при изменении аватара пользователя'));
  }

  const handleAddPlaceSubmit = ({name, link}) => {
    const jwt = localStorage.getItem('jwt');
    api.addNewCard({name, link}, jwt)
    .then((newCard) => {
      setCards([...cards, newCard.card]); 
      setIsAddPlacePopupOpen(false);
    })
    .catch(err => console.log('Ошибка при добавлении новой карточки'));
  }

  const handleRegister = (password, email) => {
    return auth.register(password, email)
    .then(res => {
      setSuccessMessage(true);
      history.push('/sign-in');
      return res;
    })
    .catch(() => {
      setErrorMessage(true);
    })
  }

  const handleLogin = (password, email)  => {
    return auth.authorize(password, email)    
    .then(res => {
      if (res) {
        setLoggedIn(true);
        localStorage.setItem('jwt', res.token);
      }
    })
    .catch(() => {
      setErrorMessage(true);
    })
  }

  const handleSignOut = () => {
    localStorage.removeItem('jwt');
    setUserEmail(null);
    setLoggedIn(false);
    history.push('/sign-in');
  }

  
  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page"> 

        <div className="page__container"> 

          <Header onSignOut={handleSignOut} userEmail={userEmail} />
          
          <Switch>
            <ProtectedRoute 
              path="/main" 
              loggedIn={loggedIn}
              component={Main}
              onEditAvatar={handleEditAvatarClick}
              onEditProfile={handleEditProfileClick}
              onAddPlace={handleAddPlaceClick}
              onCardClick={handleCardClick}
              onCardLike={handleCardLike}
              onCardDelete={handleCardDelete}
              cards={cards}
            />
            
            {/* для регистрации пользователя */}
            <Route path="/sign-up">
              <Register onRegister={handleRegister} />
            </Route>
            
            {/* для авторизации пользователя */}
            <Route path="/sign-in">
              <Login onLogin={handleLogin} />
            </Route>

            <Route>
              {loggedIn ? <Redirect to="/main" /> : <Redirect to="/sign-up" />}
             </Route>
            
          </Switch>
          
          <Footer loggedIn={loggedIn} />

          {/* попапы */}

          <SuccessPopup
          isOpen={successMessage}
          onClose={closeAllPopups}
          />

          <ErrorPopup 
          isOpen={errorMessage}
          onClose={closeAllPopups}
          />

          {/* «Редактировать профиль» */}
          <EditProfilePopup 
          isOpen={isEditProfilePopupOpen} 
          onClose={closeAllPopups} 
          onUpdateUser={handleUpdateUser}
          /> 

          {/* «Новое место» */}
          <AddPlacePopup 
          isOpen={isAddPlacePopupOpen} 
          onClose={closeAllPopups} 
          onAddPlace={handleAddPlaceSubmit}
          /> 

          {/* «Обновить аватар» */}
          <EditAvatarPopup 
          isOpen={isEditAvatarPopupOpen} 
          onClose={closeAllPopups} 
          onUpdateAvatar={handleUpdateAvatar}
          /> 

          {/* «Вы уверены?» */}
          <PopupWithForm 
          name="confirm" 
          title="Вы уверены?" 
          isOpen="" 
          onClose={closeAllPopups}
          />

          {/* Открытие картинки */}
          <ImagePopup
          card={selectedCard}
          isOpen={selectedCard}
          onClose={closeAllPopups}
          />

        </div>

      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
