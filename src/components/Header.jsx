import React,{useContext} from 'react';
import { Link } from 'react-router-dom'
import { FaShoppingCart } from 'react-icons/fa';
import AppContext from '../context/AppContext.js'
import '../styles/components/Header.css';


function Header() {
  const {state} = useContext(AppContext);

  const { cart } = state;

  return (
    <div className = "Header">
        <h1 className="Header-title">
          <Link to="/">
            PlatziConf Merch
          </Link>
        </h1>
        <div className="Header-checkout">
          <Link to="/checkout">
            <FaShoppingCart style={{"font-size" : "2em"}}/>
          </Link>
          {cart.length > 0 && <div className="Header-alert">{cart.length}</div>}
        </div>
    </div>
  )
}

export default Header