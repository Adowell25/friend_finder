// DEPENDENCIES
var express = require("express");
var path = require("path");
//var nodemon = require("nodemon");

// SETS UP EXPRESS
var app = express();
var PORT = process.env.PORT || 8090;

// EXPRESS DATA PARSING CAPABILITIES
app.use(express.static('app/public'));
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

// ROUTER
require("./app/routing/apiRoute")(app);
require("./app/routing/htmlRoutes")(app);


// LISTENER
app.listen(PORT, function () {
    console.log("App listening on PORT: " + PORT);
});