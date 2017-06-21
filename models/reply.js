/**
 * Created by 724291943 on 2017/4/19.
 */
var mongoose = require('mongoose')
    , Schema = mongoose.Schema

var ReplySchema = new Schema({
    status: { type: String },
    replyer: { type: String },
    replyerEmail: { type: String },
    articleId: { type: String},
    content: { type: String},
    replyTime: { type: Date, default: Date.now},
    remark: { type: String, default: ""}
})

ReplySchema.statics.findByArticleId = function (id, callback) {
  return this.model('Reply').find({ articleId: id}, function (err, docs) {
    if(err) {
      console.log('find reply err:' + err)
      callback(null)
    } else {
        callback(docs)
    }
  })
}

module.exports = mongoose.model('Reply',ReplySchema)