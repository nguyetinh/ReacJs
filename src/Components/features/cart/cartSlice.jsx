import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalAmount: 0,
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const itemPrice = Number(action.payload.price); // Chuyển đổi price thành số
      state.items.push(action.payload);
      state.totalAmount += itemPrice;
    },
  },
});

export const selectCartItemsCount = (state) => state.cart.items.length;
export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
