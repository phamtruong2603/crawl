import { DataTypes, Sequelize } from "sequelize";
import { sequelize } from "../services/db.js";

const user_roomchat = sequelize.define('user_roomchat',
    {},
    {
        sequelize,
        timestamps: true,
    }
);

// User.belongsToMany(User, { through: 'user_roomchat' });

export default user_roomchat;
