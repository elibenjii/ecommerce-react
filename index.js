
const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const mongoose = require('mongoose').set('debug', true);
const path = require('path');
require('dotenv').config();
require('./services/passport.js')
const compression = require('compression')
const config = require('../config.js');

const env = process.env.NODE_ENV || 'development';

mongoose.connect(env === 'development' ? config.DB_URI_DEV : config.DB_URI, {useNewUrlParser: true, useCreateIndex: true})

const app = express()
app.use(compression())

env !== 'development' && app.use(express.static(path.join(__dirname, 'client/build')));


env === 'development' && app.use(morgan('dev'))
app.use(bodyParser.json())
app.use('/api', require('./routes/router'))

env !== 'development' && app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

app.listen(process.env.PORT || 5000)