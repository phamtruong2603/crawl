import { Sequelize } from "sequelize";
import { sequelize } from "../services/db";
const sequelize = sequelize;

export const Comment = sequelize.define('comment', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    content: {
        type: Sequelize.STRING,
        allowNull: false
    },
});