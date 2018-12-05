const express = require('express');
const next = require('next');

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const populate = require('./TJP/populate_games.js');

app.prepare()
  .then(() => {
    const server = express();

    server.get('/', (req, res) => {
      return app.render(req, res, '/', req.query)
    })

    server.get('/about', (req, res) => {
      return app.render(req, res, '/about', req.query)
    });

    server.get('/players', (req, res) => {
      return app.render(req, res, '/players', req.query)
    });

    server.get('/factions', (req, res) => {
      return app.render(req, res, '/factions', req.query)
    });

    server.get('/player', (req, res) => {
      return app.render(req, res, '/player', req.query)
    })

    server.get('/faction', (req, res) => {
      return app.render(req, res, '/faction', req.query)
    })

    server.listen(port, (err) => {
      if(err) throw err;
      console.log(`> Ready on http://localhost:${port}`)
    })
  })
