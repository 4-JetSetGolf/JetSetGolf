const client = require('./client.cjs');

const createUsers = async (userEmail, userPassword, userCityID, userID) =>{
  try{
    await client.query(`
      INSERT INTO users (name)
      VALUES ('${userEmail}', '${userPassword}', '${userCityID}', '${userID}');
      `);
  }catch(err) {
    console.log(err);
  }
}

const getUsers = async() => {
  try {
    const x = await client.query(`
      SELECT * FROM users;
      `);
    console.log(x);
  } catch(err) {
    console.log(err);
  }
}



module.exports = {
createUsers,
getUsers
};