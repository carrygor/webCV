/**
 * Created by 724291943 on 2017/5/11.
 */
var express = require('express');
var async = require('async')
var api = express.Router();
var Blog = require('../models/blog')
var Tag = require('../models/tag')
var Category = require('../models/classification')

/* post blog */
api.post('/postBlog', function(req, res, next) {

    var val = req.body
    var tagEntity = {}
    var categoryEntity = {}

    async.waterfall([
        function (callback) {
            Blog.create(val, function (error) {
                if (error) {
                    console.log(error)
                    callback(error)
                }
                console.log(val)
                callback(null)
            })
        },
        function (callback) {
            Blog.findArticleId(function (id) {
                if (id != -1){
                    tagEntity.articleId = id
                    tagEntity.name = val.tag
                    Tag.create(tagEntity, function (err) {
                        if (err) {
                            callback('save tag error 1')
                        }
                        callback(null)
                    })
                } else {
                    callback('save tag error 2')
                }
            })
        },
        function (callback) {
            Blog.findArticleId(function (id) {
                if (id != -1){
                    categoryEntity.articleId = id
                    categoryEntity.name = val.category
                    Category.create(categoryEntity, function (err) {
                        if (err) {
                            callback('save category error 1')
                        }
                        callback(null)
                    })
                } else {
                    callback('save category error 2')
                }
            })
        }],
    function (err, result) {
        if(err) console.log('postBlog err:' + err)
        if(result) console.log('postBlog result:' + result)
    })

    res.redirect('http://localhost:8080/')
});

module.exports = api;
