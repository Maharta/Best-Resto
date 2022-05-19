Feature('unliking a restaurant');

Before(({ I }) => {
  I.amOnPage('/#/favorites');
  I.see('Belum ada restaurant yang di sukai', '.no_favorite');

  I.amOnPage('/');

  I.seeElement('.restaurant_item');
  I.click(locate('.detail_button').first());

  I.seeElement('#likeButton');
  I.click('#likeButton');
});

Scenario('Unliking a restaurant ', ({ I }) => {
  I.amOnPage('/#/favorites');
  I.dontSeeElement('.no_favorite');
  I.seeElement('.restaurant_item');
  I.click('.detail_button');

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorites');
  I.see('Belum ada restaurant yang di sukai', '.no_favorite');
});
