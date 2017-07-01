/**
 * Created by 724291943 on 2017/4/16.
 */
var mongoose = require('mongoose')
    , Schema = mongoose.Schema

var BlogSchema = new Schema({
    customURL: { type: String, default: '' },
    title: { type: String },
    author: { type: String },
    summary: { type: String},
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

BlogSchema.statics.findById = function (id, callback) {
  return this.model('Blog').find({
    _id: id
  }, function (error, doc) {
    if (error) {
      console.log(error);
      callback(null);
    } else {
      //console.log(doc);
      if(doc.length == 0)
        callback(null);
      else {
        callback(doc[0])
      }
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
            else {
                callback(doc[0])
            }
        }
    });
}

BlogSchema.statics.findByTag = function (tag, callback) {
  return this.model('Blog').find({ tag: tag}, function (err, doc) {
    if(err) {
      console.log('find tag error:' + err)
      callback(null)
    } else {
        callback(doc)
    }
  })
}

BlogSchema.statics.findByCategory = function (category, callback) {
  return this.model('Blog').find({ category: category}, function (err, docs) {
    if(err) {
      console.log('find category error:' + err)
      callback(null)
    } else {
      callback(docs)
    }
  })
}

BlogSchema.statics.findArticleId = function (callback) {
  return this.model('Blog').find({ createTime:{ $gt: new Date(+new Date() - 3600000) } },
    function (error, doc) {
      if (error) {
        console.log(error);
        callback(-1);
      } else if (doc.length <= 0) {
        console.log('没有博客');
        callback(-1);
      } else {
        var id = -1;
        for (var i = doc.length - 1; i >= 0; i--) {
          if (doc[i]._id != id) id = doc[i]._id;
        }
        callback(id);
      }
    });
}


module.exports = mongoose.model('Blog',BlogSchema)







