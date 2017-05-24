/**
 * Created by 724291943 on 2017/5/10.
 */
function use(app) {

    var blogData = require('./api/blog-data')
    var postBlog = require('./api/postBlog')
    var getBlogs = require('./api/getBlogs')
    var login = require('./api/login')
    
    //get data
    app.get('/data',function (req,res) {
        var json = require('./data/data.json')
        res.send(json)
    })

    app.use('/api',blogData)
    app.use('/api',postBlog)
    app.use('/api',getBlogs)
    app.use('/api',login)

}
module.exports = use;
