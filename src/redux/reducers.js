import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [],
  cartItems: {},
};

const shopSlice = createSlice({
  name: 'shop',
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    addToCart: (state, action) => {
      const itemId = action.payload;
      if (state.cartItems[itemId]) {
        state.cartItems[itemId]++;
      } else {
        state.cartItems[itemId] = 1;
      }
    },
    removeFromCart: (state, action) => {
      const itemId = action.payload;
      if (state.cartItems[itemId] > 0) {
        state.cartItems[itemId]--;
      }
    },
    setCartItems: (state, action) => {
      state.cartItems = action.payload;
    },
  },
});

export const { setProducts, addToCart, removeFromCart, setCartItems } = shopSlice.actions;
export default shopSlice.reducer;
