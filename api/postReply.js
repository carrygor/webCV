/**
 * Created by 724291943 on 2017/6/21.
 */

var express = require('express')
var api = express.Router()
var Reply = require('../models/reply')
var Blog = require('../models/blog')

api.post('/postReply', function (req, res) {

  var reply = req.body

  Reply.create(reply, function (err) {
    if (err) {
      console.log('postReply error: ' + err)
      res.send('err: ' + err)
    } else {
      Blog.findById(reply.articleId, function (doc) {
        if(doc) {
          Blog.findByIdAndUpdate(doc._id, {$set: {commented_counts: ++doc.commented_counts}}, function (err, blog) {
          })
        }
      })
      res.sendStatus(200)
    }
  })

})

module.exports = api