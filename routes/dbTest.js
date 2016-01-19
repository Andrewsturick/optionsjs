var express = require('express');
var fs = require('fs')
var router = express.Router();
var stats = require('../module.js')
stats = stats.split(',')
router.get('/dbRegex', function(req, res){
    // var stats = stats.split(',');

    var counter = 1;
    for(var each in stats){
      if (each!= 0 && each%19==0){
        stats[each] = 'split '+ stats[each]
        console.log(stats[each])
      }
    }
    stats = stats.join(',').split('split ')
    for (var option in stats){

      stats[option]= stats[option].split(',')

      stats[option].splice(2,3)
      stats[option].splice(4,1)
      console.log(stats[option].length)

    }
    res.send(stats)
  })



module.exports = router;
