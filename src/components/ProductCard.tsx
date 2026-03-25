import { useNavigate } from 'react-router-dom';
import { useEffect,useState } from 'react';
import type { Product } from '../types/product';
import HeartOutlineIcon from '../assets/icons/heart-outline.svg?react';
import HeartFilledIcon from '../assets/icons/heart-filled.svg?react';

interface ProductCardProps {
  product : Product;
}

const FAVOURITES_KEY = 'favouriteProductIds';

function ProductCard({ product }: ProductCardProps) {
    const navigate = useNavigate();
    const [isFavourite, setIsFavourite] = useState(false);

    const [whole, decimal] = product.price.toFixed(2).split('.');

    useEffect(() => {
        const storedFavourites = localStorage.getItem(FAVOURITES_KEY);

        if (storedFavourites) {
            const favouriteIds: number[] = JSON.parse(storedFavourites);
            setIsFavourite(favouriteIds.includes(product.id));
        }
    }, [product.id]);
  
    const toggleFavourite = (e: React.MouseEvent) => {
        e.stopPropagation();

        const storedFavourites = localStorage.getItem(FAVOURITES_KEY);
        const favouriteIds: number[] = storedFavourites
        ? JSON.parse(storedFavourites)
        : [];

        let updatedFavourites: number[];

        if (favouriteIds.includes(product.id)) {
            updatedFavourites = favouriteIds.filter((id) => id !== product.id);
            setIsFavourite(false);
        } else {
            updatedFavourites = [...favouriteIds, product.id];
            setIsFavourite(true);
        }

        localStorage.setItem(FAVOURITES_KEY, JSON.stringify(updatedFavourites));
    };

    return (
        <article
          onClick={() => navigate(`/products/${product.id}`)}
          className="relative bg-white border border-gray-200 rounded-lg p-4 shadow-sm flex flex-col hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer"
        >
          <div className="absolute top-4 right-4">
            <button
              type="button"
              onClick={toggleFavourite}
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