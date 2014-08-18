
'use strict';
var Vacation = require('../models/vacation'),
    moment   = require('moment');

exports.init = function(req, res){
  res.render('vacation/init');
};

exports.create = function(req, res){
  var vacation = new Vacation(req.body);
  vacation.create(function(){
    res.redirect('/vacation');
  });
};

exports.index = function(req, res){
  Vacation.all(function(err, dogFarts){
    res.render('vacation/index', {vacations:dogFarts, moment:moment});
  });
};

