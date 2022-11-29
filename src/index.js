import express from 'express';
import cors from 'cors';
import dotennv from 'dotenv';
import config from './configs/config.js';
import routes from './routes/index.js';
import { ConnectionDB } from './services/db.js';
import { serverSocket } from './serverSocket.js';

const app = express()

const server = http.createServer(app);
serverSocket(server);

const corOptions = {
    origin: '*'
}
app.use(cors(corOptions))

app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

dotennv.config()
ConnectionDB()

app.use('/v1', routes)

app.get('', (req, res) => res.send('Start success...'));

app.listen(config.port, () => console.info(`server run on port ${config.port}`));
