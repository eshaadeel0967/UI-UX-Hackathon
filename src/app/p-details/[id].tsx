import { useRouter } from 'next/router';
import { products } from '/components/cards/data';

const ProductDetails = () => {
  const router = useRouter();
  const { id } = router.query;

  // Find the product using the ID from the route
  const product = products.find((product) => product.id === parseInt(id));

  if (!product) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container mx-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Product Image */}
        <div>
          <img
            src={product.imageUrl}
            alt={product.name}
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Product Details */}
        <div>
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-gray-700 text-lg mb-4">{product.description}</p>
          <p className="text-xl font-semibold mb-6">₹ {product.price.toLocaleString()}</p>
          <button
            className="py-2 px-6 bg-black text-white rounded-md text-lg font-bold hover:bg-gray-800"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
