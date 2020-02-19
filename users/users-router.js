const router = require('express').Router();

const Users = require('./users-model.js');
const restricted = require('../auth/restriced-middleware.js');

router.get('/', restricted, (req, res) => {
  Users.find()
    .then(users => {
      res.status(200).json(users);
    })
    .catch(err => {
      res.status(500).json({error: 'Error retrieving users', err})
    })
})

module.exports = router;
