var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Welcome!' });
});

router.get('/list/comics', function(req, res, next) {
  res.render('index', { title: 'Comics' });
});

router.get('/list/filmes', function(req, res, next) {
  res.render('index', { title: 'Filmes' });
});

router.get('/list/youtube', function(req, res, next) {
  res.render('index', { title: 'Youtube' });
});

module.exports = router;
