'use strict';
/**
 * Created by napisani on 3/14/15.
 */
var properties = require('../config/properties.json');
var express = require('express');
var webapp = express();


webapp.get('/door/:doorNumber', function(req, resp){
    var doorNumber = req.params.doorNumber;
    console.log("toggling door: " + doorNumber);
    resp.send();
});

webapp.use(express.static('./public/'));



webapp.listen(properties.runningOnPi ? 80 : 3000);