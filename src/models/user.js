import { Sequelize } from "sequelize";
import { sequelize } from "../services/db";
const sequelize = sequelize;

export const User = sequelize.define('user', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    isAdmin: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    fullName: {
        type: Sequelize.STRING
    },
    avatar: {
        type: Sequelize.STRING
    },
    gmail: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    gender: {
        type: Sequelize.BOOLEAN
    },
    dateBirth: {
        type: Sequelize.DATE
    }
});