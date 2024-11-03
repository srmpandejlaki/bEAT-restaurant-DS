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
    <div class="desc">
      <h3>${data.name}</h3>
      <h3>City: ${data.city}</h3>
      <p>${data.description}</p>
    </div>
    <div class="button">
      <button class="detailBtn"><a href="/#/detail/${data.id}">Detail</a></button>
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
          <form class="formReview glass">
            <div class="input">
              <label>Nama</label>
              <input
                type="text"
                name="name"
              />
            </div>
            <div class="input">
              <label>Review</label>
              <input
                type="textarea"
                name="review"
              />
            </div>
            <button class="saveBtn">Send</button>
          </form>
        </div>
      </article>
  </section>
`;

const createCustomerReview = (data) => `
  <div id="customerReview">
    <p>${data.customerName}<br>${data.customerReview}</p>
    <p>${data.customerDate}</p>
  </div>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this restoBtn" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this restoBtn" id="likedButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestoItemTemplate,
  createRestoDetailTemplate,
  createCustomerReview,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};

