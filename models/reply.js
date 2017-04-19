/**
 * Created by 724291943 on 2017/4/19.
 */
var mongoose = require('mongoose')
    , Schema = mongoose.Schema

var ReplySchema = new Schema({
    status: { type: String },
    replyer: { type: String },
    replyerId: { type: ObjectId },
    articleId: { type: ObjectId},
    content: { type: String},
    replyTime: { type: Date, default: Date.now},
    remark: { type: String, default: ""}
})


module.exports = mongoose.model('Blog',ReplySchema)