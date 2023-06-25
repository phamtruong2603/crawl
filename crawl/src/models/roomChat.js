import { DataTypes, Sequelize } from "sequelize";
import { sequelize } from "../services/db.js";
import User from "./user.js";

const RoomChat = sequelize.define('roomchat', {
    name: DataTypes.STRING,
    owner: DataTypes.NUMBER,
}, {
    sequelize,
    timestamps: true,
    // freezeTableName: true
});

RoomChat.belongsToMany(User, { through: 'user_roomchat' });

export default RoomChat