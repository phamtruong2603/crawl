import { Sequelize } from "sequelize";
import { sequelize } from "../services/db";
const sequelize = sequelize;

export const User = sequelize.define('post', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    isLike: {
        type: Sequelize.BOOLEAN
    }
});