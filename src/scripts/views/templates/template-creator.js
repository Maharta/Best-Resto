import CONFIG from '../../globals/config';
import createMultipleElements from '../../utils/multiple-element-creator';
import ModalInitiator from '../../utils/modal-initiator';

const createRestaurantItemTemplate = (restaurant) => `<article class="restaurant_item">
  <button class="detail_button">DETAIL</button>
  <figure><img src="${CONFIG.BASE_IMG_URL + restaurant.pictureId}" alt="Restoran yang bernama ${
  restaurant.name
}" class="item_image">
  <figcaption>${restaurant.name}</figcaption>
  </figure></article>
  `;

const createRestaurantFirstItemTemplateModal = (restaurant, index) => {
  const [figure, img, figCaption, button, article] = createMultipleElements(
    'figure',
    'img',
    'figcaption',
    'button',
    'article',
  );

  article.classList.add('restaurant_item');

  figCaption.innerText = restaurant.name;
  img.setAttribute('src', CONFIG.BASE_IMG_URL + restaurant.pictureId);
  img.setAttribute('alt', `Gambar dari restoran yang bernama ${restaurant.name}`);
  img.classList.add('item_image');

  figure.append(img);
  figure.append(figCaption);
  article.append(figure);

  // button to open restaurant-item detail

  button.textContent = 'DETAIL';
  button.classList.add('detail_button');
  button.addEventListener('click', () => {
    ModalInitiator.openModal(restaurant, index);
  });

  article.prepend(button);
  return article;
};

const createRestaurantFirstItemTemplate = (restaurant) => `<article class="restaurant_item first">
<button class="detail_button">DETAIL</button>
<figure><img src="${CONFIG.BASE_IMG_URL + restaurant.pictureId}" alt="Restoran yang bernama ${
  restaurant.name
}" class="item_image">
<figcaption>${restaurant.name}</figcaption>
</figure></article>
`;

export {
  createRestaurantItemTemplate,
  createRestaurantFirstItemTemplate,
  createRestaurantFirstItemTemplateModal,
};
