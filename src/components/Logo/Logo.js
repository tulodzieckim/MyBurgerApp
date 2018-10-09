import React from 'react';

import burgerLogo from '../../assets/image/burger-builder.png';
import classes from './Logo.css';

const logo = (props) => (
  <div className={classes.Logo} style={{height: props.newHeight}}>
    <img src={burgerLogo} alt="BurgerLogo"/>
  </div>
);

export default logo;