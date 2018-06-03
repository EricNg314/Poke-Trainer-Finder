//initializing npm packages as variables.
var express = require("express");
var bodyParser = require("body-parser");

//node to create an express server
var app = express();

var PORT = 8080;

//Express to handle data parsing.
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

//TODO: To be applied when apiRoutes.js and htmlRoutes.js are written.
// require("./app/routing/apiRoutes")(app);
// require("./app/routing/htmlRoutes")(app);

app.listen(PORT, () => {
    console.log("App listening on PORT: " + PORT)
});