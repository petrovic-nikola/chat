import './footer.styles.css';
import Logo from '../logo/logo_netconomy_neu_weisz.png';

const Footer = () => {
  return (
    <div className="footer">
      <div>
        <img src={Logo} alt="logo" className="logo-footer" />
      </div>
      <div className="column left">
        <p>Home</p>
        <p>About</p>
        <p>Portfolio</p>
      </div>
      <div className="column middle">
        <p>Industries</p>
        <p>References</p>
        <p>Partnerships</p>
      </div>
      <div className="column right">
        <p>Careers</p>
        <p>Locations</p>
        <p>imprint</p>
      </div>
      <div>
        <span>@2021 NETCONOMY</span>
      </div>
    </div>
  );
};

export default Footer;
