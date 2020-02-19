const router = require('express').Router();

const Users = require('./users-model.js');
const restricted = require('../auth/restriced-middleware.js');
const checkDept = require('../auth/check-dept-middleware.js');

router.get('/', restricted, (req, res) => {
  Users.find()
    .then(users => {
      res.status(200).json(users);
    })
    .catch(err => {
      res.status(500).json({error: 'Error retrieving users', err})
    })
})

// Users logged in can only view their department users

router.get('/dept', restricted, (req, res) => {
  const department = req.decodedJwt.department;
  
  Users.findByDept(department)
    .then(users => {
      res.status(200).json(users);
    })
    .catch(err => {
      res.status(500).json({error: 'Error retreiving users', err})
    })
})

module.exports = router;
