/* eslint-disable func-call-spacing */
/* eslint-disable no-undef */
Feature('UnLiking Resto');

Before (({ I }) => {
  I.amOnPage('/#/favorite');
  I.wait(1);
});

Scenario('menampilkan page favorite kosong',  ({ I }) => {
  I.see('', '.favorite .list-resto');
});

const assert = require('assert');

Scenario('suka satu resto kemudian batal suka resto', async ({ I }) => {
  I.see('', '.favorite .list-resto');
  I.wait(1);

  I.amOnPage('/');
  I.wait(1);

  I.seeElement('.list-resto .button .detailBtn a');
  const firstResto = locate('.list-resto .desc h3');
  const firstRestoTitle = await I.grabTextFrom(firstResto);
  I.click(locate('.list-resto .button .detailBtn a'));

  I.wait(2);

  I.seeElement('#likeBtn #likeButton');
  I.click('#likeBtn #likeButton');
  I.wait(2);

  I.amOnPage('/#/favorite');
  I.seeElement('.favorite .list-resto');
  I.wait(1);
  const likedRestoTitle = await I.grabTextFrom('.favorite .list-resto .item-resto .desc h3');

  I.seeElement('.favorite .list-resto .item-resto .descItem .button .detailBtn a');
  I.click('.favorite .list-resto .item-resto .descItem .button .detailBtn a');

  I.seeElement('#likeBtn #likedButton');
  I.click('#likeBtn #likedButton');

  I.amOnPage('/#/favorite');
  I.wait(2);
  assert.strictEqual(firstRestoTitle, likedRestoTitle);
});