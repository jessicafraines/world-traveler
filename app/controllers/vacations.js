
'use strict';
var Vacation = require('../models/vacation'),
    moment   = require('moment'),
    mp       = require('multiparty');

exports.init = function(req, res){
  res.render('vacation/init');
};

exports.create = function(req, res){
  Vacation.create(req.body, function(){
    res.redirect('/vacations');
    console.log('FORM', req.body);
  });
};

exports.index = function(req, res){
  Vacation.all(function(err, dogFarts){
    res.render('vacation/index', {vacations:dogFarts, moment:moment});
  });
};

exports.show = function(req, res){
  Vacation.findById(req.params.id, function(dogFarts){
    res.render('vacation/show', {vacation:dogFarts, moment:moment});
  });
};

exports.downloadPhoto = function(req, res){
  Vacation.findById(req.params.id, function(vacation){
    vacation.downloadPhoto(req.body.url, function(){
      res.redirect('/vacations/' + req.params.id);
    });
  });
};
exports.uploadPhoto = function(req, res){
  Vacation.findById(req.params.id, function(vacation){
    var form = new mp.Form();
    form.parse(req, function(err, fields, files){
      vacation.uploadPhoto(files, function(){
        res.redirect('/vacations/' + req.params.id);
      });
    });
  });
};
