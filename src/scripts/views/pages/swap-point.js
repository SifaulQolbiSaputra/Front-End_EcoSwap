/* eslint-disable no-unused-vars */
/* eslint-disable no-alert */
/* eslint-disable no-undef */
import API_ENDPOINT from '../../globals/api-endpoint';
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

    const withdrawalRequestForm = document.getElementById('withdrawalRequestForm');
    withdrawalRequestForm.addEventListener('submit', async (event) => {
      event.preventDefault();

      const name = document.getElementById('name').value.toString();
      const email = document.getElementById('email').value.toString();
      const phone = document.getElementById('phone').value.toString();
      const ewallet = document.getElementById('ewallet').value.toString();
      const amount = parseInt(document.getElementById('amount').value, 10);

      if (amount < 25000) {
        alert('Nominal penarikan minimal adalah Rp.25.000');
        return;
      }

      const data = {
        name,
        email,
        phone,
        ewallet,
        amount,
      };

      try {
        const token = localStorage.getItem('token'); // Asumsikan token disimpan di local storage
        const response = await fetch(`${API_ENDPOINT.WITHDRAWALS}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(data),
        });

        if (!response.ok) {
          const errorData = await response.json();
          console.error('Error dari server:', errorData);
          throw new Error('Gagal mengajukan permintaan penarikan. Silakan coba lagi.');
        }

        const responseData = await response.json();
        alert('Permintaan penarikan berhasil diajukan!');

        // Opsional, alihkan halaman atau kosongkan form
        withdrawalRequestForm.reset();
      } catch (error) {
        console.error('Error:', error);
        alert('Terjadi kesalahan saat mengajukan permintaan penarikan. Silakan coba lagi nanti.');
      }
    });
  },
};

export default SwapPoint;
