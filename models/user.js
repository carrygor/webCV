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

UserSchema.statics.login = function (username, password, callback) {
    return this.model('User').find({
      username: username
    }, function (err, doc) {
      if (err) {
        callback('错误')
      } else if (doc.length == 0){
          callback('该用户不存在')
      } else if (doc[0].password != password) {
          callback('用户信息已更改')
      } else {
          callback(null)
      }
    })
}

module.exports = mongoose.model('User',UserSchema)