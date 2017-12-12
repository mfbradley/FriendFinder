// dependencies
// ==============================================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
// var initApiRoutes = require('./app/routing/apiRoutes.js');
var initHtmlRoutes = require('./app/routing/htmlRoutes.js');


// Sets up the Express App
// ==============================================================================
var app = express();
// initApiRoutes(app);
// initHtmlRoutes(app);
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// router
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);


app.listen(PORT, function() {
    console.log("App listening on Port " + PORT);
});
