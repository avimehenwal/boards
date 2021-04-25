const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', function connection(ws) {
  console.log('A new client connected ...');

  // send to client
  ws.send('welcome new client!')

  // recieve
  ws.on('message', function incoming(message) {
    console.log('received: %s', message);
    wss.send('got your message ' + message)
  });

  ws.send('something');
});

