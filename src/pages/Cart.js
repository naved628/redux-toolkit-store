import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { remove } from '../store/cartSlice';

const Cart = () => {
  const products = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const handleRemove = (productId) =>{
    dispatch(remove(productId));
}
  return (
    <div className='home-cart-body'>
      <h3>Cart</h3>
      <div className='cartWrapper'>
        {products.map(product =>(
            <div className='cartCard' key={product.id}>
              <img src={product.images[0]} alt={product.title}/>
              <h4>{product.title}</h4>
              <h5>${product.price}</h5>
              <button className='btn' onClick={()=> handleRemove(product.id)}>Remove</button>
            </div>
        ))}
      </div>
    </div>
  )
}

export default Cart