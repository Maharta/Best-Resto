import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/modal.css';
import '../styles/responsive.css';
import './restaurant-items';
import App from './app';

const app = new App({
  button: document.querySelector('#hamburger'),
  drawer: document.querySelector('#nav_list'),
  content: document.querySelector('#mainContent'),
});
