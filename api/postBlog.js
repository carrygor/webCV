/**
 * Created by 724291943 on 2017/5/11.
 */
var express = require('express');
var api = express.Router();
var Blog = require('../models/blog')

/* GET home page. */
api.post('/postBlog', function(req, res, next) {

    var val = req.body

    Blog.create(val, function (error) {
        if(error){
            console.log(error)
        }
        console.log("ok")
    })

    res.json({"msg":"hello"})
});

module.exports = api;
