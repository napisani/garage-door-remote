'use strict';
/**
 * Created by napisani on 3/14/15.
 */
var gpio = require('rpi-gpio');
var inputToGPIO = [11, 15, 18, 22];
var delay = 2000;

var writeToPin = function (pin, value) {
    gpio.write(pin, value, function (err) {
        console.log("Working on pin: " + pin);
        if (err) {
            throw err;
        }
        console.log('Wrote value: ' + value + ' to pin: ' + pin);
    });
};

var setupPins = function (pin) {;
    console.log('Setting up GPIO pin:' + pin );
    gpio.setup(pin, gpio.DIR_OUT, function(){
        writeToPin(pin, false);
    });
};
for(var index = 0; index < inputToGPIO.length; index++) {
    setupPins(inputToGPIO[index]);
}
//for (var index = 0; index < inputToGPIO.length; index++) {
//    writeToPin(inputToGPIO[index], false);
//}