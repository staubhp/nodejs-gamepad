var q = require('q');
var util = require('./utilHelpers.js');

var getPlayer = function(ident){
	var deferred = q.defer();
	var id = util.genID(9) //TODO: unique check
	var player = {
		name: 'Player #' + id,
		playerID: id 
	}
	console.log("In getPlayer");
	deferred.resolve(player);
	return deferred.promise;
}

exports.getPlayer = getPlayer;
