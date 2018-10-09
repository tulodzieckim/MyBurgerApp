import React from 'react';

import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
  // const keys = Object.keys(props.ingredients);
  // const list = [];
  // keys.forEach(key => {
  //   for(let i = 0; i<props.ingredients[key]; i++) {
  //     list.push(key);
  //   }
  // })
  let transformedIngredients = Object.keys(props.ingredients)
    .map(ingKey => {
      return [...Array(props.ingredients[ingKey])].map((_, i) => {
        return <BurgerIngredient key={ingKey + i} type={ingKey} />
      });
    }).reduce((arr, el) => {
      return [...arr, ...el]
      //return arr.concat(el)
    }, []);

  if (transformedIngredients.length === 0) {
    transformedIngredients = <p>Please start adding ingredients!</p>
  }

  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default burger;