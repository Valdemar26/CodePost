/**
 * Created by valdemar on 26.03.18.
 */
const express = require('express'),
    bodyParser = require('body-parser'),
    path = require('path'),
    http = require('http'),
    app = express();

// Parsers to parser post data to a server
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Serve static files
app.use(express.static(path.join(__dirname, 'dist')));

// Set our api routes
//app.use('/api', api);

// Return other routes to Angular index file
app.use('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});

// Set port
const port = process.env.PORT || '3000';
app.set('port', port);

// Create the HTTP Server
const server = http.createServer(app);

server.listen(port, () => console.log(`Running on localhost: ${port}`));