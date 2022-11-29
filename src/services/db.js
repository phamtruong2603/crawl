import Sequelize from 'sequelize';
import config from '../configs/config.js';

const { host, nameDB, password, usename } = config.db;

const sequelize = new Sequelize(nameDB, usename, password, {
    host: host,
    dialect: 'mysql',
});

const ConnectionDB = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection db successfully.');
    } catch (error) {
        console.error(error)
    }
}

export {
    ConnectionDB,
    sequelize
};

