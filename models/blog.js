/**
 * Created by 724291943 on 2017/4/16.
 */
var mongoose = require('mongoose')
    , Schema = mongoose.Schema

var BlogSchema = new Schema({
    customURL: { type: String, default: '' },
    title: { type: String },
    author: { type: String },
    classification: { type: String },
    tag: { type: String },
    content: { type: String },
    seoKeyWord: { type: String },
    seoDescription: { type: String },
    createTime: { type: Date, default: Date.now },
    modifyTime: { type: Date, default: Date.now },
    commented_counts: { type: Number, default: 0 },//相册被评论的次数（默认为0）
    accessed_times: { type: Number, default: 0 },//相册被浏览的次数（默认为0）
    remark: { type: String, default: ""}
})


module.exports = mongoose.model('Blog',BlogSchema)