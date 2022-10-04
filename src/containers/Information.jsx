import React, { useRef, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import AppContext from '../context/AppContext.js';

import '../styles/components/Information.css';

function Information() {
  const { state, addToBuyer } = useContext(AppContext);
  const form = useRef(null);
  const navigate = useNavigate();
  const { cart } = state;

  const hanldeSubmit = ()=>{
    const formData = new FormData(form.current);
    const buyer = {
      'name' : formData.get('name'),
      'email' : formData.get('email'),
      'address' : formData.get('address'),
      'apto' : formData.get('apto'),
      'city' : formData.get('city'),
      'country' : formData.get('country'),
      'state' : formData.get('state'),
      'cp' : formData.get('cp'),
      'phone' : formData.get('phone'),
    }
    addToBuyer(buyer);
    navigate('/Checkout/payment')
  }

  return (
    <div className="Information">
      <div className="Information-content">
        <div className="Information-head">
          <h2>Informacion de Contacto : </h2>
        </div>
        <div className="Information-form">
          <form ref={form}>
            <input type="text" name="name" placeholder="Nombre Completo" />
            <input type="email" name="email" placeholder="Email" />
            <input type="text" name="address" placeholder="Direccion" />
            <input type="text" name="apto" placeholder="Apto" />
            <input type="text" name="city" placeholder="Ciudad" />
            <input type="text" name="country" placeholder="Pais" />
            <input type="text" name="state" placeholder="Estado" />
            <input type="text" name="cp" placeholder="Codigo Postal" />
            <input type="text" name="phone" placeholder="Telefono" />
          </form>
        </div>
        <div className="Information-buttons">
          <div className="Information-back">
            <Link to="/checkout">Regresar</Link>
          </div>
          <div className="Information-next">
            {/* <Link to="/checkout/payment">Pagar</Link> */}
            <button type="button" onClick={hanldeSubmit}>Pagar</button> 
          </div>
        </div>
      </div>
      <div className="Information-sidebar">
        <h3>Pedido : </h3>
        {cart.map((item) => (
          <div className="information-item" key={item.id}>
            <div className="Information-element">
              <h4>{item.title}</h4>
              <span>${item.price}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Information;
