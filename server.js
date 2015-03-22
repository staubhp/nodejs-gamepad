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
