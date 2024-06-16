/* eslint-disable no-unused-vars */
/* eslint-disable no-case-declarations */
/* eslint-disable no-param-reassign */
/* eslint-disable no-use-before-define */
import * as bootstrap from 'bootstrap';
import '../scss/styles.scss';
import '../scss/responsive.scss';
import 'regenerator-runtime';
import $ from 'jquery';
import App from './views/app';
import swRegister from './utils/sw-register';

import EcoSwapSource from './data/ecoswap-source';

document.addEventListener('DOMContentLoaded', () => {
  const currentPath = window.location.pathname;

  switch (currentPath) {
    case '/index.html':

      EcoSwapSource.logout();
      break;
    case '/':
      EcoSwapSource.logout();
      break;
    case '/login.html':
      EcoSwapSource.loginUser();
      break;
    case '/loginAdmin.html':
      EcoSwapSource.loginAdmin();
      break;
    case '/signUp.html':
      EcoSwapSource.registerUser();
      break;
    default:
      break;
  }
});

const app = new App({
  content: $('#container-content'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
