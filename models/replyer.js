/**
 * Created by 724291943 on 2017/4/19.
 */
var mongoose = require('mongoose')
    , Schema = mongoose.Schema

var ReplyerSchema = new Schema({
    name: { type: String },
    status: { type: String },
    email: { type: String},
    contact: { type: String},
    remark: { type: String, default: ""}
})


module.exports = mongoose.model('Blog',ReplyerSchema)