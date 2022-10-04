import React,{useContext} from 'react';
import { Navigate } from 'react-router-dom'
import { PayPalButton } from 'react-paypal-button-v2';
import AppContext from '../context/AppContext.js';
import '../styles/components/Payment.css'

function Payment() {
  const {state} = useContext(AppContext);
  const {cart, buyer, addNewOrder} = state;

  const paypalOptions = {
    clientId : 'AcGIWVz8CXwlQidLLcxtI0MuOB3iQ_x6pUY-U7zM8ANsVlo4oKThQZzEXfskiLfTj2721azdeTbuTVi8',
    intent : 'capture',
    currency : 'USD'
  }

  const buttonStyles = {
    layout : 'vertical',
    shape : 'rect'
  }

  const handlePaymentSuccess = (data) =>{
    if(data.status === 'COMPLETED'){
      const newOrder = {
        buyer,
        product : cart,
        payment : data
      }
      addNewOrder(newOrder);
    }
    Navigate('/Checkout/success')
  }

  const handleSumTotal = () => {
    const reducer = (accumulator, currentValue) =>
      accumulator + currentValue.price;
    const sum = cart.reduce(reducer, 0);
    return sum;
  };

  return (
    <div className="Payment">
    <div className="Payment-content">
      <h3>Resumen del pedido:</h3>
      {cart.map(item => (
        <div className="payment-item" key={item.title}>
          <div className="payment-element">
            <h4>{item.title}</h4>
            <span>${' '}{item.price}</span>
          </div>
        </div>
      ))}
      <div className="Payment-button">
        <PayPalButton
          paypalOptions = {paypalOptions}
          buttonStyles = {buttonStyles}
          amount = {handleSumTotal()}
          onPaymentStart = {()=> console.log('Start Payment')}
          onPaymentSuccess = {data => handlePaymentSuccess(data)}
          onPaymentError = {error => console.log(error)}
          onPaymentCancel = {data => console.log(data)}
        /> 
      </div>
    </div>
  </div>
  )
}

export default Payment;
