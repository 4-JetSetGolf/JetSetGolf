const client = require('./client.cjs');

const createHotels = async(hotelName, hotelAddress, hotelCityID) => {
  try {
    const {rows } = await client.query(`
      INSERT INTO hotels (name, address, location_id)
      VALUES ('${hotelName}', '${hotelAddress}','${hotelCityID}')
      RETURNING *`);

      return rows[0];
      
  }catch(err) {
    console.log(err);
  }
}

const getHotels = async() => {
  try {
    const {rows:hotels} = await client.query(`
      SELECT * FROM hotels;
      `);
      return hotels;
   
  } catch(err) {
    console.log(err);
  }
}

module.exports = {
createHotels,
getHotels
}