var express = require('express');
var router = express.Router();
var models = require("../models");

router.post('/login', function (req, res) {
  if (req.body.email && req.body.password) {
    models.User.findOne({
      where: { email: req.body.email },
      attributes: ['id', 'email', 'passwordHash']
    })
      .then(user => {
        if (!user) {
          res.json({ status: "err", reason: "cred", err: new Error("Wrong email") });
        } if (user.passwordHash !== req.body.password) {
          res.json({ status: "err", reason: "cred", err: new Error("Wrong password") });
        } else {
          req.session.userId = user.id;
          req.session.save();
          res.json({ status: "ok" });
        }
      })
    //.catch(err => res.json({ status: "err", reason: "db", err: err}));
  } else {
    res.json({ status: "err", reason: "form", err: new Error("Email and password are requiered") });
  }
});

router.get('/current', function (req, res) {
  console.log(req.session)
  if (!req.session.userId) {
    res.json({ status: "err", reason: "session" });
    return;
  }

  models.User.findById(req.session.userId,
    {
      attributes: ["email", "displayName"]
    })
    .then(user => {
      res.json({ status: "ok", user: user });
    })
    .catch(err => res.json({ status: "err", reason: "db", err: err }));
});

router.post("/logout", function (req, res) {
  req.session.userId = undefined;
  res.json({ status: "ok" });
})

module.exports = router;
