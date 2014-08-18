
'use strict';
var Vacation = require('../models/vacation');

exports.init = function(req, res){
  res.render('vacation/init');
};

exports.create = function(req, res){
  var vacation = new Vacation(req.body);
  vacation.save(function(){
    res.redirect('/vacation/index');
  });
};
