/**
 * Created by 724291943 on 2017/5/11.
 */
var express = require('express');
var api = express.Router();

/* GET home page. */
api.get('/blog-data', function(req, res, next) {
    res.json({"msg":"hi"})
});

module.exports = api;
