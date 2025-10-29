
import React, { createContext, useContext, useEffect, useState } from 'react';

const FavouritesContext = createContext();

export const FavouritesProvider = ({ children }) => {
  const [favourites, setFavourites] = useState(() => {
    const item = localStorage.getItem('favourites');
    return item ? JSON.parse(item) : [];
  });

  useEffect(() => {
    localStorage.setItem('favourites', JSON.stringify(favourites));
  }, [favourites]);

  const appendFavourite = (item) => {
    setFavourites((prev) => [...prev, item]);
  };

  const removeFavourite = (item) => {
    setFavourites((prev) =>
      prev.filter(
        (fav) =>
          !(fav.roomId === item.roomId && fav.sessionId === item.sessionId)
      )
    );
  };

  return (
    <FavouritesContext.Provider
      value={{ favourites, appendFavourite, removeFavourite }}
    >
      {children}
    </FavouritesContext.Provider>
  );
};

export const useFavourites = () => useContext(FavouritesContext);
