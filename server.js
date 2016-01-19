'use strict';

var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');


var app = express();
var PORT = process.env.PORT || 3000;


app.use(morgan('dev'));
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


app.use('/', require('./routes/dbTest'));

app.listen(PORT);
