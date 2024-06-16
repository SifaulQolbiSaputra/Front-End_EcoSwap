/* eslint-disable no-undef */
/* eslint-disable no-alert */
/* eslint-disable no-unused-vars */
// pick-up-request.js
import $ from 'jquery';
import { createPickUpRequestTemplate } from '../templates/template-creator';
import EcoSwapSource from '../../data/ecoswap-source';

const PickUpRequest = {
  async render() {
    return `
      <div class='container-pickup-request container-xxl px-3 d-flex justify-content-center align-items-center' style="height: 100vh"></div>
    `;
  },

  async afterRender() {
    const pickUpContainer = $('.container-pickup-request');
    pickUpContainer.append(createPickUpRequestTemplate());

    const pickupRequestForm = document.getElementById('pickupRequestForm');
    pickupRequestForm.addEventListener('submit', async (event) => {
      event.preventDefault();

      const name = document.getElementById('name').value.toString();
      const address = document.getElementById('address').value.toString();
      const phone = document.getElementById('phone').value.toString();
      const description = document.getElementById('description').value.toString();

      const data = {
        name,
        address,
        phone,
        description,
      };

      const dataAlert = {
        success: {
          status: 'success',
          message: 'Permintaan penjemputan berhasil diajukan!',
          text: 'Terima kasih telah mengajukan penjemputan sampah',
        },
        error: {
          status: 'success',
          message: 'Terjadi kesalahan saat mengajukan permintaan penjemputan!',
          text: 'Silahkan coba lagi nanti',
        },
      };

      try {
        await EcoSwapSource.pickUpRequest(data);
        this.showAlert(dataAlert.success.status, dataAlert.success.message, dataAlert.success.text);
        pickupRequestForm.reset();
      } catch (error) {
        this.showAlert(dataAlert.error.status, dataAlert.error.message, dataAlert.error.text);
        console.log(error.message);
      }
    });
  },

  async showAlert(status, message, text) {
    Swal.fire({
      position: 'center',
      icon: `${status}`,
      title: `${message}`,
      text: `${text}`,
    });
  },
};

export default PickUpRequest;
