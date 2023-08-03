import React, { useRef, useState } from 'react';

import Input from '../../UI/Input';

import classes from './MealItemForm.module.css';

const MealItemForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true);

  const amountInputRef = useRef();
  const submitHandler = (event) => {
    event.preventDefault();
    const enterAmount = amountInputRef.current.value; //string value
    const enterAmountNum = +enterAmount;

    if (
      enterAmount.trim().length === 0 ||
      enterAmountNum < 1 ||
      enterAmountNum > 5
    ) {
      setAmountIsValid(false);
      return;
    }
    props.onAddToCart(enterAmountNum);
  };
  return (
    <form action='' className={classes.form} onSubmit={submitHandler}>
      <Input
        label='Amount'
        ref={amountInputRef}
        input={{
          id: 'amount_' + props.id,
          type: 'number',
          min: 1,
          max: 5,
          step: 1,
          defaultValue: 1,
        }}
      />
      <button>+ Add</button>
      {!amountIsValid && <p>Please Enter A Valid Amount(1-5)</p>}
    </form>
  );
};

export default MealItemForm;
