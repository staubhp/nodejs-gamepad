angular.module('ngp').controller('roomController', ['$scope',
	function roomController($scope){
var socket = io('http://localhost');
	socket.on('connect', function(){
		console.log("Room socket is connected");
	});

	socket.on('joined', function(data){
		debugger;
		var player = data.player;
		//TODO: push to room.players
	});
	}]);