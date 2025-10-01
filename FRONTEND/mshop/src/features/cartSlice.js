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
        state.items.push({ ...item, quantity:1});
        state.totalQuantity += 1;
        state.totalPrice += item.price;
      }
    },

    increaseQuantity(state,action){
      const item = action.payload;
      const existingItem = state.items.find((i)=> i.id === item.id)

      if(existingItem){
        existingItem.quantity += 1;
        state.totalQuantity +=1;
        state.totalPrice += existingItem.price;
      }

      console.log(state);
      console.log(action);
      console.log(action.payload);

    },

    decreaseQuantity(state,action){
      const item = action.payload;
      const existingItem = state.items.find((i)=> i.id === item.id)

      if(existingItem && item.quantity > 1){
        existingItem.quantity -= 1;
        state.totalQuantity -=1;
        state.totalPrice -= existingItem.price;
      }

      console.log(state);
      console.log(action);
      console.log(action.payload);

    },

    clearCart(state, action) {
      state.items = [];
      state.totalPrice = 0;
      state.totalQuantity = 0;
    },
    removeItem(state, action) {
      const item = action.payload;
      state.items = state.items.filter((i)=> i.id !== item.id);
      console.log(state.items);
    },

  },
})



export const { addToCart,increaseQuantity, decreaseQuantity, clearCart, removeItem } = cartSlice.actions

export default cartSlice.reducer