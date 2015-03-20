FROM dockerfile/nodejs

MAINTAINER napisani

WORKDIR /home/garage-door-remote

# Install Mean.JS Prerequisites
RUN npm install -g grunt-cli
RUN npm install -g bower

# Install Mean.JS packages
ADD package.json /home/garage-door-remote/package.json
RUN npm install

# Manually trigger bower. Why doesnt this work via npm install?
ADD .bowerrc /home/garage-door-remote/.bowerrc
ADD bower.json /home/garage-door-remote/bower.json
RUN bower install --config.interactive=false --allow-root

# Make everything available for start
ADD . /home/garage-door-remote

# currently only works for development
ENV NODE_ENV development

# Port 3000 for server
# Port 35729 for livereload
EXPOSE 3000 35729
# CMD ["grunt"]
CMD ["node", "app/app.js"]
