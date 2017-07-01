/**
 * Created by 724291943 on 2017/7/1.
 */
var express = require('express')
var api = express.Router()
var Blog = require('../models/blog')
var User = require('../models/user')
var async = require('async')

api.post('/editBlog', function (req, res) {

  var val = req.body

  async.waterfall([
    function (callback) {
      var username = req.cookies.user
      var password = req.cookies.authStr
      User.login(username, password, function (err) {
        callback(err)
      })
    },
    function (callback) {
      console.log('delete:' + val.delete)
      console.log(val._id)
      if(val.delete == 1) {
        Blog.remove({_id: val._id}, function (err, result) {
          if(err) {
            callback(err)
          } else {
            callback('删除完成')
          }
        })
      } else {
        callback(null)
      }
    },
    function (callback) {
      console.log('editing')
      console.log(val)
      Blog.findByIdAndUpdate(val._id, {$set : {
        summary : val.summary,
        title : val.title,
        customURL : val.customURL,
        content : val.content
        // modifyTime : new Date.now
      }}, function (err, blog) {
        console.log('finish edit')
        if (err) {
          callback('404')
        } else {
          callback(null)
        }
      })
    }
    ],function (err, result) {
      if(err) {
        console.log('postBlog err:' + err)
        if(err = '删除完成') {
          res.redirect('http://carrygor.com/blog')
        } else {
          res.sendStatus(404)
        }
      } else {
        console.log('postBlog result:' + result)
        res.redirect('http://carrygor.com/blog#/' + val.customURL)//todo-成功网址
      }
    }
  )

})

module.exports = api