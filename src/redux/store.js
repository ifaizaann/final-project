

import { configureStore } from '@reduxjs/toolkit';
import shopReducer from './reducers';
import { userDetails } from './userSlice';


const store = configureStore({
  reducer: {
    shop: shopReducer,
    user: userDetails
  }
});

export default store;
