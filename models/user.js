const {
  db
} = require("../core/db");
const {
  Sequelize,
  Model
} = require("sequelize");

class User extends Model {}

User.init({
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  nickname: Sequelize.STRING,
  email: Sequelize.STRING,
  password: Sequelize.STRING,
  openid: {
    type: Sequelize.STRING,
    unique: true
  }
});