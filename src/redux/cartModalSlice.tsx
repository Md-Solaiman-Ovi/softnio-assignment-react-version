// redux/cartModalSlice.ts

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartModalData {
  id: string;
  name: string;
  color: string;
  size: string;
  quantity: number;
  price: number;
  totalPrice: number; // Added total price field to hold the item's total price
}

interface CartModalState {
  modalOpen: boolean;
  items: CartModalData[];
}

const initialState: CartModalState = {
  modalOpen: false,
  items: [],
};

const cartModalSlice = createSlice({
  name: "cartModal",
  initialState,
  reducers: {
    openCartModal(state) {
      state.modalOpen = true;
    },
    closeCartModal(state) {
      state.modalOpen = false;
    },
    addItemToModal(state, action: PayloadAction<CartModalData>) {
      state.items.push(action.payload); // Adds the item to the cart
    },
    removeItemFromModal(state, action: PayloadAction<string>) {
      state.items = state.items.filter((item) => item.id !== action.payload); // Removes the item based on ID
    },
    clearCart(state) {
      state.items = []; // Clear all items in the cart
    },
  },
});

export const {
  openCartModal,
  closeCartModal,
  addItemToModal,
  removeItemFromModal,
  clearCart,
} = cartModalSlice.actions;

export default cartModalSlice.reducer;
