import restoAppSource from '../../data/restoApp-source';
import { createRestoItemTemplate } from '../templates/template-creator';

const dashboard = {
  async render() {
    return `
          <div class="container">
            <section class="hero-element">
             <picture>
                <source media="(max-width: 600px)" srcset="./images/heros/hero-image_4-small.jpg">
                <img
                class="lazyload"
                data-src="./images/heros/hero-image_4-large.jpg"
                alt="gambar hero section"
                />
              </picture>
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
    const dashboardResto = await restoAppSource.Dashboard();
    const itemRestoContainer = document.querySelector('#list-resto');

    dashboardResto.forEach((resto) => {
      itemRestoContainer.innerHTML += createRestoItemTemplate(resto);
    });
  },
};

export default dashboard;
