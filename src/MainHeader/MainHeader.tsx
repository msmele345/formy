import React from 'react';

import Navigation from './Navigation';
import classes from './MainHeader.module.css';
import HeaderCartButton from '../UI/Button/HeaderCartButton';

interface MainHeaderProps {
  logoutHandler?: () => void;
}

const MainHeader = (props: MainHeaderProps) => {
  return (
    <header className={classes['main-header']}>
      <h1>All The Forms</h1>
      <Navigation />
      <HeaderCartButton/>
    </header>
  );
};

export default MainHeader;
