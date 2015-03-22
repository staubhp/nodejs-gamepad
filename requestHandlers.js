var querystring = require("querystring");

function home(response, postData){
	response.writeHead(200, {"Content-Type": "text/html"});
	var body = '<html>'+
		'<body>'+
		'<form action="/room" method="post">' +
		'<textarea name="roomID" rows="20" cols="60"></textarea>'+
		'<input type="submit" value="Submit room code" />' +
		'</form>' +
		'</body>' +
		'</html>';
	response.write(body);
	response.end();
	console.log("Request handler 'home' called");
}

function room(response, postData){
	response.writeHead(200, {"Content-Type": "text/plain"});
	response.write("Room");
	response.end();
	console.log("Request handler 'room' called");
	console.log("Entering room '" + querystring.parse(postData).roomID + "'");
}

exports.home = home;
exports.room = room;