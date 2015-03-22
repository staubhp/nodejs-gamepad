var app = undefined;

function start(_app){
	app = _app;
	var bodyParser = require('body-parser');
	//app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({extended: true}));
	establishRoutes();
	
}

function establishRoutes(){
	app.get('/', function(req, res){

		var body = '<html>'+
			'<body>'+
			'<form action="/room" method="post">' +
			'<textarea name="roomID" rows="20" cols="60"></textarea>'+
			'<input type="submit" value="Submit room code" />' +
			'</form>' +
			'</body>' +
			'</html>';
		res.send(body);
	});

	app.post('/room', function (req, res){
		res.send("got POST room number = " + req.body.roomID);		
	});
}

exports.start = start;
