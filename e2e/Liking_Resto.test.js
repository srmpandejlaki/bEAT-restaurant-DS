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
