const client = require('./client.cjs');

const createLocations = async (locationCity) => {
  try {
    const {rows } = await client.query(`
      INSERT INTO location (name)
      VALUES ('${locationCity}')
      RETURNING *`);

      return rows[0];

  }catch(err) {
    console.log(err);
  }
}

const getLocations = async() => {
  try {
    const { rows:cities } = await client.query(`
      SELECT * FROM locations;
      `);
      return cities;
      
  } catch(err) {
    console.log(err);
  }
}

module.exports = {
createLocations,
getLocations
};