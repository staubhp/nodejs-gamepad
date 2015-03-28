module.exports = function(io){
	io.on('connection', function(socket){
		console.log("Server received a new socket connection");
		//TODO: implement rooms/channels

		socket.on('helloServer', function(data){
			console.log("Received helloServer from client socket");
			socket.emit('helloClient',{});
		});
	});
}
