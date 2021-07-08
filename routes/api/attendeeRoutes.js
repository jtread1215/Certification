//router.post/registrant bulk create csv

const router = require("express").Router();
const Attendee = require('../../models/attendee');


router.post('/', (req, res) => {
    let newAttendee = new Attendee({
      first_name:req.body.first_name,
      last_name:req.body.last_name,
      email:req.body.email,
      title:req.body.title,
      cert:req.body.cert
    })

    newAttendee.save().then(() => {
      res.json("attendee added")})
      .catch(err => res.status(400).json(err))
    
    console.log(newAttendee);
  });

//   app.post('/stored', (req, res) => {
//     console.log(req.body);
//     db.collection('quotes').insertOne(req.body, (err, data) => {
//         if(err) return console.log(err);
//         res.send(('saved to db: ' + data));
//     })
// });


  router.get("/", (req, res) => {
    Attendee.find()
    .then(attendees => res.json(attendees))
    .catch(err => res.status(400).json(err));
  });

module.exports = router;