var express = require('express');
var router = express.Router();

const path = require('path');

router.get('/:id/html', function(req, res) {
  res.sendFile(path.join(__dirname, '../storage/tasks/', `${req.params.id}.html`));
});

module.exports = router;
