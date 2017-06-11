/**
 * Created by 724291943 on 2017/4/19.
 */
var mongoose = require('mongoose')
    , Schema = mongoose.Schema

var ClassificationSchema = new Schema({
    name: { type: String },
    articleId: { type: String} ,
    createTime: { type: Date, default: Date.now},
    remark: { type: String, default: ""}
})

ClassificationSchema.statics.findAll = function (callback) {
  return this.model('classification')
    .find().sort({ createTime: -1 })
    .exec(function (error, doc) {
      if (error) {
        console.log(error);
        callback(null);
      } else {
        callback(doc);
      }
    });
}

module.exports = mongoose.model('classification',ClassificationSchema)