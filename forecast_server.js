var express = require('express');
var app = express();
var ForecastIo = require('forecastio');

app.get('/get_forecast', function (req, res) {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
    var forecastIo = new ForecastIo('0b493a290f906241cd0a9fdb2d41d2d7');
    forecastIo.forecast(req.query.latitude, req.query.longitude, function (err, data) {
        if (err) throw err;
        res.format({
            'application/json': function () {
                res.send(JSON.stringify(data));
            }
        });
    });
});

var server = app.listen(3001, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log("listening at http://%s:%s", host, port);
});