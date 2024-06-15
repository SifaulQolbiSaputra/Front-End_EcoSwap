import $ from 'jquery';
import { createListPickupTemplate } from '../templates/template-creator';
import API_ENDPOINT from '../../globals/api-endpoint';

const ListPickup = {
  async render() {
    return `
      <div class="container-list-pickup container-xxl px-3"></div>
    `;
  },

  async afterRender() {
    const homeContainer = $('.container-list-pickup');

    try {
      const response = await fetch(API_ENDPOINT.PICKUP_REQUEST);
      const result = await response.json();

      if (response.status === 200 && result.status === 'success') {
        homeContainer.append(createListPickupTemplate(result.data));
      } else {
        homeContainer.append('<p>Failed to load data</p>');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      homeContainer.append('<p>Error fetching data</p>');
    }
  },
};

export default ListPickup;
