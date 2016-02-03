const express = require('express');
const router = express.Router();
const qApi = require("q");

/* GET home page. */
const Index = {
    renderResponse: function(req, res){
        var deferred = qApi.defer();
        res.status(200);
        deferred.resolve(res);
        return deferred.promise;
    }
};

module.exports = Index;