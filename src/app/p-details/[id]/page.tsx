'use client';
import products from '@/components/Cards/data';
import { Product } from '@/components/Cards/Card';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import Button from '@/components/Button';

const ProductDetails = () => {

  const pathname = usePathname();

  // Extract the "id" from the path
  const id = pathname.split('/').pop();

  // Find the product using the ID from the route
  const product: Product | undefined  = products.find(
    (product) => product.id === parseInt(id as string, 10)
  );
  
  if (!product) {
    return <p>Product not found.</p>;
  }
 
  return (
    <div className="container mx-auto px-4 pb-48">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        {/* Product Image */}
        <div className="flex justify-center">
          <Image
            src={product.imageUrl}
            alt={product.title}
            className="rounded-md object-cover"
          />
        </div>

        {/* Product Details */}
        <div className="text-center md:text-left">
          <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
          <p className="text-gray-600 text-lg mb-6">{product.description}</p>
          <p className="text-xl font-semibold mb-6">
            ₹ {product.price.toLocaleString()}
          </p>
          <Button text='Add to Cart' classNames='rounded-full py-3 w-40'
          />
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
