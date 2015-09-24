//
//var express = require('express');
//var router = express.Router();
//var mongoose = require('mongoose');
//var path = require('path');
//var Cat = mongoose.model('Cat', {name:String});
//
//
//mongoose.connect('mongodb://localhost/basic_walking_skeleton');
//
//
//
//
//
//
//
//router.post('/add', function(request, response, next){
//    var kitty = new Cat({name: request.body.name});
//    kitty.save(function(err){
//        if(err) console.log('meow %s', err);
//        response.send(kitty.toJSON());
//        //next();   -----everyone else has these in but it didn't work on mine
//    });
//});
//
//router.get('/cats', function(request, response, next){
//    return Cat.find({}).exec(function(err, cats){
//        if(err) throw new Error(err);
//        response.send(JSON.stringify(cats));
//        //next();  -----everyone else has these in but it didn't work on mine
//    });
//});
//
//module.exports = router;