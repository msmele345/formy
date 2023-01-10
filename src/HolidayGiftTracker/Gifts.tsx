import React, { ReactElement } from "react";
import Card from "../UI/Card/Card";
import { GIFTS } from "./gift-constants";
import GiftItem from "./GiftItem";
import classes from './GiftPage.module.css';
import GiftsForm from "./GiftsForm";


const GiftOptions = (): ReactElement => {

    const gifts = GIFTS.map((gift, index) => (
      <div className={classes.container}>
        <GiftItem
          key={gift.id}
          name={gift.name}
          desription={gift.description}
          price={gift.price}
          id={gift.id}
        />
        <GiftsForm id={gift.id}/>
      </div>
    ));


    return (
      <section className={classes.gifts}>
        <Card>
          <ul>
            {gifts}
          </ul>
        </Card> 
      </section>
    )
};

export default GiftOptions;