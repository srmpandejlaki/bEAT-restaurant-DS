/* eslint-disable no-undef */
/* eslint-disable func-call-spacing */
Feature('Add Review Resto');

Before (({ I }) => {
  I.amOnPage('/');
  I.wait(1);
});

// const assert = require('assert');

Scenario('tambah review resto', async ({ I }) => {
  I.seeElement('.list-resto .button .detailBtn a');
  I.click('.list-resto .button .detailBtn a');
  I.wait(2);

  I.waitForElement('#reviewer .reviews', 10);
  I.wait(1);

  I.seeElement('#detail .review .boxReview #formReview');
  I.click('#formReview .input #name');
  I.clearField('#formReview .input #name');
  I.wait(1);
  I.fillField('#formReview .input #name', 'will');

  I.seeElement('#formReview .input #review');
  I.click('#formReview .input #review');
  I.clearField('#formReview .input #review');
  I.wait(1);
  I.fillField('#formReview .input #review', 'cukup');

  I.seeElement('#formReview .saveBtn');
  I.click('#formReview .saveBtn');
  I.wait(2);

  I.waitForElement('#reviewer .reviews', 30);
  I.seeElement('#reviewer .reviews');

  const addNewReviewName = await I.grabTextFrom(locate('.reviews .info .rev-name p').first());
  const addNewReviewDesc = await I.grabTextFrom(locate('.reviews .info .rev-desc p').first());
  assert.strictEqual(addNewReviewName, 'will');
  assert.strictEqual(addNewReviewDesc, 'cukup');
});