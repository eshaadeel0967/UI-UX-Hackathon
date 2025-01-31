// components/Summary.tsx
import React from "react";

interface SummaryProps {
  subtotal: number;
  delivery: string;
  total: number;
}

const Summary: React.FC<SummaryProps> = ({ subtotal, delivery, total }) => {
  return (
    <div className="bg-white p-6 w-full md:w-1/3 flex flex-col">
      <h2 className="text-xl font-semibold mb-4">Summary</h2>
      <p className="text-gray-700 mb-2">Subtotal: ₹ {subtotal.toLocaleString()}</p>
      <p className="text-gray-700 mb-2">Estimated Delivery & Handling: {delivery}</p>
      <p className="text-lg font-bold mb-4">Total: ₹ {total.toLocaleString()}</p>
      <button className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800">
        Member Checkout
      </button>
    </div>
  );
};

export default Summary;
