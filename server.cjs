const { getCourses } = require('./db/courses.cjs');
const { getHotels } = require('./db/hotels.cjs');
const { getLocations } = require('./db/location.cjs');
const { getRestaurants } = require('./db/restaurants.cjs');
const { getUsers } = require('./db/users.cjs');
const client = require('./db/client.cjs'); 

client.connect();

const express = require(`express`);
const app = express();

app.use(express.static(`dist`));

app.get(`/`, (req, res, next) => {
   res.sendFile(__dirname + `/dist/index.html`);
})




const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}`);
});

