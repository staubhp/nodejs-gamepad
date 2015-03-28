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
		res.render('home');
	});

	app.get('/room', function(req, res){
		//this is the large format game screen
		var roomID = req.query.rid;
		res.render('room', {roomID:roomID});
		//TODO:make sure the template has <script src="/socket.io/socket.io.js"></script>

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
