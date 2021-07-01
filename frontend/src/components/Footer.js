import './../index.css';

function Footer(props) {
  if (props.loggedIn) {
   return (
      <footer className="footer">
        <p className="footer__copyright">© 2020 Mesto Russia</p>
      </footer>
    )
  } else {
    return (
      <></>
    )
  }
}

export default Footer;