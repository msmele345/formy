import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../store/auth-context';

import classes from './Navigation.module.css';

interface NavigationProps {
  onLogout?: () => void;
}

const Navigation = (props: NavigationProps) => {

  const authCtx = useContext(AuthContext);

  return (
    <nav className={classes.nav}>
      <ul>
        {authCtx.isLoggedIn && (
          <Link to={"/sform"}>Register</Link>
        )}
        {authCtx.isLoggedIn && (
          <li>
            <a href="/">Admin</a>
          </li>
        )}
        {authCtx.isLoggedIn && (
          <li>
            <button onClick={authCtx.onLogout}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
