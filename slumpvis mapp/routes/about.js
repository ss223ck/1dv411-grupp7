var express = require('express');
var router = express.Router();

/* GET page. */
router.get('/', function(req, res, next) {
    
    //<------------------------Just render----------------------->
    res.render('about', {
        title: 'About',
        name: 'Blackgear13'
    });
});


module.exports = router;
