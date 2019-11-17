// create a contant of express and set it equal to the express npm package. This will let us be able to create an instance of express
const express = require("express");

// create constants and set equal to their appropriate purpose.

// enables monogoose
const mongoose = require("mongoose");

// routes is equal to our routes folder where the routes are configured
const routes = require("./routes");

// set app equal to creating an express instance
const app = express();

// create a PORT constant
const PORT = process.env.PORT || 3001;

// setup middleware

// Configure body parsing for AJAX requests
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets
// if the PORT is equal to production use the following client folder
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://user1:password1@ds125871.mlab.com:25871/heroku_0xn0jnk7",
  {
    useCreateIndex: true,
    useNewUrlParser: true
  }
);

// Start the API server
app.listen(PORT, () =>
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`)
);
