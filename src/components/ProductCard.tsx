import { useNavigate } from 'react-router-dom';
import type { Product } from '../types/product';
import HeartOutlineIcon from '../assets/icons/heart-outline.svg?react';
import HeartFilledIcon from '../assets/icons/heart-filled.svg?react';
import useFavourites from '../hooks/useFavourites';

interface ProductCardProps {
  product : Product;
}


function ProductCard({ product }: ProductCardProps) {
    const navigate = useNavigate();

    const [whole, decimal] = product.price.toFixed(2).split('.');
    const { isFavourite, toggleFavourite } = useFavourites(product.id);

    const handleFavouriteClick = (e: React.MouseEvent) => {
      e.stopPropagation();
      toggleFavourite();
    };
    

    return (
        <article
          onClick={() => navigate(`/products/${product.id}`)}
          className="relative bg-white border border-gray-200 rounded-lg p-4 shadow-sm flex flex-col hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer"
        >
        <div className="absolute top-4 right-4">
          <button
            type="button"
            onClick={handleFavouriteClick}
            aria-label={isFavourite ? 'Remove from favourites' : 'Add to favourites'}
            title={isFavourite ? 'Remove from favourites' : 'Add to favourites'}
            className="p-2 rounded-full bg-white shadow-md hover:bg-gray-100 hover:shadow-lg hover:scale-110 transition-all duration-200"
          >
              {isFavourite ? (
                <HeartFilledIcon className="w-5 h-5 text-red-500" />
              ) : (
                <HeartOutlineIcon className="w-5 h-5 text-gray-300" />
              )}
            </button>
        </div>
      
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