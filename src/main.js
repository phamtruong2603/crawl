import express from 'express';
import StartBrowser from './crawlData/startBrowser.js';
import { connectDB } from './connectDB/db.js';
import route from './routes/index.js';
const PORT = 3001;
const app = express()

route(app)

StartBrowser()
console.log('=====================================================')
connectDB()
app.listen(PORT, () => console.info(`server run on port ${PORT}`));
