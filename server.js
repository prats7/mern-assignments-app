const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const tasks = require('./routes/api/tasks');

const app = express();

//Bodyparser Middleware
app.use(bodyParser.json());

//Connect to db
const db = require('./config/mongoose');

//Use routes
app.use('/api/tasks',tasks);


//Express server
const PORT = 5000 || process.env.PORT ;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
