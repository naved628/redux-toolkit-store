import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import productReducer from "./productSlice";
import wishListCartReducer from "./wishListCartSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    product: productReducer,
    wishList : wishListCartReducer
  },
});

export default store;
