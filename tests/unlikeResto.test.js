import likeButton from '../src/scripts/utils/button-like-initiator';
import favoriteRestoIdb from '../src/scripts/data/favorite-resto-idb';

describe('Tidak Menyukai Resto', () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div id="likeBtn"></div>';
  };

  beforeEach(async () => {
    addLikeButtonContainer();
    await favoriteRestoIdb.putResto({ id:1 });
  });

  afterEach(async () => {
    await favoriteRestoIdb.deleteResto(1);
  });

  it('seharusnya menampilkan widget unlike ketika resto disukai', async () => {
    await likeButton.init({
      likeButton: document.querySelector('#likeBtn'),
      restos: {
        id: 1,
      },
    });

    expect(document.querySelector('[aria-label="unlike this restoBtn"]')).toBeTruthy();
  });

  it('seharusnya menampilkan widget like ketika resto disukai', async () => {
    await likeButton.init({
      likeButton: document.querySelector('#likeBtn'),
      restos: {
        id: 1,
      },
    });

    expect(document.querySelector('[aria-label="like this restoBtn"]')).toBeFalsy();
  });

  it('seharusnya bisa menghapus resto yang sudah dilike dari list favorite', async () => {
    await likeButton.init({
      likeButton: document.querySelector('#likeBtn'),
      restos: {
        id: 1,
      },
    });

    // simulasi pengguna menekan tombol like resto
    document.querySelector('[aria-label="unlike this restoBtn"]').dispatchEvent(new Event('click'));

    // tidak ada resto yang ganda
    expect(await favoriteRestoIdb.getAllResto()).toEqual([]);
  });

  it('seharusnya tidak error ketika user klik unlike widget jika unliked resto tidak ada dalam list', async () => {
    await likeButton.init({
      likeButton: document.querySelector('#likeBtn'),
      restos: {
        id: 1,
      },
    });

    // hapus dulu resto dari daftar favorite
    await favoriteRestoIdb.deleteResto(1);

    // simulasi pengguna menekan widget unliked resto
    document.querySelector('[aria-label="unlike this restoBtn"]').dispatchEvent(new Event('click'));
    expect(await favoriteRestoIdb.getAllResto()).toEqual([]);
  });
});