const router = require('express').Router();
let Attendee = require('../models/attendee');

router.route('/').get((req, res) => {
  Attendee.find()
  .then(attendees => res.json(attendees))
  .catch(err => res.status(400).json(err));
});

router.route('/add').post((req, res) => {
  const firstName = req.body.first_name;
  const lastName = req.body.last_name;
  const title = req.body.title;
  const email = req.body.email;

  const newAttendee = new Attendee({
    firstName,
    lastName,
    title,
    email
  });

newAttendee.save()
.then(() => res.json('Attendee added!'))
.catch(err => res.status(400).json(err));
});

router.route('/:id').get((req, res) => {
  Attendee.findById(req.params.id)
  .then(attendee => res.json(attendee))
  .catch(err => res.status(400).json(err));
});

router.route('/:id').delete((req, res) => {
  Attendee.findByIdAndDelete(req.params.id)
  .then(() => res.json('It gone'))
  .catch(err => res.status(400).json(err));
});

router.route('/update/:id').post((req, res) => {
  Attendee.findById(req.params.id)
  .then(attendee => {
    attendee.first_name = req.body.first_name;
    attendee.last_name = req.body.last_name;
    attendee.title = Number(req.body.title);
    attendee.email = req.body.email;

    attendee.save()
    .then(() => res.json('Attendee updated!'))
    .catch(err => res.status(400).json(err));
  })
  .catch(err => res.status(400).json(err));
  
});

module.exports = router;