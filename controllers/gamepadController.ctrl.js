angular.module('ngp').controller('gamepadController', ['$scope',
		function gamepadController($scope){
var myRoomID = "{{roomID}}";

	var setupSocket = function(data){
		var socket = io('http://localhost');
		socket.on('connect', function(){
			console.log("Gamepad socket is connected");
			socket.emit('helloServer', {});
			socket.emit('join', {room:data.room, player:data.player}); 
		});
	
		socket.on('helloClient', function(){
			console.log("Client received helloClient, completing handshake.");
		});

	}


	$.ajax({
		type: 'POST',
		data: JSON.stringify({roomID: myRoomID}),
		contentType: 'application/json',
		url: '/joinroom',
		success: setupSocket
		});
	
		}]);