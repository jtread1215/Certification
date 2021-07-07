const express = require('express');
const router = express.Router();

let user = require('../models/user-schema');

router.route('/create').post((req, res, next) => {
    user.create(req.body, (error, data) => {
        if (error) {
            return next(error)
        } else {
            console.log(data)
            res.json(data)
        }
    })
});

router.route('/').get((req, res) => {
    user.find()
      .then(users => res.json(users))
      .catch(err => res.status(400).json(err))
})


module.exports = router;