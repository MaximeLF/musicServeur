const express = require('express');
const router = express.Router();
const yt = require('./utilities/youtube');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/music/songa', function(req, res, next) {
    yt.play('https://youtu.be/DWfY9GRe7SI');
    res.redirect('/');
});

router.get('/music/songb', function(req, res, next) {
    yt.play('https://youtu.be/EqPtz5qN7HM');
    res.redirect('/');
});

module.exports = router;
