const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;
const Attendee = require('./models/attendee');
const User = require('./models/user');

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/certification");


const user = new User ({
  username:"new bob",
  password:"password12345"

});

user.save();
console.log(user.username);

const attendee = new Attendee({
  first_name:"firstName",
  last_name:"Name",
  email:"email2@email.com",
  title:"Person"
});

attendee.save();
console.log(attendee.first_name + ' ' + attendee.last_name);

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
