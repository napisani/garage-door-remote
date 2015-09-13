'use strict';
/**
 * Created by napisani on 9/4/15.
 */

var Spark = require('spark');
var Properties = require('../config/properties.json');
var initialize = function() {};

var toggleDoor = function(index) {
  if (Properties["sparkApiKey"]) {

    Spark.login({
      accessToken: Properties["sparkApiKey"]
    }, function(err, body) {
      if (err) {
        console.log("ERROR logging in: " + err);
      } else {
        console.log('API call login completed on callback:', body);

        Spark.getDevice('garage-door-bot', function(err, device) {
          console.log('Device name: ' + device.name);
          if (index == 1 || index == 2 || index == 3) {
            device.callFunction('toggle', '' + index, function(err, data) {
              if (err) {
                console.log('An error occurred calling toggle function:', err);
              } else {
                console.log('toggle function called succesfully:', data);
              }
            });
          }
        });
      }
    });
  } else {
    console.log('invalid spark api key');
  }
};


module.exports.toggleDoor = toggleDoor;
