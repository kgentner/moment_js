'use strict';
var express = require('express');
var moment = require('moment');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser());
var port = 3000;
//
//reset moment.js's humanize thresholds
moment.relativeTimeThreshold('d', 365);
moment.relativeTimeThreshold('M', 60);

app.get('/', function(req, res) {
  var html = '<h3>Enter a date to see the difference in time from today.</h3>' +
    '<br><form action="/" method="post">' +
    ' Enter Date: <input type="text" name="inputDate" ' +
    'placeholder="' +
    moment().format('MM-DD-YYYY') +
    '"/><button type="submit" value="Submit">' +
    'Submit</button></form>';

  res.send(html);
});

app.post('/', function(req, res) {
  var now = moment();
  var dateEntered = moment(req.body.inputDate);
  var dateDif = dateEntered.diff(now);
  var humanDif = moment.duration(dateDif).humanize(true);
  var html = '<h2>' + dateEntered.format('MM-DD-YYYY') +
  ' occurs ' + humanDif + ' </h2>';

  res.send(html);
});

app.listen(port);

console.log('Server running on port: ' + port);
