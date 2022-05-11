const modal = document.getElementById('modal');
const overlay = document.getElementById('overlay');
const modalCloseButton = document.querySelector('[data-close-button]');

const closeModal = (index) => {
  if (!modal) return;
  modal.classList.remove('active');
  overlay.classList.remove('active');

  // focus back to the last detail button for tab accessbility
  const focusableDetailButton = document.querySelectorAll('.detail_button');
  focusableDetailButton[index].focus();
};

const openModal = (restaurant, index) => {
  if (!modal) return;
  modal.classList.add('active');
  overlay.classList.add('active');

  const modalTitle = document.querySelector('.modal_title');
  const modalCity = document.querySelector('.modal_city');
  const modalRating = document.querySelector('.modal_rating');
  const modalDescription = document.querySelector('.modal_description');

  const img = document.querySelector('.modal_image');
  img.setAttribute('src', restaurant.pictureId);
  img.setAttribute('alt', `Gambar dari restoran ${restaurant.name}`);

  modalTitle.textContent = restaurant.name;
  modalCity.textContent = restaurant.city;
  modalRating.textContent = restaurant.rating;

  modalDescription.textContent = restaurant.description;
  modalCloseButton.focus();

  modalCloseButton.addEventListener('click', () => {
    closeModal(index);
  });
};

export default openModal;
