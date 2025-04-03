const client = require('./client.cjs');

const createRestaurants = async (restaurantName, restaurantAddress, restaurantCuisine, restaurantCityId) =>{
  try{
    const { rows } = await client.query(`
      INSERT INTO restaurants (name, address, cuisine, location_id)
      VALUES ('${restaurantName}', '${restaurantAddress}', '${restaurantCuisine}', '${restaurantCityId}')
      RETURNING *`);

      return rows[0];

  }catch(err) {
    console.log(err);
  }
}

const getRestaurants = async() => {
  try {
    const {rows:restaurants} = await client.query(`
      SELECT * FROM restaurants;
      `);
      return restaurants;
  } catch(err) {
    console.log(err);
  }
}

module.exports = {
createRestaurants, 
getRestaurants
};