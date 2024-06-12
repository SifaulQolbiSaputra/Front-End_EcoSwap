/* eslint-disable no-undef */
import { createPickUpRequestTemplate } from '../templates/template-creator';
// import { renderRestaurantCards } from '../../components/card-list';

const PickUpRequest = {
  async render() {
    return `
      <div class='container-pickup-request container-xxl px-3 d-flex justify-content-center align-items-center' style="height: 100vh"></div>
      `;
  },

  async afterRender() {
    const pickUpContainer = $('.container-pickup-request');
    pickUpContainer.append(createPickUpRequestTemplate());
  },
};

export default PickUpRequest;
