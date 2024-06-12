/* eslint-disable no-undef */
import $ from 'jquery';
import { createHistoryTransactionTemplate } from '../templates/template-creator';

const HistoryTransaction = {
  async render() {
    return `
      <div class="container-history-transaction container-xxl px-3"></div>
    `;
  },

  async afterRender() {
    const homeContainer = $('.container-history-transaction');
    homeContainer.append(createHistoryTransactionTemplate());
  },
};

export default HistoryTransaction;
