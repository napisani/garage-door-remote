garage-door-remote
===================

This is a node js/express based web application used to remotely open a series of garage doors via a web browser. This app is intended to run on a Raspberry Pi. The front end leverages JQuery and Foundation to present a minimalistic front end that is responsive to the browser being used.

----------
Prerequisites
-------------
1. 1 Raspberry Pi with Raspbian installed
2. The latest version of node js is installed
3. The latest version of npm is installed
4. Git is installed


Install Instructions
-------------

`git clone https://github.com/napisani/garage-door-remote.git
cd garage-door-remote
npm install
sudo node app/app.js`

Configuration
-------------
./config/properties.config can be used to configure the GPIO pins that you want to use, etc.
