// redux/cartModalSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CartItem {
  id: string;
  name: string;
  color: string;
  size: string;
  quantity: number;
  price: number;
  totalPrice: number;
}

interface CartState {
  items: CartItem[];
  isModalOpen: boolean;
}

const initialState: CartState = {
  items: [],
  isModalOpen: false,
};

const cartModalSlice = createSlice({
  name: 'cartModal',
  initialState,
  reducers: {
    addItemToModal(state, action: PayloadAction<CartItem>) {
      state.items.push(action.payload);
    },
    openCartModal(state) {
      state.isModalOpen = true;
    },
    closeCartModal(state) {
      state.isModalOpen = false;
    },
  },
});

export const { addItemToModal, openCartModal, closeCartModal } = cartModalSlice.actions;

export default cartModalSlice.reducer;
