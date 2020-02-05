const express = require('express');
const path = require("path");

const Pub_DIR = path.resolve(__dirname, "dist");


const app = express();

app.use(express.static(Pub_DIR))

app.get('/', (req, res) => {
  res.send('Hello Express app!')
});

app.listen(3000, () => {
  console.log('server started');
});