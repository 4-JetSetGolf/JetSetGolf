
// const { getCourses } = require('./db/courses.cjs');
// const { getHotels } = require('./db/hotels.cjs');
// const { getLocations } = require('./db/location.cjs');
// const { getRestaurants } = require('./db/restaurants.cjs');
// const { getUsers } = require('./db/users.cjs');
// const { getExistingUser } = require('./db/users.cjs');
// const { getUserByToken } = require('./db/users.cjs');

const client = require('./db/client.cjs'); 
client.connect();

const { getCourses } = require('./db/courses.cjs');
const { getHotels } = require('./db/hotels.cjs');
const { getLocations } = require('./db/location.cjs');
const { getRestaurants } = require('./db/restaurants.cjs');
const { getUsers } = require('./db/users.cjs');




require('dotenv').config(); //must be at the top of server file

const express = require(`express`);
const app = express();

app.use(express.static(`dist`));

app.get(`/`, (req, res, next) => {
   res.sendFile(__dirname + `/dist/index.html`);
})

app.get('/api/v1/locations', async(req, res, next) => {
    const allLocations = await getLocations();
    res.send(allLocations);
});

app.get('/api/v1/courses', async(req, res, next) => {
    const allCourses = await getCourses();
    res.send(allCourses);
})

app.get('/api/v1/hotels', async(req, res, next) => {
    const allHotels = await getHotels();
    res.send(allHotels);
})

app.get('/api/v1/restaurants', async(req, res, next) => {
    const allRestaurants = await getRestaurants();
    res.send(allRestaurants);
})

app.get('/api/v1/users', async(req, res, next) => {
    const allUsers = await getUsers();
    res.send(allUsers);
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}`);
});

