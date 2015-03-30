var app = undefined;
var roomHelper = require('./roomHelper');
var playerHelper = require('./playerHelper');
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
		res.render('home');
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
	//	res.setHeader('Content-Type', 'application/json');
		//res.header("Access-Control-Allow-Origin", "*");
	        //res.header("Access-Control-Allow-Headers", "X-Requested-With"); 
		console.log('request body' + req.body);
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
		var roomID = req.body.roomID;//TODO: this no longer working due to body parser
		//TODO: the gamepad JS will make the call to joinroom
		res.render('gamepad', {roomID: roomID});
	});
}

exports.start = start;
