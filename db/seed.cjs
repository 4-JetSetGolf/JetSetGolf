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
    address VARCHAR(60),
    course_length INTEGER,
    location_id INTEGER REFERENCES location(id));
    
    CREATE TABLE restaurants(
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    address VARCHAR(60),
    cuisine VARCHAR(30),
    location_id INTEGER REFERENCES location(id));
    
    CREATE TABLE hotels(
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    address VARCHAR(60),
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

  const phoenix = await createLocations(`Phoenix, AZ`);
  const newYork = await createLocations(`New York City, NY`);
  const chicago = await createLocations(`Chicago, IL`);
  const houston = await createLocations(`Houston, TX`);
  const losAngeles = await createLocations(`Los Angeles, CA`);

  await createGolfCourses(`Memorial Park Golf Course`,`1001 E Memorial Loop Dr, Houston, TX 77007`,`18`, houston.id);
  await createGolfCourses(`Wildcat Golf Club`,`12000 Almeda Rd, Houston, TX 77045`,`18`, houston.id);
  await createGolfCourses(`Gus Wortham Park Golf Course`,`7000 Capitol St, Houston, TX 77011`,`18`, houston.id);
  await createGolfCourses(`Van Cortlandt Park Golf Course`, `Van Cortlandt Park, Bronx, NY 10463`, `18`, newYork.id);
  await createGolfCourses(`Dyker Beach Golf Course`, `1030 86th st, Brooklyn, NY 11228`, `18`, newYork.id);
  await createGolfCourses(`Forest Park Golf Course`, `101 Forest Park Dr, Woodhaven, NY 11421`, `18`, newYork.id);
  await createGolfCourses('Wilson & Harding Golf Courses', `5500 Griffith Park Dr, Los Angeles, CA 90027`, `18`, losAngeles.id);
  await createGolfCourses('Roosevelt Golf Course', `2650 N. Vermont Ave, Los Angeles, CA 90027`, `9`, losAngeles.id);
  await createGolfCourses('The Los Angeles Country Club', `10101 Wilshire Blvd, Los Angeles, CA 90024`, `18`, losAngeles.id);
  await createGolfCourses(`Sydney R. Marovitz Golf Course`, `3701 N. Recreation Dr, Chicago, IL 60613`, `9`, chicago.id);
  await createGolfCourses(`Harborside International Golf Center`, `11001 S Doty Ave East, Chicago, IL 60628`, `18`, chicago.id);
  await createGolfCourses(`Jackson Park Golf Course`, `6401 S. Richards Dr, Chicago, IL 60649`, `18`, chicago.id);
  await createGolfCourses(`Cave Creek Golf Course`, `15202 N. 19th Ave, Phoenix, AZ 85023`, `18`, phoenix.id);
  await createGolfCourses(`Arizona Grand Golf Course`, `8000 S. Arizona Grand Pkwy, Phoenix, AZ 85044`, `18`, phoenix.id);
  await createGolfCourses(`Raven Golf Club`, `3636 E. Baseline Rd, Phoenix, AZ 85042`, `18`, phoenix.id);

  await createHotels(`Marriott Hotels Resorts Suites`, `1750 West Loop S. Fwy Svc Rd, Houston, TX 77027`,houston.id);
  await createHotels(`Wyndham Hotels and Resorts`, `8686 Kirby Dr. Building A, Houston, TX 77054`,houston.id);
  await createHotels(`Days Inn and Suites`, `6190 Gulf Fwy, Houston, TX 77023`,houston.id);
  await createHotels(`Hyatt Place`, `7000 Mall Walk, Yonkers, NY 10701`, newYork.id);
  await createHotels(`Insignia Hotel`, `741 61st St, Brooklyn, NY 11220`, newYork.id);
  await createHotels(`BK Way Hotel`, `3192 Atlantic Ave, Brooklyn, NY 11208`, newYork.id);
  await createHotels(`Hyatt Place`, `225 W. Wilson Ave, Glendale, CA 91203`, losAngeles.id);
  await createHotels(`Hotel Covell`, `4626 Hollywood Blvd, Los Angeles, CA 90027`, losAngeles.id);
  await createHotels(`The Beverly Hilton`, `9876 Wilshire Blvd, Beverly Hills, CA 91210`, losAngeles.id);
  await createHotels(`The Willows Hotel`, `555 W. Surf St, Chicago, IL 60657`, chicago.id);
  await createHotels(`Hilton Chicago/Oak Lawn`, `9333 S. Cicero Ave, Oak Lawn, IL 60453`, chicago.id);
  await createHotels(`SOPHY Hyde Park`, `1411 E. 53rd St, Chicago, IL 60615`, chicago.id);
  await createHotels(`La Quinta Inn`, `2510 W. Greenway Rd, Phoenix, AZ 85023`, phoenix.id);
  await createHotels(`Arizona Grand Resort and Spa`, `8000 S. Arizona Grand Pkwy, Phoenix, AZ 85044`, phoenix.id);
  await createHotels(`Legacy Golf Resort`, `6808 S. 32nd St, Phoenix, AZ 85042`, phoenix.id);

  await createRestaurants(`Porta Vino`, `7800 Washington Ave Unit 550, Houston, TX 77007`, `Wine Bar`, houston.id );
  await createRestaurants(`Champion Wine Garden`, `1300-1304 McNee Rd, Houston, TX 77054`, `Wine Bar`, houston.id);
  await createRestaurants(`Dichos Taqueria`, `614 S. Wayside Dr Unit 101, Houston, TX 77011`, `Mexican`, houston.id);
  await createRestaurants(`Rory Dolans`, `890 McLean Ave, Yonkers, NY 10704`, `Irish`, newYork.id);
  await createRestaurants(`Positano`, `10018 Fourth Ave, Brooklyn, NY 11209`, `Italian`, newYork.id);
  await createRestaurants(`Bennys Cuban Cafe`, `71-28 Fresh Pond Rd, Ridgewood, NY 11385`, `Cuban`, newYork.id);
  await createRestaurants(`Foxys Restuarant`, `206 W Colorado St, Glendale, CA 91204`, `American`, losAngeles.id );
  await createRestaurants(`Marshall Kitchen`, `4500 Los Feliz Blvd Ste A, Los Angeles, CA 90027`, `American`, losAngeles.id);
  await createRestaurants(`Circa 55`, `9876 Wilshire Blvd, Beverly Hills, CA 90210`, `American`, losAngeles.id);
  await createRestaurants(`Sapori Trattoria`, `2701 N. Halsted St, Chicago, IL 60614`, `Italian`, chicago.id);
  await createRestaurants(`Two Fish Crab Shack`, `641 E. 47th St, Chicago, IL 60653`, `Seafood`, chicago.id);
  await createRestaurants(`Jerk Yard`, `1310 E. 53rd St, Chicago, IL 60615`, `Jamaican`, chicago.id);
  await createRestaurants(`The Spice Sea`, `3345 W. Greenway Rd, Phoenix, AZ 85053`, `Seafood`, phoenix.id);
  await createRestaurants(`Rustlers Rooste`, `8383 S. 48th St, Phoenix, AZ 85044`, `Steakhouse`, phoenix.id);
  await createRestaurants(`The Peppersauce Cafe`, `3937 E. Anne St, Phoenix, AZ 85040`, `Seafood`, phoenix.id);

  await createUsers(`larry321@hotmail.com`, `1234`, chicago.id);
  await createUsers(`carrie456@hotmail.com`, `4321`, losAngeles.id);
  await createUsers(`sparky678@hotmail.com`, `6789`, newYork.id);
  await createUsers(`sally890@hotmail.com`, `8765`, phoenix.id);
  await createUsers(`jerry765@hotmail.com`, `9876`, houston.id);


  await client.end();
  console.log('disconnected from the db');

}

syncAndSeed();