import itActsAsFavoriteRestaurantModel from './contracts/favoriteRestaurantContract';
import FavoriteRestaurantIdb from '../src/scripts/data/restaurant-db';

describe('Favorite restaurant model contract test for FavoriteRestaurantIdb', () => {
  afterEach(async () => {
    (await FavoriteRestaurantIdb.getAllRestaurant()).forEach(async (movie) => {
      await FavoriteRestaurantIdb.deleteRestaurant(movie.id);
    });
  });

  itActsAsFavoriteRestaurantModel(FavoriteRestaurantIdb);
});
