'use strict';
/**
 * Created by napisani on 3/18/15.
 */
var gpio = require('rpio');
gpio.setMode('gpio');
var properties = require('../config/properties.json');
var inputToGPIOPins = properties.inputToGPIO;
var lastToggled;

var initialize = function () {
    for (var index in inputToGPIOPins) {
        gpio.setOutput(inputToGPIOPins[index]);
        gpio.write(inputToGPIOPins[index], gpio.HIGH);
    }
};

var toggleDoor = function (index) {
    var seconds;
    console.log("toggleDoor - index: " + index + ' pin: ' + inputToGPIOPins[index]);
    if(lastToggled){
        seconds = ((new Date).getTime() - lastToggled.getTime());
        if(seconds < (properties.pinWriteDelay + 3000)){
            return false;
        }
    }
    else
    {
        lastToggled = new Date();
    }
    gpio.write(inputToGPIOPins[index], gpio.LOW);
    setTimeout(function () {
        gpio.write(inputToGPIOPins[index], gpio.HIGH);
    }, properties.pinWriteDelay);
    return true;
};

initialize();

module.exports.toggleDoor = toggleDoor;
