	var PlayerList = React.createClass({
		getInitialState: function(){
			debugger;
			return {players: room.players};
		},
		render: function() {
			var createPlayerNode = function(player){
				return <li>{player.name}</li>;
			};
			return <ul>{this.state.players.map(createPlayerNode)}</ul>;
		},
		refresh: function(){
			this.setState({players: room.players});
		}
	});


	var myPlayerList = React.render(React.createElement(PlayerList, null),
		document.getElementById('players'));


	var socket = io('http://localhost');

	socket.on('connect', function(){		
		console.log("Room socket is connected");
	});

	socket.on('joined', function(data){
		debugger;
		room.players.push(data.player);
		myPlayerList.refresh();
	});

