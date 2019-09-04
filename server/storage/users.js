const Sequelize = require("sequelize");
const sequelize = require("./index.js");

module.exports = sequelize.define("user", {
  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true
  },
  username: {
    type: Sequelize.STRING
  },
  password: {
    type: Sequelize.STRING
  },
  created: {
    type: Sequelize.DATE
  },
  deleted: {
    type: Sequelize.DATE
  }
});
