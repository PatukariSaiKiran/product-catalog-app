import type { Product } from '../types/product';

interface ProductCardProps {
  product : Product;
}

function ProductCard({ product }: ProductCardProps) {

    const [whole, decimal] = product.price.toFixed(2).split('.')

    return (
        <article className="bg-white border rounded-lg p-4 shadow-sm flex flex-col hover:shadow-lg transition-all duration-300 cursor-pointer">
          <div className="h-48 flex items-center justify-center mb-4">
            <img
              src={product.image}
              alt={product.title}
              className="h-full object-contain transition-transform duration-300 hover:scale-105"
            />
          </div>
    
          <h2 className="text-base font-semibold mb-2">
              {product.title}
          </h2>
    
          <p className="text-gray-900 font-semibold mb-1 flex items-start">
             <span className="text-sm mr-1">€</span>
             <span className="text-2xl leading-none">{whole}</span>
             <span className="text-sm align-top">{decimal}</span>
          </p>
    
          <p className="text-sm text-gray-500 mt-auto">
             {product.category}
          </p>
        </article>
      );
    }
    
    export default ProductCard;