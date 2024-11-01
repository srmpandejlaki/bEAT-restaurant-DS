import favoriteRestoIdb from '../../data/favorite-resto-idb';
import { createRestoItemTemplate } from '../templates/template-creator';

const favorito = {
  async render() {
    return `
      <section class="favorite">
        <h2>Favorite</h2>
        <div class="resto-list"></div>
      </section>
    `;
  },

  async afterRender() {
    const favoriteResto = await favoriteRestoIdb.getAllResto();
    const favoriteContainer = document.querySelector('.resto-list');

    favoriteResto.forEach((resto) => {
      favoriteContainer.innerHTML += createRestoItemTemplate(resto);
    });
  },
};

export default favorito;
