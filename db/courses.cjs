const client = require('./client.cjs');

const createGolfCourses = async (courseName, courseAddress, courseLengthOfHoles, courseCityID) => {
  try {
    const { rows } = await client.query(`
      INSERT INTO golf_courses (name, address, course_length, location_id)
      VALUES ('${courseName}','${courseAddress}', '${courseLengthOfHoles}', '${courseCityID}')
      RETURNING *`);

      return rows[0];
  }catch(err) {
    console.log(err);
  }
}

const getCourses = async() => {
  try {
    const { rows:courses } = await client.query(`
      SELECT * FROM golf_courses;
      `);
      return courses;
  } catch(err) {
    console.log(err);
  }
}


module.exports = {
createGolfCourses,
getCourses
}