import React, { Component } from 'react';

import classes from './OrderSummary.css';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {
 
  render() {
    const ingredientSummary = Object.keys(this.props.ingredients).map(key => {
      // return <li>{key.charAt(0).toUpperCase()}: {this.props.ingredients[key]}</li>
      return (
        <li key={key}>
          <span style={{ textTransform: 'capitalize' }}>{key}</span>: {this.props.ingredients[key]}
        </li>
      )
    })

    return (
      <div className={classes.OrderSummary}>
        <h3>Your Order</h3>
        <hr />
        <p>Burger with the following ingredients:</p>
        <ul>
          {ingredientSummary}
        </ul>
        <p><b>Total Price: {this.props.price.toFixed(2)}</b></p>
        <hr />
        <p>Continue to Checkout?</p>
        <Button btnType='Danger' clicked={this.props.purchaseCanceled}>Cancel</Button>
        <Button btnType='Success' clicked={this.props.purchaseContinued}>Continue</Button>
      </div>
    )
  }
}

export default OrderSummary;