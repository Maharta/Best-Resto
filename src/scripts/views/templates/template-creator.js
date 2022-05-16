import CONSTANT from '../../globals/config';

const createRestaurantItemTemplate = (restaurant) => `<article class="restaurant_item">
  <a href="#/detail/${restaurant.id}" class="detail_button">DETAIL</a>
  <div class="rating_container">
    <p>⭐️<span class="rating_score">${restaurant.rating}</span></p>
  </div>
  <figure><img src="${CONSTANT.BASE_IMG_URL + restaurant.pictureId}" alt="Restoran yang bernama ${
  restaurant.name
}" class="item_image">
  <figcaption class="restaurant_name">${restaurant.name}</figcaption>
  </figure></article>
  `;

const createRestaurantItemTemplates = (restaurant, index, array) => {
  const staticHtml = `<a href="#/detail/${restaurant.id}" class="detail_button">DETAIL</a>
    <div class="rating_container">
      <p>⭐️<span class="rating_score">${restaurant.rating}</span></p>
    </div>
    <figure><img src="${CONSTANT.BASE_IMG_URL + restaurant.pictureId}" alt="Restoran yang bernama ${
  restaurant.name
}" class="item_image">
    <figcaption class="restaurant_name">${restaurant.name}</figcaption>
    </figure></article>
    `;
  if (index === 0 || index === array.length - 1) {
    return `<article class="restaurant_item first">${staticHtml}`;
  }
  return `<article class="restaurant_item">${staticHtml}`;
};

const createRestaurantDetailTemplate = (restaurant) => ` 
<div class="restaurant_detail">
<figure><img src="${CONSTANT.BASE_IMG_URL}${restaurant.pictureId}" alt="Restoran yang bernama ${restaurant.name}">
  <figcaption class="restaurant_name">${restaurant.name}</figcaption>
</figure>
 <p class="resto_attributes">Kota : ${restaurant.city}</p>
 <p class="resto_attributes">Alamat : ${restaurant.address}</p>
 <p class="resto_attributes">Rating : ${restaurant.rating}</p>
 <hr>
 <div class="menu_container">
 <p class="resto_description">${restaurant.description}</p>
 <section class="menu_list">
   <p>Makanan</p>
   <ul id="makanan">
   </ul>
 </section>
 <section class="menu_list">
  <p>Minuman</p>
  <ul id="minuman">
  </ul>
</section>
 </div>
<button id="review_button" class="review_button">Reviews</button>
</div>`;

const createRestaurantReviewsTemplate = (review) => `
<div class="review">
  <p><span class="username">${review.name}</span> <br><span class="date">${review.date}</span></p>
  <p><span class="review_text">${review.review}</span></p>
</div>`;

const createMenuListTemplate = (name) => `
<li>${name}</li>
`;

const createLikeButtonTemplate = () => `
<button aria-label="like this restaurant" id="likeButton" class="like">
   <i class="fa fa-heart-o" aria-hidden="true"></i>
</button>
`;

const createLikedButtonTemplate = () => `
<button aria-label="unlike this restaurant" id="likeButton" class="like">
  <i class="fa fa-heart" aria-hidden="true"></i>
</button>
`;

export {
  createRestaurantItemTemplate,
  createRestaurantItemTemplates,
  createRestaurantDetailTemplate,
  createRestaurantReviewsTemplate,
  createMenuListTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
