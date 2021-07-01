import React from 'react';
import './../index.css';
import InfoTooltip from './InfoTooltip';
import success from './../images/success.svg';

function SuccessPopup(props) {


  return(
    <InfoTooltip 
    isOpen={props.isOpen}
    onClose={props.onClose}
    >
      <div className="popup__info-wrap">
        <img src={success} alt="Успешная регистрация" />
        <h2 className="popup__title popup__title_info">Вы успешно зарегистрировались!</h2>
      </div>

    </InfoTooltip >
  )
}

export default SuccessPopup;