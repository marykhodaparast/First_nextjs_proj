import { createContext, useState } from "react";
const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0,
  addFavorite: (favoriteMeetup) => {},
  removeFavorite: (meetupId) => {},
  itemIsFavorite: (meetupId) => {},
});

export function FavoritesContextProvider(props) {
  const [userFavorites, setUserFavorites] = useState([]);
  function addFavoriteHandler(favoriteMeetup) {
    // userFavorites.concat(favoriteMeetup);
    setUserFavorites((prevUserFavorites) => {
      return prevUserFavorites.cancat(favoriteMeetup);
    });
  }
  function removeFavoriteHanlder(meetupId) {
    setUserFavorites((prevUserFavorites) => {
      return prevUserFavorites.filter((meetup) => meetupId != meetup.id);
    });
  }
  function itemIsFavoriteHandler(meetupId) {
    return userFavorites.some((meetup) => meetupId == meetup.id);
  }
  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
    addFavorite: addFavoriteHandler,
    removeFavorite: removeFavoriteHanlder,
    itemIsFavorite: itemIsFavoriteHandler,
  };
  return (
    <FavoritesContext.provider value={context}>
      {props.children}
    </FavoritesContext.provider>
  );
}
export default FavoritesContext;
