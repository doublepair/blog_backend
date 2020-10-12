var express = require('express'),
  app = express(),
  host = "127.0.0.1",
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  Article = require('../api/models/articlesModel'), 
  bodyParser = require('body-parser');
  

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Articlesdb', {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false }); 

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



/*
app.get('/', function(req, res){
  //res.sendFile(__dirname+'/bin/index.html'); // change the path to your index.html
});
*/

var routes = require('../api/routes/articlesRoutes'); 
routes(app); 


app.listen(port, host);


console.log('api for blog started on: ' + port);