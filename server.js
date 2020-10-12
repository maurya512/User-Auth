// import your needed dependencies
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// initialize the app using express
const app = express();

// apply the middleware function for bodyparser, so we can use it
app.use(
    bodyParser.urlencoded({
        extended: false
    })
);
app.use(bodyParser.json());

// pull in the info form keys.js file and connect to our Mongoose DB
const db = require('./config/keys').mongoURI;

// connect to MongoDB
mongoose.connect(
    db, { useNewUrlParser: true}
)
.then(() => console.log('MongoDB successfully connected'))
.catch(err => console.log(err));

// set up port for our server to run on and have the app listen to the port
const PORT = process.env.PORT || 5000; 
app.listen(PORT, () => console.log(`Server up and running on port ${PORT}`)); 