var q = require('q');

var rooms = []

function getRoom(roomID){
	console.log("room ID: " + rooms[0].roomID);
	var deferred = q.defer();
	deferred.resolve(rooms[0]);
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
		roomID: '7bh5', //TODO:generate
		createDt: Date.now(),
		updateDt: Date.now(),
		players:[]
	}
	myRoom.players.push({name:'Payton'});
	myRoom.players.push({name:'Carl'});
	rooms.push(myRoom);
	deferred.resolve(myRoom);
	return deferred.promise;
}



exports.rooms = rooms;
exports.getRoom = getRoom;
exports.addPlayer = addPlayer;
exports.createRoom = createRoom;

