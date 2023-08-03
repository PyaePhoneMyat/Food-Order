import React, { Fragment } from 'react';

import HeaderCartBtn from './HeaderCartBtn';

import classes from './Header.module.css';

import mealsImage from '../../assets/meals.jpg';

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>GoGetFood</h1>
        <HeaderCartBtn onClick={props.onShowCart} />
      </header>
      <div className={classes['main-image']}>
        <img src={mealsImage} alt='meals' />
      </div>
    </Fragment>
  );
};
export default Header;
