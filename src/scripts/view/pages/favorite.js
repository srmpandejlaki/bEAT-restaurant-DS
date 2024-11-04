import favoriteRestoIdb from '../../data/favorite-resto-idb';
import { createRestoItemTemplate } from '../templates/template-creator';

const favorito = {
  async render() {
    return `
      <section class="favorite">
        <div class="h2">
          <h2>Favorite</h2>
        </div>
        <div class="list-resto"></div>
      </section>
    `;
  },

  async afterRender() {
    const favoriteResto = await favoriteRestoIdb.getAllResto();
    const favoriteContainer = document.querySelector('.list-resto');

    favoriteResto.forEach((resto) => {
      favoriteContainer.innerHTML += createRestoItemTemplate(resto);
    });
  },
};

export default favorito;
