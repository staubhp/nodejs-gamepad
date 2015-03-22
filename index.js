var server = require("./server");
var router = require("./router");
var express = require("express");
var app = express();

router.start(app);
server.start(app);
