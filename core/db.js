// const Sequelize = require("sequelize");
const {
  dbName,
  user,
  password,
  host,
  port,
  dialect
} = require("../config/config").database;

// const sequelize = new Sequelize(dbName, user, password, {
//   dialect,
//   host,
//   port,
//   logging: true,
//   timezone: "+08:00",
//   define: {
//     timestamps: true,
//     paranoid: true,
//     createdAt: "created_at",
//     updatedAt: "updated_at",
//     deletedAt: "deleted_at",
//     underscored: true,
//     freezeTableName: true
//   }
// });

// sequelize.sync({
//   force: true
// });

module.exports = {
  // db: sequelize
};