'use strict';

const WebServer = require('./WebServer');
const GameServer = require('./GameServer');

var webServer = new WebServer();

webServer.listen(4000);
GameServer.createGame(webServer.http);
