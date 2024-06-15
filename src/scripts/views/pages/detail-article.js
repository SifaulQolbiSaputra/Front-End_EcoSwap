import $ from 'jquery';
import { createDetailArticleTemplate } from '../templates/template-creator';
import articles from '../../../public/data/article.json';

const DetailArticle = {
  async render() {
    return `
      <div class="container-detail-article container-xxl px-3"></div>
    `;
  },

  async afterRender() {
    const url = window.location.hash.split('/');
    const articleId = url[url.length - 1];
    const article = articles.articles.find((theArticle) => theArticle.id === articleId);
    const homeContainer = $('.container-detail-article');
    homeContainer.append(createDetailArticleTemplate(article));
  },
};

export default DetailArticle;
