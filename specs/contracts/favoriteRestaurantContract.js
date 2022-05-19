const itActsAsFavoriteRestaurantModel = (favRestaurantModel) => {
  it('should return the restaurants that has been added', async () => {
    favRestaurantModel.putRestaurant({ id: 1 });
    favRestaurantModel.putRestaurant({ id: 2 });

    expect(await favRestaurantModel.getRestaurant(1)).toEqual({ id: 1 });
    expect(await favRestaurantModel.getRestaurant(2)).toEqual({ id: 2 });
    expect(await favRestaurantModel.getRestaurant(3)).toEqual(undefined);
  });

  it('should refuse a restaurant from being added if it does not have the correct property', async () => {
    favRestaurantModel.putRestaurant({ aProperty: 'property' });

    expect(await favRestaurantModel.getAllRestaurant()).toEqual([]);
  });

  it('can return all of the restaurant that have been added', async () => {
    favRestaurantModel.putRestaurant({ id: 1 });
    favRestaurantModel.putRestaurant({ id: 2 });

    expect(await favRestaurantModel.getAllRestaurant()).toEqual([{ id: 1 }, { id: 2 }]);
  });

  it('should be able to remove favorite restaurant', async () => {
    favRestaurantModel.putRestaurant({ id: 1 });
    favRestaurantModel.putRestaurant({ id: 2 });
    favRestaurantModel.putRestaurant({ id: 3 });

    await favRestaurantModel.deleteRestaurant(1);

    expect(await favRestaurantModel.getAllRestaurant()).toEqual([{ id: 2 }, { id: 3 }]);
  });

  it('should handle request to remove a restaurant even though the restaurant has not been added', async () => {
    favRestaurantModel.putRestaurant({ id: 1 });
    favRestaurantModel.putRestaurant({ id: 2 });
    favRestaurantModel.putRestaurant({ id: 3 });

    await favRestaurantModel.deleteRestaurant(4);

    expect(await favRestaurantModel.getAllRestaurant()).toEqual([{ id: 1 }, { id: 2 }, { id: 3 }]);
  });
};

export default itActsAsFavoriteRestaurantModel;
