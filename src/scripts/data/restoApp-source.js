import API_ENDPOINT from '../globals/api-endpoint';

class restoAppSource {
  static async Dashboard() {
    try {
      const response = await fetch(API_ENDPOINT.DASHBOARD);
      const responseJson = await response.json();
      return responseJson.restaurants;
    } catch (error) {
      console.log('Waduhh, terjadi kesalahan', error);
    }
  }

  static async Favorite() {
    try {
      const response = await fetch(API_ENDPOINT.FAVORITE);
      const responseJson = await response.json();
      return responseJson.restaurants;
    } catch (error) {
      console.log('Waduhh, terjadi kesalahan', error);
    }
  }

  static async Detail(id) {
    try {
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
        customerReviews: restaurant.customerReviews.map((customer) => {
          return  {
            name: customer.name,
            review: customer.review,
            date: customer.date,
          };
        }),
      };
    } catch (error) {
      console.log('Waduhh, terjadi kesalahan', error);
    }
  }

  static async Reviews(review) {
    try {
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
    } catch (error) {
      console.log('Waduhh, terjadi kesalahan', error);
    }
  }
}

export default restoAppSource;
