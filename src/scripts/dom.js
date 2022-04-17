import * as data from "../DATA.json";
import createMultipleElements from "./utils";

const restaurantItems = document.querySelectorAll(".restaurant_item");

restaurantItems.forEach((items, index) => {
  const [figure, img, figCaption, p] = createMultipleElements(
    "figure",
    "img",
    "figcaption",
    "p"
  );

  figCaption.innerText = data.restaurants[index].name;
  img.setAttribute("src", data.restaurants[index].pictureId);
  img.classList.add("item_image");

  figure.append(img);
  figure.append(figCaption);
  items.append(figure);

  p.textContent = data.restaurants[index].description;
  items.append(p);
});
