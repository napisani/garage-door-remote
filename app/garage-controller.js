'use strict';
/**
 * Created by napisani on 3/18/15.
 */
var gpio = require('rpi-gpio');
var properties = require('../config/properties.json');
var on = 1;
var off = 0;
var inputToGPIOPins = properties.inputToGPIO;

module.exports.toggleDoor = function (index) {

    console.log("toggleDoor - index: " + index + ' pin: ' + inputToGPIOPins[index]);
    gpio.setup(inputToGPIOPins[index], gpio.DIR_OUT, function () {
        setTimeout(function() {
            gpio.write(inputToGPIOPins[index], true, function (err) {
                if (err) {
                    throw err;
                }
                console.log('Written to pin: ' + inputToGPIOPins[index]);
                setTimeout(function(){
                    gpio.write(inputToGPIOPins[index], true, function (err) {
                        if (err) {
                            throw err;
                        }
                    });
                }, 2000);
            });
        }, 2000);
    });
};





