//initializing npm packages as variables.
let express = require("express");
let bodyParser = require("body-parser");

//node to create an express server
let app = express();

let PORT = process.env.PORT || 8080;

//Express to handle data parsing.
// app.use('/js', express.static(__dirname + '/js'));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

//JS files listening for requests in apiRoutes.js and htmlRoutes.js
// require("./app/data/questions")(app);
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

app.listen(PORT, () => {
    console.log("App listening on PORT: " + PORT)
});