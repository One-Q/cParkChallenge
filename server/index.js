const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

//Config imports
const config = require('./config');

// Routes imports
const reportRoutes = require('./routes/report.routes');

const app = express();

// MiddleWares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))

// Routes
app.use('/report', reportRoutes);

app.listen(config.PORT, () => {
  console.log(`App is listening on port ${config.PORT}`);
})