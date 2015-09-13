garage-door-remote
===================

This is a node js/express based web application used to remotely open a series of garage doors via a web browser. This app is intended to run on a Particle(spark). The frontend leverages JQuery and Foundation to present a minimalistic front end that is responsive to the browser being used.

----------
Prerequisites
-------------
1. Spark particle (or core) board
2. The latest version of node js is installed
3. The latest version of npm is installed
4. Git is installed
5. Bower installed


Install Instructions
-------------

`git clone https://github.com/napisani/garage-door-remote.git
cd garage-door-remote

#configure API key in config/properties.json

npm install
bower install
sudo node app/app.js

# or use docker
docker build -t napisani/garage-door-remote .
docker run -p 8080:8080 -t napisani/garage-door-remote

`

Configuration
-------------
./config/properties.config needs to be configured with the number of garage doors and spark api key
