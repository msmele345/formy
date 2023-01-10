import React, { FormEvent, useState } from "react";
import BasicInput from "./GiftForm/BasicInput";
import classes from './GiftsForm.module.css';

interface GiftsFormProps {
  id: string
}


const GiftsForm = ({ id }: GiftsFormProps) => {

  const [count, setCount] = useState(1);

  const handleSubmit = (event: FormEvent) => {
      event.preventDefault();
      //onClick={() =>  setCount(prevState => prevState + 1)}
      setCount(prevstate => prevstate + 1)
  }

  return (
    <div>
      <form className={classes.form} onSubmit={handleSubmit}>
        <BasicInput
          label={"Amount"}
          input={{
            id: "amount_" + id,
            type: "number",
            min: 1,
            max: 5,
            step: "1",
            defaultValue: 1,
            value: count
          }}
        />
        <button type="submit">+ Add</button>
      </form>
    </div>
  );
};

export default GiftsForm;