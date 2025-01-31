// pages/index.tsx
import React from "react";
import BagItem from "../../components/BagItem";
import Summary from "../../components/Summary";
import p1 from "../../public/images/products/product-18.png"
import p2 from "../../public/images/products/product-67.png"

const Cart: React.FC = () => {
  return (
    <div className="container p-4 grid grid-cols-2 md:flex-row gap-6 content-center items-center mx-32">
      {/* Bag Section */}
      <div className="grid-rows-2">
      <div className="bg-gray-200 grid rounded-sm p-3 mb-5">
        <h2 className="font-semibold">Free Delivery</h2>
        <div className="flex gap-2">
        <p>Applies to orders of ₹ 14 000.00 or more.</p>
        <span className=" underline text-base cursor-pointer ">View detials</span>
        </div>
      </div>
      <div className="flex-1">
        <h2 className="text-2xl font-bold mb-4">Bag</h2>
        <BagItem
          image={p1}
          name="Nike Dri-FIT ADV TechKnit Ultra"
          description="Men's Short-Sleeve Running Top " 
          category= "Ashen Slate/Coast Bliss"
          size="L"
          price={3895}
          quantity={1}
        />
          </div>
          <div className="flex-1">
        <BagItem
          image={p2}
          name="Nike Air Max 97 SE"
          description="Men's Shoes "
          category="Flat Pewter/Light Bone/Black/White"
          size="8"
          price={16995}
          quantity={1}
          />
          </div>

      </div>
      {/* Summary Section */}
      <Summary subtotal={20890} delivery="Free" total={20890} />
    </div>
  );
};

export default Cart;
