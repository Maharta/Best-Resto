import FavoriteRestaurantIdb from '../../src/scripts/data/restaurant-db';
import LikeButtonPresenter from '../../src/scripts/utils/like-button-presenter';

const TestFactories = {
  async createLikeButtonPresenterWithRestaurant(restaurant) {
    await LikeButtonPresenter.init({
      likeButtonContainer: document.getElementById('likeButtonContainer'),
      favRestaurantModel: FavoriteRestaurantIdb,
      restaurant,
    });
  },
};

export default TestFactories;
