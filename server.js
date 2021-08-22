const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
const uuid = require("uuid");


app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

var players = new Map();

app.use(express.static('public'))

io.engine.generateId = (req) => {
  return uuid.v4(); // must be unique across all Socket.IO servers
}

io.on("connection", socket => {
  console.log('New player connected id: '+ socket.id); 
  players.set(socket.id, socket);
  // console.log(Array.from( players.keys()));
  socket.on("player_location", data => {
    console.log('player [' + socket.id + '] ' + ' at position (' + data.playerx + "," + data.playery + ")"); 
  });
});

io.on("disconnection", socket => {
  console.log('connection established on *:3000'); 
});


server.listen(3000, () => {
  console.log('listening on *:3000');
});