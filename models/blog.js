/**
 * Created by 724291943 on 2017/4/16.
 */
var mongoose = require('mongoose')
    , Schema = mongoose.Schema

var BlogSchema = new Schema({
    customURL: { type: String, default: '' },
    title: { type: String },
    author: { type: String },
    category: { type: String },
    tag: { type: String },
    content: { type: String },
    desc: { type: String},
    seoKeyWord: { type: String },
    seoDescription: { type: String },
    createTime: { type: Date, default: Date.now },
    modifyTime: { type: Date, default: Date.now },
    commented_counts: { type: Number, default: 0 },//被评论的次数（默认为0）
    accessed_times: { type: Number, default: 0 },//被浏览的次数（默认为0）
    remark: { type: String, default: ""}
})

BlogSchema.statics.findAll = function (callback) {
    return this.model('Blog')
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

BlogSchema.statics.findByURL = function (customURL, callback) {
    return this.model('Blog').find({
        customURL: customURL
    }, function (error, doc) {
        if (error) {
            console.log(error);
            callback(null);
        } else {
            //console.log(doc);
            if(doc.length == 0)
                callback(null);
            else callback(doc[0]);
        }
    });
}


module.exports = mongoose.model('Blog',BlogSchema)