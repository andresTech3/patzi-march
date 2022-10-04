import React,{useContext} from 'react'
import Product from './Product.jsx'
import AppContext from '../context/AppContext.js'
import '../styles/components/Products.css'

function Products() {
  const {state,addToCart} = useContext(AppContext);
  const {products} = state;

  const handleAddToCart = (product) =>{
    addToCart(product)
  }

  return (
    <div className="Products">
        <div className="Products-items">
            {products.map(product => (
                <Product key={product.id} product = {product} handleAddToCart = {handleAddToCart} />
            ))}
        </div>
    </div>
  )
}

export default Products