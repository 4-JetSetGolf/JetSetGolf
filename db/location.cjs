const client = require('./client.cjs');

const createLocations = async (locationCity, locationID) => {
  try {
    await client.query(`
      INSERT INTO location (name)
      VALUES ('${locationCity}', '${locationID}');
      `);
  }catch(err) {
    console.log(err);
  }
}

const getLocations = async() => {
  try {
    const x = await client.query(`
      SELECT * FROM locations;
      `);
    console.log(x);
  } catch(err) {
    console.log(err);
  }
}

module.exports = {
createLocations,
getLocations
};