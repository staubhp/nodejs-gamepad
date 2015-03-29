module.exports = function(io){
	io.on('connection', function(socket){
		console.log("Server received a new socket connection");

		socket.on('helloServer', function(data){
			console.log("Received helloServer from client socket");
			socket.emit('helloClient',{});
		});
		
		socket.on('joinRoom', function(data){
			console.log("Joining room " + data.roomID);
			socket.join(data.roomID);
			socket.emit('joinedRoom', {roomID:data.roomID});
		});
	});
}
