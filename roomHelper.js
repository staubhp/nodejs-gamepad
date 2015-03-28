var q = require('q');

function getRoom(roomID){
	var deferred = q.defer();
	deferred.resolve(rooms[0]);
	return deferred.promise;
}

function addPlayer(player, room){
	var deferred = q.defer();
	deferred.resolve(room.players += player);
	return deferred.promise;
}

function createRoom(){
	var deferred = q.defer();
	var myRoom = {
		roomID: '7bh5', //TODO:generate
		createDt: Date.now(),
		updateDt: Date.now(),
		players:[{}]
	}
	rooms += myRoom;
	deferred.resolve(myRoom);
	return deferred.promise;
}

var rooms = [{}]

exports.rooms = rooms;
exports.getRoom = getRoom;
exports.addPlayer = addPlayer;
exports.createRoom = createRoom;
