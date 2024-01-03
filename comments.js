// Create web server application
// Run: node comments.js
// Test: curl -X POST -H "Content-Type: application/json" -d '{"body":"comment body"}' http://localhost:3000/comments

var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var comments = [];

app.use(bodyParser.json());

app.post('/comments', function(request, response) {
    var comment = request.body;
    comments.push(comment);
    response.status(201).json(comment);
});

app.get('/comments', function(request, response) {
    response.json(comments);
});

app.listen(3000, function() {
    console.log('Running on port 3000');
});