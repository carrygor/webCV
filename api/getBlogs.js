/**
 * Created by 724291943 on 2017/5/13.
 */
var express = require('express');
var api = express.Router();
var Blog = require('../models/blog')

/* GET blogs */
api.get('/getBlogs', function(req, res, next) {

    Blog.findAll(function (doc) {
        res.json(doc)
    })

});
api.get('/getBlogs/:customURL', function (req, res) {

    var customURL = req.params.customURL

    Blog.findByURL(customURL, function (doc) {
        res.json(doc)
    })

})


module.exports = api;
