import { QueryTypes } from 'sequelize';
import { sequelize } from './db';

const getUsers = () => {
  try {
    return sequelize.query(`SELECT * FROM user`, { type: QueryTypes.SELECT });
  } catch (err) {
    console.error(err);
  }
};

export { getUsers };