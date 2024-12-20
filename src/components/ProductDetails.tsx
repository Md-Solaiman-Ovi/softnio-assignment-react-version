import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addItemToModal, openCartModal } from "../redux/cartModalSlice"; // Import the actions
import CartModal from "./CartModal"; // Import the CartModal component

interface ProductDetailsProps {
  selectedColor: string;
  setSelectedColor: React.Dispatch<React.SetStateAction<string>>;
}

const ProductDetails = ({
  selectedColor,
  setSelectedColor,
}: ProductDetailsProps) => {
  const dispatch = useDispatch();
  const [selectedSize, setSelectedSize] = useState<string>("M");
  const [quantity, setQuantity] = useState<number>(1);
  const handleOpen = () => {
    dispatch(openCartModal());
  };
  const sizePrices: { [key: string]: number } = {
    S: 69,
    M: 79,
    L: 89,
    XL: 99,
  };

  const handleAddToCart = () => {
    const item = {
      id: "1", // This can be dynamic if you have a product ID
      name: "Smart Watch",
      color: selectedColor,
      size: selectedSize,
      quantity: quantity,
      price: sizePrices[selectedSize],
      totalPrice: sizePrices[selectedSize] * quantity, // Calculate total price
    };

    dispatch(addItemToModal(item)); // Dispatch item to modal cart
  };

  const increaseQuantity = () => setQuantity(quantity + 1);
  const decreaseQuantity = () => setQuantity(Math.max(1, quantity - 1));
  const handleSizeChange = (size: string) => setSelectedSize(size);

  return (
    <div className="flex flex-col w-full md:w-1/2">
      <h1 className="text-2xl md:text-3xl lg:text-[40px] font-bold text-[rgba(54,74,99,1)] mb-3">
        Classy Modern Smart Watch
      </h1>

      {/* Rating Stars */}
      <div className="flex items-center">
        <div id="star-rating" className="flex">
          {[...Array(5)].map((_, index) => (
            <span
              key={index}
              className="star text-[rgba(255,210,0,1)] text-lg cursor-pointer transition-transform duration-200"
            >
              &#9733;
            </span>
          ))}
        </div>
        <div className="text-sm text-[rgba(128,145,167,1)]">(2 reviews)</div>
      </div>

      {/* Price */}
      <div className="text-2xl font-bold text-[rgba(101,118,255,1)] mb-5">
        <span className="line-through text-xl font-normal text-gray-400">
          $99.00
        </span>
        ${sizePrices[selectedSize]}
      </div>

      <p className="text-gray-500 mb-5">
        I must explain to you how all this mistaken idea of denouncing pleasure
        and praising pain was born...
      </p>

      {/* Band Color Selection */}
      <div className="mb-5 flex flex-col gap-[10px]">
        <h3 className="font-semibold">Band Color:</h3>
        <div className="flex gap-4">
          <button
            onClick={() => setSelectedColor("purple")}
            className="w-4 h-4 bg-purple-500 rounded-full"
          ></button>
          <button
            onClick={() => setSelectedColor("blue")}
            className="w-4 h-4 bg-blue-500 rounded-full"
          ></button>
          <button
            onClick={() => setSelectedColor("black")}
            className="w-4 h-4 bg-gray-800 rounded-full"
          ></button>
        </div>
      </div>

      {/* Wrist Size Selection */}
      <div className="mb-5 flex flex-col gap-[10px]">
        <h3 className="font-semibold text-gray-700">Wrist Size</h3>
        <div id="wristSize" className="flex gap-4">
          {["S", "M", "L", "XL"].map((size) => (
            <button
              key={size}
              value={size}
              onClick={() => handleSizeChange(size)}
              className={`size-btn px-4 py-2 border rounded-md text-gray-700 font-semibold ${
                selectedSize === size ? "bg-blue-50" : "bg-white"
              } focus:text-blue-500 hover:bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:bg-blue-50`}
            >
              {size}{" "}
              <span className="text-sm font-normal text-gray-500">
                ${sizePrices[size]}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Quantity and Add to Cart Section */}
      <div className="flex items-center gap-4">
        {/* Quantity Selector */}
        <div className="flex items-center border rounded-md">
          <button
            onClick={decreaseQuantity}
            className="px-3 py-2 text-gray-500 hover:text-gray-700 focus:outline-none"
          >
            -
          </button>
          <span className="px-4 text-gray-700 font-semibold">{quantity}</span>
          <button
            onClick={increaseQuantity}
            className="px-3 py-2 text-gray-500 hover:text-gray-700 focus:outline-none"
          >
            +
          </button>
        </div>

        {/* Add to Cart Button */}
        <button
          onClick={handleAddToCart}
          className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition text-sm md:text-base"
        >
          Add to Cart
        </button>
      </div>
      {/* <!-- Floating Checkout Button --> */}
      <div className="fixed bottom-10 hidden md:block">
        <button
          onClick={handleOpen}
          className="bg-[rgba(255,187,90,1)] text-black px-6 py-3 rounded-full shadow-lg"
        >
          Checkout <span className="bg-white px-1 rounded text-center ">0</span>
        </button>
      </div>

      {/* Cart Modal */}
      <CartModal />
    </div>
  );
};

export default ProductDetails;
