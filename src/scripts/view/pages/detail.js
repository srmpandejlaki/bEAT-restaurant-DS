import restoAppSource from '../../data/restoApp-source';
import UrlParser from '../../routes/url-parser';
import { createRestoDetailTemplate, createCustomerReview } from '../templates/template-creator';
import likeButton from '../../utils/button-like-initiator';
import favoriteRestoIdb from '../../data/favorite-resto-idb';

const details = {
  async render() {
    return `
      <div id="detail"></div>
      <div id="reviewer"></div>
      <div id="likeBtn"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();

    const detailResto = await restoAppSource.detail(url.id);
    const detailContainer = document.querySelector('#detail');
    detailContainer.innerHTML = createRestoDetailTemplate(detailResto);

    likeButton.init({
      likeButton: document.querySelector('#likeBtn'),
      favoritoResto: favoriteRestoIdb,
      restos: {
        id: detailResto.id,
        name: detailResto.name,
        pictureId: detailResto.picture,
        address: detailResto.address,
        city: detailResto.city,
        rating: detailResto.rating,
        description: detailResto.description,
        categories: detailResto.categories,
        foods: detailResto.foods,
        drinks: detailResto.drinks,
        customerName: detailResto.customerName,
        customerReview: detailResto.customerReview,
        customerDate: detailResto.customerDate,
      },
    });

    const reviewContainer = document.querySelector('#reviewer');
    reviewContainer.innerHTML += createCustomerReview(detailResto);
  },
};

export default details;
