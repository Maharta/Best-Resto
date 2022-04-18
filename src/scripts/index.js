import "regenerator-runtime"; /* for async await transpile */
import "../styles/main.css";
import "../styles/modal.css";
import "../styles/responsive.css";

import "./restaurant-items.js";

const navList = document.querySelector(".nav_list");
const navListLinks = navList.querySelectorAll("a");
const burgerButton = document.querySelector(".hamburger");

const openDrawer = (event) => {
  navList.classList.toggle("show");
  if (navList.classList.contains("show")) {
    navListLinks.forEach((link) => {
      link.setAttribute("tabindex", "0");
    });
  } else {
    navListLinks.forEach((link) => {
      link.setAttribute("tabindex", "-1");
    });
  }
  event.stopPropagation();
};

burgerButton.addEventListener("click", openDrawer);

document.body.addEventListener("click", () => {
  navList.setAttribute("tabindex", "-1");
  navList.classList.remove("show");
});
