import './../index.css';

function PopupWithForm(props) {

  return(

  <section className={`popup popup_type_${props.name} ${props.isOpen && 'popup_opened'}`}>
    
    <form className={`popup__container popup__container_type_${props.name}`}  name={`${props.name}-form`} onSubmit={props.onSubmit}>

      <h2 className={`popup__title popup__title_type_${props.name}`}>{`${props.title}`}</h2>
      <button type="button" className="popup__close-button" onClick={props.onClose}></button>
      {props.children}
      <button type="submit" className="popup__save-button">Сохранить</button>

    </form>

  </section>

  )
}

export default PopupWithForm;