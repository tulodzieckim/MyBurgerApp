import React from 'react';

import classes from './Order.css';

const order = (props) => {
  const ingredients = [];

  for (let ingredientName in props.ingredients) {
    ingredients.push({
      name: ingredientName,
      amount: props.ingredients[ingredientName]
    });
  }

  const ingredientOutput = ingredients.map(ing => {
    return <span
      style={{
        textTransform: 'capitalize',
        display: 'inline-block',
        margin: '0 8px',
        padding: '5px',
        border: '1px solid #ccc'
      }}
      key={ing.name}>
      {ing.name} ({ing.amount})
    </span>
  })

  return (
    <div className={classes.Order}>
      <p>Ingredients: {ingredientOutput}</p>
      <p>Price: <b>${Number.parseFloat(props.price).toFixed(2)}</b></p>
    </div>
  )
};

export default order;