import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaTrashAlt } from 'react-icons/fa';
import AppContext from '../context/AppContext.js';
import '../styles/components/Checkout.css';

function Checkout() {
  const { state, removeFromCart } = useContext(AppContext);
  const { cart } = state;

  const handleRemove = (product) => {
    removeFromCart(product);
  };

  const handleSumTotal = () => {
    const reducer = (accumulator, currentValue) =>
      accumulator + currentValue.price;
    const sum = cart.reduce(reducer, 0);
    return sum;
  };

  return (
    <div className="Checkout">
      <div className="Checkout-content">
        {cart.length > 0 ? <h3>Lista de Pedidos</h3> : (<Link to="/"><h3>Sin Pedidos ... Click aqui!! para escoger un producto</h3></Link>)}

        {cart.map((item) => (
          <div className="Checkout-item">
            <div className="Checkout-element">
              <h4>{item.title}</h4>
              <span>{item.price}</span>
            </div>
            <button
              type="button"
              onClick={() => handleRemove(item)}
              style={{ 'font-size': '1.1em' }}
            >
              {' '}
              <FaTrashAlt />{' '}
            </button>
          </div>
        ))}
      </div>
      {cart.length > 0 && (
        <div className="Checkout-sidebar">
          <h3>{`Precio Total : $ ${handleSumTotal()}`}</h3>
          <Link to="/checkout/information">
            <button type="button">Continuar Pedido</button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Checkout;
