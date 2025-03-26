const client = require('./client.cjs');

const createGolfCourses = async (courseName, courseLengthOfHoles, courseCityID, courseID) => {
  try {
    await client.query(`
      INSERT INTO courses (name)
      VALUES ('${courseName}', '${courseLengthOfHoles}', '${courseCityID}', '${courseID}');
      `);
  }catch(err) {
    console.log(err);
  }
}

const getCourses = async() => {
  try {
    const x = await client.query(`
      SELECT * FROM courses;
      `);
    console.log(x);
  } catch(err) {
    console.log(err);
  }
}


module.exports = {
createGolfCourses,
getCourses
}