/* eslint-disable no-undef */
import $ from 'jquery';
import { createHomeAdminTemplate } from '../templates/template-creator';

const HomeAdmin = {
  async render() {
    return `
      <div class="container-home-admin container-xxl px-3"></div>
    `;
  },

  async afterRender() {
    const homeAdminContainer = $('.container-home-admin');
    homeAdminContainer.append(createHomeAdminTemplate());
    const role = localStorage.getItem('role');
    const berandaLink = document.getElementById('beranda-link');
    const aboutLink = document.querySelector('#aboutLink');
    const aboutLink2 = document.querySelector('#aboutLink2');
    const articleLink = document.getElementById('articleLink');
    const contactLink = document.getElementById('contactLink');

    berandaLink.addEventListener('click', (event) => {
      event.preventDefault();
      if (role === 'user') {
        window.location.href = '/home';
      } else if (role === 'admin') {
        window.location.href = '/#/home-admin';
        const targetElement = document.querySelector('.jumbotron');
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        window.location.href = '/';
      }
    });
    aboutLink.addEventListener('click', (event) => {
      event.preventDefault();
      if (role === 'admin') {
        const targetElement = document.getElementById('aboutEcoSwap__admin');
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
    aboutLink2.addEventListener('click', (event) => {
      event.preventDefault();
      if (role === 'admin') {
        const targetElement = document.getElementById('aboutEcoSwap__admin');
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
    articleLink.addEventListener('click', (event) => {
      event.preventDefault();
      if (role === 'admin') {
        const targetElement = document.getElementById('article__admin');
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
    contactLink.addEventListener('click', (event) => {
      event.preventDefault();
      if (role === 'admin') {
        const targetElement = document.getElementById('ourContact__admin');
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  },
};

export default HomeAdmin;
