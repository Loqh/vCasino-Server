

const express = require("express");
const http = require("http");
const app = express();
const server = http.createServer(app);
const bodyParser = require("body-parser");
let fs = require('fs');
let url = require('url');
var wiki = require('./routes/wiki.js');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/wiki', wiki);

server.listen(8080);

/*app.get('/', function(req, res) {
    res.send('hello world');
  });

app.get('/test', function(req, res) {
    res.json()
})

/*server.on('request', (request, response) => {
    response.writeHead(200);
    let query = url.parse(request.url, true).query;
    let name = query.name === undefined ? 'anonyme' : query.name;
    fs.readFile('index.html', 'utf8' ,(err, data) => {
        if (err) {
            response.writeHead(404);
            response.end("This file doesn't exist")
        }
        else {
            response.writeHead(200, {'Content-type': 'text/html'});
        }
        data = data.replace('{{ name }}', name);

    response.end(data);
    })


    /*if (query.name === undefined) {
        response.write('Hello anonymous user')
    }
    else {
        response.write('Hello ' + query.name);
    }
    response.end();
})
/*server.on('request', (request, response) => {
    fs.readFile('index.html', (err, data) => {
        if (err) {
            response.writeHead(404);
            response.end("This file doesn't exist")
        };
        console.log('entered server on');
    response.writeHead(200, {'Content-type': 'text/html'});
    })

    response.end(data);
})*/