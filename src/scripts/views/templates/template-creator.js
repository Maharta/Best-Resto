import CONFIG from '../../globals/config';

const createRestaurantItemTemplate = (restaurant) => `<article class="restaurant_item">
<button class="detail_button">DETAIL</button>
<figure><img src="${CONFIG.BASE_IMG_URL + restaurant.pictureId}" alt="Restoran yang bernama ${
  restaurant.name
}" class="item_image">
<figcaption>${restaurant.name}</figcaption>
</figure></article>
`;

const createRestaurantFirstItemTemplate = (restaurant) => `<article class="restaurant_item first">
<button class="detail_button">DETAIL</button>
<figure><img src="${CONFIG.BASE_IMG_URL + restaurant.pictureId}" alt="Restoran yang bernama ${
  restaurant.name
}" class="item_image">
<figcaption>${restaurant.name}</figcaption>
</figure></article>
`;

export { createRestaurantItemTemplate, createRestaurantFirstItemTemplate };
