import React, { useContext, useEffect, useState } from 'react';

import CartIcon from '../Cart/CartIcon';

import CartContext from '../../store/cart-context';

import classes from './HeaderCartBtn.module.css';

const HeaderCartBtn = (props) => {
  const cartCtx = useContext(CartContext);
  const numberOfCartItem = cartCtx.items.reduce(
    (curVal, item) => curVal + item.amount,
    0
  );
  const [headerBtnHighlight, setHeaderBtnHighlight] = useState(false);

  useEffect(() => {
    if (cartCtx.items.length === 0) {
      return;
    }
    setHeaderBtnHighlight(true);

    const timer = setTimeout(() => {
      setHeaderBtnHighlight(false);
    }, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [cartCtx.items]);

  const btnClass = `${classes.button} ${
    headerBtnHighlight ? classes.bump : ''
  } `;

  return (
    <button className={btnClass} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItem}</span>
    </button>
  );
};
export default HeaderCartBtn;
