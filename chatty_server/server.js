const express = require('express');
const SocketServer = require('ws').Server;
const uuidV1 = require('uuid/v1');
const WebSocket = require('ws');

// Set the port to 3001
const PORT = 3001;

// Create a new express server
const server = express()
   // Make the express server serve static assets (html, javascript, css) from the /public folder
  .use(express.static('public'))
  .listen(PORT, '0.0.0.0', 'localhost', () => console.log(`Listening on ${PORT}`));

// Create the WebSockets server
const wss = new SocketServer({ server });

let outgoingMessage = '';

// Set up a callback that will run when a client connects to the server
// When a client connects they are assigned a socket, represented by
// the ws parameter in the callback.
// We then loop through the clients and send out incoming messages to each
wss.on('connection', (ws) => {
  console.log('Client connected');
  ws.on('message', (message) => {
    const parsedMessage = JSON.parse(message);
    parsedMessage.id = uuidV1();
    outgoingMessage = JSON.stringify(parsedMessage);
    wss.clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(outgoingMessage);
      }
    });
  });


  // Set up a callback for when a client closes the socket.
  // This usually means they closed their browser.
  ws.on('close', () => console.log('Client disconnected'));
});
