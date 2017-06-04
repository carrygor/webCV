/**
 * Created by 724291943 on 2017/6/3.
 */
var express = require('express')
var api = express.Router()
var classification = require('../models/classification')
var blog = require('../models/blog')
var tag = require('../models/tag')

api.get('/getSiteBar', function (req, res) {

    var json = {}

    getBlogNum()
        .then(function (data) {
            json.blogNum = data
            return getTagNum()
        })
        .then(function (data) {
            json.tagNum = data
            return getClassificationNum()
        })
        .then(function (data) {
            json.classificationNum = data
            res.json(json)
        })
})

function getTagNum() {
    return new Promise(function (resolve, reject) {
        tag.count({},function (err, count) {
            if(err){
                reject('find tag err')
            }else {
                resolve(count)
            }
        })
    })
}

function getClassificationNum() {
    return new Promise(function (resolve, reject) {
        classification.count({},function (err, count) {
            if(err){
                reject('find classification err')
            }else {
                resolve(count)
            }
        })
    })
}

function getBlogNum() {
    return new Promise(function (resolve, reject) {
        blog.count({},function (err, count) {
            if(err){
                reject('find blog err')
            }else {
                resolve(count)
            }
        })
    })
}

module.exports = api