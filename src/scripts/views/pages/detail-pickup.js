/* eslint-disable no-alert */
import $ from 'jquery';
import { createDetailPickupTemplate } from '../templates/template-creator';
import API_ENDPOINT from '../../globals/api-endpoint';

const DetailPickup = {
  async render() {
    return `
      <div class="container-detail-pickup container-xxl px-3 d-flex justify-content-center align-items-center' style="height: 100vh"></div>
    `;
  },

  async afterRender() {
    const url = window.location.hash.split('/');
    const pickupId = url[url.length - 1];
    const detailContainer = $('.container-detail-pickup');

    try {
      const response = await fetch(`${API_ENDPOINT.PICKUP_REQUEST}/${pickupId}`);
      const result = await response.json();

      if (response.status === 200 && result.status === 'success') {
        detailContainer.append(createDetailPickupTemplate(result.data));

        $('#approve-pickup-form').on('submit', async (event) => {
          event.preventDefault();
          const wasteType = $('#typeTrash').val().toString();
          const weight = parseFloat($('#weightOfTrash').val());
          const points = parseInt($('#point').val(), 10);

          const payload = {
            wasteType,
            weight,
            points,
          };

          try {
            const token = localStorage.getItem('token');
            const approveResponse = await fetch(`${API_ENDPOINT.PICKUP_REQUEST}/${pickupId}/approve`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
              },
              body: JSON.stringify(payload),
            });

            const approveResult = await approveResponse.json();

            if (approveResponse.status === 200 && approveResult.status === 'success') {
              alert('Permintaan penjemputan berhasil disetujui');
              // Opsi tambahan, seperti redirect atau update UI
            } else {
              alert('Gagal menyetujui permintaan penjemputan');
            }
          } catch (error) {
            console.error('Error approving pickup request:', error);
            alert('Error approving pickup request');
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

export default DetailPickup;
