import React from "react";
// import { useSelector } from "react-redux";
// import { RootState } from "../redux/store";

const Navbar: React.FC = () => {
  // const totalItems = useSelector((state: RootState) => state.cart.items.length);

  return (
    <div className="flex items-center justify-between px-4 py-2 bg-gray-300 w-full md:hidden sticky top-0">
      <div>Navbar</div>
      <button className="px-5 py-2 flex w-full">
        <div className="flex">
          <img
            src="/assets/checkoutIcon.png"
            alt="checkoutIcon"
            className="size-7"
          />
        </div>
        <span className="cart-count bg-red-500 text-white size-5 rounded-full text-center flex items-center justify-center text-xs">
          {/* {totalItems} */}
        </span>
      </button>
    </div>
  );
};

export default Navbar;
