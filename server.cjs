require('dotenv').config();

const client = require('./db/client.cjs'); 
client.connect();

const { getCourses } = require('./db/courses.cjs');
const { getHotels } = require('./db/hotels.cjs');
const { getLocations } = require('./db/location.cjs');
const { getRestaurants } = require('./db/restaurants.cjs');
const { getUsers, getExistingUser, getUserByToken } = require('./db/users.cjs');

const express = require(`express`);
const app = express();

app.use(express.static(`dist`));
app.use(express.json());

app.get(`/`, (req, res, next) => {
   res.sendFile(__dirname + `/dist/index.html`);
})

app.get(`/courses`, (req, res, next) => {
    res.sendFile(__dirname + `/dist/index.html`);
 })

 app.get(`/locations`, (req, res, next) => {
    res.sendFile(__dirname + `/dist/index.html`);
 })

 app.get(`/account`, (req, res, next) => {
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

app.post('/api/v1/login', async(req, res, next) => {
    try {
      console.log(req.body);
      const { email, password } = req.body;
    
      const token = await getExistingUser(email, password);
      
      res.send({ token: token });
    } catch(err) {
      next(err);
    }
  });

//   app.get('/api/v1/login', async(req, res, next) => {
//     try {
//       const token = req.headers.authorization;
//       const user = await getUserByToken(token);
//       console.log(user);
    
//       res.send(user);
//     } catch(err) {
//       next(err);
//     }
//   });

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}`);
});

