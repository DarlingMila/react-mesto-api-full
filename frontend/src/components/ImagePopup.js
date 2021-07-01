import './../index.css';

function ImagePopup(props) {
  return(
   <section className={`popup ${props.isOpen && 'popup_opened'}`} id="bigger-img" >

    <div className="popup__bigger-img">
      <button type="button" className="popup__close-button popup__close-button_small" id="imgCloseButton" onClick={props.onClose}></button>
      <img className="popup__img" src={props.card && props.card.link}  alt={props.card && props.card.name}  />
      <p className="popup__img-title">{props.card && props.card.name}</p>
    </div>

   </section>
  )
}

export default ImagePopup;