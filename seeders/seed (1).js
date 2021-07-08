const mongoose = require('mongoose'); 
const db = require('../models'); 
//TODO:
//add the correct filename(s)/path(s), data for seed file once structure in model is realized
mongoose.connect('mongodb://localhost/certification', {
    useNewUrlParser: true, 
    useFindAndModify: false, 
    useUnifiedTopology: true, 
}); 

const zSeed = [
    {

    }
]; 
db.z.deleteMany({})
.then( () => db.z.collection.insertMany(zSeed))
.then( (data) => {
    console.log(data.result.n + ' records inserted!'); 
    process.exit(0); 
})
.catch( (err) => {
    console.error(err); 
    process.exit(1); 
}); 