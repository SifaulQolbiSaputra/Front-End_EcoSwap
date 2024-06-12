/* eslint-disable no-param-reassign */
/* eslint-disable no-use-before-define */
import * as bootstrap from 'bootstrap';
import '../scss/styles.scss';
import '../scss/responsive.scss';
import 'regenerator-runtime';
import $ from 'jquery';
import App from './views/app';
// import swRegister from './utils/sw-register';

import EcoSwapSource from './data/ecoswap-source';

document.addEventListener('DOMContentLoaded', () => {
  EcoSwapSource.registerUser();
  EcoSwapSource.loginUser();
  EcoSwapSource.loginAdmin();
  EcoSwapSource.logout();
});

const app = new App({
  content: $('#container-content'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();

//   swRegister();
});
