/**
 * Created by 724291943 on 2017/4/16.
 */
var mongoose = require('mongoose')
    , Schema = mongoose.Schema

var LogSchema = new Schema({
    blogID: { type: ObjectId },
    status: { type: String },//删除，修改，新增
    modifyTime: { type: Date ,default: Date.now },
    remark: { type: String, default: ""}
})


module.exports = mongoose.model('Blog',LogSchema)