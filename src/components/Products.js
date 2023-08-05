import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../store/cartSlice";
import { STATUSES, fetchProducts, fetchProducts2 } from "../store/productSlice";
import { addToWish } from "../store/wishListCartSlice";

const Products = () => {
  // const [products, setProducts]= useState([]);
  const dispatch = useDispatch();
  const { data: products, status } = useSelector((state) => state.product);

  useEffect(() => {
    // dispatch(fetchProducts());
    dispatch(fetchProducts2());
    // const fetchProducts = async()=>{
    //     const res = await fetch('https://fakestoreapi.com/products');
    //     const data= await res.json();
    //     setProducts(data);
    // }
    // fetchProducts();
  }, []);
  const handleToAddCart = (product) => {
    dispatch(add(product));
  };

  const handleToAddWish = (product) => {
    dispatch(addToWish(product));
  };

  if (status === STATUSES.LOADING) {
    return <h2>Loading......</h2>;
  }

  if (status === STATUSES.ERROR) {
    return <h2>Something went wrong...</h2>;
  }

  return (
    <div className="productsWrapper">
      {products.map((product) => (
        <div className="card" key={product.id}>
          <div className="image-container">
            <img src={product.images[0]} alt={product.title} />
          </div>
          <div className="title-price-container">
            <div className="title">{product.title}</div>
            <div className="price">${product.price}</div>
          </div>
          <div className="button-container">
            <button className="btn" onClick={() => handleToAddCart(product)}>
              Add to cart
            </button>
            <button className="btn" onClick={() => handleToAddWish(product)}>
              wish list
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
