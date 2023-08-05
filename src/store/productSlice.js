const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

export const STATUSES = Object.freeze({
  IDLE: "idle",
  ERROR: "error",
  LOADING: "loading",
});

const productSlice = createSlice({
  name: "Cart",
  initialState: {
    data: [],
    status: STATUSES.IDLE,
  },
//   reducers: {
//     setProduct(state, action) {
//       state.data = action.payload;
//     },
//     setStatus(state, action) {
//       state.status = action.payload;
//     },
//   },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts2.pending, (state, action) => {
        state.status = STATUSES.LOADING;
      })
      .addCase(fetchProducts2.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = STATUSES.IDLE;
      })
      .addCase(fetchProducts2.rejected, (state, action) => {
        state.status = STATUSES.ERROR;
      });
  },
});

export const { setProduct, setStatus } = productSlice.actions;
export default productSlice.reducer;

// export const fetchProducts = createAsyncThunk('products/fetch', async () =>{
//     const res = await fetch("https://fakestoreapi.com/products");
//     const data = await res.json();
//     return data;
// })

export const fetchProducts2 = createAsyncThunk('products/fetch', async () =>{
    const res = await fetch("https://dummyjson.com/products");
    const data = await res.json();
    console.log(data,'json data');
    return data.products;
})
//https://dummyjson.com/products


// export function fetchProducts2() {
//   return async function fetchProductThunk(dispatch, getState) {
//     // dispatch(setStatus(STATUSES.LOADING));
//     try {
//         const res = await fetch("https://dummyjson.com/products");
//       const data = await res.json();
//       console.log(data,'json data');
//     //   dispatch(setProduct(data));
//     //   dispatch(setStatus(STATUSES.IDLE));
//     } catch (err) {
//       console.log(err);
//     //   dispatch(setStatus(STATUSES.ERROR));
//     }
//   };
// }
