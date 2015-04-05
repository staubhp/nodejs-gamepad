var app = undefined;
var server = undefined;
var streamHandler = require('./streamHandler');

function start(_app){
	app = _app;
	server = app.listen(66, function(){
		var host = server.address().address;
		var port = server.address().port;

		console.log("Express app listening at http://%s:%s", host, port);
	});
	var io = require('socket.io').listen(server);
	streamHandler(io);
}

exports.start = start;

