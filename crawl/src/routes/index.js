import express from "express";
import userRoute from "./user.js";
import chatRoute from "./chat.js";
import roomChatRoute from "./roomChat.js";
import authRoute from "./auth.js";

const route = express.Router()

route.use(authRoute)
route.use(userRoute)
route.use(chatRoute)
route.use(roomChatRoute)

export default route
