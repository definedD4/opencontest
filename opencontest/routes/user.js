var express = require('express');
var router = express.Router();
var models = require("../models");

router.post('/login', function(req, res) {
  if(req.body.email && req.body.password) {
    models.User.findOne({
      where: { email: req.body.email },
      attributes: ['id', 'email', 'passwordHash']
    })
      .then(user => {
        if(user.passwordHash !== req.body.password) {
          res.json({ result: "err", reason: "pass", err: new Error("Wrong password")});
        } else {
          req.session.userId = user.id;
          req.session.save();
          res.json({ result: "ok" });
        }
      })
      //.catch(err => res.json({ result: "err", reason: "db", err: err}));
  } else {
    res.json({ result: "err", reason: "form", err: new Error("Email and password are requiered")});
  }
});

module.exports = router;
