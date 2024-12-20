import React, { useState } from "react";
import Navbar from "./components/Navbar";
import ProductImage from "./components/ProductImage";
import ProductDetails from "./components/ProductDetails";

const App: React.FC = () => {
  const [selectedColor, setSelectedColor] = useState<string>("purple");

  return (
    <div className="flex flex-col justify-center items-center">
      <Navbar />
      <div className="max-w-6xl mx-auto flex flex-col items-center justify-center md:flex-row gap-16 bg-white p-4">
        <ProductImage
          selectedColor={selectedColor}
          cssClass="w-full md:w-1/2 py-0 lg:py-36 h-full"
          imgClass={"h-full"}
        />
        <ProductDetails
          selectedColor={selectedColor}
          setSelectedColor={setSelectedColor}
        />
      </div>
    </div>
  );
};

export default App;
