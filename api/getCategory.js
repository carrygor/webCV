/**
 * Created by 724291943 on 2017/6/6.
 */
var express = require('express')
var api = express.Router()
var Category = require('../models/classification')

api.get('/getcategories', function (req, res) {
  Category.findAll(function (categories) {
    var json = []
    categories.forEach(function (val) {
      var flag = 0
      for(var index in json){
        if(json[index].name == val.name){
          json[index].times++
          flag = 1
          break
        }
      }
      if(flag == 0){
        var jsonVal = {
          name: val.name,
          times: 1
        }
        json.push(jsonVal)
      }
    })
    res.json(json)
  })
})

module.exports = api