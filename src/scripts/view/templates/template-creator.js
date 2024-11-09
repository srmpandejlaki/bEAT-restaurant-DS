import CONFIG from '../../globals/config';

const createRestoItemTemplate = (data) => `
  <article tabindex="0" class="item-resto">
    <div class="img">
      <img src="${CONFIG.MEDIUM_IMAGE_URL + data.pictureId}" alt="${
  data.name
}" />
      <div class="rating">
        <h3>⭐️: ${data.rating} </h3>
      </div>
    </div>
    <div class="descItem">
      <div class="desc">
        <h3>${data.name}</h3>
        <h3>City: ${data.city}</h3>
        <p>${data.description}</p>
      </div>
      <div class="button">
        <button class="detailBtn"><a href="/#/detail/${data.id}">Detail</a></button>
      </div>
    </div>
  </article>
`;


const createRestoDetailTemplate = (data) => `
  <section id="details" class="details">
    <h2 class="h2Detail">${data.name}</h2>
    <article class="resto-item">
      <div class="img">
        <img src="${CONFIG.MEDIUM_IMAGE_URL + data.picture}" alt="${
  data.name
}"/>
        <h3>⭐️: ${data.rating}</h3>
      </div>
      
        <div class="desc">
          <h3>Deskripsi</h3>
          <p>Alamat: ${data.address}</p>
          <p>City: ${data.city}</p>
          <p>${data.description}</p>
        </div>
        <div class="menu-mkn">
          <h3>Menu Makanan</h3>
          <p>${data.foods}</p>
        </div>
        <div class="menu-mnm">
          <h3>Menu Minuman</h3>
          <p>${data.drinks}</p>
        </div>
    </article>

    <article class="review">
        <h2>Review</h2>
        <div class="boxReview">
          <form id="formReview" class="formReview glass">
            <div class="input">
              <label>Nama</label>
              <input
                type="text"
                name="name"
                id="name"
              />
            </div>
            <div class="input">
              <label>Review</label>
              <input
                type="textarea"
                name="review"
                id="review"
              />
            </div>
            <button class="saveBtn">Send</button>
          </form>
        </div>
      </article>
  </section>
`;

const createCustomerReview = (data) => `
  <article class="reviews">
        <div class="info">
          <p class="rev-name">Name: ${data.name}</p>
          <p class="rev-desc">Review: ${data.review}</p>
        </div>
        <div class="date">
          <p>${data.date}</p>
        </div>
  </article>
`;

const createLikeRestoButtonTemplate = () => `
  <button aria-label="like this restoBtn" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedRestoButtonTemplate = () => `
  <button aria-label="unlike this restoBtn" id="likedButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestoItemTemplate,
  createRestoDetailTemplate,
  createCustomerReview,
  createLikeRestoButtonTemplate,
  createLikedRestoButtonTemplate,
};

