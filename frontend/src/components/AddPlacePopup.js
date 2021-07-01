import React from 'react';
import PopupWithForm from './PopupWithForm';

function AddPlacePopup(props) {
  const [name, setName] = React.useState('');
  const [link, setLink] = React.useState('');

  function setPhotoName(e) {
    setName(e.target.value);
  }

  function setPhotoLink(e) {
    setLink(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    props.onAddPlace({
      name: name,
      link: link,
    });

    setName('');
    setLink('');
  }

  return(
    <PopupWithForm 
    name="place" 
    title="Новое место" 
    isOpen={props.isOpen} 
    onClose={props.onClose}
    onSubmit={handleSubmit}
    >
      <div className="popup__inputs popup__inputs_small">

        <input 
        id="place-input" 
        type="text" 
        className="popup__input popup__input_type_place" 
        name="place" 
        placeholder="Название" 
        minLength="2" 
        maxLength="30" 
        value={name}
        onChange={setPhotoName} 
        required />
        <span id="place-input-error" className="popup__error"></span>

        <input 
        id="link-input" 
        type="url" 
        className="popup__input popup__input_type_link" 
        name="link" 
        placeholder="Ссылка на картинку" 
        value={link}
        onChange={setPhotoLink} 
        required />
        <span id="link-input-error" className="popup__error"></span>

      </div>
    </PopupWithForm>
  )
}

export default AddPlacePopup;