import { createRestaurantItemTemplate } from '../templates/template-creator';

class FavoriteRestaurantView {
  getTemplate() {
    document.querySelector('#jumbotron').classList.add('none');
    return `
    <h2 id="main_title" class="main_title">Favorites</h2>
    <section class="restaurant_list">
    </section>
    `;
  }

  renderRestaurant(restaurants = []) {
    const restaurantListContainer = document.querySelector('.restaurant_list');
    if (restaurants.length) {
      restaurants.forEach((restaurant) => {
        restaurantListContainer.innerHTML += createRestaurantItemTemplate(restaurant);
      });
    } else {
      restaurantListContainer.innerHTML = '<h2 class="no_favorite">Belum ada restaurant yang di sukai</h2>';
    }
  }
}

export default FavoriteRestaurantView;
