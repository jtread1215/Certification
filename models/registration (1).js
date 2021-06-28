const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const attendeeSchema = new Schema({
    registrant: [
        {
            first_name: {
                type: String,
                trim: true,
                required: 'placeholder - fName?'
            },
            last_name: {
                type: String,
                trim: true,
                required: 'placeholder - lName?'
            },
            title: {
                type: String,
                trim: true
            },
            email: {
                type: String,
                trim: true,
                required: 'placeholder = email?'
            }
        }
    ]
});

const Attendee = mongoose.model('registration', attendeeSchema);

module.exports = Attendee;
