var express = require('express'),
    app = express()
    port = process.env.PORT || 8000;

    bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var routes = require('./api/routes');
routes(app); // registering the route

app.listen(port);

console.log('Users RESTful API server started on: ' + port);