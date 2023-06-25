import { DataTypes, Sequelize } from "sequelize";
import { sequelize } from "../services/db.js";
import User from "./user.js";
import RoomChat from "./roomChat.js";

const Chat = sequelize.define('chat', {
    text: DataTypes.STRING
}, {
    sequelize,
    timestamps: true,
});

Chat.belongsTo(User, { foreignKey: 'userId' });
Chat.belongsTo(RoomChat, { foreignKey: 'roomChatId' });

export default Chat
