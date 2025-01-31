// Card.tsx
import Image, { StaticImageData } from "next/image";
import React from "react";

export type Product = {
  id: number;
  tags: string;
  title: string;
  description: string;
  color: string;
  price: string | any;
  imageUrl: StaticImageData;
};

const Card: React.FC<Product> = ({
  id,
  tags,
  title,
  description,
  color,
  price,
  imageUrl,
}) => {
  return (
    <div className="mb-6">
      
      <Image src={imageUrl} alt={title} width={300} height={300} />
      <div className="py-4">
        <h4 className="text-[#9E3500]">{tags}</h4>
        <h2 className="font-semibold">{title}</h2>
        <p className="text-text-secondary-gray">{description}</p>
        <p className="text-text-secondary-gray">{color}</p>
      </div>
      <h3 className="font-semibold">{price}</h3>
      
    </div>
  );
};

export default Card;