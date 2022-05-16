import RestaurantApi from '../../data/restaurant-api';
import UrlParser from '../../routes/url-parser';
import LikeButtonInitiator from '../../utils/like-button-initiator';
import ReviewButtonInitiator from '../../utils/review-button-initiator';
import {
  createMenuListTemplate,
  createRestaurantDetailTemplate,
} from '../templates/template-creator';

const Detail = {
  async render() {
    document.querySelector('#jumbotron').classList.add('none');
    document.querySelector('.skip-container').classList.add('none');
    return `
    <div class="modal" id="modal">
        <div class="modal_header">
          <h2 class="review_title">User Reviews</h2>
          <button data-close-button class="close-button">&times;</button>
        </div>
        <div class="modal_body" id="modal_body">
        </div>
      </div>
      <div id="overlay"></div> 
    <article id="restaurant_detail_container" class="restaurant_detail_container card">
      <div id="restaurant_detail" class="restaurant_detail">
      </div>
    </article>
    <div id="likeButtonContainer"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurantDetailContainer = document.getElementById('restaurant_detail_container');
    const restaurant = await RestaurantApi.getRestaurantDetail(url.id);

    restaurantDetailContainer.innerHTML = createRestaurantDetailTemplate(restaurant);

    const makananContainer = document.getElementById('makanan');
    const minumanContainer = document.getElementById('minuman');

    restaurant.menus.foods.forEach((food) => {
      makananContainer.innerHTML += createMenuListTemplate(food.name);
    });

    restaurant.menus.drinks.forEach((drink) => {
      minumanContainer.innerHTML += createMenuListTemplate(drink.name);
    });

    ReviewButtonInitiator.init({
      button: document.querySelector('#review_button'),
      restaurant,
    });

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: restaurant.id,
        name: restaurant.name,
        pictureId: restaurant.pictureId,
      },
    });
  },
};

export default Detail;
