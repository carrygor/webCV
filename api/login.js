/**
 * Created by 724291943 on 2017/5/18.
 */
var express = require('express')
var api = express.Router()
var User = require('../models/user')

api.post('/login',function (req, res) {


    var formData = req.body
    var username = ''
    var password = ''

    //cookies
    var loginStatus = req.cookies.loginStatus

    if(loginStatus){
        username = req.cookies.user
        password = req.cookies.authStr
        console.log('from cookie')
    }

    if(formData.username){
        username = formData.username
        password = formData.password
        console.log('from formData')
    }
    console.log(username)

    // User.create(formData, function (err) {
    //     if(err){
    //         console.log("错误：" + err)
    //     }
    // })

    User.find({username: username}, function (err ,doc) {
        if(err | !doc[0]){
            console.log("错误：" + err)
            res.json({login: '0'})
        }else {
            if(password == doc[0].password){
                res.cookie('loginStatus','1',{maxAge: 36000000,  domain: 'localhost'})
                if(!loginStatus){
                    console.log("!loginStatus")
                    res.cookie('user',username,{maxAge: 36000000})
                    res.cookie('authStr',password,{maxAge: 36000000, httpOnly: true})
                }
                res.json({login:"1"})
            }else {
                res.cookie('loginStatus','0',{maxAge: 36000000, httpOnly: true})
                res.json({login:"0"})
            }
        }
    })



})



module.exports = api