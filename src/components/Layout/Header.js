import { Fragment } from 'react';

import classes from './Header.module.css';
//import logo from '../../assets/logo_netconomy_neu_weisz.png';
const Header = () => {
  return (
    <Fragment>
        <header className={classes.header}>
            <div className={classes.logo}>
               <h1>Netconomy</h1>
            </div>
        </header>
    </Fragment>
  );
};

export default Header;