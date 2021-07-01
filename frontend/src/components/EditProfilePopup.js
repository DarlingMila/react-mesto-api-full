import React from 'react';
import PopupWithForm from './PopupWithForm';
import CurrentUserContext from './../contexts/CurrentUserContext'

function EditProfilePopup(props) {
  const currentUser = React.useContext(CurrentUserContext);

  const [name, setName] = React.useState('');
  const [description, setDescription] = React.useState('');

  React.useEffect(() => {
    setName(currentUser.name || '');
    setDescription(currentUser.about || '');
  }, [currentUser]); 

  function nameChange(e) {
    setName(e.target.value);
  }

  function descriptionChange(e) {
    setDescription(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    props.onUpdateUser({
      name: name,
      about: description,
    });
  }
    
  return(
    <PopupWithForm 
      name="profile" 
      title="Редактировать профиль" 
      isOpen={props.isOpen} 
      onClose={props.onClose}
      onSubmit={handleSubmit}
      >
      <div className="popup__inputs">

        <input 
        id="name-input" 
        type="text" 
        className="popup__input popup__input_type_name" 
        name="name" 
        placeholder="Введите имя" 
        minLength="2" maxLength="40" 
        value={name} 
        onChange={nameChange} 
        required />
        <span id="name-input-error" className="popup__error"></span>

        <input 
        id="profession-input" 
        type="text" 
        className="popup__input popup__input_type_profession" 
        name="profession" 
        placeholder="Введите профессию" 
        minLength="2" 
        maxLength="200" 
        value={description} 
        onChange={descriptionChange} 
        required />
        <span id="profession-input-error" className="popup__error"></span>

      </div>
    </PopupWithForm>
    )
}

export default EditProfilePopup;