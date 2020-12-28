const express = require('express');
const mongoose = require('mongoose');



const app = express();

//Bodyparser Middleware
app.use(express.json());

//Connect to db
const db = require('./config/mongoose');

//Use routes
app.use('/api/tasks',require('./routes/api/tasks'));
app.use('/api/user',require('./routes/api/user'));
app.use('/api/auth',require('./routes/api/auth'));


//Express server
const PORT = 5000 || process.env.PORT ;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
