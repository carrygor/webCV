var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose')
var cors = require('cors')

var webCV = require('./routes/webCV');
var blog = require('./routes/blog');

// var db = mongoose.connect('mongodb://hewenhao:HEWENhao@5354@carrygor.com/blog')
var options = {
  user: 'hewenhao',
  pass: 'my1stblog'
}
var db = mongoose.connect("mongodb://carrygor.com/blog",options);
db.connection.on("error", function (error) {
  console.log("connect fail：" + error);
});
db.connection.on("open", function () {
  console.log("——connect success!——");
});

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(require('less-middleware')(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors({
  origin:['http://localhost:8080'],
  methods:['GET','POST'],
  alloweHeaders:['Conten-Type','Authorization'],
  credentials: true
}))

//跨域访问
app.all('*', function(req, res, next) {
  console.log("跨域中间件")
  res.header("Access-Control-Allow-Origin", 'http://localhost:8080'); //需要显示设置来源
  // res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  res.header("Access-Control-Allow-Credentials",true); //带cookies
  // res.header("X-Powered-By",' 3.2.1')
  // res.header("Content-Type", "application/json;charset=utf-8");
  next();
});

//路由表
require('./userRouters')(app)

//api
require('./userApi')(app)


// app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
