/* eslint-disable no-undef */
import $ from 'jquery';
import { createDetailArticleTemplate } from '../templates/template-creator';

const DetailArticle = {
  async render() {
    return `
      <div class="container-detail-article container-xxl px-3"></div>
    `;
  },

  async afterRender() {
    const homeContainer = $('.container-detail-article');
    homeContainer.append(createDetailArticleTemplate());
  },
};

export default DetailArticle;
