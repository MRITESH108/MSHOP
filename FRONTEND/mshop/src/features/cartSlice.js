import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

const initialState = {
  items: [],
  totalQuantity: 0,
  totalPrice: 0,
}

export const fetchDBdata = createAsyncThunk('cart/fetchDBdata', async () => {
  return await axios.get('http://localhost:5000/cart', { withCredentials: true, })
    .then(res => res.data)
    .catch(err => console.log(err));
});

export const saveDBdata = createAsyncThunk('cart/saveDBdata', async (product) => {
  return await axios.post('http://localhost:5000/cart', product, { withCredentials: true, })
    .then(res => res.data);
});

export const clearCart = createAsyncThunk('cart/clearCart', async()=>{
  return await axios.delete('http://localhost:5000/cart',{ withCredentials: true, })
  .then(res => res.data);
})

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const existingItem = state.items.find((i) => i.id === item.id);
      if (!existingItem) {
        state.items.push({ ...item, quantity: 1 });
        state.totalPrice += item.price;
        state.totalQuantity += 1;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchDBdata.fulfilled, (state, action) => {
        state.items = action.payload.items;
        state.totalPrice = action.payload.totalPriceItems;
        state.totalQuantity = action.payload.totalQuantityItems;
      })

      .addCase(saveDBdata.fulfilled, (state, action) => {
        if (action.payload && action.payload.items) {
          state.items = action.payload.items;
          state.totalPrice = action.payload.totalPriceItems;
          state.totalQuantity = action.payload.totalQuantityItems;
        }
      })

      .addCase(clearCart.fulfilled,(state,action)=>{
        state.items = []
        state.totalPrice = 0;
        state.totalQuantity = 0;
      })
  }
})

export const { addToCart } = cartSlice.actions
export default cartSlice.reducer