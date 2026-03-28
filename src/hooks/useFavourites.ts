import { useEffect, useState } from "react";

const FAVOURITES_KEY = "favouriteProductIds";

function useFavourites(productId: number) {
  const [isFavourite, setIsFavourite] = useState(false);

  useEffect(() => {
    const storedFavourites = localStorage.getItem(FAVOURITES_KEY);

    if (storedFavourites) {
      const favouriteIds: number[] = JSON.parse(storedFavourites);
      setIsFavourite(favouriteIds.includes(productId));
    } else {
      setIsFavourite(false);
    }
  }, [productId]);

  const toggleFavourite = () => {
    const storedFavourites = localStorage.getItem(FAVOURITES_KEY);
    const favouriteIds: number[] = storedFavourites
      ? JSON.parse(storedFavourites)
      : [];

    let updatedFavourites: number[];

    if (favouriteIds.includes(productId)) {
      updatedFavourites = favouriteIds.filter((id) => id !== productId);
      setIsFavourite(false);
    } else {
      updatedFavourites = [...favouriteIds, productId];
      setIsFavourite(true);
    }

    localStorage.setItem(FAVOURITES_KEY, JSON.stringify(updatedFavourites));
  };

  return { isFavourite, toggleFavourite };
}

export default useFavourites;