'use strict';
/**
 * Created by napisani on 3/14/15.
 */
var properties = require('../config/properties.json');
var doorController = require('./garage-controller-spark.js');
var express = require('express');
var webapp = express();


webapp.get('/door/:doorNumber', function(req, resp){
    try
    {
        console.log("try to toggle door: " + req.params.doorNumber);
        var doorNumber = parseInt(req.params.doorNumber);
        if(doorNumber <= parseInt(properties.numberOfDoors)){
            if(!doorController.toggleDoor(doorNumber)){
                resp.statusCode = 500;
            }
        } else {
            throw Error('' + doorNumber + ' is greater than ' + properties.numberOfDoors );
        }
    }
    catch(err)
    {
        console.log(err);
        resp.statusCode = 400;
    }
    resp.send();
});

webapp.use(express.static(__dirname + '/public'));

webapp.listen(8080);
