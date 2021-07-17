import React from 'react';
import './../index.css';

import Card from './Card';

import CurrentUserContext from '../contexts/CurrentUserContext';

function Main(props) {
  const currentUser = React.useContext(CurrentUserContext);

  return(
    <main className="content">

      <section className="profile">
        <button onClick={props.onEditAvatar} type="button" className="profile__change-avatar-button">
          <img className="profile__avatar" src={currentUser.avatar} alt="Аватар профиля" />
        </button>
        <div className="profile__info">
          <div className="profile__wrap">
            <h1 className="profile__name">{currentUser.name}</h1>
            <button onClick={props.onEditProfile} type="button" className="profile__edit-button"></button>
          </div>
          <p className="profile__profession">{currentUser.about}</p>
        </div>
        <button onClick={props.onAddPlace} type="button" className="profile__add-button"></button>
      </section>

      <section>
        <ul className="gallery-grid">
          {props.cards.map((item) => (
            <Card
              key={item._id}
              id={item._id}
              card={item}
              selectImage={props.onCardClick}
              likeButton={props.onCardLike}
              deleteButton={props.onCardDelete}
            />
           )
          ).reverse()}
        </ul>
      </section>

    </main>
  )
}

export default Main;