var server = require("./server");
var router = require("./router");
var express = require("express");
var app = express();
var exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({ 
	defaultLayout: 'main',
	helpers: require("./public/js/hbhelpers.js").helpers
}));

app.set('view engine', 'handlebars');
app.use("/", express.static(__dirname + "/public/"));

//Handlebars.registerHelper('json', function(context) {
//    return JSON.stringify(context);
//});


router.start(app);
server.start(app);
