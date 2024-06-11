/* eslint-disable no-undef */
import { createPickUpTemplate } from '../templates/template-creator';
// import { renderRestaurantCards } from '../../components/card-list';

const PickUp = {
  async render() {
    return `
      <div class='container-pickup container-xxl px-3'></div>
      `;
  },

  async afterRender() {
    const pickUpContainer = $('.container-pickup');
    pickUpContainer.append(createPickUpTemplate());
  },
};

export default PickUp;
