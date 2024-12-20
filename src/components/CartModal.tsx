import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeCartModal } from "../redux/cartModalSlice"; // Import actions
import { RootState } from "../redux/store";

interface CartModalData {
  id: string;
  name: string;
  color: string;
  size: string;
  quantity: number;
  price: number;
  totalPrice: number;
}

const CartModal: React.FC = () => {
  const dispatch = useDispatch();
  const { items, modalOpen } = useSelector(
    (state: RootState) => state.cartModal
  );

  const handleClose = () => {
    dispatch(closeCartModal());
  };

  // const handleRemoveItem = (id: string) => {
  //   dispatch(removeItemFromModal(id));
  // };

  const getTotalPrice = () => {
    return items.reduce(
      (total: number, item: CartModalData) => total + item.totalPrice,
      0
    );
  };
  if (!modalOpen) return null;
  return (
    <>
      <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50 hidden">
        <div className="bg-white w-11/12 md:w-2/3 lg:w-1/2 rounded-lg shadow-lg p-6">
          <h2 className="text-lg md:text-[22px] font-bold mb-4">Your Cart</h2>
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b text-sm font-normal text-[rgba(128,145,167,1)]">
                <th className="py-2">Item</th>
                <th className="py-2">Color</th>
                <th className="py-2">Size</th>
                <th className="py-2">Qnt</th>
                <th className="py-2">Price</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item: CartModalData, index: number) => (
                <tr key={index} className="border-t">
                  <td className="py-2">{item.name}</td>
                  <td className="py-2">{item.color}</td>
                  <td className="py-2">{item.size}</td>
                  <td className="py-2">{item.quantity}</td>
                  <td className="py-2">${item.price}</td>
                </tr>
              ))}
            </tbody>
            <tr className="border-t">
              <td className="py-2 text-base font-bold">Total</td>
              <td className="py-2"></td>
              <td className="py-2"></td>
              <td className="py-2"></td>
              <td className="py-2 text-lg font-bold">${getTotalPrice()}</td>
            </tr>
          </table>
          <div className="mt-4 flex flex-col">
            <div className="flex space-x-4 justify-end">
              <button
                onClick={handleClose}
                className="bg-gray-200 hover:bg-gray-300 text-gray-800 py-2 px-4 rounded"
              >
                Continue Shopping
              </button>
              <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartModal;
