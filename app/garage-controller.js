'use strict';
/**
 * Created by napisani on 3/18/15.
 */

var properties = require('../config/properties.json');
var inputToGPIO = [11, 15, 18, 22];

var writeToPin = function (pin, value) {
    console.log("writing to pin: " + pin + " value: " + value);
    if(properties.runningOnPi) {
        gpio.write(pin, value, function (err) {
            console.log("Working on pin: " + pin);
            if (err) {
                throw err;
            }
            console.log('Wrote value: ' + value + ' to pin: ' + pin);
        });
    }
};

var setupPins = function (pin) {;
    console.log('Setting up GPIO pin:' + pin );
    if(properties.runningOnPi) {
        gpio.setup(pin, gpio.DIR_OUT, function () {
            writeToPin(pin, false);
        });
    }
};