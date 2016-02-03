var express = require('express');
var router = express.Router();
var index = require("../express_middleware/index_middleware.js");
var collect_usernames = require("../model/collect_usernames.js");
/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Express' });
  //var response = index.renderResponse(req, res);
  res.render("index", { title: 'Min app' });
});

router.post("/", function(req, res, next) {
    var user = require("../model/collect_usernames.js");
    user.produceUrl(req.body);
    res.send(req.body);
});

module.exports = router;
