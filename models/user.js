/**
 * Created by 724291943 on 2017/4/16.
 */
var mongoose = require('mongoose')
    , Schema = mongoose.Schema

var UserSchema = new Schema({
    username: { type: String, index: { unique: true } },
    password: { type: String },
    nick: { type: String, default: '匿名用户' },
    headImgURL: { type: String },
    profile: { type: String },
    email: { type: String },
    regTime: { type: Date, default: Date.now },
    auth: { type: String, default: 0},
    remark: { type: String, default: ""}
})

module.exports = mongoose.model('User',UserSchema)