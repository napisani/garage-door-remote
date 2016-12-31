'use strict';
/**
 * Created by napisani on 9/4/15.
 */

var Particle = require('particle-api-js');
var particle = new Particle();

//var Spark = require('spark');
var Properties = require('../config/properties.json');
var initialize = function () {
};

var toggleDoor = function (index, success, failure) {
    var token = Properties["sparkApiKey"];
    if (Properties["sparkApiKey"]) {
        var devicesPr = particle.listDevices({auth: token});

        devicesPr.then(
            function (devices) {
                console.log('Devices: ', devices);
                for (var i = 0; i < devices.body.length; i++) {
                    var dev = devices.body[i];
                    console.log("Name: " + dev.name + " ID:" + dev.id);
                    if (dev.name === 'garage-door-bot') {
                        if (index == 1 || index == 2 || index == 3) {
                            var fnPr = particle.callFunction({
                                deviceId: dev.id,
                                name: 'toggle',
                                argument: '' + index,
                                auth: token
                            });

                            fnPr.then(
                                function (data) {
                                    console.log('Function called succesfully:', data);
                                    if (success) {
                                        success();
                                    }
                                    //return true;
                                }, function (err) {
                                    console.log('An error occurred:', err);
                                    if (failure) {
                                        failure();
                                    }
                                });
                        }
                    }
                }


            },
            function (err) {
                console.log('List devices call failed: ', err);
                if (failure) {
                    failure();
                }
            }
        );


    } else {
        console.log('invalid spark api key');
        if (failure) {
            failure();
        }
    }
};


module.exports.toggleDoor = toggleDoor;
