var http = require("http");
var url = require("url");
var route = undefined;
var handle = undefined;

function onRequest(request, response){
	var pathname = url.parse(request.url).pathname;
	var postData = "";

	request.setEncoding("utf8");

	request.addListener("data", function(postDataChunk){
		postData += postDataChunk;
		console.log("Received POST data chunk '" + postDataChunk + "'");
	});

	request.addListener("end", function(){
		if (route)
			route(handle, pathname, response, postData);
	});

}

function start(myRoute, myHandle){
	route = myRoute;
	handle = myHandle;
	http.createServer(onRequest).listen(66);
}

exports.start = start;
