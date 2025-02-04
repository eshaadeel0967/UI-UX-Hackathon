import React from "react";

export default function favourite() {
  return (
    <div className="container mx-auto px-4 md:px-20 py-10 h-full">
      <div className="grid grid-cols-1 gap-8">
        <div className="mt-10">
          <h2 className="text-2xl font-semibold mb-4">Favourites</h2>
          <p className="text-gray-600">
            There are no items saved to your favourites.
          </p>
          <div className="h-48"></div>
        </div>
      </div>
    </div>
  );
}
