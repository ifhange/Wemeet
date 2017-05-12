// var swig  = require('swig');
// var React = require('react');
// var Router = require('react-router');
// var routes = require('./app/routes');

var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.set('port', process.env.PORT || 5555);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/public'));


app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/index.html')
})

app.listen(app.get('port'), function() {
    console.log('Express server listening on port ' + app.get('port'));
})

// app.use(function(req, res) {
//   Router.run(routes, req.path, function(Handler) {
//     var html = React.renderToString(React.createElement(Handler));
//     var page = swig.renderFile('views/index.html', { html: html });
//     res.send(page);
//   });
// });
