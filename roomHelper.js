var q = require('q');
var util = require('./utilHelpers.js');
var _ = require('underscore');

var rooms = []

function getRoom(roomID){
	var deferred = q.defer();
	deferred.resolve(_.findWhere(rooms, {roomID: roomID}));
	return deferred.promise;
}

function addPlayer(player, room){
	var deferred = q.defer();
	console.log("Adding player to room#: " + room.roomID);
	deferred.resolve(room.players.push(player));
	return deferred.promise;
}

function createRoom(){
	var deferred = q.defer();
	var myRoom = {
		roomID: util.genID(3), //TODO: unique check 
		createDt: Date.now(),
		updateDt: Date.now(),
		players:[]
	}
	rooms.push(myRoom);
	deferred.resolve(myRoom);
	return deferred.promise;
}



exports.rooms = rooms;
exports.getRoom = getRoom;
exports.addPlayer = addPlayer;
exports.createRoom = createRoom;

