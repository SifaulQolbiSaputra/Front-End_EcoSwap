/* eslint-disable no-alert */
import $ from 'jquery';
import { createDetailWithdrawalTemplate } from '../templates/template-creator';
import API_ENDPOINT from '../../globals/api-endpoint';

const DetailWithdrawal = {
  async render() {
    return `
      <div class="container-detail-withdrawal container-xxl px-3 d-flex justify-content-center align-items-center' style="height: 100vh"></div>
    `;
  },

  async afterRender() {
    const url = window.location.hash.split('/');
    const withdrawalId = url[url.length - 1];
    const detailContainer = $('.container-detail-withdrawal');

    try {
      const response = await fetch(`${API_ENDPOINT.WITHDRAWALS}/${withdrawalId}`);
      const result = await response.json();

      if (response.status === 200 && result.status === 'success') {
        detailContainer.append(createDetailWithdrawalTemplate(result.data));

        $('#approve-withdrawal-form').on('submit', async (event) => {
          event.preventDefault();

          try {
            const token = localStorage.getItem('token'); // Ganti dengan token admin yang sebenarnya
            const approveResponse = await fetch(`${API_ENDPOINT.WITHDRAWALS}/${withdrawalId}/approve`, {
              method: 'PUT',
              headers: {
                Authorization: `Bearer ${token}`,
              },
            });

            const approveResult = await approveResponse.json();

            if (approveResponse.status === 200 && approveResult.status === 'success') {
              alert('Permintaan penjemputan berhasil disetujui');
              // Opsi tambahan, seperti redirect atau update UI
            } else {
              alert('Gagal menyetujui permintaan penjemputan');
            }
          } catch (error) {
            console.error('Error approving withdrawal request:', error);
            alert('Error approving withdrawal request');
          }
        });
      } else {
        detailContainer.append('<p>Gagal memuat data</p>');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      detailContainer.append('<p>Error fetching data</p>');
    }
  },
};

export default DetailWithdrawal;
