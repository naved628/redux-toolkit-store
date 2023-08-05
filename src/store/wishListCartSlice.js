const { createSlice } = require("@reduxjs/toolkit");

const wishListCartSlice = createSlice({
  name: "Wish List",
  initialState: [],
  reducers: {
    addToWish(state, action) {
      state.push(action.payload);
    },
    removeFromWish(state, action) {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addToWish, removeFromWish } = wishListCartSlice.actions;
export default wishListCartSlice.reducer;
