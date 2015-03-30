module.exports = function(io){
	io.on('connection', function(socket){
		console.log("Server received a new socket connection");

		socket.on('helloServer', function(data){
			console.log("Received helloServer from client socket");
			socket.emit('helloClient',{});
		});
		

		socket.on('join', function(data){
			console.log("Player " + data.player.playerID + " joined room " + data.room.roomID);
			socket.broadcast.emit('joined', {player: data.player});
		});
	});
}
