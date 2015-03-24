var app = undefined;
var server = undefined;

function start(_app){
	app = _app;
	server = app.listen(66, function(){
		var host = server.address().address;
		var port = server.address().port;

		console.log("Express app listening at http://%s:%s", host, port);
	});
}

exports.start = start;

//TODO:
//1) Client asks server to make room (RESTful call)
//2) Server makes room, redirects client to room, starts socket
//3) Gamepad clients connect to room (RESTful call), are added to room/player structure that lives in web server
//4) Gameplay starts. Game room's JS has all gameplay logic and responds to socket.io messages from gamepads
//Essentially, you'll end up with an AngularJS project that has a GameRoom.ctrl and GamePad.ctrl. Game logic lives there. The server is only used to get people connected and into the room.
