/**
 * Created by 724291943 on 2017/4/16.
 */
var mongoose = require('mongoose')
    , Schema = mongoose.Schema

var ImageSchema = new Schema({
    imageName: { type: String },
    description: { type: String },
    imageURL: { type: String ,default: ''},
    addTime: { type: Date },
    remark: { type: String, default: ""}
})


module.exports = mongoose.model('Blog',ImageSchema)