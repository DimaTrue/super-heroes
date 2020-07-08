const express = require('express');
const app = express();
const cors = require('cors');
const router = require('./config/router');
require('./config/db');
require('dotenv').config();

app.use(express.json());
app.use(cors());

app.get('/', function (req, res) {
  res.send('Hello Word');
});

app.use(router);

const port = process.env.PORT || 4001;
app.listen(port, function () {
  console.log('Server Running');
});
