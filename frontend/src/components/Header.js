import logo from './../images/logo.svg';
import './../index.css';
import { Route, Link} from 'react-router-dom';
import React from 'react';

function Header(props) {


  return(
    <header className="header">
      <button 
      href="#" 
      target="_blank"
      className="header__logo">
        <img   
        src={logo}
        alt="Лого: Mesto" />
      </button>

      <Route exact path="/main">
        <div className="header__side-wrap">
          <p className="header__email">{props.userEmail}</p>
          <button className="header__button" onClick={props.onSignOut}>Выйти</button>
        </div>
      </Route>


      <Route path="/sign-up">
        <div className="header__side-wrap">
          <Link to="sign-in" className="header__button">Войти</Link>
        </div>
      </Route>



      <Route path="/sign-in">
        <div className="header__side-wrap">
          <Link to="sign-up" className="header__button">Зарегистрироваться</Link>
        </div>
      </Route>
      
   </header>
  )
}

export default Header;