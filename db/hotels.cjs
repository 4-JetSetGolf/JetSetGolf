const client = require('./client.cjs');

const createHotels = async(hotelName, hotelCityID, hotelID) => {
  try {
    await client.query(`
      INSERT INTO hotels (name)
      VALUES ('${hotelName}', '${hotelCityID}', '${hotelID}');
      `);
  }catch(err) {
    console.log(err);
  }
}

const getHotels = async() => {
  try {
    const x = await client.query(`
      SELECT * FROM hotels;
      `);
    console.log(x);
  } catch(err) {
    console.log(err);
  }
}

module.exports = {
createHotels,
getHotels
}