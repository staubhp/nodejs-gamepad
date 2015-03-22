function route(handle, pathname, response, postData){
	console.log("Routing for path '" + pathname + "'");
	if (typeof handle[pathname] === 'function')
		handle[pathname](response, postData);
	else
		console.log("No request handler found for path '" + pathname + "'");
	
}

exports.route = route;