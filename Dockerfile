#make sure bower has already been executed
FROM google/nodejs
MAINTAINER Nick Pisani
WORKDIR /app
ADD . /app/
RUN npm install
CMD []
EXPOSE 8080
ENTRYPOINT ["/nodejs/bin/npm", "start"]
