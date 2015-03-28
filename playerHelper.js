var q = require('q');

var getPlayer = function(ident){
	var deferred = q.defer();
	var player = {
		name: 'Player 1',
		ident: '45457322'
	}
	console.log("In getPlayer");
	deferred.resolve(player);
	return deferred.promise;
}

exports.getPlayer = getPlayer;
