/* eslint-disable no-undef */
import { createSwapPointTemplate } from '../templates/template-creator';
// import { renderRestaurantCards } from '../../components/card-list';

const SwapPoint = {
  async render() {
    return `
      <div class='container-swap-point container-xxl px-3 d-flex justify-content-center align-items-center' style="height: 100vh">
      </div>
      `;
  },

  async afterRender() {
    const pickUpContainer = $('.container-swap-point');
    pickUpContainer.append(createSwapPointTemplate());
  },
};

export default SwapPoint;
