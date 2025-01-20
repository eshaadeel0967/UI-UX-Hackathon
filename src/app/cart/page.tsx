import React from 'react';

const CartPage = () => {
 

  const subtotal = items.reduce((total, item) => total + item.price * item.quantity, 0);
  const deliveryFee = 0; // Assuming free delivery
  const total = subtotal + deliveryFee;

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Bag</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Cart Items */}
        <div className="md:col-span-2">
          {items.map((item) => (
            <div key={item.id} className="flex items-center justify-between p-4 border-b">
              <div className="flex items-start">
                <div className="w-20 h-20 bg-gray-200 rounded-md mr-4" />
                <div>
                  <h2 className="text-lg font-semibold">{item.name}</h2>
                  <p className="text-sm text-gray-600">{item.description}</p>
                  <p className="text-sm text-gray-600">{item.color}</p>
                  <p className="text-sm text-gray-600">Size: {item.size}</p>
                  <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-lg font-bold">₹ {item.price.toLocaleString()}</p>
                <button className="text-red-600 text-sm mt-2 hover:underline">Remove</button>
              </div>
            </div>
          ))}
        </div>

        {/* Summary Section */}
        <div className="p-6 bg-gray-100 rounded-md">
          <h2 className="text-lg font-bold mb-4">Summary</h2>
          <div className="flex justify-between mb-2">
            <span className="text-gray-600">Subtotal</span>
            <span className="font-semibold">₹ {subtotal.toLocaleString()}</span>
          </div>
          <div className="flex justify-between mb-2">
            <span className="text-gray-600">Estimated Delivery & Handling</span>
            <span className="font-semibold">Free</span>
          </div>
          <div className="flex justify-between mb-4">
            <span className="text-gray-600 font-bold">Total</span>
            <span className="font-bold text-lg">₹ {total.toLocaleString()}</span>
          </div>
          <button className="w-full py-2 px-4 bg-black text-white rounded-md text-lg font-semibold hover:bg-gray-800">
            Member Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
