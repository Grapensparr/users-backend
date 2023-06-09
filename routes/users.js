var express = require('express');
var router = express.Router();

let users = [
  {id: 1, name: "Alice"},
  {id: 2, name: "Bob"},
  {id: 3, name: "Jane"},
  {id: 4, name: "John"}
];

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json(users);
});

router.post('/', function(req, res, next) {
  let newUser = req.body;
  newUser.id = users.length + 1;
  users.push(newUser);
  res.json(users);
});

module.exports = router;
