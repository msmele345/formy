import React, { FC, ReactElement } from "react";
import classes from '../HolidayGiftTracker/GiftItem.module.css';

interface GiftItemProps {
  id: string;
  price:  number;
  desription: string | undefined;
  name: string;
}

const GiftItem: FC<GiftItemProps> = ({
  id,
  price,
  name,
  desription
}): ReactElement => {
    return (
      <section className={classes.gift}>
          <li key={id}>
            <h3>{name}</h3>
              <p className={classes.description}>{desription}</p>
              <p className={classes.price}>{`$${price.toFixed(2)}`}</p>
          </li>
      </section>
    )
};

export default GiftItem;