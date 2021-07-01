import React from 'react';
import './../index.css';

function InfoTooltip(props) {

  return(
   <section className={`popup ${props.isOpen && 'popup_opened'}`}>
    
      <div className="popup__container">
    
        <button type="button" className="popup__close-button" onClick={props.onClose}></button>
        {props.children}
    
      </div>
  
    </section>
  )
}

export default InfoTooltip;



