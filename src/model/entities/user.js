import { DataType } from "sequelize";
import { connectDB } from "../connectDB/db";

const sequelize = connectDB();

export const User = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING
    },
    fullName: {
        type: DataTypes.STRING
    },
    avatar: {
        type: DataTypes.STRING
    },
    gmail: {
        type: DataTypes.STRING
    },
    password: {
        type: DataTypes.STRING
    },
    gender: {
        type: DataTypes.BOOLEAN
    },
    dateBirth: {
        type: DataTypes.DATE
    }
}, {
    // Other model options go here
});