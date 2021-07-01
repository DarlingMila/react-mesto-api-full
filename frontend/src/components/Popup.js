import './../index.css';

function Popup(props) {

  return(

  <section className="popup">
    
    <div className="popup__container">

      <button type="button" className="popup__close-button" onClick={props.onClose}></button>
      {props.children}

    </div>

  </section>

  )
}

export default Popup;