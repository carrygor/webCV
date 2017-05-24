/**
 * Created by 724291943 on 2017/5/11.
 */
var express = require('express');
var api = express.Router();
var Blog = require('../models/blog')

/* post blog */
api.post('/postBlog', function(req, res, next) {

    var val = req.body

    Blog.create(val, function (error) {
        if(error){
            console.log(error)
        }
        console.log(val)
    })

    res.json({"msg":"hello"})
});

module.exports = api;
