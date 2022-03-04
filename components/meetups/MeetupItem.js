import { useContext } from "react";
import FavoriteContext from "../../store/favorite-contexts";
import classes from "./MeetupItem.module.css";
import Card from "../ui/Card";
function MeetupItem(props) {
  const favoritesCtx = useContext(FavoriteContext);
  const itemIsFavorite = favoritesCtx.itemIsFavorite(props.id);
  function toggleFavoritesStatusHandler() {
    if (itemIsFavorite) {
      favoritesCtx.removeFavorite(props.id);
    } else {
      favoritesCtx.addFavorite({
        id: props.id,
        title: props.title,
        description: props.description,
        address: props.address,
        image:props.image
      });
    }
  }
  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={toggleFavoritesStatusHandler}>{ itemIsFavorite ? 'Remove From Favorites' : 'To Favorites'}</button>
        </div>
      </Card>
    </li>
  );
}
export default MeetupItem;
