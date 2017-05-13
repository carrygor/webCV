/**
 * Created by 724291943 on 2017/4/19.
 */
function use(app) {

    var index = require('./routes/index')
    var webCV = require('./routes/webCV')


    app.use('/',index);

    app.use('/webCV', webCV);

}
module.exports = use;
