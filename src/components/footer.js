import './footer.styles.css';
import Logo from '../logo/logo_netconomy_neu_weisz.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faLinkedinIn,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <div className="footer row">
      <div className="col-12">
        <img src={Logo} alt="logo" className="logo-footer" />
      </div>
      <div className="col-12">
        <div className="row justify-content-center footer-menu">
          <div className="col-4 column ">
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Portfolio</li>
            </ul>
          </div>
          <div className="col-4 column ">
            <ul>
              <li>Industries</li>
              <li>References</li>
              <li>Partnerships</li>
            </ul>
          </div>
          <div className="col-4 column">
            <ul>
              <li>Careers</li>
              <li>Locations</li>
              <li>imprint</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="col-12">
        <div className="logo-footer-second">@2021 NETCONOMY</div>
        <div className="icons-footer">
          <FontAwesomeIcon icon={faFacebook} className="icon" />
          <FontAwesomeIcon icon={faLinkedinIn} className="icon" />
          <FontAwesomeIcon icon={faTwitter} className="icon" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
