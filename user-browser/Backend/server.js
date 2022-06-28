var express = require('express'),
app = express()
var cors = require('cors')
port = process.env.PORT || 8000;

bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors())

var routes = require('./api/routes');
routes(app); // registering the route

app.listen(port);

console.log('Users RESTful API server started on: ' + port);