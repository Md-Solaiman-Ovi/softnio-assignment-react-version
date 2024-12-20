// redux/store.ts

import { configureStore } from "@reduxjs/toolkit";
import cartModalReducer from "./cartModalSlice";

const store = configureStore({
  reducer: {
    cartModal: cartModalReducer, // Add the reducer to the store
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
