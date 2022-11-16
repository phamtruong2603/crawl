import { Sequelize, DataTypes } from "sequelize";
import { connectDB } from "../connectDB/db.js";

const sequelize = connectDB();

export const News = sequelize.define('News', {
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.STRING
  },
  href: {
    type: DataTypes.STRING
  },
  img: {
    type: DataTypes.STRING
  }
}, {
  // Other model options go here
});


console.log(News === sequelize.models.News); // true