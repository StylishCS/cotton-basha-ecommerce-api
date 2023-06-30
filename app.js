var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose');
var homeRouter = require('./routes/home');
var usersRouter = require('./routes/users');
var offersRouter = require('./routes/offers');
var reviewsRouter = require('./routes/reviews');
var ordersRouter = require('./routes/orders');
var productsRouter = require('./routes/products');

var app = express();

mongoose.connect('mongodb+srv://joeshirf:joo2330768@cotton-basha-ecommerce.ioevnwq.mongodb.net/')
.then(()=>console.log('connected to mongoose db...'))
.catch(err=>console.error(err.message));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', homeRouter);
app.use('/users', usersRouter);
app.use('/offers', offersRouter);
app.use('/orders', ordersRouter);
app.use('/reviews', reviewsRouter);
app.use('/products', productsRouter);

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
