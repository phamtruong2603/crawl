import { DataTypes, Sequelize } from "sequelize";
import { sequelize } from "../services/db.js";

const User = sequelize.define('user', {
    account: DataTypes.STRING,
    password: DataTypes.STRING,
    provider: DataTypes.STRING,
    name: DataTypes.STRING,
    avatar: DataTypes.STRING,
}, {
    sequelize,
    timestamps: true,
});

// User.belongsToMany(User, { through: 'user_roomchat' });

export default User;
