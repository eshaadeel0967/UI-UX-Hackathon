// ProductList.tsx
import React from 'react';
import nikeProducts from './Cards/data'; 
import Card from './Cards/Card';
import Link from 'next/link';

const products = nikeProducts.find((products) => products.id);
const ProductList = () => {
  return (
    
    <div className="grid grid-cols-3 gap-4 pb-10 border-b-2">
      {nikeProducts.map((product) => (
        <Link href={`/p-details/${product.id}`}>
        <Card
        id={product.id}
        tags={product.tags}
        title={product.title}
        description={product.description}
        color={product.color}
        price={product.price}
        imageUrl={product.imageUrl}
        />
      </Link>
      ))}
    </div>
     
  );
};

export default ProductList;