const http = require('http');
const bodyParser = require('./lib/bodyParser');

http
  .createServer(async (req, res) => {
    if (req.method !== 'POST') {
      res.writeHead(405, { 'Content-Type': 'application/json' });
      return res.end(JSON.stringify({ message: 'Only post method is allowed' }));
    }
    try {
      await bodyParser(req);
      res.writeHead(200, { 'Content-Type': 'application/json' });
      console.log(JSON.stringify(req.body))
      return res.end('Thats it')
    } catch (error) {
      res.writeHead(400, { 'Content-Type': 'application/json' });
      return res.end(JSON.stringify(error));
    }
  })
  .listen(8080, console.log('Deployment server is running at port 8080'));
