import React from 'react';

import Navigation from './Navigation';
import classes from './MainHeader.module.css';

interface MainHeaderProps {
  logoutHandler?: () => void;
}

const MainHeader = (props: MainHeaderProps) => {
  return (
    <header className={classes['main-header']}>
      <h1>All The Forms</h1>
      <Navigation />
    </header>
  );
};

export default MainHeader;
