var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
//  index.pug 를 HTML로 렌더링 하면서 { title: 'Express'}라는 객체를 변수로 집어 넣는다.  html에서 변수처럼 사용가능 

module.exports = router;