import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

const initialState = {
  cart: [
    {
      name: "gopal",
      address: "bungamati",
    },
  ],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCART: (state, { payload }) => {
      state.cart = payload;
    },
    removeFromCart: (state, { payload }) => {
      state.cart = payload;
    },
    emptyCart: (state) => {
      state.cart = [];
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToCART, removeFromCart, emptyCart } = cartSlice.actions;

export const selectCart = (state) => state.cart.cart;

export default cartSlice.reducer;
