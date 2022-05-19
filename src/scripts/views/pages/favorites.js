import FavoriteRestaurantIdb from '../../data/restaurant-db';
import FavoriteRestaurantPresenter from '../favorite/favoriteRestaurantPresenter';
import FavoriteRestaurantView from '../favorite/favoriteRestaurantView';

const view = new FavoriteRestaurantView();

const Favorites = {
  async render() {
    return view.getTemplate();
  },

  async afterRender() {
    new FavoriteRestaurantPresenter({
      view,
      favRestaurantModel: FavoriteRestaurantIdb,
    });
  },
};

export default Favorites;
