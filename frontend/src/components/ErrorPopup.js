import React from 'react';
import './../index.css';
import InfoTooltip from './InfoTooltip';
import error from './../images/error.svg';

function ErrorPopup(props) {


  return(
    <InfoTooltip 
    isOpen={props.isOpen}
    onClose={props.onClose}
    >
      <div className="popup__info-wrap">
        <img src={error} alt="Ошибка" />
        <h2 className="popup__title popup__title_info">Что-то пошло не так! Попробуйте ещё раз.</h2>
      </div>

    </InfoTooltip >
  )
}

export default ErrorPopup;