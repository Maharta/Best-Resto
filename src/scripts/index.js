import "regenerator-runtime"; /* for async await transpile */
import "../styles/main.css";
import "../styles/responsive.css";

import "./dom.js";

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
