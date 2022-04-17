import "regenerator-runtime"; /* for async await transpile */
import "../styles/main.css";
import "../styles/modal.css";
import "../styles/responsive.css";

import "./restaurant-items.js";

const navList = document.querySelector(".nav_list");
const burgerButton = document.querySelector(".hamburger");

const openDrawer = (event) => {
  navList.classList.toggle("show");
  event.stopPropagation();
};

burgerButton.addEventListener("click", openDrawer);

document.body.addEventListener("click", () => {
  navList.classList.remove("show");
});
