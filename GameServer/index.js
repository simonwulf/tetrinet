exports.Player = require('./player');
exports.Room = require('./room');
exports.Game = require('./game');
exports.createGame = function(http) {
	return new exports.Game(http);
};
