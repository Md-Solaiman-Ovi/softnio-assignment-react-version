import React from "react";
import { CartModalData } from "./CartModal";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import icon from "../assets/checkoutIcon.png";
import { openCartModal } from "../redux/cartModalSlice";
const Navbar: React.FC = () => {
  const cartItems = useSelector((state: RootState) => state.cartModal.items);
  const dispatch = useDispatch();
  // Calculate the total quantity of all items in the cart
  const getTotalQuantity = () => {
    return cartItems.reduce(
      (total: number, item: CartModalData) => total + item.quantity,
      0
    );
  };

  return (
    <div className="flex items-center justify-between px-4 py-2 bg-gray-300 w-full md:hidden sticky top-0">
      <div>Navbar</div>
      <button
        className="px-5 py-2 flex w-full"
        onClick={() => dispatch(openCartModal())}
      >
        <div className="flex">
          <img src={icon} alt="checkoutIcon" className="size-7" />
        </div>
        <span className=" bg-red-500 text-white size-5 rounded-full text-center flex items-center justify-center text-xs">
          {getTotalQuantity()}
        </span>
      </button>
    </div>
  );
};

export default Navbar;
