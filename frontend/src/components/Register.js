import React from 'react';
import { Link } from 'react-router-dom';
import './../index.css';

function Register(props) {

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  function setUserEmail(e) {
    setEmail(e.target.value);
  }

  function setUserPassword(e) {
    setPassword(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!email || !password) {
      return;
    }

    props.onRegister(password, email)
    .then(() => {
      setEmail('');
      setPassword('');
    })
     .catch(err => console.log('Ошибка при регистрации'));
  }


  return(
    <section className="getIn">
    
      <form className="getIn__form" onSubmit={props.onRegister}>

        <h2 className="getIn__title">Регистрация</h2>
        <div className="getIn__inputs">

          <input 
          id="email-input" 
          type="email" 
          className="getIn__input" 
          name="email" 
          placeholder="Email" 
          minLength="2" 
          maxLength="30" 
          value={email}
          onChange={setUserEmail} 
          required />
          <span id="email-input-error" className="email__error"></span>

          <input 
          id="password-input" 
          type="password" 
          className="getIn__input" 
          name="password" 
          placeholder="Пароль" 
          minLength="2" 
          maxLength="30" 
          value={password}
          onChange={setUserPassword} 
          required />
          <span id="password-input-error" className="password__error"></span>

        </div>

        <button type="submit" className="getIn__submit-button" onClick={handleSubmit}>Зарегистрироваться</button>

        <p className="getIn__subtitle">Уже зарегистрированы? <Link to="sign-in" className="getIn__enter-button">Войти</Link></p>

      </form>

    </section>
  )
}

export default Register;