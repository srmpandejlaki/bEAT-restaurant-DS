import restoAppSource from '../../data/restoApp-source';
import { createRestoItemTemplate } from '../templates/template-creator';
import utils from '../../utils/utils';

const loading = document.createElement('loading-o');

const dashboard = {
  async render() {
    return `
          <div class="container">
            <section class="hero-element">
            <div class="gambar">
                <img
                class="img-hero"
                src="./images/heros/hero-image_4.jpg"
                alt="gambar hero section"
                />
            </div>
            </section>

            <explore-component></explore-component>

            <section class="more">
            <h2>~ More ~</h2>
            <p>
                Website ini menyediakan daftar restoran terbaik yang pernah ada di
                Indonesia. Segera kunjungi semua tempatnya, dan rasakan kualitas
                makanan, pelayanan, dan tempatnya. <br />
                Berikan saran dan dukungan anda lewat website ini..
            </p>
            </section>
          </div>
        `;
  },

  async afterRender() {
    utils.emptyElement(itemRestoContainer);
    itemRestoContainer.append(loading);

    const dashboardResto = await restoAppSource.Dashboard();
    const itemRestoContainer = document.querySelector('#list-resto');

    dashboardResto.forEach((resto) => {
      itemRestoContainer.innerHTML += createRestoItemTemplate(resto);
    });
  },
};

export default dashboard;
