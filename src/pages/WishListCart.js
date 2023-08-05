import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromWish } from '../store/wishListCartSlice';

const WishListCart = () => {
  const wishListProducts = useSelector(state => state.wishList);
  const dispatch = useDispatch();

  const handleRemove = (productId) =>{
    dispatch(removeFromWish(productId));
}
  return (
    <div className='home-cart-body'>
      <h3>Wish List Cart</h3>
      <div className='cartWrapper'>
        {wishListProducts.map(product =>(
            <div className='cartCard' key={product.id}>
              <img src={product.images[0]} alt={product.title}/>
              <h4>{product.title}</h4>
              <h5>${product.price}</h5>
              <button className='btn' onClick={()=> handleRemove(product.id)}>Remove from wish list</button>
            </div>
        ))}
      </div>
    </div>
  )
}

export default WishListCart;