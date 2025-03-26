const client = require('./client.cjs');

const createRestaurants = async (restaurantCityID, restaurantName, restaurantType, restaurantID) =>{
  try{
    await client.query(`
      INSERT INTO restaurants (name)
      VALUES ('${restaurantCityID}', '${restaurantName}', '${restaurantType}', '${restaurantID}');
      `);
  }catch(err) {
    console.log(err);
  }
}

const getRestaurants = async() => {
  try {
    const x = await client.query(`
      SELECT * FROM restaurants;
      `);
    console.log(x);
  } catch(err) {
    console.log(err);
  }
}

module.exports = {
createRestaurants, 
getRestaurants
};