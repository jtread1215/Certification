const express = require('express');
const mongoose = require("mongoose");
const { MongoClient } = require("mongodb");
const User = require('./models/user');
const Attendee = require('./models/attendee');

const app = express();
const PORT = process.env.PORT || 5000;

const user = new User ({
    username:"Bob",
    password:"password12345"

});

user.save();
console.log(user.username);

const attendee = new Attendee({
    first_name:"sample",
    last_name:"Name",
    email:"email2@email.com",
    title:"Person"
});

attendee.save();
console.log(attendee.first_name + ' ' + attendee.last_name);

mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/certification',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  }
);

require('./routes/apiRoutes')(app);

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});