class FavoriteRestaurantPresenter {
  constructor({ view, favRestaurantModel }) {
    this._view = view;
    this._favRestaurantModel = favRestaurantModel;
    console.log(favRestaurantModel);

    this._getRestaurant();
  }

  async _getRestaurant() {
    const restaurant = await this._favRestaurantModel.getAllRestaurant();
    this._showRestaurant(restaurant);
  }

  _showRestaurant(restaurant) {
    this._view.renderRestaurant(restaurant);
  }
}

export default FavoriteRestaurantPresenter;
