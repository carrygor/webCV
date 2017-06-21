/**
 * Created by 724291943 on 2017/5/10.
 */
function use(app) {

    var blogData = require('./api/blog-data')
    var postBlog = require('./api/postBlog')
    var getBlogs = require('./api/getBlogs')
    var login = require('./api/login')
    var sitebar = require('./api/site-bar')
    var getTag = require('./api/getTag')
    var getCategory = require('./api/getCategory')
    var postReply = require('./api/postReply')

    //get data
    app.get('/data',function (req,res) {
        var json = require('./data/data.json')
        res.send(json)
    })

    app.use('/api',blogData)
    app.use('/api',postBlog)
    app.use('/api',getBlogs)
    app.use('/api',login)
    app.use('/api',sitebar)
    app.use('/api',getTag)
    app.use('/api',getCategory)
    app.use('/api',postReply)

}
module.exports = use;
