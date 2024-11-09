import likeButton from '../src/scripts/utils/button-like-initiator';
import favoriteRestoIdb from '../src/scripts/data/favorite-resto-idb';

describe('Menyukai Resto', () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div id="likeBtn"></div>';
  };

  beforeEach(() => {
    addLikeButtonContainer();
  });

  it('harus menampilkan button like jika resto belum di like sebelumnya', async () => {

    await likeButton.init({
      likeButton: document.querySelector('#likeBtn'),
      restos: {
        id: 1,
      },
    });

    expect(document.querySelector('[aria-label="like this restoBtn"]')).toBeTruthy();
  });

  it('seharusnya tidak menampilkan button unlike jika resto belum di like sebelumnya', async () => {
    await likeButton.init({
      likeButton: document.querySelector('#likeBtn'),
      restos: {
        id: 1,
      },
    });

    expect(document.querySelector('[aria-label="unlike this restoBtn"]')).toBeFalsy();
  });

  it('harusnya bisa like resto', async () => {
    await likeButton.init({
      likeButton: document.querySelector('#likeBtn'),
      restos: {
        id: 1,
      },
    });

    document.querySelector('#likeButton').dispatchEvent(new Event('click'));

    // memastikan resto berhasil disukai
    const resto = await favoriteRestoIdb.getResto(1);
    expect(resto).toEqual({ id:1 });

    await favoriteRestoIdb.deleteResto(1);
  });

  // scenario negatif - resto sudah di like
  it('seharusnya tidak menambahkan resto ketika sudah di like', async () => {
    await likeButton.init({
      likeButton: document.querySelector('#likeBtn'),
      restos: {
        id: 1,
      },
    });

    // tambah resto dengan id 1 ke daftar favorite
    await favoriteRestoIdb.putResto({ id:1 });

    // simulasi pengguna menekan tombol like resto
    document.querySelector('#likeButton').dispatchEvent(new Event('click'));

    // tidak ada resto yang ganda
    expect(await favoriteRestoIdb.getAllResto()).toEqual([{ id:1 }]);

    await favoriteRestoIdb.deleteResto(1);
  });

  // menggunakan metode xit, bukan it, untuk menonaktifkan sebuah test case
  xit('seharusnya resto tidak bisa ditambah ketika tidak ada id', async () => {
    await likeButton.init({
      likeButton: document.querySelector('#likeBtn'),
      restos: {},
    });

    // simulasi pengguna menekan tombol like resto
    document.querySelector('#likeButton').dispatchEvent(new Event('click'));

    // tidak ada resto yang ganda
    expect(await favoriteRestoIdb.getAllResto()).toEqual([]);
  });
});