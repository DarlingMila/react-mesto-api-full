import './../index.css';
import React from 'react';
import CurrentUserContext from '../contexts/CurrentUserContext';

function Card(props) {
  const currentUser = React.useContext(CurrentUserContext);

  const isOwn = props.card.owner === currentUser._id;

  const isLiked = props.card.likes.some(i => i === currentUser._id);

  function handleClick() {
    props.selectImage(props.card);
  }  

  function handleLikeClick() {
    props.likeButton(props.card);
  }

  function handleCardDelete() {
    props.deleteButton(props.card);
  }

  const cardDeleteButtonClassName = (
    `${isOwn ? 'card__bin-button' : 'card__bin-button_hidden'}`
  )

  const cardLikeButtonClassName = (
    `card__like-button ${isLiked && 'card__like-button_active'}`
  )

  return(
  <li className="card"> 
    <button type="button" className={cardDeleteButtonClassName} onClick={handleCardDelete}></button>
    <img className="card__img" src={props.card.link} alt={props.card.name} onClick={handleClick}/>
    <div className="card__footer">
      <h2 className="card__title">{props.card.name}</h2>
      <div className="card__wrap-like">
        <button type="button" className={cardLikeButtonClassName} onClick={handleLikeClick}></button>
        <div className="card__like-count">{props.card.likes.length}</div>
      </div>
    </div>
  </li> 
  )
}

export default Card;