import RestaurantApi from '../../data/restaurant-api';
import { createRestaurantItemTemplates } from '../templates/template-creator';

const Homepage = {
  async render() {
    return `
    <h2 id="main_title" class="main_title">Restaurant List</h2>
    <section class="restaurant_list">
    </section>
    `;
  },

  async afterRender() {
    const restaurants = await RestaurantApi.getAllRestaurants();
    const restaurantListContainer = document.querySelector('.restaurant_list');
    restaurants.forEach((restaurant, index, array) => {
      restaurantListContainer.append(createRestaurantItemTemplates(restaurant, index, array));
    });
  },
};

export default Homepage;
