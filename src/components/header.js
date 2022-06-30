import './header.styles.css';
import Logo from '../logo/logo_netconomy_neu_weisz.png';

const Header = () => {
  return (
    <div className="header">
      <img src={Logo} alt="logo" className="logo" />
    </div>
  );
};

export default Header;
