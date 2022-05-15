import RestaurantApi from '../../data/restaurant-api';
import UrlParser from '../../routes/url-parser';
import {
  createMenuListTemplate,
  createRestaurantDetailTemplate,
  createRestaurantReviewsTemplate,
} from '../templates/template-creator';

const Detail = {
  async render() {
    document.querySelector('#jumbotron').classList.add('none');
    return `
    <article id="restaurant_detail_container" class="restaurant_detail_container card">
      <div class="restaurant_detail">
      </div>

    </article>

    <article id="user_reviews" class="user_reviews card">
      <div class="review_title_container">
        <h2 class="review_title">User Reviews</h2>
      </div>
    </article>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurantDetailContainer = document.getElementById('restaurant_detail_container');
    const userReviewsContainer = document.getElementById('user_reviews');
    const restaurant = await RestaurantApi.getRestaurantDetail(url.id);

    restaurantDetailContainer.innerHTML = createRestaurantDetailTemplate(restaurant);
    restaurant.customerReviews.forEach((review) => {
      userReviewsContainer.innerHTML += createRestaurantReviewsTemplate(review);
    });

    const makananContainer = document.getElementById('makanan');
    const minumanContainer = document.getElementById('minuman');

    restaurant.menus.foods.forEach((food) => {
      makananContainer.innerHTML += createMenuListTemplate(food.name);
    });

    restaurant.menus.drinks.forEach((drink) => {
      minumanContainer.innerHTML += createMenuListTemplate(drink.name);
    });
  },
};

export default Detail;
