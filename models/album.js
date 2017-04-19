/**
 * Created by 724291943 on 2017/4/16.
 */
var mongoose = require('mongoose')
    , Schema = mongoose.Schema

var AlbumSchema = new Schema({
    albumURL: { type: String },
    title: { type: String },
    classification: { type: String },
    brief: { type: String },//相册简介
    image: { type: String },
    commented_counts: { type: Number, default: 0 },//相册被评论的次数（默认为0）
    accessed_times: { type: Number, default: 0 },//相册被浏览的次数（默认为0）
    remark: { type: String, default: ""}
})


module.exports = mongoose.model('Blog',AlbumSchema)