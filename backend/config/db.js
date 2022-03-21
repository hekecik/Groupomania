const { Sequelize } = require('sequelize');

const db = new Sequelize( "groupomania", "root", "asya66000",
  {
    dialect: "mysql",
    host: "localhost",
    define: {
      timestamps: false
    }
  },
);
db.authenticate().then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch((err) => {
        console.error('Unable to connect to the database:', err);
    });

module.exports = db;
