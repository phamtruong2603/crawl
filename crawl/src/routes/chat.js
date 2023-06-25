import express from "express";
import { chatController } from "../controllers/chat.js";

const chatRoute = express.Router();

chatRoute.post('/chat', chatController.createChat)

export default chatRoute