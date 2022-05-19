import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/detail.css';
import '../styles/modal.css';
import '../styles/responsive.css';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import App from './app';
import swRegister from './utils/sw-register';

const app = new App({
  button: document.querySelector('#hamburger'),
  drawer: document.querySelector('#nav_list'),
  jumbotron: document.querySelector('#jumbotron'),
  content: document.querySelector('#mainContent'),
});

window.addEventListener('hashchange', () => {
  const url = window.location.hash.slice(1);
  if (url === 'mainContent') return; // for skip to content accessibility
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
