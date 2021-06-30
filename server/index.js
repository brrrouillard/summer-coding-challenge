const express = require('express');
const players = require('../players.json');

const app = express();

app.all('/players', async (request, response) => {
    response.json(players);
});

const port = process.env.PORT || 8088; // for local debugging choose any available port
var server = app.listen(port, function () {
    var host = server.address().address;
    console.log('app listening at http://%s:%s', host, port);
});

console.info('Server is listening');