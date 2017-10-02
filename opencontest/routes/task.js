var express = require('express');
var router = express.Router();

const path = require('path');

const models = require('../models');

router.get('/:id/html', function (req, res) {
  res.sendFile(path.join(__dirname, '../storage/tasks/', `${req.params.id}.html`));
});

router.get('/:id/', function (req, res) {
  console.log(req.session.userId);

  if (!req.session.userId) {
    res.json({ status: "err", reason: "auth" });
    return;
  }

  models.Task.findById(req.params.id, {
    attributes: ["name"],
    include: { 
      model: models.Solution,
      attributes: ["id", "lang", "createdAt"],
      where: { userId: req.session.userId }
    }
  })
    .then(task => {
      res.json({ status: "ok", task });
    });
})

module.exports = router;
