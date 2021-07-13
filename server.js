const path = require('path'); 
const express = require('express'); 
const session = require('session'); 
const routes = require('./routes');
const mongoose = require('mongoose');
  
require('./utils'); 

const app = express(); 
const PORT = process.env.PORT || 3001; 

const sess = {
    secret: 'Super secret secret', 
    cookie: {}, 
    resave: false, 
    saveUnitialized: true, 
}; 

app.use(session(sess)); 
app.use(express.urlencoded({extended: true})); 
app.use(express.json()); 
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build')); 
}; 

app.use(routes);

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/certifcation', 
{
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
    useCreateIndex: true, 
    useFindAndModify: false,
});  

app.listen(PORT, function() {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
  });
