const client = require('./client.cjs');
const { createGolfCourses } = require('./courses.cjs'); 
const { createHotels } = require('./hotels.cjs');
const { createLocations } = require('./location.cjs');
const { createRestaurants } = require('./restaurants.cjs');
const { createUsers } = require('./users.cjs');


const dropTables = async () =>{
  try{
    await client.query(`
      DROP TABLE IF EXISTS users;
      DROP TABLE IF EXISTS hotels;
      DROP TABLE IF EXISTS restaurants;
      DROP TABLE IF EXISTS golf_courses;
      DROP TABLE IF EXISTS location;`)

  }catch(err){
    console.log(err)
  };
};

const createTables = async () =>{
try{
  await client.query(`
    CREATE TABLE location(
    id SERIAL PRIMARY KEY,
    name VARCHAR (50) NOT NULL);
    
    CREATE TABLE golf_courses(
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    course_length INTEGER,
    location_id INTEGER REFERENCES location(id));
    
    CREATE TABLE restaurants(
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    cuisine VARCHAR(30),
    location_id INTEGER REFERENCES location(id));
    
    CREATE TABLE hotels(
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    location_id INTEGER REFERENCES location(id));
    
    CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    email VARCHAR(30) NOT NULL,
    password VARCHAR(30) NOT NULL,
    visited_locations INTEGER REFERENCES location(id));
    `)

}catch(err){
  console.log(err)
};
};

const syncAndSeed = async () => {
  await client.connect();
  console.log('connected to the db');

  await dropTables();
  console.log('tables dropped');

  await createTables();
  console.log('tables created');

  await client.end();
  console.log('disconnected from the db');

}

syncAndSeed();