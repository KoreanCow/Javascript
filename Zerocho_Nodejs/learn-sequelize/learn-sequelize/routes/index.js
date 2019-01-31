var express = require('express');
var User = require('../models').User;

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  User.findAll()
    .then((user) => {
      res.render('sequelize', { users });
    })
    .catch((err) => {
      console.error(err);
      next(err);
    })
  
    
});
//        async/await 문법으로 표현한 라우터 
// router.get('/', async (req, res, next) => {
//   try{
//     const users = await User.findAll();
//     res.render('sequelize', { users });
//   }catch (error) {
//     console.error(error);
//     next(error);
//   }
// });
module.exports = router;
