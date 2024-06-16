/* eslint-disable no-alert */
/* eslint-disable no-undef */
import $ from 'jquery';
import EcoSwapSource from '../../data/ecoswap-source';
import { createHistoryTransactionTemplate, createTransactionCardTemplate } from '../templates/template-creator';

const HistoryTransaction = {
  async render() {
    return `
      <div class="container-history-transaction container-xxl px-3"></div>
    `;
  },

  async afterRender() {
    const homeContainer = $('.container-history-transaction');
    homeContainer.append(createHistoryTransactionTemplate());

    try {
      const userId = localStorage.getItem('userId'); // Asumsikan userId disimpan di local storage
      const transactions = await EcoSwapSource.getPickupsByUserId(userId);

      const transactionListContainer = homeContainer.find('.transaction__list');
      transactions.forEach((transaction, index) => {
        transactionListContainer.append(createTransactionCardTemplate(transaction, index + 1));
      });
    } catch (error) {
      console.error('Error:', error);
      alert('Gagal mengambil data transaksi. Silakan coba lagi nanti.');
    }
  },
};

export default HistoryTransaction;
