var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');

var user = require('./routes/user');
var contest = require('./routes/contest');
var solution = require('./routes/solution');
var task = require('./routes/task');

var app = express();

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(session({
  secret: 'hi there',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60000, secure: !true }
}));

app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/user', user);
app.use('/api/contest', contest);
app.use('/api/solution', solution);
app.use('/api/task', task);

module.exports = app;
