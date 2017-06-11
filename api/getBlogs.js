/**
 * Created by 724291943 on 2017/5/13.
 */
var express = require('express');
var api = express.Router();
var Blog = require('../models/blog')

/* GET blogs */
api.get('/getBlogs/all', function(req, res, next) {

    Blog.findAll(function (doc) {
        res.json(doc)
    })

});
api.get('/getBlog/:customURL', function (req, res) {

    var customURL = req.params.customURL

    Blog.findByURL(customURL, function (doc) {
        Blog.findByIdAndUpdate(doc._id,{$set:{accessed_times:++doc.accessed_times}},function (err, blog) {
            if(err){
                console.log('update err:' + err)
            } else {
                res.json(blog)
            }
        })
    })

})

api.get('/getBlogs/tag/:tag', function (req, res) {
  var tag = req.params.tag

  Blog.findByTag(tag, function (blogs) {
    res.json(blogs)
  })
})

api.get('/getBlogs/category/:category', function (req, res) {
  var category = req.params.category

  Blog.findByCategory(category, function (blogs) {
    res.json(blogs)
  })
})

module.exports = api;
