import CONSTANT from '../globals/config';

class RestaurantApi {
  static async getAllRestaurants() {
    const response = await fetch(`${CONSTANT.BASE_API_URL}list`);
    const responseJson = await response.json();
    if (responseJson.error === false) {
      return responseJson.restaurants;
    }
    return responseJson;
  }

  static async getRestaurantDetail(id) {
    const response = await fetch(`${CONSTANT.BASE_API_URL}detail/${id}`);
    const responseJson = await response.json();
    if (responseJson.error === false) {
      return responseJson.restaurant;
    }
    return responseJson;
  }
}

export default RestaurantApi;
