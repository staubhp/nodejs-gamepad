var app = undefined;
var roomHelper = require('./roomHelper');
var playerHelper = require('./playerHelper');
var path = require('path');
var q = require("q");

function start(_app){
	app = _app;
	var bodyParser = require('body-parser');
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({extended: true}));
	establishRoutes();
	
}

function establishRoutes(){
	app.get('/', function(req, res){
		res.sendFile(path.join(__dirname+"/index.html"));
	});

	app.get('/room', function(req, res){
		//this is the large format game screen
		var roomID = req.query.rid;
	
		roomHelper.getRoom(roomID).then(function(room){
			res.render('room', {room:room});
		});
	});

	app.post('/createroom', function (req, res){
		roomHelper.createRoom().then(function(room){
			res.redirect("/room?rid=" + room.roomID);
		});
	});

	app.post('/joinroom', function (req, res){				
		roomHelper.getRoom(req.body.roomID).then(function(room){
			playerHelper.getPlayer('ident').then(function(player){
				roomHelper.addPlayer(player, room).then(function(result){
					var data = {};
					data.room = room;
					data.player = player;
					res.send(data);					
				});
			});
		});
	});

	app.post('/gamepad', function(req, res){
		//this is the small format game input device
		var roomID = req.body.roomID;
		res.render('gamepad', {roomID: roomID});
	});

	app.get('/gamepad', function(req, res){
		//TODO: will need to look up this player by their credentials and find
		//what room they belong to 
		var roomID = '34334';
		res.render('gamepad', {roomID: roomID});
	});
}

exports.start = start;
