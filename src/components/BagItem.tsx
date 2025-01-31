// components/BagItem.tsx
import React from "react";
import Image, { StaticImageData } from "next/image";
import wishlistIcon from "../public/images/icons/wishlist.svg"
import deleteIcon from "../public/images/icons/delete.svg"
interface BagItemProps {
  image: string | StaticImageData;
  name: string;
  description: string;
  category: string;
  size: string;
  price: number;
  quantity: number;
}

const BagItem: React.FC<BagItemProps> = ({ image, name, description, category, size, price, quantity }) => {
  return (
    <div className="flex items-center mb-6 border-b pb-4 w-max h-max">
      <Image src={image} alt={name} className="rounded-md object-cover mr-6 w-auto h-48" />
      <div className="grid gap-8">
        <div className="flex gap-2 flex-col">
        <h3 className="text-lg ">{name}</h3>
        <p className="text-gray-500">{description}</p>
        <p className="text-gray-500">{category}</p>
        <div className="flex justify-between">
        <p className="text-gray-500">Size: {size}</p>
        <p className="text-gray-500">Quantity: {quantity}</p>
        </div>
        </div>
      <div className="flex gap-4">
        <Image src={wishlistIcon} alt="wishlist"/>
        <Image src={deleteIcon} alt="delete"/>
      </div>
      </div>
      <div className="flex justify-end items-start text-right mb-40 ml-32">
        <h4 className="text-base ">MRP:</h4>
        <p className="text-gray-800 ">₹ {price.toLocaleString()}</p>
      </div>
    </div>
  );
};

export default BagItem;
