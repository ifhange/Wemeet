var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.set('port', process.env.PORT || 3000);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/public'));


app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/index.html')
})

app.listen(app.get('port'), function() {
    console.log('Express server listening on port ' + app.get('port'));
});
