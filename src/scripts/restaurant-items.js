import * as data from "../DATA.json";
import createMultipleElements from "./utils";

const { openModal } = require("./modal.js");

const restaurantItems = document.querySelectorAll(".restaurant_item");

restaurantItems.forEach((items, index) => {
  const [figure, img, figCaption, button] = createMultipleElements(
    "figure",
    "img",
    "figcaption",
    "button"
  );

  figCaption.innerText = data.restaurants[index].name;
  img.setAttribute("src", data.restaurants[index].pictureId);
  img.setAttribute(
    "alt",
    `Gambar dari restoran yang bernama ${data.restaurants[index].name}`
  );
  img.classList.add("item_image");

  figure.append(img);
  figure.append(figCaption);
  items.append(figure);

  //button to open restaurant-item detail

  button.textContent = "DETAIL";
  button.classList.add("detail_button");
  button.addEventListener("click", () => {
    openModal(data.restaurants[index], index);
  });
  items.prepend(button);
});
