import express from 'express';
import http from 'http';
import cors from 'cors';
import dotennv from 'dotenv';
import PassportConfig from './passport.js';

import config from './configs/config.js';
import routes from './routes/index.js';
import { ConnectionDB } from './services/db.js';
import { serverSocket } from './serverSocket.js';

const app = express()
const PORT = config.port || 6868
const server = http.createServer(app);

dotennv.config();
serverSocket(server);
PassportConfig();
ConnectionDB();

const corOptions = {
    origin: 'http://localhost:3000'
}
app.use(cors(corOptions))

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/v1', routes)
app.get('', (req, res) => res.send('Start success...'));

server.listen(PORT, () => console.info(`server run on port ${PORT}`));
