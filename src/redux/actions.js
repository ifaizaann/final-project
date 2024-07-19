import { createAction } from '@reduxjs/toolkit';

export const setProducts = createAction('SET_PRODUCTS', (products) => ({
  payload: products,
}));

export const addToCart = createAction('ADD_TO_CART', (itemId) => ({
  payload: itemId,
}));

export const removeFromCart = createAction('REMOVE_FROM_CART', (itemId) => ({
  payload: itemId,
}));

export const setCartItems = createAction('SET_CART_ITEMS', (cartItems) => ({
  payload: cartItems,
}));
