import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import cartIcon from "../images/grocery-cart.png";
import wishList from "../images/heart.png";

const Navbar = () => {
  const cartListCount = useSelector((state) => state.cart);
  const cartWishListCount = useSelector((state) => state.wishList);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "20px",
        background: "white",
      }}
    >
      <Link className="navLink-logo" to="/">
        <span className="logo">REDUX STORE</span>
      </Link>
      <div>
        <Link className="navLink" to="/">
          Home
        </Link>
        {/* <Link className="navLink" to="/cart">
          Cart
        </Link> */}
        <Link to="/wishlist" className="cartCount">
          <img src={wishList} alt="cart" className="wishlist-image" />{" "}
          {cartWishListCount.length}
        </Link>
        <Link to="/cart" className="cartCount">
          <img src={cartIcon} alt="cart" className="cart-image" />{" "}
          {cartListCount.length}
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
