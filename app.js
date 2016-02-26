'use strict';

const Config = require('./config');
const WebServer = require('./WebServer');
const GameServer = require('./GameServer');

var webServer = new WebServer();

webServer.listen(Config.PORT);
GameServer.createGame(webServer.http);
