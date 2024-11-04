import restoAppSource from '../../data/restoApp-source';
import UrlParser from '../../routes/url-parser';
import { createRestoDetailTemplate, createCustomerReview } from '../templates/template-creator';
import likeButton from '../../utils/button-like-initiator';
import favoriteRestoIdb from '../../data/favorite-resto-idb';

const details = {
  async render() {
    return `
      <div id="detail"></div>
      <div id="reviewer" class="reviewer"></div>
      <div id="likeBtn"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();

    const detailResto = await restoAppSource.Detail(url.id);
    const detailContainer = document.querySelector('#detail');
    detailContainer.innerHTML = createRestoDetailTemplate(detailResto);

    // add review
    const newForm = document.getElementById('formReview');
    newForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const { id } = detailResto;
      const name = document.getElementById('name').value;
      const review = document.getElementById('review').value;
      const date = new Date().toISOString();

      const newReview = {
        id,
        name,
        review,
        date,
      };

      restoAppSource.Reviews(newReview).then(() => {
        document.location.reload();
      });
      newForm.reset();
    });

    const reviewContainer = document.querySelector('#reviewer');
    const listReview = detailResto.customerReviews;
    listReview.forEach((review) => {
      reviewContainer.innerHTML += createCustomerReview(review);
    });

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
        customerReviews: detailResto.customerReviews,
      },
    });
  },
};

export default details;
