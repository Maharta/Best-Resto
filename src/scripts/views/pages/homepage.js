import RestaurantApi from '../../data/restaurant-api';
import {
  createRestaurantItemTemplate,
  createRestaurantFirstItemTemplate,
  createRestaurantFirstItemTemplateModal,
} from '../templates/template-creator';

const Homepage = {
  async render() {
    return `
    <div class="modal" id="modal">
    <div class="modal_header">
      <img class="modal_image" />
      <button data-close-button class="close-button">&times;</button>
    </div>
    <div class="modal_body">
      <h3 class="modal_title"></h3>
      <p class="modal_city"></p>
      <p class="modal_rating"></p>
      <p class="modal_description"></p>
    </div>
  </div>
  <div id="overlay"></div>
    <h2 id="main_title" class="main_title">Restaurant List</h2>
    <section class="restaurant_list">
    </section>
    `;
  },

  async afterRender() {
    const restaurants = await RestaurantApi.getAllRestaurants();
    const restaurantListContainer = document.querySelector('.restaurant_list');
    restaurants.forEach((restaurant, index) => {
      if (index === 0 || index === restaurants.length - 1) {
        restaurantListContainer.innerHTML += createRestaurantFirstItemTemplate(restaurant);
        return;
      }
      restaurantListContainer.append(createRestaurantFirstItemTemplateModal(restaurant, index));
    });
  },
};

export default Homepage;
