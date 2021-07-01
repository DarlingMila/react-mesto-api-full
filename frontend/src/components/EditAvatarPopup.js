import React from 'react';
import PopupWithForm from './PopupWithForm';

function EditAvatarPopup(props) {
  const avatarRef = React.useRef('');

  function handleSubmit(e) {
    e.preventDefault();
  
    props.onUpdateAvatar({
      avatar: avatarRef.current.value,
    });

    avatarRef.current.value = '';
  } 


  return(
    <PopupWithForm 
    name="avatar" 
    title="Обновить аватар" 
    isOpen={props.isOpen} 
    onClose={props.onClose}
    onSubmit={handleSubmit}
    >
      <div className="popup__inputs popup__inputs_tiny">
  
        <input 
        id="avatar-link-input" 
        type="url" 
        className="popup__input popup__input_type_avatar" 
        name="link" 
        placeholder="Ссылка на картинку" 
        ref={avatarRef}
        required />
        <span id="avatar-link-input-error" className="popup__error"></span>
  
      </div>
    </PopupWithForm>
  )
}

export default EditAvatarPopup;