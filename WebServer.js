'use strict';

const http = require('http');
const express = require('express');

class WebServer {

  constructor() {

    this.express = express();
    this.http = http.createServer(this.express);

    this.express.get('/', (request, response) => {
      response.sendFile('index.html', { root: __dirname +'/www/' }, function (error) {
        if (error) {
          console.error(error);
          response.status(error.status).end();
        }
      });
    });

    this.express.get('/js/message.js', (request, response) => {
      response.sendFile(__dirname + '/GameServer/message.js', function (error) {
        if (error) {
          console.error(error);
          response.status(error.status).end();
        }
      });
    });

    this.express.get(new RegExp('.+'), function (request, response) {
      var options = {
        root: __dirname + '/www/',
        dotfiles: 'deny'
      };
      response.sendFile(request.path, options, function(error) {
        if (error) {
          console.error(error);
          response.status(error.status).end();
        }
      });
    });
  }

  listen(port) {
    this.http.listen(port, function () {
      console.log('Web server listening on port ' + port);
    });
  }
}

module.exports = WebServer;
