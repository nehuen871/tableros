var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyparser = require('body-parser');
var cors = require('cors');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var authRouter = require('./routes/auth');
var tablerohRouter = require('./routes/tablero');
var rolesRouter = require('./routes/roles');
var tablerosRolesRouter = require('./routes/rolesTableros');
var powerBiRoutes = require('./routes/powerBi');
var comentariosRouter = require('./routes/comentarios');

var app = express();


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(cors());
app.use(logger('dev'));
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/tablero', tablerohRouter);
app.use('/auth', authRouter);
app.use('/roles', rolesRouter);
app.use('/powerbi', powerBiRoutes);
app.use('/tablerosroles', tablerosRolesRouter);
app.use('/comentarios', comentariosRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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
