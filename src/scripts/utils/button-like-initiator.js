import favoriteRestoIdb from '../data/favorite-resto-idb';
import { createLikeButtonTemplate, createLikedButtonTemplate } from '../view/templates/template-creator';

const likeButton = {
  async init({ likeButton, restos }) {
    this._likeButton = likeButton;
    this._resto = restos;

    await this._renderButton();
  },

  async _renderButton() {
    const { id } = this._resto;

    if (await this._restoExist(id)) {
      this._renderLiked();
    } else {
      this._renderLike();
    }
  },

  async _restoExist(id) {
    const restos = await favoriteRestoIdb.getResto(id);
    return !!restos;
  },

  _renderLike() {
    this._likeButton.innerHTML = createLikeButtonTemplate();

    const likeBtn = document.querySelector('#likeButton');
    likeBtn.addEventListener('click', async () => {
      await favoriteRestoIdb.putResto(this._resto);
      this._renderButton();
    });
  },

  _renderLiked() {
    this._likeButton.innerHTML = createLikedButtonTemplate();

    const likeBtn = document.querySelector('#likedButton');
    likeBtn.addEventListener('click', async () => {
      await favoriteRestoIdb.deleteResto(this._resto.id);
      this._renderButton();
    });
  }
};

export default likeButton;