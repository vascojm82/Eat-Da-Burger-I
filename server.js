let helmet = require('helmet');
let express = require("express");
let path = require("path");
let app = express();
let hbs = require("express-handlebars");
let routes = require("./controllers/burgers_controller.js");
let port = 3000;

app.use(helmet());
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(routes);

app.engine("handlebars", hbs({defaultLayout: "main"}));
app.set('view engine', 'handlebars');

app.listen(port, function(){
  console.log(`Server listening on port: ${port}`);
});
