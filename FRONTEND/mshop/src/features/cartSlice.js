import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalQuantity: 0,
  totalPrice: 0,
}


export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      const item = action.payload;
      const existingItem = state.items.find((i) => i.id === item.id);
      if (!existingItem) {
        state.items.push({ ...item });
        state.totalQuantity += 1;
        state.totalPrice += item.price;
      }
    },

    clearCart(state, action) {
      state.items = [];
      state.totalPrice = 0;
      state.totalQuantity = 0;
    },

  },
})


export const { addToCart, clearCart } = cartSlice.actions

export default cartSlice.reducer