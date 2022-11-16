import express from "express";
import newsController from "../controller/news.controller.js";

const routeNews = express.Router();

routeNews.post('/createNews', newsController.createNews)


export default routeNews