/**
 * Created by 724291943 on 2017/4/19.
 */
var mongoose = require('mongoose')
    , Schema = mongoose.Schema

var ClassificationSchema = new Schema({
    name: { type: String },
    articleId: { type: ObjectId },
    createTime: { type: Date, default: Date.now},
    remark: { type: String, default: ""}
})


module.exports = mongoose.model('Blog',ClassificationSchema)