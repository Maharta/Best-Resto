import { createRestaurantReviewsTemplate } from '../views/templates/template-creator';

class ModalInitiator {
  static closeModal() {
    const modal = document.getElementById('modal');
    const overlay = document.getElementById('overlay');
    if (!modal) return;
    modal.classList.remove('active');
    overlay.classList.remove('active');

    // focus back to review button for tab accessbility
    document.querySelector('#review_button').focus();
  }

  static openModal(reviews) {
    const modal = document.getElementById('modal');
    const modalBody = document.getElementById('modal_body');
    const overlay = document.getElementById('overlay');
    const modalCloseButton = document.querySelector('[data-close-button]');

    if (!modal) return;

    modal.classList.add('active');
    overlay.classList.add('active');

    reviews.forEach((review) => {
      modalBody.innerHTML += createRestaurantReviewsTemplate(review);
    });

    modalCloseButton.focus();

    modalCloseButton.addEventListener('click', () => {
      this.closeModal();
    });
  }
}

export default ModalInitiator;
