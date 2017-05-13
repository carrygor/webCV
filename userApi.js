/**
 * Created by 724291943 on 2017/5/10.
 */
function use(app) {

    var blogData = require('./api/blog-data')
    var postBlog = require('./api/postBlog')
    
    //get data
    app.get('/data',function (req,res) {
        var json = require('./data/data.json')
        res.send(json)
    })

    app.use('/api',blogData)
    app.use('/api',postBlog)
    
}
module.exports = use;
