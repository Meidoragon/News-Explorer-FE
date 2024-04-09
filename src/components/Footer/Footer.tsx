import ghLogo from '../../images/icon_github.svg';
import fbLogo from '../../images/icon_fb.svg';

import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__copy-text">
        © 2021 Supersite, Powered by News API
      </p>
      <div className="footer__button-wrapper">
        <button type="button" className="footer__button text-button">
          Home
        </button>
        <button type="button" className="footer__button text-button">
          TripleTen
        </button>
        <button type="button" className="footer__button icon-button">
          <img src={ghLogo} className="footer__button-icon" alt="Github logo" />
        </button>
        <button type="button" className="footer__button icon-button">
          <img
            src={fbLogo}
            className="footer__button-icon"
            alt="Facebook logo"
          />
        </button>
      </div>
    </footer>
  );
}

export default Footer;
