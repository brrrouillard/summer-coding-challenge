const express = require('express');
const players = require('../players.json');
const cors = require('cors')

const app = express();

app.use(cors());

app.get('/players', async (request, response) => {
    response.json(players);
});

const findPlayer = (playerId) => {
    const index = players.findIndex((player) => player.id === playerId);

    if (index === -1) {
        return null;
    }

    return players[index];
}

app.get('/players/:id', async (request, response) => {
    const playerId = request.params.id;
    const player = findPlayer(playerId);

    if (!player) {
        response.status(404).send('Not found');
        return;
    }

    response.json(player);
});

const myTeam = new Map();
app.get('/my-team', async (request, response) => {
    response.json(Object.values(myTeam));
});

app.post('/my-team/:id', async (request, response) => {
    const playerId = request.params.id;
    const player = findPlayer(playerId);

    if (!player) {
        response.status(404).send('Not found');
        return;
    }

    myTeam[playerId] = player;

    response.json(player);
});

app.delete('/my-team/:id', async (request, response) => {
    const playerId = request.params.id;
    const player = myTeam[playerId];

    if (!player) {
        response.status(404).send('Not found');
        return;
    }

    delete myTeam[playerId];

    response.json(player);
});


const port = process.env.PORT || 8080; // for local debugging choose any available port
var server = app.listen(port, function () {
    var host = server.address().address;
    console.log('app listening at http://localhost:8080');
});

console.info('Server is listening');