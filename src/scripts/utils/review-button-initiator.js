import ModalInitiator from './modal-initiator';

const ReviewButtonInitiator = {
  init({ button, restaurant }) {
    this._button = button;
    this._restaurant = restaurant;

    this._initiateButton();
  },

  _initiateButton() {
    this._button.addEventListener('click', () => {
      ModalInitiator.openModal(this._restaurant.customerReviews);
    });
  },
};

export default ReviewButtonInitiator;
