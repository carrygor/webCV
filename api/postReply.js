/**
 * Created by 724291943 on 2017/6/21.
 */

var express = require('express')
var api = express.Router()
var Reply = require('../models/reply')

api.post('/postReply', function (req, res) {

  var reply = req.body

  Reply.create(reply, function (err) {
    if (err) {
      console.log('postReply error: ' + err)
      res.send('err: ' + err)
    } else {
      res.sendStatus(200)
    }
  })

})

module.exports = api