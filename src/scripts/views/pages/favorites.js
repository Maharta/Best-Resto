import FavoriteRestaurantIdb from '../../data/restaurant-db';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Favorites = {
  async render() {
    document.querySelector('#jumbotron').classList.add('none');
    return `
    <h2 id="main_title" class="main_title">Favorites</h2>
    <section class="restaurant_list">
    </section>
    `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurant();
    const restaurantListContainer = document.querySelector('.restaurant_list');
    restaurants.forEach((restaurant) => {
      restaurantListContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default Favorites;
