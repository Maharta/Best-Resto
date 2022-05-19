const assert = require("assert");

Feature("Liking a restaurant");

Before(({ I }) => {
  I.amOnPage("/#/favorites");
});

Scenario("Showing Empty Liked Restaurant", ({ I }) => {
  I.see("Belum ada restaurant yang di sukai", ".no_favorite");
});

Scenario("Liking a restaurant", async ({ I }) => {
  I.see("Belum ada restaurant yang di sukai", ".no_favorite");

  I.amOnPage("/");

  I.seeElement(".restaurant_item");
  const firstFilm = locate(".restaurant_name").first();
  const firstFilmTitle = await I.grabTextFrom(firstFilm);
  I.click(locate(".detail_button").first());

  I.seeElement("#likeButton");
  I.click("#likeButton");

  I.amOnPage("/#/favorites");
  I.seeElement(".restaurant_item");
  const titleOnFavorite = await I.grabTextFrom(".restaurant_name");

  assert.strictEqual(firstFilmTitle, titleOnFavorite);
});
