import React from 'react';
import { useHistory } from 'react-router-dom';
import './../index.css';

function Login(props) {

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  
  const history = useHistory();

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

    props.onLogin(password, email)
    .then(() => {
      setEmail('');
      setPassword('');
    })
    .then(() => {
      history.push('/main');
     })
     .catch(err => console.log('Ошибка при входе'));

  }

  return(
    <section className="getIn">
    
      <form className="getIn__form" onSubmit={props.onSubmit}>

        <h2 className="getIn__title">Вход</h2>
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

        <button type="submit" className="getIn__submit-button" onClick={handleSubmit}>Войти</button>

      </form>

    </section>
  )
}

export default Login;