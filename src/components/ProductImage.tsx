import React from "react";
import Img1 from "../assets/watch-purple.jpg";
import Img2 from "../assets/watch-blue.jpg";
import Img3 from "../assets/watch-black.jpg";

interface ProductImageProps {
  selectedColor: string;
}

const ProductImage = ({ selectedColor }: ProductImageProps) => {
  // Define the product images for each color
  const productImages: { [key: string]: string } = {
    purple: Img1,
    blue: Img2,
    black: Img3,
  };
  return (
    <>
      {/* Product Image */}
      <div className="w-full md:w-1/2 py-0 lg:py-36 h-full">
        <img
          src={productImages[selectedColor]}
          alt={`Smartwatch in ${selectedColor}`}
          className="rounded shadow-md h-full object-cover"
        />
      </div>
    </>
  );
};

export default ProductImage;
