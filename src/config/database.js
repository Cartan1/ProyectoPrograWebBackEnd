import Sequelize from 'sequelize'

//Variables
const hostname = 'localhost';
const username = 'postgres';
const password = '123';
const database = 'EcommerceDataBase';
const port = '5432';
const dialect = 'postgres';

const sequelize = new Sequelize(database, username, password, {
    host: hostname,
    port: port,
    dialect: dialect,
    logging: console.log, // Ver las queries SQL que ejecuta
    define: {
        freezeTableName: true,
        timestamps: false
    }
})

export default sequelize;