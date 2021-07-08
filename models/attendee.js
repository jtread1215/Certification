const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const attendeeSchema = new Schema({
    
        
            first_name: {
                type: String,
                trim: true
                
            },
            last_name: {
                type: String,
                trim: true
                
            },
            title: {
                type: String,
                trim: true
            },
            email: {
                type: String,
                trim: true
          }
        
    
});


const Attendee = mongoose.model('registrant', attendeeSchema);

module.exports = Attendee;