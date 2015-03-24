var app = undefined;
var roomHelper = require('./roomHelper');
var q = require("q");

function start(_app){
	debugger;
	app = _app;
	var bodyParser = require('body-parser');
	//app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({extended: true}));
	establishRoutes();
	
}

function establishRoutes(){
	app.get('/', function(req, res){
		//TODO: replace with templates
		var body = '<html>'+
			'<body>'+
			'<form action="/joinroom" method="post">' +
			'<textarea name="roomID" rows="20" cols="60"></textarea>'+
			'<input type="submit" value="Join Room" />' +
			'</form>' +
			'<form action="/createroom" method="post">' +
			'<input type="submit" value="Create Room">' +
	       		'</form>' + 	
			'</body>' +
			'</html>';
		res.send(body);
	});

	app.get('/room', function(req, res){
		//this is the large format game screen
		var roomID = req.query.rid;
		res.send("Welcome to room #" + roomID); 
		//TODO: start socket.io here

	});

	app.post('/createroom', function (req, res){
		debugger;		
		roomHelper.createRoom().then(function(room){
			res.redirect("/room?rid=" + room.roomID);
		});
	});

	app.post('/joinroom', function (req, res){		
		roomHelper.getRoom(req.body.roomID).then(function(room){
			roomHelper.addPlayer(player, room).then(function(){
				res.redirect("/gamepad?rid=" + room.roomID);
			});
		});
	});

	app.get('/gamepad', function(req, res){
		//this is the small format game input device
		var roomID = req.query.rid;
		res.send("Welcome to gamepad for room #" + roomID);
	});
}

exports.start = start;
