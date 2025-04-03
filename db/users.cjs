const client = require('./client.cjs');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const createUsers = async (userEmail, userPassword, userVisitedCities) =>{
  try{
    const encryptedPassword = await bcrypt.hash(userPassword, 10);

    await client.query(`
      INSERT INTO users (email, password, visited_locations)
      VALUES ('${userEmail}', '${encryptedPassword}', '${userVisitedCities}')
      `);

  }catch(err) {
    console.log(err);
  }
}

const getUsers = async()=>{
  try{
    const {rows:allUsers} = await client.query(
      `SELECT * FROM users`
    );
    return allUsers;
  }catch(err){
    console.log(err)};

}

const getExistingUser = async(inputEmail, InputPassword) => {
  
    const { rows } = await client.query(`
      SELECT * FROM users
      WHERE email='${inputEmail}';
      `);
    const user = rows[0];

    

    if(!user){
      throw Error(`Username and Password do not match`);
    }else{
      const hashedPassword = user.password;
      const isPasswordMatch = await bcrypt.compare(InputPassword,hashedPassword);

      if(isPasswordMatch){
        const assignedToken = await jwt.sign({userID:user.id},
          process.env.JWT_SECRET);
          return assignedToken;
      }else{
        throw Error(`Username and Password do not match`);
      }
    }
}

const getUserByToken = async (token) =>{
 const{userID} = await jwt.verify(token, process.env.JWT_SECRET);

 const{rows} = await client.query(`
  SELECT id, email FROM users WHERE id='${userID}'
  `);

  const user = rows[0];
  return user;
}



module.exports = {
createUsers,
getUsers,
getExistingUser,
getUserByToken
};