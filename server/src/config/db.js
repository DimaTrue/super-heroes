const mongoose = require('mongoose');
require('dotenv').config();

mongoose
  .connect(process.env.MONGOOSELINK)
  .then(function () {
    console.log('db connected successfully');
  })
  .catch(function (e) {
    console.log('db did not connected: ', e);
  });
