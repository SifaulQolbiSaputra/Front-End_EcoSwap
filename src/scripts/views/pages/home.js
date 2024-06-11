/* eslint-disable no-undef */
import $ from 'jquery';
import { createHomeTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
      <div class="container-home container-xxl px-3"></div>
    `;
  },

  async afterRender() {
    const homeContainer = $('.container-home');
    homeContainer.append(createHomeTemplate());
  },
};

export default Home;
