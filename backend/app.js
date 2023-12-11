//Import express
const express = require('express');
// Import the cors module
const cors = require('cors');
//Instance express in App
const app = express();
//Import path
const path = require('path') ;
// Enable CORS for all routes
app.use(cors());

//Import Body-Parser
const bodyParser = require('body-parser');
//Body-Parser configuration
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Import model User
const User = require('./models/user')


const userRoute = require('./routes/user')
app.use('/user', userRoute);







//Export App
module.exports = app;