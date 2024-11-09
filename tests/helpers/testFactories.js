import likeButton from '../../src/scripts/utils/button-like-initiator';

const createLikeButtonPresenterWithResto = async (restos) => {
  await likeButton.init({
    likeButton: document.querySelector('#likeBtn'),
    restos,
  });
};

export { createLikeButtonPresenterWithResto };