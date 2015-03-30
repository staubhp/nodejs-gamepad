angular.module('ngp', ['ui.router'])
	.config(['$stateProvider', function($stateProvider) {
		$stateProvider
		.state("home",
		{
			url: '',
			templateUrl: 'partials/home.tpl.html',
			controller: 'homeController'
		})
		.state("gamepad",
		{
			url: '/gamepad',
			templateUrl: 'partials/gamepad.tpl.html',
			controller: 'gamepadController'
		})
		.state("room",
		{
			url: '/room',
			templateUrl: 'partials/room.tpl.html',
			controller: 'roomController'
		})
	}]);