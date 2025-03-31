const client = require('./client.cjs');


const createUsers = async (userEmail, userPassword, userVisitedCities) =>{
  try{
    const {rows } = await client.query(`
      INSERT INTO users (email, password, visited_locations)
      VALUES ('${userEmail}', '${userPassword}', '${userVisitedCities}')
      RETURNING *`);

      return rows[0];

  }catch(err) {
    console.log(err);
  }
}

const getUsers = async() => {
  try {
    const {rows:users} = await client.query(`
      SELECT * FROM users;
      `);
    return users;

  } catch(err) {
    console.log(err);
  }
}



module.exports = {
createUsers,
getUsers
};