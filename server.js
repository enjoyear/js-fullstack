import config, {nodeEnv, logStars} from './config';
import http from 'http';

const server = http.createServer();

server.listen(config.port);

server.on('request', (req, res) => {
    res.write('Hello HTTP!\n');
    setTimeout(() => {
      res.write('I can stream!\n');
      res.end();
    }, 3000);
});
