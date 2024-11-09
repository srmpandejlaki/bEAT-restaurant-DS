import likeButton from '../../src/scripts/utils/button-like-initiator';

const createLikeButtonPresenterWithResto = async (resto) => {
  await likeButton.init({
    likeButtonContainer: document.querySelector('#likeBtn'),
    resto,
  });
};

export { createLikeButtonPresenterWithResto };