import React from "react";
import HeaderCartButton from "../UI/Button/HeaderCartButton";
import classes from './GiftsHeader.module.css'
import giftsImage from '../assets/gifts.png'


const GiftsHeader = () => {
  return (
    <>
      <header className={classes.header}>
        <h1>HolidayGifts</h1>
        <HeaderCartButton/>
      </header>
      <div className={classes['main-image']}>
        <img src={giftsImage} alt='Gifts'/>
      </div>
    </>
  );
};

export default GiftsHeader;