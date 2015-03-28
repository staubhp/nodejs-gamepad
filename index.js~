var server = require("./server");
var router = require("./router");
var express = require("express");
var app = express();
var exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({ defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

router.start(app);
server.start(app);
