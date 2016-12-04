let express = require('express');
let router = express.Router();

router.get('/:name', function (req, res) {
  res.render('users', {
    name: req.params.name,
  });
});

exports = module.exports = router;