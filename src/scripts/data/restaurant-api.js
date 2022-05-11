import CONSTANT from '../globals/config';

class RestaurantApi {
  static async getAllRestaurants() {
    const response = await fetch(`${CONSTANT.BASE_API_URL}list`);
    const responseJson = response.json();
    if (responseJson.error === false) {
      return responseJson.restaurants;
    }
    return responseJson;
  }
}

export default RestaurantApi;
