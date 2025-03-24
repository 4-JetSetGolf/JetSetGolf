//const client = requuire(`./db/client.cjs`)

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

