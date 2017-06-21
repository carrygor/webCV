/**
 * Created by 724291943 on 2017/5/13.
 */
var express = require('express');
var api = express.Router();
var Blog = require('../models/blog')
var Reply = require('../models/reply')
var async = require('async')

/* GET blogs */
api.get('/getBlogs/all', function(req, res, next) {

    Blog.findAll(function (doc) {
        res.json(doc)
    })

});
api.get('/getBlog/:customURL', function (req, res) {

    var customURL = req.params.customURL
  
    async.waterfall([
      function (callback) {
        Blog.findByURL(customURL, function (doc) {
          if (doc) {
            callback(null, doc)
          } else{
            callback('404')
          }
        })
      },
      function (doc, callback) {
        Blog.findByIdAndUpdate(doc._id, {$set : {accessed_times : ++doc.accessed_times}}, function (err, blog) {
          if (err) {
            callback('404')
          } else {
            callback(null, blog)
          }
        })
      },
      function (blog, callback) {
        var result = {}
        result.blog = blog
        Reply.findByArticleId(blog._id, function (replies) {
          result.replies = replies
          callback(null, result)
        })
      }
    ],function (err, result) {
      if (err) {
        console.log('getBlog err: ' + err)
        res.send(404)
      } else {
        res.json(result)
      }
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
