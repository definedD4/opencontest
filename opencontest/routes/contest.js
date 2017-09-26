var express = require('express');
var router = express.Router();

const models = require('../models');

router.get('/', function (req, res) {
  models.Contest.all({
    attributes: ["id", "name"]
  })
    .then(contests => {
      res.json({ status: "ok", contests });
    })
    .catch(err => {
      res.json({ status: "err", err });
    });
});

router.get('/:id', function (req, res) {
  models.Contest.findById(req.params.id, {
    attributes: ["id", "name"],
    include: [{ model: models.Task, attributes: ["id", "name"] }]
  })
    .then(contest => {
      res.json({ status: "ok", contest });
    })
    .catch(err => {
      res.json({ status: "err", err });
    });
})

module.exports = router;
