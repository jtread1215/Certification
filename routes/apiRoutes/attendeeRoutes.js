//router.post/registrant bulk create csv
const { ViewModuleSharp } = require('@material-ui/icons');
const router = require("express").Router();
const Attendee = require('../../models/attendee');
const uploadfile = document.getElementById('file-to-upload');

router.post('/', (req, res) => {
    Attendee.create(uploadfile)
      .then((dbAttendee) => {
        res.json(dbAttendee);
      })
      .catch((err) => {
        res.json(err);
      });
  });
  
module.exports = router;