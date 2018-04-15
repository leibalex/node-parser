const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const mongoose  = require('mongoose');
const {host, database, port} = require('./config/db.config.json');

const appRoutes = require('./routes/app');
const apiRoutes = require('./routes/api');

mongoose.connect(`mongodb://${host}:${port}/${database}`);
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'No connect to database'));
db.once('open', console.log.bind(console, 'Success connection'));

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PATCH, DELETE, OPTIONS');
    next();
});

app.use('/', appRoutes);
app.use('/api', apiRoutes);

app.use(function (req, res, next) {
    return res.render('index');
});


module.exports = app;
