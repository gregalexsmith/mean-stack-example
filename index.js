const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database');


const users = require('./routes/users');

// Mongoose setup
mongoose.connect(config.database);
mongoose.connection.on('connected', () => {
  console.log('Connected to database: ' + config.database);
})
mongoose.connection.on('error', (err) => {
  console.err('Database Error: ' + err);
})


// Express setup
const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(passport.initialize());
app.use(passport.session());
require('./config/passport')(passport);


// Static Files
app.use(express.static(path.join(__dirname, 'public')))


// Routes
app.get('/', (req, res) => {
  res.send("Invalid Endpoint")
})
app.use('/users', users)

// Start Server
app.listen(port, () => {
  console.log("Server started on port: " + port);
});
