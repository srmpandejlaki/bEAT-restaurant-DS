import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.scss';
import '../styles/responsive.scss';

import '../scripts/components/importer.js';
import AppResto from './view/app.js';
import swRegister from './utils/sw-register.js';

const app = new AppResto({
  button: document.querySelector('#nav-burger'),
  drawer: document.querySelector('#nav-menu'),
  content: document.querySelector('#main'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
