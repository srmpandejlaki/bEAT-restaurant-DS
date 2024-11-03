import API_ENDPOINT from '../globals/api-endpoint';

class restoAppSource {
  static async Dashboard() {
    const response = await fetch(API_ENDPOINT.DASHBOARD);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async Favorite() {
    const response = await fetch(API_ENDPOINT.FAVORITE);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async detail(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    const responseJson = await response.json();
    const { restaurant } = responseJson;

    return {
      id: restaurant.id,
      name: restaurant.name,
      picture: restaurant.pictureId,
      city: restaurant.city,
      address: restaurant.address,
      rating: restaurant.rating,
      description: restaurant.description,
      categories: restaurant.categories.map((category) => category.name),
      foods: restaurant.menus.foods.map((food) => food.name),
      drinks: restaurant.menus.drinks.map((drink) => drink.name),
      customerName: restaurant.customerReviews.map((names) => names.name),
      customerReview: restaurant.customerReviews.map((reviews) => reviews.review),
      customerDate: restaurant.customerReviews.map((dates) => dates.date),
    };
  }

  static async Reviews(review) {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: review.id,
        name: review.name,
        review: review.review,
      }),
    };
    const response = await fetch(API_ENDPOINT.REVIEW, options);
    const responseJson = await response.json();

    return responseJson.customerReviews;
  }
}

export default restoAppSource;
