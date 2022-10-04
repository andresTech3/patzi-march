import React,{useContext} from 'react';
import AppContext from '../context/AppContext.js';
import '../styles/components/Success.css'
import useGoogleAddress from '../hooks/useGoogleAddress';
import Map from '../components/Map.jsx'

function Success() {
  const {state} = useContext(AppContext);
  const {buyer} = state;
  const location = useGoogleAddress(buyer[0].address)

  return(
    <div className="Succes">
      <div className="Success-content">
        <h2>{`${buyer.name},Gracias por tu compra`}</h2>
        <span>Tu pedido llegara en 3 dias a tu dirección:</span>
        <div className="Success-map"><Map data = {location} /></div>
      </div>
    </div>
  )
}

export default Success;
