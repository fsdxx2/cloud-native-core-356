const http = require('http');

/**
 * Cloud Native Core 356 - Minimal Health Check Server
 */
const PORT = process.env.PORT || 8080;

const server = http.createServer((req, res) => {
  if (req.url === '/healthz') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({
      status: 'healthy',
      version: '1.0.0',
      service: 'cloud-native-core-356'
    }));
  } else {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Service operational. Access /healthz for status.');
  }
});

server.listen(PORT, () => {
  console.log(`[cloud-native-core-356] Listening on port ${PORT}`);
});