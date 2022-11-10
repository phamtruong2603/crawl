import Sequelize from 'sequelize';

export const connectDB = () => {
    const sequelize = new Sequelize('crawl', 'root', '26032001', {
        host: 'localhost',
        dialect: 'mysql',
    });

    (async () => {
        try {
            await sequelize.authenticate();
            console.log('Connection has been established successfully.');
        } catch (error) {
            console.error(error)
        }

    })()
    return sequelize;
}
