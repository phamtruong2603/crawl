import express from "express";
import { roomChatController } from "../controllers/roomChat.js";

const roomChatRoute = express.Router();

roomChatRoute.post('/newRoomChat', roomChatController.createRoomChat)

export default roomChatRoute