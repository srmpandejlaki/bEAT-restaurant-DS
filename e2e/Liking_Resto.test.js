/* eslint-disable func-call-spacing */
/* eslint-disable no-undef */
Feature('Liking Resto');

Before (({ I }) => {
  I.amOnPage('/#/favorite');
  I.wait(2);
});

Scenario('menampilkan page favorite kosong',  ({ I }) => {
  I.see('', '.favorite .list-resto');
});

const assert = require('assert');

Scenario('suka satu resto', async ({ I }) => {
  I.see('', '.favorite .list-resto');

  I.amOnPage('/');

  I.seeElement('.list-resto .button .detailBtn a');
  const firstResto = locate('.list-resto .desc h3');
  const firstRestoTitle = await I.grabTextFrom(firstResto);
  I.click(locate('.list-resto .button .detailBtn a'));

  I.seeElement('#likeBtn #likeButton');
  I.click('#likeBtn #likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.favorite .list-resto');
  const likedRestoTitle = await I.grabTextFrom('.favorite .list-resto .item-resto .desc h3');

  assert.strictEqual(firstRestoTitle, likedRestoTitle);
});
