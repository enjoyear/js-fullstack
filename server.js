import config from './config';
import apiRouter from './api';
import serverRender from './serverRender';
import express from 'express';
const server = express();

server.set('view engine', 'ejs');

server.get(['/', '/contests/:contestId'], (req, res) => {
  debugger;
  serverRender(req.params.contestId)
    .then(
      ({initialMarkup, initialData}) => {
        res.render('index', {
          initialMarkup,
          initialData
        });
      })
    .catch(console.error);
});

server.use('/api', apiRouter);
server.use(express.static('public'));

server.listen(config.port, config.host, () => {
  console.info('Express listening on port', config.port);
});
